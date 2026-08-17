export type Founder = {
  name: string;
  role: string;
  photo: string;
  bio: string[];
};

export const founder: Founder = {
  name: "Jayesh Bhai",
  role: "Founder, CEO & Director",
  photo: "/images/about/jayesh.jpeg",
  bio: [
    "Staller Stack exists because Jayesh Bhai got tired of watching good businesses get let down by agencies that disappeared after the invoice cleared. He founded the company on a simple rule: every engagement is run the way he'd want to be treated if he were the client — clear timelines, honest updates, and a team that's still around after launch.",
    "That philosophy shapes how every project here gets run. Jayesh stays directly involved in the client relationship, not just the sales conversation, so the priorities of the business always come before the convenience of the team building it.",
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
