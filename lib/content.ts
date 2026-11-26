/**
 * All personal content lives here. Sources:
 *  - CV: Descellia_Ng-resume.pdf
 *  - Portfolio: Portofolio.pdf (Apple Developer Academy 2026 submission)
 *  - GitHub: github.com/descellia (profile README and project READMEs)
 * Edit this file to update the site. Do not add facts that are not in a source document.
 */

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://descellia.vercel.app").replace(/\/$/, "");

export const profile = {
  name: "Descellia Ng",
  firstName: "Descellia",
  lastName: "Ng",
  title: "LLM & Data Evaluation · Data Analytics · UI/UX",
  shortTitle: "Informatics student working on AI evaluation and data",
  tagline: "Making data and AI hold up under scrutiny",
  intro:
    "I'm an Informatics student at Universitas Multimedia Nusantara who enjoys the moment a messy dataset finally makes sense. My work sits where data, machine learning, and language models meet: building retrieval pipelines, evaluating LLM outputs, and designing interfaces people actually enjoy using.",
  currently: "LLM & Data Evaluation Intern at AI Rudder",
  location: "South Tangerang, Indonesia",
  email: "descelliiaa@gmail.com",
  linkedin: "https://www.linkedin.com/in/descellia/",
  github: "https://github.com/descellia",
  cv: "/Descellia_Ng_CV.pdf",
  photo: "/images/descellia.webp",
};

export const about = {
  paragraphs: [
    "I'm a Computer Science student with a strong foundation in data analytics and a growing focus on artificial intelligence. Through internships and academic projects I've worked on LLM evaluation, Retrieval-Augmented Generation, graph-based machine learning, and data pipelines, alongside software engineering and UI/UX design.",
    "I like approaching problems from both an analytical and a creative angle: combining data insights, AI, and user needs into solutions that are well structured and pleasant to use. I'm especially curious about how we can tell when a model is right for the right reasons.",
    "Leading teams and organizing campus events taught me how to communicate, coordinate, and keep projects moving. I want to keep growing at the point where technology, data, design, and execution meet.",
  ],
  facts: [
    { label: "Studying", value: "Informatics, UMN" },
    { label: "GPA", value: "3.74 / 4.00" },
    { label: "Graduation", value: "2027 (expected)" },
    { label: "Based in", value: "South Tangerang" },
  ],
  focus: ["AI & LLM evaluation", "Machine learning & GNNs", "Data analytics", "Software engineering", "UI/UX design"],
};

export const approach = [
  {
    no: "01",
    icon: "wave",
    title: "Understand",
    text: "Start from the question, the data, and the people who will use the result.",
  },
  {
    no: "02",
    icon: "shell",
    title: "Build",
    text: "Turn it into a working pipeline, prototype, or interface, step by step.",
  },
  {
    no: "03",
    icon: "coral",
    title: "Evaluate",
    text: "Test against fair baselines and clear rubrics, and look closely at the failures.",
  },
  {
    no: "04",
    icon: "sun",
    title: "Communicate",
    text: "Report what the evidence supports, including its limits, so others can act on it.",
  },
] as const;

export type Experience = {
  company: string;
  role: string;
  type: string;
  location: string;
  period: string;
  summary: string;
  points: string[];
  tags: string[];
};

export const experience: Experience[] = [
  {
    company: "AI Rudder",
    role: "LLM & Data Evaluation Intern",
    type: "Internship",
    location: "South Jakarta",
    period: "Jul 2026 – Present",
    summary:
      "Singapore-based conversational AI company providing voice, chat, and omnichannel automation for enterprise customer interactions.",
    points: [
      "Evaluate multi-turn LLM outputs for instruction-following, factuality, safety, tone, and overall response quality.",
      "Developed and applied LLM-as-a-Judge approaches to assess model responses against predefined quality criteria.",
      "Annotate and review conversational AI datasets for consistency, accuracy, and guideline adherence.",
      "Identify recurring model failure patterns and support prompt testing, output comparison, and regression checks.",
      "Prepare evaluation reports and quality trackers with Data, Product, QA, and Operations teams.",
    ],
    tags: ["LLM evaluation", "LLM-as-a-Judge", "Annotation", "RCA"],
  },
  {
    company: "Kawan Lama Group",
    role: "Data Analyst Intern, Master Data Management",
    type: "Internship",
    location: "West Jakarta",
    period: "Feb 2026 – Present",
    summary:
      "Diversified Indonesian group operating across retail, industrial, manufacturing, property, and food & beverage.",
    points: [
      "Built automated pipelines for vendor classification and business activity mapping using KBLI standards.",
      "Implemented RAG workflows combining web enrichment, BM25 retrieval, embeddings, and LLM-based classification.",
      "Cleaned, validated, and preprocessed large-scale business data with Python and SQL.",
      "Built dashboards and reports to monitor KPIs, and worked with the MDM team on data governance and standardization.",
    ],
    tags: ["Python", "SQL", "RAG", "KBLI", "Dashboards"],
  },
  {
    company: "Koffnes Cafe",
    role: "Frontend Developer",
    type: "Freelance",
    location: "South Tangerang",
    period: "Oct 2024 – Dec 2024",
    summary: "Coffee shop offering online ordering for pickup and delivery.",
    points: [
      "Designed and developed a responsive web interface with Laravel and Blade templates.",
      "Implemented menu browsing, ordering, and online payment flows that work smoothly across devices.",
    ],
    tags: ["Laravel", "Blade", "Tailwind CSS"],
  },
  {
    company: "World Transformation Church (GBI WTC)",
    role: "Software Engineer",
    type: "Freelance",
    location: "South Tangerang",
    period: "Jun 2024 – Oct 2024",
    summary: "Church community with more than 15,000 members across 57 branches.",
    points: [
      "Designed and developed a responsive website with seat layout visualization and online seat reservation.",
      "Created the UI/UX in Figma, built the front end with HTML, CSS, and JavaScript, and the back end with PHP Laravel.",
    ],
    tags: ["Figma", "HTML/CSS/JS", "Laravel"],
  },
];

export const education = {
  school: "Universitas Multimedia Nusantara",
  degree: "Bachelor of Informatics (Computer Science)",
  period: "Aug 2023 – Aug 2027 (expected)",
  location: "Tangerang, Indonesia",
  gpa: "3.74 / 4.00",
};

export const research = {
  thesis: {
    status: "Undergraduate thesis · in progress",
    title: "Population-graph classification of Internet Gaming Disorder risk with GATv2",
    summary:
      "My thesis asks whether modelling respondents as a population graph helps classify questionnaire-defined Internet Gaming Disorder (IGD) risk, compared with standard tabular models.",
    data: "610 respondents aged 10–52, collected through an online cross-sectional questionnaire in Indonesia.",
    steps: [
      {
        title: "Labels",
        text: "Risk labels come from IGDS9-SF responses. These items are used only to create labels and are excluded from every model input and from graph construction, to prevent label leakage.",
      },
      {
        title: "Graph construction",
        text: "Each respondent is a node. Edges link respondents with similar demographic and gaming-activity profiles using cosine-similarity kNN, while GDT and NEURO indicators serve as node features.",
      },
      {
        title: "Validation",
        text: "Repeated stratified cross-validation with identical splits for every model. Graph size k, thresholds, and early stopping are chosen on validation data only, never on test labels.",
      },
      {
        title: "Comparison",
        text: "GATv2 is compared with GCN and tabular baselines under the same protocol, with ROC-AUC as the primary metric alongside average precision, recall, specificity, and F1.",
      },
      {
        title: "Interpretation",
        text: "Attention weights are analysed for stability across runs and read as contextual model weights, not as causal explanations.",
      },
    ],
    tools: ["PyTorch Geometric", "GATv2", "GCN", "TabNet", "scikit-learn", "Python"],
    note: "Results will be added once the experiments are finalised. A negative or mixed result for the graph model is a valid outcome of this study.",
    implementation:
      "The research is accompanied by Maindo, a companion website that presents the study to a general audience (in development).",
  },
  reports: [
    {
      title: "Otomasi Data Enrichment Menggunakan Pipeline Berbasis AI dengan Metode RAG, SBERT, TF-IDF, dan LLM di Kawan Lama Group",
      context: "Internship report · Career Acceleration Program 2026",
      slug: "vendor-kbli-rag",
    },
    {
      title: "Otomatisasi Evaluasi Dialog Multi-Turn Menggunakan Pendekatan LLM-as-a-Judge di AI Rudder",
      context: "Internship report · Career Acceleration Program",
      slug: "llm-judge-dialogue-qc",
    },
  ],
};

export const skills = [
  {
    group: "Programming",
    items: ["Python", "SQL", "Java", "Kotlin", "C", "PHP", "JavaScript", "R", "HTML & CSS"],
  },
  {
    group: "AI & Machine Learning",
    items: [
      "LLM evaluation",
      "LLM-as-a-Judge",
      "RAG",
      "PyTorch Geometric",
      "scikit-learn",
      "Sentence Transformers",
      "FAISS",
      "BM25",
      "NLTK",
      "OpenAI API",
      "Anthropic API",
    ],
  },
  {
    group: "Data & Analytics",
    items: ["pandas", "NumPy", "Power BI", "Tableau", "Looker Studio", "Plotly", "n8n", "Jupyter"],
  },
  {
    group: "Web & Mobile",
    items: ["Laravel", "Livewire", "Tailwind CSS", "MySQL", "Android Studio"],
  },
  {
    group: "Design & Delivery",
    items: ["Figma", "Interaction design", "Prototyping", "Scrum", "Jira", "Git & GitHub", "LaTeX"],
  },
  {
    group: "Ways of working",
    items: ["Critical thinking", "Problem solving", "Leadership", "Initiative", "Time management", "Responsibility"],
  },
];

export const awards = [
  {
    title: "Best Presenter",
    event: "International Business Case Competition",
    by: "Universitas Multimedia Nusantara, Tra Vinh University & Southern Leyte State University",
  },
  { title: "Semifinalist", event: "B-Startion 2025 Business Case Competition", by: "Bina Nusantara University" },
  { title: "Semifinalist", event: "Xperience 2025 Business Case Competition", by: "Universitas Indonesia" },
  {
    title: "Semifinalist",
    event: "International Business Case Competition, Ganesha Business Management Festival 2025",
    by: "SBM ITB",
  },
];

export const certifications = [
  { name: "Google Advanced Data Analytics", year: "2026", note: "Python, statistics, regression, machine learning, visualization" },
  { name: "RWS Linguistic AI", year: "2026", note: "NLP, AI data annotation, linguistic evaluation" },
  { name: "AI-900: Microsoft Azure AI Fundamentals", year: "2025", note: "Core AI concepts and Azure AI services" },
  { name: "Sololearn Python Developer", year: "2025", note: "Programs, automation, data analysis, ML in Python" },
  { name: "HCIA-AI V3.5 Course", year: "2025", note: "Machine learning, deep learning, MindSpore" },
  { name: "HCIA-openGauss Database", year: "2024", note: "Open-source database management and SQL" },
];

export const organizations = [
  {
    role: "Head of Public Relations",
    org: "Himpunan Mahasiswa Informatika UMN (HMIF)",
    period: "Aug 2023 – Aug 2024",
    highlight: "Grew Instagram reach to 900k+ reel views and 5k+ new followers.",
  },
  {
    role: "Head of Sponsorship",
    org: "Infinite UMN 2024",
    period: "Aug 2024 – Nov 2024",
    highlight: "Prepared and presented sponsorship proposals and managed partner logistics.",
  },
  {
    role: "Liaison Officer",
    org: "Starlight UMN 2024",
    period: "Mar 2024 – Nov 2024",
    highlight: "Main point of contact between organizers, performers, judges, and sponsors.",
  },
  {
    role: "Public Relations",
    org: "Perkenalan Prodi Informatika (PPIF) 2024",
    period: "Sep 2023 – Sep 2024",
    highlight: "Ran social campaigns and stakeholder relations for the Informatics orientation.",
  },
];

export const motto = {
  quote: "I'm especially curious about how we can tell when a model is right for the right reasons.",
  by: "Descellia",
};

export const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "research", label: "Research" },
  { id: "skills", label: "Skills" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];
