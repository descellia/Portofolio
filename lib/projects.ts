/**
 * Project data. Sources: Portofolio.pdf, CV, and the README of each GitHub repository.
 * `links` only contains URLs that appear in those sources.
 */

export type Category = "AI & Data" | "Mobile Development" | "Web Development" | "UI/UX Design";

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  year?: string;
  category: Category;
  role: string;
  context: string;
  summary: string;
  description: string[];
  highlights: string[];
  stack: string[];
  metrics?: { value: string; label: string }[];
  metricsNote?: string;
  cover?: string;
  gallery?: { src: string; alt: string }[];
  diagram?: "rag" | "judge";
  links: { label: string; href: string }[];
  featured?: boolean;
};

export const categories: ("All" | Category)[] = ["All", "AI & Data", "Mobile Development", "Web Development", "UI/UX Design"];

export const projects: Project[] = [
  {
    slug: "vendor-kbli-rag",
    title: "Vendor Data Enrichment & KBLI Classification",
    subtitle: "Hybrid-retrieval RAG pipeline for an SAP S/4HANA migration",
    year: "2026",
    category: "AI & Data",
    role: "Data Analyst Intern (MDM)",
    context: "Kawan Lama Group internship",
    summary:
      "An end-to-end AI pipeline that enriches vendor master data and maps each vendor to a 5-digit KBLI industry code.",
    description: [
      "Before an ERP migration to SAP S/4HANA, thousands of vendor records with only a short name, a city, and a broad line-of-business label each needed a complete business description and a standardized industry code.",
      "The pipeline searches the web for each vendor, writes a standardized description with an LLM, retrieves candidate KBLI codes with a hybrid ensemble (TF-IDF, SBERT + FAISS, BM25, and a keyword knowledge graph), and lets the LLM re-rank the top 25 candidates. Each result gets a confidence label so analysts only review the uncertain cases.",
      "If web search returns too little evidence, the vendor skips the LLM steps and is exported as N/A instead of letting the model guess.",
    ],
    highlights: [
      "Hybrid scoring: keyword precision from TF-IDF and BM25 with semantic matching from SBERT",
      "LLM as re-ranker that explains its final choice",
      "High / Medium / Low confidence labels for human review",
      "Caching of models, embeddings, and search results, plus per-step token cost tracking",
    ],
    stack: ["Python", "SBERT", "FAISS", "TF-IDF", "BM25", "Claude Haiku 4.5", "Tavily", "Jupyter"],
    metrics: [
      { value: "98%", label: "Classification accuracy (vs 90% for the earlier n8n + GPT-4o mini approach)" },
      { value: "Rp 71", label: "Cost per vendor (vs Rp 102), about 30% lower" },
      { value: "1,436 → 235", label: "Raw records cleaned and deduplicated into representative vendors" },
    ],
    metricsNote:
      "Figures from the internship report (Table 3.8). The vendor dataset is confidential, so they cannot be reproduced from the repository alone.",
    diagram: "rag",
    links: [{ label: "GitHub repository", href: "https://github.com/descellia/vendor-data-enrichment-rag" }],
    featured: true,
  },
  {
    slug: "llm-judge-dialogue-qc",
    title: "LLM-as-a-Judge for Multi-Turn Dialogue QC",
    subtitle: "Semi-automated quality control of annotated conversations",
    year: "2026",
    category: "AI & Data",
    role: "LLM & Data Evaluation Intern",
    context: "AI Rudder internship",
    summary:
      "Codifies a manual QC guideline into a 0–100 rubric so an LLM judge can score dialogues, flag turn-level issues, and suggest fixes for human reviewers.",
    description: [
      "Annotated multi-turn dialogues serve as ground truth for conversational AI, and each one must follow a detailed business prompt: scenario and role, flow steps, fixed scripts, turn format, natural language, and correct function calls. Checking this by hand is slow, and reviewers interpret rules differently at high volume.",
      "Text-similarity metrics can't judge conditional rules, so the project applies the LLM-as-a-Judge paradigm. A judge call scores each dialogue and lists issues per turn, and a second, lighter call classifies severity, category, and confidence without re-scoring.",
      "Results are written to a formatted Excel file after every dialogue, so long runs can resume from where they stopped and reviewers validate the judge's first pass in the same file.",
    ],
    highlights: [
      "Rubric covering scenario, step jumps, fixed scripts, turn format, naturalness, and function-call rules",
      "Checkpoint and resume for interrupted runs",
      "Robust JSON parsing for reasoning tags, code fences, and malformed output",
      "Positioned as a first-pass assessment that a person always validates",
    ],
    stack: ["Python", "OpenAI API (gpt-4o-mini)", "pandas", "openpyxl", "Prompt engineering"],
    metrics: [
      { value: "87.7%", label: "Label agreement with human reviewers (50 of 57 dialogues)" },
      { value: "76.8–93.9%", label: "95% Wilson confidence interval" },
    ],
    metricsNote:
      "An early estimate on a small sample, for this model and prompt only. False-pass and false-flag rates have not yet been measured separately.",
    diagram: "judge",
    links: [{ label: "GitHub repository", href: "https://github.com/descellia/llm-as-a-judge-dialogue-qc" }],
    featured: true,
  },
  {
    slug: "fintelis",
    title: "Fintelis",
    subtitle: "Money management app for Android",
    year: "2025",
    category: "Mobile Development",
    role: "Android Developer",
    context: "Team project, Informatics UMN",
    summary:
      "An Android app for tracking balances across wallets, recording transactions, and staying under a monthly spending limit, with an on-device machine learning feature.",
    description: [
      "Fintelis helps users monitor their balance, transactions, and monthly spending limit in one place. Money is organized into wallets such as cash, bank, and e-wallet accounts, and each transaction records its amount, category, date, wallet, and an optional receipt image.",
      "The home dashboard summarizes cash flow with charts, a monthly limit can be set from the dashboard, and reminder notifications keep users on track. Data is stored in Firebase, with email and Google sign-in.",
      "A machine learning feature runs an ONNX model directly on the device through ONNX Runtime and returns a binary result from the user's inputs.",
      "My contributions included the onboarding, login, and sign-up flow, the dashboard-to-homepage redesign, multi-wallet support connected to the wallet backend, the balance visibility toggle, and the monthly spending limit.",
    ],
    highlights: [
      "Built the onboarding, login, and sign-up flow",
      "Added multi-wallet support connected to the wallet backend, plus a balance visibility toggle",
      "Implemented the monthly spending limit",
      "Collaborated with teammates through a branch-based GitHub workflow",
    ],
    stack: ["Kotlin", "Android", "Firebase Auth & Firestore", "ONNX Runtime", "MPAndroidChart", "Navigation Component"],
    links: [{ label: "GitHub repository", href: "https://github.com/marvelkn/Fintelis" }],
    featured: true,
  },
  {
    slug: "dreamore",
    title: "Dreamore",
    subtitle: "Dream journaling & sleep insight app",
    year: "2025",
    category: "UI/UX Design",
    role: "UI/UX Designer & Project Manager",
    context: "Human-Computer Interaction course, UMN",
    summary:
      "A mobile app concept that helps people record their dreams, replay them, and understand their sleep, designed with HCI principles.",
    description: [
      "Dreamore addresses forgotten dreams and the lack of scientific features in existing journaling apps. It targets users aged 17–35 who want to understand their emotional and psychological state through their dreams and sleep.",
      "The prototype includes voice and text input, dream classification, dream playback, and simulated EEG-based insights, from sleep stages to brainwave analysis.",
      "The process moved from personas, storyboards, and scenarios to a design system, component set, and low- and high-fidelity wireframes in Figma.",
    ],
    highlights: [
      "Led the team as project manager while owning the UI/UX design",
      "Design system with tokens for color, type, radius, shadow, and a 6-column mobile grid",
      "Flows for onboarding, recording and reliving dreams, and sleep insights",
    ],
    stack: ["Figma", "UI/UX", "Prototyping", "Design systems", "Project management"],
    cover: "/images/projects/dreamore-portfolio.webp",
    gallery: [
      { src: "/images/dreamore/banner.webp", alt: "Dreamore banner: dream journaling and sleep insight app" },
      { src: "/images/dreamore/flow-1-onboarding.webp", alt: "Dreamore onboarding flow: splash, welcome, and sign-in screens" },
      { src: "/images/dreamore/flow-2-dreams.webp", alt: "Dreamore dream flow: home, record dream, dream history, and watch dream screens" },
      { src: "/images/dreamore/flow-3-insights.webp", alt: "Dreamore insights flow: sleep monitor and dream analysis screens" },
    ],
    links: [
      { label: "Case study on GitHub", href: "https://github.com/descellia/dreamore-mobile-app-design" },
      { label: "Figma file", href: "https://www.figma.com/design/XE4btMwzWLFnHD4XHppo9U/HCI-Dream-Catcher?node-id=0-1" },
    ],
    featured: true,
  },
  {
    slug: "jadwalku",
    title: "Jadwalku",
    subtitle: "Life scheduling mobile app",
    year: "2024",
    category: "UI/UX Design",
    role: "UI/UX Designer & Scrum Master",
    context: "Software Engineering course, UMN",
    summary:
      "A productivity app for intelligent scheduling, habit tracking, contextual reminders, and calendar integration, built within a Scrum framework.",
    description: [
      "As the UI/UX designer I led the end-to-end design in Figma, focusing on clear, user-centred interfaces.",
      "As Scrum Master I facilitated sprint planning, kept a well-prioritized product backlog, and ran Scrum ceremonies to keep the team aligned and iterating.",
    ],
    highlights: [
      "Project management with Jira",
      "Feature list designed from user needs",
      "Organized development workflow and tools",
    ],
    stack: ["Figma", "Jira", "Scrum", "UI/UX"],
    cover: "/images/projects/jadwalku.webp",
    gallery: [{ src: "/images/projects/jadwalku.webp", alt: "Jadwalku screens: onboarding, login, profile, tasks, calendar, schedule forms, and AI assistant" }],
    links: [{ label: "Figma file", href: "https://www.figma.com/design/BVaH3bT6bi5gD9eXjgkRs7/SoftEng?node-id=1-87" }],
  },
  {
    slug: "koffnes-cafe",
    title: "Koffnes Cafe",
    subtitle: "Cafe ordering & management platform",
    year: "2024",
    category: "Web Development",
    role: "Front-end Developer",
    context: "Freelance project",
    summary:
      "A web platform where customers browse the menu and order online, while admins and cashiers manage menus, promotions, and transactions.",
    description: [
      "Koffnes Cafe streamlines a coffee shop's digital operations with two staff roles. Admins manage menu items, track transactions, and oversee activity, while cashiers process orders in real time through a dedicated dashboard.",
      "Customers browse the digital menu, customize their orders, and place them directly on the site. The platform uses encrypted passwords and protection against SQL injection.",
    ],
    highlights: [
      "Responsive digital menu with real-time item updates",
      "Smooth ordering flow from cart to checkout",
      "Clean UI for browsing, selecting, and customizing items",
    ],
    stack: ["Laravel", "Livewire", "Blade", "Tailwind CSS", "DaisyUI"],
    cover: "/images/projects/koffnes.webp",
    gallery: [{ src: "/images/projects/koffnes.webp", alt: "Koffnes Cafe screens: login, menu, cart, order editing, event news, and admin menu and promotion management" }],
    links: [{ label: "GitHub repository", href: "https://github.com/descellia/Koffnes-Cafe" }],
    featured: true,
  },
  {
    slug: "seat-mapping-church",
    title: "Seat Mapping Church",
    subtitle: "Seat management platform for GBI WTC",
    year: "2024",
    category: "Web Development",
    role: "UI/UX Designer, Front-end Developer & Project Manager",
    context: "Freelance project, World Transformation Church",
    summary:
      "A cinema-style seat reservation system where admins configure room layouts and users pick seats on a live seat map.",
    description: [
      "Admins configure seating layouts by setting rows and columns for each room and block. Users interact with the seat map to view, select, and reserve seats, each marked as available, reserved, or unavailable, and a dashboard summarizes seat availability.",
      "I designed the UI in Figma and focused on a responsive, user-friendly front end for both administrators and attendees. The public GitHub repository contains the front-end prototype, which stores data in the browser.",
    ],
    highlights: [
      "Seat selection with dynamic seat mapping",
      "Clean UI for users and admins",
      "Kept the project aligned with goals and deadlines",
    ],
    stack: ["Figma", "HTML", "CSS", "JavaScript", "Laravel"],
    cover: "/images/projects/seat-mapping.webp",
    gallery: [{ src: "/images/projects/seat-mapping.webp", alt: "Seat Mapping screens: login, room setup form, availability dashboard, and interactive seat grid" }],
    links: [
      { label: "Live site", href: "https://ir-wtc.online/" },
      { label: "Prototype on GitHub", href: "https://github.com/descellia/Seat-Management" },
    ],
  },
  {
    slug: "tixplore",
    title: "Tixplore",
    subtitle: "Event ticketing platform",
    year: "2024",
    category: "Web Development",
    role: "Project Manager, UI/UX Designer & Software Engineer",
    context: "Team project, UMN",
    summary:
      "A web platform to discover and register for seminars, workshops, and concerts, with separate admin and user roles.",
    description: [
      "Admins create and manage events, while users register, view event details, and manage their profiles.",
      "Built with native PHP, MySQL, HTML, CSS, and JavaScript, with encrypted passwords and SQL injection protection.",
    ],
    highlights: ["Project management", "Custom SQL database design", "Event management system", "Teamwork and communication"],
    stack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    cover: "/images/projects/tixplore.webp",
    gallery: [{ src: "/images/projects/tixplore.webp", alt: "Tixplore screens: top events, upcoming events, event categories, and event detail pages" }],
    links: [],
  },
  {
    slug: "todora",
    title: "Todora",
    subtitle: "Personal task management web app",
    category: "Web Development",
    role: "Software Engineer",
    context: "Team project, Informatics UMN",
    summary:
      "A task manager with accounts, profiles, categories, status badges, and a live countdown for today's deadlines.",
    description: [
      "Users create an account and manage their own tasks by status, category, and deadline. The home page highlights what is due today with a live countdown to each deadline.",
      "Passwords are hashed with password_hash() and queries use MySQLi prepared statements. The repository is named Tixplore, but the app itself is branded Todora.",
    ],
    highlights: ["Register, login, password reset, and profile photos", "Task CRUD with search and category filters", "Today's tasks with live countdown"],
    stack: ["PHP", "MySQL", "Tailwind CSS", "daisyUI", "JavaScript"],
    links: [{ label: "GitHub repository", href: "https://github.com/descellia/Tixplore" }],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
