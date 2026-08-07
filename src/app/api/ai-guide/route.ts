import {
  drillDownByGoal,
  managedServiceRouting,
  type AiGuideOption,
} from "@/content/aiGuide";

type AiGuideRequestBody = {
  segment: string;
  goal: string;
  drillDown?: string;
  stage?: string;
  timeline?: string;
  budget?: string;
  teamSize?: string;
  name: string;
  email: string;
  company: string;
  phone?: string;
  notes?: string;
};

type Candidate = {
  service: string;
  serviceHref: string;
  urgent: boolean;
};

const HOT_BUDGETS = new Set(["50k-150k", "150k-plus"]);

function resolveCandidate(body: AiGuideRequestBody): Candidate | null {
  if (body.goal === "managed") {
    const routing =
      managedServiceRouting[body.segment as keyof typeof managedServiceRouting];
    if (!routing) return null;
    return { ...routing, urgent: false };
  }

  const drillDown = drillDownByGoal[body.goal];
  const option: AiGuideOption | undefined = drillDown?.options.find(
    (o) => o.value === body.drillDown,
  );
  if (!option || !option.service || !option.serviceHref) return null;

  return {
    service: option.service,
    serviceHref: option.serviceHref,
    urgent: Boolean(option.urgent),
  };
}

function computeLeadTier(
  body: AiGuideRequestBody,
  urgent: boolean,
): "hot" | "nurture" | "warm" {
  if (urgent) return "hot";
  if (
    body.timeline === "asap" &&
    body.budget &&
    HOT_BUDGETS.has(body.budget) &&
    body.stage === "requirements"
  ) {
    return "hot";
  }
  if (body.timeline === "exploring" && (!body.budget || body.budget === "not-sure")) {
    return "nurture";
  }
  return "warm";
}

function fallbackSummary(body: AiGuideRequestBody, candidate: Candidate) {
  return {
    why: `Based on your answers, ${candidate.service} is the closest match for what you're trying to do. We'll follow up directly to confirm scope and next steps.`,
    firstStep: "A short discovery call to confirm scope and timeline.",
    estimate: "Timeline and budget to be scoped on the call.",
  };
}

async function generateSummary(body: AiGuideRequestBody, candidate: Candidate) {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) return fallbackSummary(body, candidate);

  const systemPrompt = `You are the Staller Stack AI Guide. A website visitor completed a structured questionnaire and their answers were already deterministically matched to a service — do not change or second-guess that match.

Given the candidate service and their answers, respond ONLY with a JSON object of this exact shape:
{"why": "2-3 sentence plain-English summary of what the engagement would look like, confident and non-salesy tone, referencing their specific situation", "firstStep": "one concrete suggested first step", "estimate": "a rough engagement duration and budget tier consistent with their answers"}`;

  const userPrompt = JSON.stringify({
    candidateService: candidate.service,
    segment: body.segment,
    goal: body.goal,
    stage: body.stage,
    timeline: body.timeline,
    budget: body.budget,
    teamSize: body.teamSize,
    notes: body.notes,
  });

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        temperature: 0.4,
        max_tokens: 350,
        response_format: { type: "json_object" },
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
      }),
    });

    if (!response.ok) return fallbackSummary(body, candidate);

    const data = await response.json();
    const content = data?.choices?.[0]?.message?.content;
    if (!content) return fallbackSummary(body, candidate);

    const parsed = JSON.parse(content);
    if (!parsed.why || !parsed.firstStep || !parsed.estimate) {
      return fallbackSummary(body, candidate);
    }

    return {
      why: String(parsed.why),
      firstStep: String(parsed.firstStep),
      estimate: String(parsed.estimate),
    };
  } catch {
    return fallbackSummary(body, candidate);
  }
}

async function forwardLead(body: AiGuideRequestBody, candidate: Candidate, leadTier: string) {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
  if (!accessKey) return;

  try {
    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `AI Guide lead (${leadTier}): ${candidate.service}`,
        name: body.name,
        email: body.email,
        company: body.company,
        phone: body.phone ?? "",
        message: `Segment: ${body.segment}\nGoal: ${body.goal}\nRecommended service: ${candidate.service}\nStage: ${body.stage ?? "n/a"}\nTimeline: ${body.timeline ?? "n/a"}\nBudget: ${body.budget ?? "n/a"}\nTeam size: ${body.teamSize ?? "n/a"}\nLead tier: ${leadTier}\nNotes: ${body.notes ?? "n/a"}`,
      }),
    });
  } catch {
    // Lead capture is best-effort — never block the visitor's result on it.
  }
}

export async function POST(request: Request) {
  let body: AiGuideRequestBody;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body" }, { status: 400 });
  }

  if (!body.segment || !body.goal || !body.name || !body.email || !body.company) {
    return Response.json({ error: "Missing required fields" }, { status: 400 });
  }

  const candidate = resolveCandidate(body);
  if (!candidate) {
    return Response.json({ error: "Could not resolve a matching service" }, { status: 422 });
  }

  const leadTier = computeLeadTier(body, candidate.urgent);
  const summary = await generateSummary(body, candidate);
  await forwardLead(body, candidate, leadTier);

  return Response.json({
    service: candidate.service,
    serviceHref: candidate.serviceHref,
    urgent: candidate.urgent,
    leadTier,
    ...summary,
  });
}
