// ═══════════════════════════════════════════════════════════════
// English Content — All portfolio data in English
// ═══════════════════════════════════════════════════════════════

import type {
  Profile,
  Experience,
  Project,
  Certification,
  Volunteering,
  SkillGroup,
  Education,
  SocialLink,
} from "./portfolio";

export const profileEN: Profile = {
  firstName: "Taha",
  lastName: "Tuncay",
  title: "Business Analyst",
  location: "Istanbul, Türkiye",
  email: "taha.tuncay@icloud.com",
  bio: "As a Business Analyst, I analyze organizational needs to develop solution strategies, serve as a bridge between stakeholders to improve business processes and enhance efficiency. In my spare time, I develop user-oriented projects through personal work. I am open to continuous learning, problem-solving oriented, and well-suited for teamwork.",
  shortBio: "Working on digital products, technology, and creative solutions.",
  statement: "",
  avatar: "/avatar/profile.jpg",
  resumeUrl: "/resume/cv.pdf",
  availability: "Open to new opportunities",
  specialization: "Business Analysis & Artificial Intelligence",
};

export const experienceEN: Experience[] = [
  {
    id: "exp-1",
    company: "Steel Insurance and Reinsurance Brokerage Co.",
    position: "Business Analyst",
    startDate: "08.2024",
    endDate: null,
    type: "Full-Time",
    description:
      "I actively participate in digital transformation processes in the insurance and reinsurance sector.",
    responsibilities: [
      "Development and end-user support of the insurance quick-quote program",
      "Preparation and presentation of all company reports",
      "Maintenance and development of the tebom.net website",
      "Technology and process analysis within the company",
    ],
    technologies: ["Microsoft Office", "Google Workspace", "Claude Code", "Web Services", "API", ""],
  },
  {
    id: "exp-2",
    company: "Ankara Yıldırım Beyazıt University",
    position: "International Relations Office Assistant",
    startDate: "10.2023",
    endDate: "06.2024",
    type: "Part-Time",
    description:
      "Coordination of communication with delegations from abroad and management of the university's international relations.",
    responsibilities: [
      "Coordination of communication with incoming Erasmus students from abroad",
      "Support for activities carried out within the Erasmus+ program",
      "Providing support on abroad-related matters for university staff and students",
      "Execution and support of international projects",
    ],
    technologies: ["Communication", "Coordination", "Erasmus+", "International Projects"],
  },
  {
    id: "exp-3",
    company: "Fiyat Performans Bilişim Co.",
    position: "Frontend Developer Intern",
    startDate: "06.2023",
    endDate: "07.2023",
    type: "Internship",
    description:
      "Gained experience in teamwork and frontend development by learning professional software development processes.",
    responsibilities: [
      "Maintenance and improvement of existing systems",
      "Contribution to testing processes",
      "Technical documentation writing",
    ],
    technologies: ["JavaScript", "React", "Git", "HTML", "CSS"],
  },
];

export const projectsEN: Project[] = [
  {
    id: "proj-1",
    slug: "project-one",
    number: "01",
    name: "Smart Resume",
    description:
      "A program for creating resumes from scratch and improving CVs. Additionally features CV optimization based on job postings.",
    role: "Full Stack Developer",
    year: "2026",
    technologies: ["Next.js", "TypeScript", "Claude Code", "HTML", "CSS", "JAVASCRIPT"],
    status: "Completed",
    image: "/projects/akilli-ozgecmis-logo.png",
    githubUrl: "https://github.com/tahatuncay/akilli-ozgecmis",
    liveUrl: "https://akilliozgecmis.com",
    featured: true,
  },
  {
    id: "proj-2",
    slug: "project-two",
    number: "02",
    name: "Digital Radar",
    description:
      "A social media platform that tracks AI developments and presents them as video content.",
    role: "Full Stack Developer",
    year: "2025",
    technologies: ["n8n", " Claude Code", "ElevenLabs"],
    status: "Completed",
    image: "/projects/dijital-radar.png",
    githubUrl: "#",
    featured: true,
  },
  {
    id: "proj-3",
    slug: "project-three",
    number: "03",
    name: "Flavourlab",
    description:
      "An ordering application that recommends recipes based on ingredients selected by users.",
    role: "Co-Developer",
    year: "2024",
    technologies: ["Wordpress", "WooCommerce", "AI"],
    status: "Completed",
    githubUrl: "#",
    liveUrl: "https://flavourlab.com.tr",
    featured: true,
  },
  {
    id: "proj-4",
    slug: "project-four",
    number: "04",
    name: "[Project Name]",
    description:
      "High-performance microservice architecture specifically designed for e-commerce infrastructure.",
    role: "Software Engineer",
    year: "2023",
    technologies: ["Go", "gRPC", "Redis", "Kubernetes"],
    status: "Completed",
    featured: false,
  },
];

export const certificationsEN: Certification[] = [
  {
    id: "cert-1",
    name: "First Aid",
    issuer: "Republic of Türkiye Ministry of Health",
    date: "10.2025",
    category: "Health",
    credentialId: "",
    verifyUrl: "",
  },
  {
    id: "cert-2",
    name: "Analysis for Business Systems",
    issuer: "University of Minnesota",
    date: "02.2024",
    category: "Business Analysis",
    credentialId: "2W6B7YE3NGAC",
    verifyUrl: "https://www.coursera.org/account/accomplishments/verify/2W6B7YE3NGAC",
  },
  {
    id: "cert-3",
    name: "Leadership Development Experience",
    issuer: "AIESEC",
    date: "09.2023",
    category: "Development",
    credentialId: "6473509",
    verifyUrl: "",
  },
  {
    id: "cert-4",
    name: "Advanced Java",
    issuer: "BTK Academy",
    date: "09.2022",
    category: "Coding",
    verifyUrl: "https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=pKmhKPdDn7",
  },
  {
    id: "cert-5",
    name: "SQL with Applications",
    issuer: "BTK Academy",
    date: "08.2022",
    category: "Data",
    verifyUrl: "https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=NowfrYNoPB",
  },
  {
    id: "cert-6",
    name: "Introduction to Programming with Java",
    issuer: "BTK Academy",
    date: "07.2022",
    category: "Coding",
    verifyUrl: "https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=7rptZm7GmA",
  },
];

export const volunteeringEN: Volunteering[] = [
  {
    id: "vol-1",
    organization: "Erasmus Student Network",
    position: "Section President",
    startDate: "2022",
    endDate: "2024",
    description:
      "I served as president of our university's section of Erasmus Student Network, the largest student organization in Europe. In addition to managing a team, I maintained close contact with other national and international ESN branches to contribute to the visibility of our own section. I was also responsible for keeping the aybu.esnturkey.org website user-friendly and up-to-date.",
    contributions: [
      "Planning and organizing cultural events for international students",
      "Organizing Erasmus+ promotion activities for local students",
      "Developing communication and collaborations with national and international sections",
    ],
    url: "https://aybu.esnturkey.org/",
    url2: "https://esn.org/",
  },
  {
    id: "vol-2",
    organization: "AIESEC",
    position: "Teacher",
    startDate: "08.2023",
    endDate: "09.2023",
    description:
      "I volunteered for 6 weeks in Mumbai, India during August and September 2023 through AIESEC, the world's largest youth organization. Together with other volunteers from different countries, we taught basic English as well as subjects like Geography and Mathematics to Indian children. Participating in this volunteer project played a significant role in my personal development and my ability to adapt to a different culture. I also made numerous connections from various countries.",
    contributions: [
      "Planning and executing after-school educational programs.",
      "Engaging with local communities through cultural events.",
      "Experiencing different cultures and learning local traditions in an international environment.",
    ],
    url: "https://aiesec.org/",
  },
];

export const skillsEN: SkillGroup[] = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML/CSS"],
  },
  {
    category: "Database",
    skills: ["SQL", "Firebase", "Supabase"],
  },
  {
    category: "DevOps & Cloud",
    skills: ["Docker", "Vercel", "GitHub Actions"],
  },
  {
    category: "Artificial Intelligence",
    skills: ["Claude Code", "Vercel", "OpenAI API"],
  },
  {
    category: "Design & Tools",
    skills: ["Figma", "Git", "VS Code", "Postman"],
  },
];

export const educationEN: Education[] = [
  {
    id: "edu-1",
    institution: "Ankara Yıldırım Beyazıt University",
    degree: "Bachelor's",
    field: "Management Information Systems",
    startDate: "2019",
    endDate: "2024",
    description: "Academic studies and projects in Management Information Systems.",
  },
];

export const socialLinksEN: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/tahatuncay/",
    icon: "linkedin",
  },
  {
    name: "GitHub",
    url: "https://github.com/tahatuncay",
    icon: "github",
  },
  {
    name: "Email",
    url: "mailto:taha.tuncay@icloud.com",
    icon: "mail",
  },
];
