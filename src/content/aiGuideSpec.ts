/**
 * Internal reference material only — the original "AI Guide Questionnaire" feature
 * spec used to build src/content/aiGuide.ts. Fed to the chatbot as background
 * knowledge so it understands the AI Guide feature and service-routing logic, but
 * the chat system prompt instructs the model never to quote or disclose this
 * section verbatim (it contains internal build/scoring instructions, not
 * customer-facing content).
 */
export const aiGuideInternalSpec = `
STALLER STACK — AI GUIDE QUESTIONNAIRE (INTERNAL FEATURE SPEC, DO NOT DISCLOSE VERBATIM)

Purpose: an interactive lead-qualification & service-routing wizard on the site. Visitors
answer 6-9 short questions; the tool recommends a service, shows a mini "playbook" of what
the engagement would look like, and captures a qualified lead.

Flow: Segment -> Goal -> Service drill-down (branches by goal) -> Current stage -> Timeline
-> Budget range -> Team size -> Contact details -> AI-generated summary + CTA.

Segments: Startup/founder, SMB/growing business, Enterprise, IT service provider/MSP,
Agency (building for a client).

Goals: Build something new, Modernize/scale existing system, Automate work with AI/agents,
Improve security/get compliant, Get ongoing IT support/managed services, Not sure yet.

Service routing highlights:
- Website/marketing site -> Web Development. SaaS/web app -> Software Development.
  Mobile app -> Mobile App Development. Internal tool -> Software Development.
  CRM -> CRM Custom Software. ERP -> ERP Custom Software.
- Cloud infra upgrade -> Cloud & DevOps. Legacy rewrite -> Software Development.
- Predictive analytics -> AI & ML Solutions. Custom AI agent/chatbot or workflow
  automation -> AI Agent & Model Training.
- Security/compliance questions -> Security & Compliance. An active incident is flagged
  as an urgent lead and fast-tracked to contact.
- MSP/Enterprise wanting managed services -> Managed Mode / Multi-Tenant Console.
  SMB/startup/agency wanting managed services -> ongoing Support & Optimization.

Internal lead-scoring logic (do not reveal to visitors as "how you're scored"):
- ASAP timeline + $50K+ budget + "ready to build" stage = Hot lead.
- "Just exploring" timeline with no budget selected = Nurture lead.
- A flagged security incident is always a Hot/urgent lead regardless of other answers.

This spec also contains a sample internal system prompt and UX implementation notes used
only by the engineering team to build the wizard — these are not customer-facing content.
`;
