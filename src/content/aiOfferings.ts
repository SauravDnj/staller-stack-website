export type AiOfferingCategory = "service" | "solution";

export type AiOffering = {
  slug: string;
  name: string;
  description: string;
  icon: string;
  category: AiOfferingCategory;
};

export const aiServices: AiOffering[] = [
  {
    slug: "artificial-intelligence",
    name: "Artificial Intelligence",
    description: "Intelligent AI solutions built for automation, insights, and business growth.",
    icon: "brain",
    category: "service",
  },
  {
    slug: "agentic-ai",
    name: "Agentic AI",
    description: "Autonomous AI systems designed to plan, decide, and execute tasks.",
    icon: "robot",
    category: "service",
  },
  {
    slug: "generative-ai",
    name: "Generative AI",
    description: "Generative AI solutions for content creation, automation, and smarter workflows.",
    icon: "sparkles",
    category: "service",
  },
  {
    slug: "computer-vision",
    name: "Computer Vision",
    description: "AI vision systems for image, video, and object analysis.",
    icon: "eye",
    category: "service",
  },
  {
    slug: "nlp-development",
    name: "NLP Development",
    description: "Language AI solutions for text analysis, chat, and speech understanding.",
    icon: "language",
    category: "service",
  },
  {
    slug: "ai-chatbot",
    name: "AI Chatbot",
    description: "Smart AI chatbots for customer support, sales, and user engagement.",
    icon: "chatbot",
    category: "service",
  },
  {
    slug: "ai-consulting",
    name: "AI Consulting",
    description: "Expert AI consulting to plan, validate, and implement AI solutions.",
    icon: "bulb",
    category: "service",
  },
  {
    slug: "predictive-analytics",
    name: "Predictive Analytics",
    description: "Data-driven analytics solutions for forecasting, trends, and business decisions.",
    icon: "chartline",
    category: "service",
  },
  {
    slug: "ai-agents",
    name: "AI Agents",
    description: "Custom AI agents that automate tasks and improve business productivity.",
    icon: "cpu",
    category: "service",
  },
  {
    slug: "ai-maintenance-support",
    name: "AI Maintenance & Support",
    description: "Reliable AI support to monitor, improve, and maintain AI systems.",
    icon: "tool",
    category: "service",
  },
  {
    slug: "ai-app-development",
    name: "AI App Development",
    description: "AI-powered apps built for smarter user experiences and automation.",
    icon: "apps",
    category: "service",
  },
  {
    slug: "ai-model-fine-tuning",
    name: "AI Model Fine-Tuning",
    description: "Fine-tuned AI models customized for your business data and needs.",
    icon: "tune",
    category: "service",
  },
  {
    slug: "ai-integration",
    name: "AI Integration",
    description: "Seamless AI integration into existing tools, platforms, and workflows.",
    icon: "plug",
    category: "service",
  },
  {
    slug: "llm-development",
    name: "LLM Development",
    description: "Custom LLM solutions for chat, search, automation, and knowledge systems.",
    icon: "message",
    category: "service",
  },
  {
    slug: "rag-solutions",
    name: "RAG Solutions",
    description: "RAG-based solutions for accurate answers from business knowledge sources.",
    icon: "search",
    category: "service",
  },
  {
    slug: "edge-ai",
    name: "Edge AI",
    description: "Edge AI solutions for real-time intelligence on devices and systems.",
    icon: "edge",
    category: "service",
  },
  {
    slug: "ai-workflow-automation",
    name: "AI Workflow Automation",
    description: "AI automation solutions that reduce manual work and improve efficiency.",
    icon: "route",
    category: "service",
  },
  {
    slug: "enterprise-ai",
    name: "Enterprise AI",
    description: "Enterprise AI solutions built for scalability, security, and operations.",
    icon: "enterprise",
    category: "service",
  },
  {
    slug: "ai-product",
    name: "AI Product",
    description: "AI product development from strategy and design to final launch.",
    icon: "box",
    category: "service",
  },
  {
    slug: "ai-poc",
    name: "AI POC",
    description: "AI proof-of-concepts to validate ideas before full-scale development.",
    icon: "flask",
    category: "service",
  },
  {
    slug: "machine-learning",
    name: "Machine Learning",
    description: "Machine learning solutions for prediction, personalization, and intelligent decisions.",
    icon: "ml",
    category: "service",
  },
];

export const aiSolutions: AiOffering[] = [
  {
    slug: "ai-healthcare",
    name: "AI Healthcare",
    description: "AI healthcare solutions for smarter care, diagnosis, and patient management.",
    icon: "heartbeat",
    category: "solution",
  },
  {
    slug: "ai-ecommerce",
    name: "AI E-Commerce",
    description: "AI-powered e-commerce solutions for personalization, automation, and customer growth.",
    icon: "cart",
    category: "solution",
  },
  {
    slug: "agentic-ai-hr",
    name: "Agentic AI in HR",
    description: "Agentic AI solutions for recruitment, employee support, and HR automation.",
    icon: "users",
    category: "solution",
  },
  {
    slug: "enterprise-ai-agent",
    name: "Enterprise AI Agent",
    description: "Enterprise AI agents for automating complex workflows and business operations.",
    icon: "hierarchy",
    category: "solution",
  },
  {
    slug: "ai-banking",
    name: "AI Banking",
    description: "AI banking solutions for fraud detection, automation, and customer support.",
    icon: "bank",
    category: "solution",
  },
  {
    slug: "ai-threat-detection",
    name: "AI Threat Detection",
    description: "Detect security threats, risks, and unusual activities with AI.",
    icon: "shieldalert",
    category: "solution",
  },
  {
    slug: "ai-behaviour-detection",
    name: "AI Behaviour Detection",
    description: "Detect user behavior patterns with intelligent AI-based monitoring systems.",
    icon: "activity",
    category: "solution",
  },
  {
    slug: "ai-object-detection",
    name: "AI Object Detection",
    description: "Identify, track, and analyze objects using advanced computer vision models.",
    icon: "scan",
    category: "solution",
  },
  {
    slug: "theft-detection-system",
    name: "Theft Detection System",
    description: "Smart theft detection systems for real-time alerts and security monitoring.",
    icon: "alarm",
    category: "solution",
  },
  {
    slug: "logistic-ai-agent",
    name: "Logistic AI Agent",
    description: "AI logistics agents for route planning, delivery tracking, and operations.",
    icon: "truck",
    category: "solution",
  },
  {
    slug: "customer-support-ai-agent",
    name: "Customer Support AI Agent",
    description: "AI support agents for faster responses and better customer service.",
    icon: "headset",
    category: "solution",
  },
  {
    slug: "retail-ai-agent",
    name: "Retail AI Agent",
    description: "Retail AI agents for customer engagement, inventory, and sales support.",
    icon: "store",
    category: "solution",
  },
  {
    slug: "ai-agent-orchestrator",
    name: "AI Agent Orchestrator",
    description: "Manage multiple AI agents through smart orchestration and workflow control.",
    icon: "orchestrator",
    category: "solution",
  },
  {
    slug: "ai-sales-agent",
    name: "AI Sales Agent",
    description: "AI sales agents for lead engagement, follow-ups, and sales automation.",
    icon: "trending",
    category: "solution",
  },
  {
    slug: "ai-voice-agent",
    name: "AI Voice Agent",
    description: "AI voice agents for calls, customer support, and business communication.",
    icon: "mic",
    category: "solution",
  },
  {
    slug: "ai-based-video-analysis",
    name: "AI-Based Video Analysis",
    description: "Analyze video data with AI for insights, safety, and monitoring.",
    icon: "video",
    category: "solution",
  },
  {
    slug: "cctv-security",
    name: "CCTV Security",
    description: "AI-powered CCTV security for real-time monitoring and threat detection.",
    icon: "camera",
    category: "solution",
  },
  {
    slug: "ai-based-recommendation",
    name: "AI Based Recommendation",
    description: "Personalized AI recommendations for products, content, and user experiences.",
    icon: "thumb",
    category: "solution",
  },
];

export const allAiOfferings: AiOffering[] = [...aiServices, ...aiSolutions];

export function getAiOfferingBySlug(slug: string) {
  return allAiOfferings.find((offering) => offering.slug === slug);
}
