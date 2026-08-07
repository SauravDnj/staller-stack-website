"use client";

import { FormEvent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import {
  aiGuideCopy,
  segmentOptions,
  goalOptions,
  drillDownByGoal,
  managedServiceRouting,
  stageOptions,
  timelineOptions,
  budgetOptions,
  teamSizeOptions,
  AI_GUIDE_TOTAL_STEPS,
  type AiGuideOption,
} from "@/content/aiGuide";

type Screen =
  | "segment"
  | "goal"
  | "drilldown"
  | "stage"
  | "timeline"
  | "budget"
  | "teamSize"
  | "contact"
  | "loading"
  | "result"
  | "redirect";

type Answers = {
  segment?: string;
  goal?: string;
  drillDown?: string;
  urgent: boolean;
  stage?: string;
  timeline?: string;
  budget?: string;
  teamSize?: string;
  name: string;
  email: string;
  company: string;
  phone: string;
  notes: string;
};

type Result = {
  service: string;
  serviceHref: string;
  urgent: boolean;
  leadTier: string;
  why: string;
  firstStep: string;
  estimate: string;
};

const stepNumbers: Record<Screen, number> = {
  segment: 1,
  goal: 2,
  drilldown: 3,
  stage: 4,
  timeline: 5,
  budget: 6,
  teamSize: 7,
  contact: 8,
  loading: 9,
  result: 9,
  redirect: 9,
};

const initialAnswers: Answers = {
  urgent: false,
  name: "",
  email: "",
  company: "",
  phone: "",
  notes: "",
};

const optionCardClasses =
  "w-full rounded-2xl border border-ss-border bg-ss-base p-4 text-left text-sm text-ss-text transition-colors hover:border-ss-teal hover:bg-ss-teal/5 sm:text-base";

const inputClasses =
  "w-full rounded-lg border border-ss-border bg-ss-base px-4 py-3 text-sm text-ss-text placeholder:text-ss-muted/70 outline-none transition-colors focus:border-ss-teal";

export function AiGuideWizard({
  onDone,
  onSwitchToChat,
}: {
  onDone?: () => void;
  onSwitchToChat?: () => void;
}) {
  const [history, setHistory] = useState<Screen[]>(["segment"]);
  const [answers, setAnswers] = useState<Answers>(initialAnswers);
  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState(false);

  const screen = history[history.length - 1];

  function goTo(next: Screen) {
    setHistory((h) => [...h, next]);
  }

  function goBack() {
    setHistory((h) => (h.length > 1 ? h.slice(0, -1) : h));
  }

  function restart() {
    setHistory(["segment"]);
    setAnswers(initialAnswers);
    setResult(null);
    setError(false);
  }

  function selectSegment(option: AiGuideOption) {
    setAnswers((a) => ({ ...a, segment: option.value }));
    goTo("goal");
  }

  function selectGoal(option: AiGuideOption) {
    setAnswers((a) => ({ ...a, goal: option.value }));
    goTo("drilldown");
  }

  function selectDrillDown(option: AiGuideOption) {
    if (option.redirectToPlaybook) {
      setAnswers((a) => ({ ...a, drillDown: option.value }));
      goTo("redirect");
      return;
    }
    setAnswers((a) => ({ ...a, drillDown: option.value, urgent: Boolean(option.urgent) }));
    goTo(option.urgent ? "contact" : "stage");
  }

  function confirmManaged() {
    goTo("stage");
  }

  function selectStage(option: AiGuideOption) {
    setAnswers((a) => ({ ...a, stage: option.value }));
    goTo("timeline");
  }

  function selectTimeline(option: AiGuideOption) {
    setAnswers((a) => ({ ...a, timeline: option.value }));
    goTo("budget");
  }

  function selectBudget(option: AiGuideOption) {
    setAnswers((a) => ({ ...a, budget: option.value }));
    goTo("teamSize");
  }

  function selectTeamSize(option: AiGuideOption) {
    setAnswers((a) => ({ ...a, teamSize: option.value }));
    goTo("contact");
  }

  async function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    goTo("loading");
    setError(false);

    try {
      const response = await fetch("/api/ai-guide", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(answers),
      });

      if (!response.ok) throw new Error("request failed");

      const data: Result = await response.json();
      setResult(data);
      goTo("result");
    } catch {
      setError(true);
      goTo("result");
    }
  }

  function downloadSummary() {
    if (!result) return;
    const text = `Staller Stack — AI Guide Recommendation

Recommended service: ${result.service}
Why: ${result.why}
Suggested first step: ${result.firstStep}
Estimated engagement: ${result.estimate}

Contact: ${answers.name} <${answers.email}> — ${answers.company}
`;
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "staller-stack-ai-guide-summary.txt";
    link.click();
    URL.revokeObjectURL(url);
  }

  const stepNumber = stepNumbers[screen];
  const showProgress = screen !== "redirect";

  return (
    <div className="rounded-3xl border border-ss-border bg-ss-surface/60 p-6 backdrop-blur sm:p-10">
      {showProgress && (
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-3">
              <span className="inline-flex items-center rounded-full border border-ss-teal/30 bg-ss-teal/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-ss-teal">
                {aiGuideCopy.badge}
              </span>
              {onSwitchToChat && (
                <button
                  type="button"
                  onClick={onSwitchToChat}
                  className="font-display text-xs font-medium text-ss-muted underline underline-offset-2 transition-colors hover:text-ss-mint"
                >
                  Prefer to just chat?
                </button>
              )}
            </span>
            <span className="font-mono text-xs text-ss-muted">
              {aiGuideCopy.progressLabel(stepNumber, AI_GUIDE_TOTAL_STEPS)}
            </span>
          </div>
          <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-ss-border">
            <motion.div
              className="h-full rounded-full bg-ss-teal"
              initial={false}
              animate={{ width: `${(stepNumber / AI_GUIDE_TOTAL_STEPS) * 100}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>
        </div>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={screen}
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -16 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          {screen === "segment" && (
            <QuestionScreen title="Which best describes you?">
              {segmentOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => selectSegment(option)}
                  className={optionCardClasses}
                >
                  <span className="mr-2">{option.emoji}</span>
                  {option.label}
                </button>
              ))}
            </QuestionScreen>
          )}

          {screen === "goal" && (
            <QuestionScreen title="What are you looking to do?" onBack={goBack}>
              {goalOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => selectGoal(option)}
                  className={optionCardClasses}
                >
                  {option.label}
                </button>
              ))}
            </QuestionScreen>
          )}

          {screen === "drilldown" && answers.goal === "managed" && (
            <ManagedConfirmScreen segment={answers.segment} onBack={goBack} onContinue={confirmManaged} />
          )}

          {screen === "drilldown" && answers.goal !== "managed" && (
            <QuestionScreen
              title={drillDownByGoal[answers.goal ?? ""]?.question ?? "Tell us more"}
              onBack={goBack}
            >
              {(drillDownByGoal[answers.goal ?? ""]?.options ?? []).map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => selectDrillDown(option)}
                  className={optionCardClasses}
                >
                  {option.label}
                </button>
              ))}
            </QuestionScreen>
          )}

          {screen === "stage" && (
            <QuestionScreen title="Where are you in this project?" onBack={goBack}>
              {stageOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => selectStage(option)}
                  className={optionCardClasses}
                >
                  {option.label}
                </button>
              ))}
            </QuestionScreen>
          )}

          {screen === "timeline" && (
            <QuestionScreen title="When do you want to get started?" onBack={goBack}>
              {timelineOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => selectTimeline(option)}
                  className={optionCardClasses}
                >
                  {option.label}
                </button>
              ))}
            </QuestionScreen>
          )}

          {screen === "budget" && (
            <QuestionScreen
              title="What's your rough budget range?"
              subtitle="Optional estimate — helps us tailor a proposal."
              onBack={goBack}
            >
              {budgetOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => selectBudget(option)}
                  className={optionCardClasses}
                >
                  {option.label}
                </button>
              ))}
            </QuestionScreen>
          )}

          {screen === "teamSize" && (
            <QuestionScreen title="How big is your team?" onBack={goBack}>
              {teamSizeOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => selectTeamSize(option)}
                  className={optionCardClasses}
                >
                  {option.label}
                </button>
              ))}
            </QuestionScreen>
          )}

          {screen === "contact" && (
            <div>
              {answers.urgent && (
                <p className="mb-4 rounded-lg border border-ss-amber/40 bg-ss-amber/10 px-4 py-2 text-sm text-ss-amber">
                  Got it — we&apos;ll fast-track this. Just need a way to reach you.
                </p>
              )}
              <h3 className="font-display text-xl font-semibold text-ss-text sm:text-2xl">
                Last step — how do we reach you?
              </h3>
              <form onSubmit={handleContactSubmit} className="mt-6 flex flex-col gap-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <input
                    required
                    placeholder="Full name"
                    value={answers.name}
                    onChange={(e) => setAnswers((a) => ({ ...a, name: e.target.value }))}
                    className={inputClasses}
                  />
                  <input
                    required
                    type="email"
                    placeholder="Work email"
                    value={answers.email}
                    onChange={(e) => setAnswers((a) => ({ ...a, email: e.target.value }))}
                    className={inputClasses}
                  />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <input
                    required
                    placeholder="Company name"
                    value={answers.company}
                    onChange={(e) => setAnswers((a) => ({ ...a, company: e.target.value }))}
                    className={inputClasses}
                  />
                  <input
                    placeholder="Phone (optional)"
                    value={answers.phone}
                    onChange={(e) => setAnswers((a) => ({ ...a, phone: e.target.value }))}
                    className={inputClasses}
                  />
                </div>
                <textarea
                  placeholder="Anything else we should know? (optional)"
                  rows={3}
                  value={answers.notes}
                  onChange={(e) => setAnswers((a) => ({ ...a, notes: e.target.value }))}
                  className={`resize-none ${inputClasses}`}
                />
                <div className="mt-2 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={goBack}
                    className="font-display text-sm font-medium text-ss-muted transition-colors hover:text-ss-text"
                  >
                    ← {aiGuideCopy.backLabel}
                  </button>
                  <Button type="submit" className="ml-auto">
                    {aiGuideCopy.submitLabel} <span aria-hidden>→</span>
                  </Button>
                </div>
              </form>
            </div>
          )}

          {screen === "loading" && (
            <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
              <span className="h-10 w-10 animate-spin-slow rounded-full border-2 border-dashed border-ss-teal" />
              <p className="font-display text-lg text-ss-text">{aiGuideCopy.loadingLabel}</p>
            </div>
          )}

          {screen === "result" && (
            <ResultScreen
              result={result}
              error={error}
              onDownload={downloadSummary}
              onRestart={() => {
                restart();
                onDone?.();
              }}
            />
          )}

          {screen === "redirect" && (
            <div className="py-4 text-center">
              <h3 className="font-display text-xl font-semibold text-ss-text sm:text-2xl">
                Let&apos;s build that with you
              </h3>
              <p className="mx-auto mt-3 max-w-md text-sm text-ss-muted">
                Sounds like our Playbook Generator is the right next step — describe what
                you want to automate and we&apos;ll turn it into a step-by-step plan.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={goBack}
                  className="font-display text-sm font-medium text-ss-muted transition-colors hover:text-ss-text"
                >
                  ← {aiGuideCopy.backLabel}
                </button>
                <Button
                  href="/#playbook-generator"
                  onClick={onDone}
                >
                  Try the Playbook Generator <span aria-hidden>→</span>
                </Button>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function QuestionScreen({
  title,
  subtitle,
  onBack,
  children,
}: {
  title: string;
  subtitle?: string;
  onBack?: () => void;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="font-display text-xl font-semibold text-ss-text sm:text-2xl">{title}</h3>
      {subtitle && <p className="mt-1 text-sm text-ss-muted">{subtitle}</p>}
      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">{children}</div>
      {onBack && (
        <button
          type="button"
          onClick={onBack}
          className="mt-6 font-display text-sm font-medium text-ss-muted transition-colors hover:text-ss-text"
        >
          ← {aiGuideCopy.backLabel}
        </button>
      )}
    </div>
  );
}

function ManagedConfirmScreen({
  segment,
  onBack,
  onContinue,
}: {
  segment?: string;
  onBack: () => void;
  onContinue: () => void;
}) {
  const routing =
    managedServiceRouting[(segment ?? "smb") as keyof typeof managedServiceRouting];

  return (
    <div>
      <h3 className="font-display text-xl font-semibold text-ss-text sm:text-2xl">
        Here&apos;s where you fit
      </h3>
      <p className="mt-3 rounded-2xl border border-ss-border bg-ss-base p-4 text-sm text-ss-text">
        Based on being a{" "}
        <span className="text-ss-teal">{segment ?? "growing team"}</span>, we&apos;d route you
        toward <span className="font-semibold">{routing.service}</span>.
      </p>
      <div className="mt-6 flex items-center gap-3">
        <button
          type="button"
          onClick={onBack}
          className="font-display text-sm font-medium text-ss-muted transition-colors hover:text-ss-text"
        >
          ← {aiGuideCopy.backLabel}
        </button>
        <Button onClick={onContinue} className="ml-auto">
          Continue <span aria-hidden>→</span>
        </Button>
      </div>
    </div>
  );
}

function ResultScreen({
  result,
  error,
  onDownload,
  onRestart,
}: {
  result: Result | null;
  error: boolean;
  onDownload: () => void;
  onRestart: () => void;
}) {
  if (error || !result) {
    return (
      <div className="py-4 text-center">
        <h3 className="font-display text-xl font-semibold text-ss-text sm:text-2xl">
          Something went wrong
        </h3>
        <p className="mx-auto mt-3 max-w-md text-sm text-ss-muted">
          We couldn&apos;t generate a recommendation right now — but we&apos;d still love to
          talk. Reach out directly and we&apos;ll pick up from here.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={onRestart}
            className="font-display text-sm font-medium text-ss-muted transition-colors hover:text-ss-text"
          >
            {aiGuideCopy.restartLabel}
          </button>
          <Button href="/contact">{aiGuideCopy.talkLabel} <span aria-hidden>→</span></Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {result.urgent && (
        <p className="mb-4 inline-flex items-center rounded-full border border-red-400/40 bg-red-400/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-red-400">
          Flagged Urgent
        </p>
      )}
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-ss-teal">
        Based on your answers, here&apos;s what we&apos;d recommend
      </p>
      <h3 className="mt-2 font-display text-2xl font-semibold text-ss-text sm:text-3xl">
        <Link href={result.serviceHref} className="hover:text-ss-mint">
          {result.service}
        </Link>
      </h3>
      <p className="mt-4 text-sm text-ss-muted sm:text-base">{result.why}</p>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-ss-border bg-ss-base p-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ss-muted">
            Suggested First Step
          </p>
          <p className="mt-2 text-sm text-ss-text">{result.firstStep}</p>
        </div>
        <div className="rounded-2xl border border-ss-border bg-ss-base p-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ss-muted">
            Estimated Engagement
          </p>
          <p className="mt-2 text-sm text-ss-text">{result.estimate}</p>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <Button href="/contact">{aiGuideCopy.talkLabel} <span aria-hidden>→</span></Button>
        <button
          type="button"
          onClick={onDownload}
          className="font-display text-sm font-medium text-ss-muted transition-colors hover:text-ss-text"
        >
          {aiGuideCopy.downloadLabel}
        </button>
        <button
          type="button"
          onClick={onRestart}
          className="ml-auto font-display text-sm font-medium text-ss-muted transition-colors hover:text-ss-text"
        >
          {aiGuideCopy.restartLabel}
        </button>
      </div>
    </div>
  );
}
