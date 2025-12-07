// data/projects.ts

export type Project = {
  slug: string;
  title: string;
  tech: string;
  description: string;
  bullets: string[];
  links?: {
    live?: string;
    github?: string;
  };
};

export const projects: Project[] = [
  {
    slug: "cleansphere-urban-cleanliness-tracker",
    title: "CleanSphere – Urban Cleanliness Tracker",
    tech: "Flutter · Firebase · Google Maps",
    description:
      "Community-driven app where citizens can report cleanliness issues and municipal authorities can track and resolve them.",
    bullets: [
      "Real-time issue reporting with images and location.",
      "Role-based dashboards for residents and authorities.",
      "Helps improve response time and transparency.",
    ],
    links: {
      github: "https://github.com/your-username/cleansphere",
    },
  },
  {
    slug: "news-summarizer-with-sentiment",
    title: "News Summarizer with Sentiment",
    tech: "Python · Tkinter · NLP (VADER) · Newspaper3k",
    description:
      "Desktop app that fetches news articles from a URL, summarizes them, and analyzes sentiment to quickly understand the tone.",
    bullets: [
      "Automatic article parsing and concise summary.",
      "Sentiment score (positive, negative, neutral).",
      "Simple GUI for non-technical users.",
    ],
    links: {
      github: "https://github.com/your-username/news-summarizer",
    },
  },
  {
    slug: "flutter-login-auth-system",
    title: "Flutter Login & Auth System",
    tech: "Flutter · Dart · Firebase Auth / SharedPreferences",
    description:
      "Modern login/registration UI with persistent login, validation, and clean navigation, designed for reuse in multiple apps.",
    bullets: [
      "Eye-catching animated UI with custom theming.",
      "Form validation and helpful error messages.",
      "Supports multiple users and persistent sessions.",
    ],
    links: {
      github: "https://github.com/your-username/flutter-auth-system",
    },
  },
  // Add more projects here later if you want
];
