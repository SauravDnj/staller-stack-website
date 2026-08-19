export type Founder = {
  name: string;
  role: string;
  photo: string;
  bio: string[];
  focus: { title: string; description: string }[];
};

export const founder: Founder = {
  name: "Jayesh Italiya",
  role: "Founder, CEO & Director",
  photo: "/images/about/jayesh.jpeg",
  bio: [
    "Staller Stack exists because Jayesh Italiya got tired of watching good businesses get let down by agencies that disappeared after the invoice cleared. He founded the company on a simple rule: every engagement is run the way he'd want to be treated if he were the client — clear timelines, honest updates, and a team that's still around after launch.",
    "That philosophy shapes how every project here gets run. Jayesh stays directly involved in the client relationship, not just the sales conversation, so the priorities of the business always come before the convenience of the team building it.",
    "As Founder, CEO, and Director, he oversees everything from how a project is scoped in the first conversation to how it's supported long after launch — so the standard a client agrees to on day one is the same standard they get on day three hundred.",
  ],
  focus: [
    {
      title: "Client Relationships",
      description: "Stays personally reachable through delivery — not handed off after the contract is signed.",
    },
    {
      title: "Delivery Standards",
      description: "Reviews how projects are scoped and run so timelines and quality stay consistent across the board.",
    },
    {
      title: "Long-Term Accountability",
      description: "Treats launch as the start of the relationship, with support that continues well past go-live.",
    },
  ],
};

export type TeamMember = {
  name: string;
  role: string;
  photo: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: founder.name,
    role: founder.role,
    photo: founder.photo,
  },
];
