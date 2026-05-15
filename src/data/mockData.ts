export interface Gig {
  id: string;
  title: string;
  company: string;
  location: string;
  pay: string;
  requiredSkills: string[];
  type: "Full-time" | "Contract" | "Hourly";
}

export interface User {
  name: string;
  role: string;
  bio: string;
  skills: string[];
  portfolio: {
    id: string;
    title: string;
    description: string;
    icon: string;
  }[];
}

export const MOCK_USER: User = {
  name: "Sarah K. Jenkins",
  role: "Full-Stack Developer",
  bio: "Passionate about building scalable web applications and optimizing user experiences for the next billion users.",
  skills: ["React", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL", "Next.js", "Docker"],
  portfolio: [
    { id: "1", title: "E-commerce Platform", description: "Built a mobile-first shop for local artisans.", icon: "ShoppingBag" },
    { id: "2", title: "Health Tracker", description: "Offline-first progressive web app for remote clinics.", icon: "Activity" },
    { id: "3", title: "Payment Gateway", description: "Integrated secure API for cross-border transactions.", icon: "CreditCard" },
    { id: "4", title: "Learning Hub", description: "Simplified LMS with video compression for low bandwidth.", icon: "BookOpen" },
  ],
};

export const MOCK_GIGS: Gig[] = [
  {
    id: "g1",
    title: "Senior Frontend Engineer",
    company: "TechNexus",
    location: "Remote",
    pay: "$60 - $80/hr",
    requiredSkills: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    type: "Contract",
  },
  {
    id: "g2",
    title: "Backend Specialist",
    company: "FinStream",
    location: "Nairobi, KE",
    pay: "$5,000/mo",
    requiredSkills: ["Node.js", "PostgreSQL", "Docker", "Redis"],
    type: "Full-time",
  },
  {
    id: "g3",
    title: "Full-Stack Developer",
    company: "Innovate Africa",
    location: "Remote",
    pay: "$45/hr",
    requiredSkills: ["React", "Node.js", "TypeScript", "Prisma"],
    type: "Hourly",
  },
  {
    id: "g4",
    title: "UI Designer",
    company: "DesignCo",
    location: "Lagos, NG",
    pay: "$3,500/mo",
    requiredSkills: ["Figma", "Tailwind CSS", "Mobile Design"],
    type: "Full-time",
  },
  {
    id: "g5",
    title: "Systems Architect",
    company: "GlobalNet",
    location: "Remote",
    pay: "$100/hr",
    requiredSkills: ["Docker", "Kubernetes", "AWS", "TypeScript"],
    type: "Contract",
  },
];