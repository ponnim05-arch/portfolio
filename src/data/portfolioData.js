/**
 * Single Source of Truth for Kumar Ponmani's AI/ML Developer Portfolio.
 * Strictly verified from Kumar Ponmani's resume and verified GitHub repositories.
 * Zero fabricated data.
 */

export const PERSONAL_INFO = {
  name: "Kumar Ponmani",
  role: "AI & Machine Learning Student",
  headlineRole: "AI & MACHINE LEARNING",
  headlineTagline: "BUILDING INTELLIGENT SOFTWARE WITH PURPOSE",
  positioning: "Artificial Intelligence • Machine Learning • Deep Learning • Full-Stack Development",
  availabilityBadge: "OPEN TO AI/ML INTERNSHIPS & OPPORTUNITIES",
  location: "Tiruvallur / Chennai, Tamil Nadu, India",
  email: "ponnim05@gmail.com",
  phone: "+91 6281340912",
  github: "https://github.com/ponnim05-arch",
  linkedin: "https://www.linkedin.com/in/k-ponmani-1275b92a9",
  resumePath: "/Kumar_Ponmani_Resume.pdf",
  profileImage: "/profile.jpg",
  summary: "Motivated AIML student with a strong foundation in Python, Artificial Intelligence, Machine Learning, and software development. Skilled in Python, SQL, TensorFlow, and Generative AI, with hands-on experience in AI-based projects. Quick learner with strong communication skills and a passion for building innovative software solutions.",
  aboutContent: [
    "I am Kumar Ponmani, an AIML student passionate about building innovative software solutions. My work sits at the intersection of machine learning, generative AI, web development and practical problem solving.",
    "I enjoy taking an idea from preprocessing and model development through APIs and interactive interfaces. I am a quick learner with strong communication skills and a focus on real-world applications.",
    "Currently pursuing my B.E. in Computer Science & Engineering (AI & ML) at Prathyusha Engineering College with a CGPA of 8.3, focusing on building dependable autonomous agents, deep learning computer vision systems, and full-stack AI services."
  ],
  stats: {
    specialization: "Artificial Intelligence & Machine Learning",
    currentFocus: "Machine Learning • Generative AI • Deep Learning • Autonomous Agents",
    education: "B.E. CSE (AI & ML)",
    cgpa: "8.3",
    graduation: "Aug 2023 — Sep 2027",
    digitAccuracy: "99.2%",
    alphabetAccuracy: "93.8%"
  },
  heroMeta: [
    { label: "CGPA", value: "8.3" },
    { label: "digit recognition", value: "99.2%" },
    { label: "focus", value: "AI/ML" }
  ],
  heroTechLabels: [
    "Python",
    "Machine Learning",
    "Generative AI",
    "TensorFlow",
    "React JS",
    "REST APIs",
    "Flask"
  ],
  marqueeTechnologies: [
    "PYTHON",
    "MACHINE LEARNING",
    "GENERATIVE AI",
    "TENSORFLOW",
    "REACT",
    "REST APIs",
    "NLP",
    "FLASK",
    "PLAYWRIGHT",
    "CNN",
    "SQL",
    "LANGCHAIN"
  ]
};

export const FOCUS_AREAS = [
  {
    id: "aiml",
    title: "AI & MACHINE LEARNING",
    description: "Developing intelligent algorithms for data segmentation, predictive analytics, and automated decision making.",
    icon: "Brain",
    tag: "Core Focus"
  },
  {
    id: "deep-learning",
    title: "DEEP LEARNING & CV",
    description: "Engineering Convolutional Neural Networks for high-accuracy digit and alphabet character recognition from scratch.",
    icon: "Cpu",
    tag: "Computer Vision"
  },
  {
    id: "agents",
    title: "AUTONOMOUS AGENTS & NLP",
    description: "Building adaptive prompt-engineering frameworks, web automation agents, and intent-driven conversational bots.",
    icon: "Sparkles",
    tag: "LLMs & Automation"
  },
  {
    id: "fullstack",
    title: "FULL-STACK & BACKEND APIs",
    description: "Serving ML and LLM models through Flask & REST APIs coupled with modern React and Vite frontends.",
    icon: "Layers",
    tag: "End-to-End Systems"
  }
];

export const SKILLS_CATEGORIZED = [
  {
    category: "PROGRAMMING LANGUAGES",
    icon: "Terminal",
    skills: [
      { name: "Python", type: "Primary Language", icon: "python" },
      { name: "SQL", type: "Relational Queries", icon: "database" },
      { name: "Java", type: "Object-Oriented Programming", icon: "code" },
      { name: "OOP", type: "Core Concepts", icon: "code" },
      { name: "Data Structures & Algorithms", type: "Problem Solving", icon: "layers" }
    ]
  },
  {
    category: "AI & MACHINE LEARNING",
    icon: "BrainCircuit",
    skills: [
      { name: "Machine Learning", type: "Supervised & Unsupervised", icon: "brain" },
      { name: "Artificial Intelligence", type: "Foundations & Systems", icon: "cpu" },
      { name: "Generative AI", type: "LLM Workflows & Prompting", icon: "sparkles" },
      { name: "NLP", type: "Natural Language Processing", icon: "sparkles" },
      { name: "Prompt Engineering", type: "Agentic Chains", icon: "terminal" }
    ]
  },
  {
    category: "DEEP LEARNING & COMPUTER VISION",
    icon: "Cpu",
    skills: [
      { name: "TensorFlow", type: "Deep Neural Networks", icon: "brain" },
      { name: "CNN", type: "Convolutional Architectures", icon: "cpu" },
      { name: "Text Preprocessing", type: "Tokenization & Normalization", icon: "terminal" },
      { name: "Scikit-Learn", type: "Model Training & Evaluation", icon: "layers" }
    ]
  },
  {
    category: "FRONTEND & WEB DEVELOPMENT",
    icon: "Layers3",
    skills: [
      { name: "React JS", type: "UI Components & Hooks", icon: "layers" },
      { name: "JavaScript", type: "Modern ES6+", icon: "code" },
      { name: "Vite", type: "Build Tooling", icon: "layers" },
      { name: "HTML5 / CSS3", type: "Responsive & Modern Design", icon: "layers" }
    ]
  },
  {
    category: "BACKEND & DATA APIs",
    icon: "Network",
    skills: [
      { name: "Flask", type: "Python REST Framework", icon: "network" },
      { name: "REST APIs", type: "API Design & Integration", icon: "terminal" },
      { name: "Node.js", type: "Backend Runtime", icon: "network" },
      { name: "Data Analytics", type: "Data Exploration & Metrics", icon: "database" }
    ]
  },
  {
    category: "DEVELOPER TOOLS & AUTOMATION",
    icon: "Github",
    skills: [
      { name: "Git & GitHub", type: "Version Control & CI/CD", icon: "github" },
      { name: "Playwright", type: "Browser Automation", icon: "terminal" },
      { name: "Selenium", type: "Web Scraping & Testing", icon: "terminal" },
      { name: "BeautifulSoup", type: "HTML Document Parsing", icon: "code" }
    ]
  }
];

export const PROJECTS = [
  {
    id: "handwritten-character-recognition",
    name: "Handwritten-Character-Recognition",
    title: "Handwritten Character & Number Recognition",
    shortTitle: "Character Recognition AI",
    isFlagship: true,
    rank: "01 // HERO VISION PROJECT",
    category: "Deep Learning & CV",
    categories: ["ALL", "Deep Learning & CV", "Full-Stack & APIs"],
    description: "Full-stack CNN application for handwritten digits 0–9 and uppercase alphabets A–Z recognition with Flask REST APIs and React + Vite frontend.",
    oneLiner: "A real-time deep learning computer vision platform achieving 99.2% accuracy on digits and 93.8% on uppercase letters with live canvas drawing.",
    tags: ["Python", "TensorFlow", "CNN", "Flask", "React", "Vite", "OpenCV"],
    url: "https://github.com/ponnim05-arch/Handwritten-Character-Recognition",
    githubUrl: "https://github.com/ponnim05-arch/Handwritten-Character-Recognition",
    liveDemoUrl: null,
    hasTechnicalArchitecture: true,
    keyFeatures: [
      "Custom Convolutional Neural Network (CNN) trained for dual classification: 10 digits (0–9) and 26 uppercase letters (A–Z)",
      "99.2% verified test accuracy on digit recognition and 93.8% on uppercase alphabet recognition",
      "Interactive drawing canvas on frontend with real-time brush clearing, stroke sizing, and bounding-box centering",
      "Flask REST API backend handling asynchronous image decoding, thresholding, inversion, and normalization",
      "Top-3 softmax probability distribution display with confidence percentages and latency metrics"
    ],
    architectureFlow: [
      { step: "01", name: "User Input", desc: "Interactive HTML5 canvas drawing or image upload in React + Vite" },
      { step: "02", name: "Image Encoding", desc: "Client exports 28x28 grayscale equivalent base64 PNG data payload" },
      { step: "03", name: "Flask REST API", desc: "Receives POST request, decodes image buffer, and verifies dimensions" },
      { step: "04", name: "Image Preprocessing", desc: "OpenCV thresholding, noise removal, centering, and min-max normalization" },
      { step: "05", name: "TensorFlow CNN", desc: "Dual conv layers with ReLU activation, max pooling, dropout, and dense classifier" },
      { step: "06", name: "Inference Response", desc: "Predicted character class, softmax probability vector, and confidence score" }
    ],
    caseStudy: {
      overview: "Handwritten Character & Number Recognition is a full-stack deep learning computer vision application. It allows users to write digits (0–9) or uppercase letters (A–Z) directly on an interactive browser canvas and receive instant model inference alongside softmax probability distributions.",
      problem: "Handwritten inputs possess vast human variability in stroke width, angle, slant, and scaling. Creating an accessible web application that reliably preprocesses user-drawn canvas strokes into standardized tensor formats without losing vital structural features is a key challenge in interactive computer vision.",
      solution: "Trained specialized Convolutional Neural Networks (CNNs) in TensorFlow/Keras incorporating Dropout and Batch Normalization to prevent overfitting. Engineered an automated image preprocessing pipeline that extracts the drawn bounding box, centers the stroke mass, resizes to standard 28x28 resolution, and normalizes pixel values. Built a lightweight Flask REST backend for sub-100ms inference and connected it to a reactive React interface.",
      architecture: "React Interactive Canvas -> Base64 Image Payload -> Flask REST API -> OpenCV / PIL Preprocessing (Bounding Box, Centering, Normalization) -> TensorFlow CNN Inference -> Softmax Probability & Classification Result.",
      workflow: "1. User draws on the interactive canvas. 2. Frontend converts canvas strokes to a standardized image format. 3. Flask endpoint receives the payload and passes it through the OpenCV pipeline. 4. Preprocessed tensor passes into the trained CNN model. 5. Model generates confidence scores across character classes. 6. UI displays the predicted character, rank, and probability bar charts.",
      techStack: [
        { label: "Deep Learning", value: "Python, TensorFlow, Keras, CNN" },
        { label: "Image Processing", value: "OpenCV, PIL, NumPy" },
        { label: "Backend API", value: "Flask, RESTful Endpoints, Gunicorn" },
        { label: "Frontend", value: "React 19, Vite, HTML5 Canvas API, CSS3" },
        { label: "Benchmark Datasets", value: "MNIST (Digits) & EMNIST (Letters)" }
      ],
      keyFeaturesDetailed: [
        "High-Precision CNN Architecture: Multi-stage convolutional and pooling blocks optimized for spatial pattern detection.",
        "Verified Performance Metrics: Achieved 99.2% accuracy on digit evaluation sets and 93.8% on alphabet test sets.",
        "Adaptive Canvas Preprocessing: Handles varied screen DPIs, pen thicknesses, and drawing offsets.",
        "Dual-Model Support: Separate model weights specialized for numerical digits vs alphabetical characters.",
        "Real-Time Confidence Breakdown: Visual probability bars showing the top predictions and model certainty."
      ],
      challenges: [
        {
          challenge: "Canvas Drawing Resolution & Scaling Distortions",
          solution: "Implemented bounding-box mass centering and aspect-ratio preserving padding before resizing to 28x28 to match training distribution."
        },
        {
          challenge: "Ambiguity Between Visually Similar Characters (e.g., '0' vs 'O', '1' vs 'I')",
          solution: "Introduced dedicated classification modes for pure digits and uppercase alphabets, reducing cross-domain confusion."
        },
        {
          challenge: "Sub-Second Web Inference Latency",
          solution: "Preloaded model weights in memory upon Flask server bootstrap, keeping inference response times consistently under 80ms."
        }
      ],
      results: "Successfully trained CNN models achieving 99.2% accuracy on digits and 93.8% accuracy on uppercase letters. Deployed full-stack solution bridging deep learning models with responsive browser-based user interaction.",
      repository: "https://github.com/ponnim05-arch/Handwritten-Character-Recognition",
      demoNotes: "Clone the repository, install Python requirements (`pip install -r requirements.txt`), start Flask server (`python app.py`), and launch the React Vite client (`npm run dev`)."
    }
  },
  {
    id: "autonomous-browsing-agent",
    name: "Autonomous-Browsing-Agent",
    title: "Autonomous Browsing Agent",
    shortTitle: "Autonomous Web Agent",
    isFlagship: true,
    rank: "02 // AGENTIC AI FRAMEWORK",
    category: "AI / ML & Agents",
    categories: ["ALL", "AI / ML & Agents", "Tools & Analytics"],
    description: "Adaptive prompt-engineering framework for reliable autonomous web agents with dynamic prompts, self-evaluation, repair loops, Playwright automation and telemetry.",
    oneLiner: "An autonomous agent framework utilizing Playwright browser automation, dynamic prompt adaptation, and self-repair loops for robust web workflows.",
    tags: ["Python", "Playwright", "Prompt Engineering", "AI Agents", "Streamlit", "Telemetry"],
    url: "https://github.com/ponnim05-arch/Autonomous-Browsing-Agent",
    githubUrl: "https://github.com/ponnim05-arch/Autonomous-Browsing-Agent",
    liveDemoUrl: null,
    hasTechnicalArchitecture: true,
    keyFeatures: [
      "Dynamic prompt engineering framework adapting agent instructions based on real-time DOM states",
      "Headless and headed browser automation powered by Playwright for high-speed navigation and interaction",
      "Autonomous self-repair and retry loops detecting navigation failures, timeout exceptions, and DOM shifts",
      "Interactive Streamlit control dashboard displaying live agent logs, executed actions, and DOM screenshots",
      "Comprehensive telemetry tracking action sequences, execution latency, and success rates"
    ],
    architectureFlow: [
      { step: "01", name: "Task Definition", desc: "User defines autonomous goal in natural language via control interface" },
      { step: "02", name: "Planner Agent", desc: "Decomposes goal into sequential web actions (navigate, click, type, extract)" },
      { step: "03", name: "Dynamic Prompting", desc: "Synthesizes DOM snapshot with task history to generate targeted next action" },
      { step: "04", name: "Playwright Driver", desc: "Executes programmatic browser actions against target web application" },
      { step: "05", name: "Self-Repair Loop", desc: "Evaluates action outcome; triggers fallback prompts if element is unclickable" },
      { step: "06", name: "Telemetry & State", desc: "Logs execution trace, records screenshots, and produces final task report" }
    ],
    caseStudy: {
      overview: "Autonomous Browsing Agent is an agentic framework designed to solve the brittleness of traditional web scrapers and static automation scripts. It combines large language model prompt engineering with Playwright browser automation to navigate complex, dynamic web applications autonomously.",
      problem: "Traditional automation tools break when website layouts, CSS selectors, or dynamic JavaScript rendering change. Autonomous agents require self-awareness of the current DOM state, capability to diagnose execution errors, and dynamic adjustment of prompts when an element is unreachable.",
      solution: "Engineered a closed-loop agent architecture featuring adaptive prompt templates, stateful DOM observation, and automatic self-repair loops. When an element interaction fails, the agent inspects the updated page state, adjusts its selector strategy or reasoning, and re-executes without crashing.",
      architecture: "User Task Input -> Planner Controller -> Dynamic Prompt Generator -> Playwright Automation Driver -> DOM Observer & Telemetry -> Evaluation & Self-Repair Loop -> Output Task State.",
      workflow: "1. User submits an automation task. 2. Agent parses goal into actionable browser commands. 3. Playwright loads page and captures DOM structure. 4. Agent selects best action based on current state. 5. If an unexpected pop-up or dynamic shift occurs, repair loop triggers corrective action. 6. Success metrics and screenshots logged.",
      techStack: [
        { label: "Core Automation", value: "Python, Playwright, Asyncio" },
        { label: "AI & Prompting", value: "Adaptive Prompt Engineering, LLM Agent Chains" },
        { label: "User Interface", value: "Streamlit Web Dashboard" },
        { label: "Telemetry", value: "Execution Logging, Screenshot Capture, Error Auditing" }
      ],
      keyFeaturesDetailed: [
        "Adaptive Prompt Logic: Dynamically adjusts instructions based on real-time browser feedback.",
        "Playwright Execution Engine: Reliable cross-browser automation across Chromium, Firefox, and WebKit.",
        "Error Resilience: Self-healing error correction loops to overcome unexpected modal dialogues or DOM changes.",
        "Visual Audit Trail: Captures step-by-step screenshots and execution telemetry for verification.",
        "Streamlit UI: Clean control panel allowing task configuration, live streaming of agent actions, and results export."
      ],
      challenges: [
        {
          challenge: "Dynamic JavaScript Elements & Asynchronous Loading",
          solution: "Implemented smart Playwright wait-for-selector conditions and DOM mutation observers rather than brittle static timeouts."
        },
        {
          challenge: "Prompt Context Window Management for Large DOM Trees",
          solution: "Built a DOM pruning preprocessor that filters non-interactive nodes, scripts, and styling tags, retaining only semantic actionable elements."
        }
      ],
      results: "Built a fully functional autonomous browsing prototype capable of executing multi-step web workflows with automated recovery and full telemetry tracking.",
      repository: "https://github.com/ponnim05-arch/Autonomous-Browsing-Agent",
      demoNotes: "Clone repository, install requirements (`pip install -r requirements.txt`), install Playwright browsers (`playwright install`), and launch Streamlit dashboard (`streamlit run app.py`)."
    }
  },
  {
    id: "one-peice-ai",
    name: "one-peice-AI",
    title: "One-Piece AI Developer Tool Suite",
    shortTitle: "One-Piece AI Hub",
    isFlagship: true,
    rank: "03 // DEVELOPER TOOL SUITE",
    category: "Full-Stack & APIs",
    categories: ["ALL", "Full-Stack & APIs", "AI / ML & Agents"],
    description: "Interactive developer workspace combining multi-model LLM chat testing via OpenRouter, developer profile scrapers, and AI resume generation across HTML, PDF and DOCX.",
    oneLiner: "A multi-model AI developer toolkit integrating LLM chat testing, profile scraping, and automated resume compilation across HTML, PDF, and DOCX.",
    tags: ["Python", "Flask", "LangChain", "OpenRouter", "Selenium", "BeautifulSoup", "HTML/PDF/DOCX"],
    url: "https://github.com/ponnim05-arch/one-peice-AI",
    githubUrl: "https://github.com/ponnim05-arch/one-peice-AI",
    liveDemoUrl: null,
    hasTechnicalArchitecture: true,
    keyFeatures: [
      "Multi-model LLM chat and comparison interface connected via OpenRouter API endpoints",
      "Automated developer profile scraper using Selenium and BeautifulSoup for structured bio and repo extraction",
      "Dynamic AI-powered resume generator compiling customized profiles into HTML, PDF, and DOCX formats",
      "Centralized Flask backend coordinating scraping tasks, prompt templates, and file conversion routines",
      "Interactive frontend with real-time prompt feedback, document previews, and download actions"
    ],
    architectureFlow: [
      { step: "01", name: "User Interface", desc: "Developer selects tool mode: LLM Chat, Profile Scraper, or Resume Generator" },
      { step: "02", name: "Flask Backend", desc: "Routes request to appropriate service worker and manages API credentials" },
      { step: "03", name: "OpenRouter Gateway", desc: "Queries multi-model LLMs with tailored system prompts via LangChain" },
      { step: "04", name: "Scraper Service", desc: "Selenium & BeautifulSoup extract developer profile details and public metrics" },
      { step: "05", name: "Document Compiler", desc: "Synthesizes extracted data into styled HTML, formatted PDF, and DOCX files" },
      { step: "06", name: "Delivery", desc: "Instant file download stream or conversational chat response returned to client" }
    ],
    caseStudy: {
      overview: "One-Piece AI Developer Tool Suite is a comprehensive developer productivity workspace. It addresses developer workflow fragmentation by providing a unified environment for multi-model LLM comparison, web scraping of professional profiles, and automated document generation.",
      problem: "Software developers regularly switch between distinct tools to experiment with different AI models, gather profile data for portfolio updates, and reformat resumes for job applications. Integrating these functions into a single platform saves time and enables automated data pipelines.",
      solution: "Built a modular Flask application integrating OpenRouter for multi-model LLM access, Selenium and BeautifulSoup for scraping developer footprints, and document generation libraries for exporting styled resumes in HTML, PDF, and DOCX formats.",
      architecture: "React Web Client -> Flask API -> OpenRouter Multi-Model Gateway -> LangChain Prompt Chaining -> Selenium / BeautifulSoup Extractor -> Document Compiler (HTML/PDF/DOCX).",
      workflow: "1. User configures task in the web UI. 2. Backend routes request to the corresponding module. 3. LLM comparison queries OpenRouter models. 4. Scraper extracts online profile info. 5. Generator compiles structured output into desired document format.",
      techStack: [
        { label: "Backend", value: "Python, Flask, REST APIs" },
        { label: "AI Integration", value: "OpenRouter API, LangChain" },
        { label: "Scraping", value: "Selenium WebDriver, BeautifulSoup4" },
        { label: "Document Export", value: "HTML, WeasyPrint / ReportLab (PDF), python-docx" }
      ],
      keyFeaturesDetailed: [
        "Multi-Model Switching: Test prompts across different models via OpenRouter to compare reasoning quality.",
        "Automated Profile Scraping: Extracts developer repository stats, bio, and experience.",
        "Multi-Format Document Export: Generates professional resumes in HTML, PDF, and DOCX formats.",
        "Unified Web Interface: Clean dashboard for managing all three development workflows."
      ],
      challenges: [
        {
          challenge: "Consistent Document Formatting Across PDF and DOCX",
          solution: "Established a shared JSON intermediate schema mapping developer skills, experience, and projects into respective document builders."
        }
      ],
      results: "Built and open-sourced an extensible multi-purpose developer workspace bridging LLMs, web automation, and document generation.",
      repository: "https://github.com/ponnim05-arch/one-peice-AI",
      demoNotes: "Clone repository, install dependencies (`pip install -r requirements.txt`), provide API keys in `.env`, and start Flask server (`python app.py`)."
    }
  },
  {
    id: "fraud-detection",
    name: "fraud-detection",
    title: "Fact-Checking & Fraud Detection API",
    shortTitle: "Fraud Detection API",
    isFlagship: false,
    rank: "04 // BACKEND FORENSICS API",
    category: "Full-Stack & APIs",
    categories: ["ALL", "Full-Stack & APIs", "AI / ML & Agents"],
    description: "Flask backend service for automated claim verification, social post and article analysis, news retrieval via NewsAPI, and digital forensic checks using OpenRouter LLMs.",
    oneLiner: "An automated claim verification and misinformation analysis service combining NewsAPI search with LLM forensic reasoning.",
    tags: ["Python", "Flask", "OpenRouter", "NewsAPI", "Digital Forensics", "REST APIs"],
    url: "https://github.com/ponnim05-arch/fraud-detection",
    githubUrl: "https://github.com/ponnim05-arch/fraud-detection",
    liveDemoUrl: null,
    hasTechnicalArchitecture: true,
    keyFeatures: [
      "Automated journalistic retrieval querying NewsAPI for corroborating reports",
      "LLM claim verification analyzing factual consistency, bias, and credible citations",
      "Digital forensics pipeline evaluating social media claims and article excerpts",
      "RESTful API design allowing seamless integration with third-party web clients"
    ],
    architectureFlow: [
      { step: "01", name: "Claim Input", desc: "User or API client submits claim text, headline, or article URL" },
      { step: "02", name: "News Retrieval", desc: "NewsAPI searches credible publications for relevant coverage" },
      { step: "03", name: "Context Synthesis", desc: "Aggregates extracted news articles with claim statement" },
      { step: "04", name: "LLM Forensic Check", desc: "OpenRouter LLM checks contradictions, bias, and truth probability" },
      { step: "05", name: "Verdict Generation", desc: "Outputs verification status, confidence score, and cited sources" }
    ],
    caseStudy: {
      overview: "Fact-Checking & Fraud Detection API is an automated misinformation detection service that cross-references user claims against verified news publications and evaluates truthfulness using LLM reasoning.",
      problem: "The rapid spread of online misinformation requires quick, automated verification methods that cite verifiable sources rather than providing unsupported opinions.",
      solution: "Engineered a Flask backend that parses incoming claims, queries NewsAPI for related news stories, feeds the context into OpenRouter LLMs, and returns structured credibility assessments.",
      architecture: "Claim Submission -> NewsAPI Query & Article Parsing -> Contextual Aggregator -> OpenRouter LLM Forensic Evaluation -> Credibility Scoring & Source Citation.",
      techStack: [
        { label: "Backend", value: "Python, Flask, REST APIs" },
        { label: "Data Retrieval", value: "NewsAPI, Requests, BeautifulSoup" },
        { label: "AI Reasoning", value: "OpenRouter API, Multi-Model LLMs" }
      ],
      results: "Implemented a working API backend providing structured verdicts and source citations for automated fact-checking.",
      repository: "https://github.com/ponnim05-arch/fraud-detection",
      demoNotes: "Clone repository, install requirements (`pip install -r requirements.txt`), set NewsAPI and OpenRouter keys in `.env`, run Flask server (`python app.py`)."
    }
  },
  {
    id: "ai-chatbot-nlp",
    name: "AI-Chatbot-NLP",
    title: "AI Chatbot using NLP",
    shortTitle: "NLP Chatbot",
    isFlagship: false,
    rank: "05 // NLP CONVERSATIONAL AI",
    category: "Deep Learning & CV",
    categories: ["ALL", "Deep Learning & CV", "AI / ML & Agents"],
    description: "Intelligent Python conversational assistant leveraging NLP techniques for user query intent understanding, text normalization, and contextual response generation.",
    oneLiner: "A Python conversational chatbot utilizing NLP text preprocessing, tokenization, and intent classification for accurate user interactions.",
    tags: ["Python", "NLP", "Text Preprocessing", "Tokenization", "Machine Learning"],
    url: "https://github.com/ponnim05-arch",
    githubUrl: "https://github.com/ponnim05-arch",
    liveDemoUrl: null,
    hasTechnicalArchitecture: true,
    keyFeatures: [
      "Natural Language Processing pipeline with tokenization and lowercasing",
      "Stop-word removal, punctuation filtering, and text lemmatization",
      "Intent mapping and classification matching user queries to relevant replies",
      "Extensible Python architecture supporting custom conversational training corpora"
    ],
    architectureFlow: [
      { step: "01", name: "Query Input", desc: "User submits natural language message" },
      { step: "02", name: "Tokenization", desc: "Splits raw sentence into individual token units" },
      { step: "03", name: "Normalization", desc: "Removes stop-words and applies word lemmatization" },
      { step: "04", name: "Intent Matcher", desc: "Computes similarity against pre-defined intent patterns" },
      { step: "05", name: "Response Generation", desc: "Dispatches contextual response corresponding to predicted intent" }
    ],
    caseStudy: {
      overview: "AI Chatbot using NLP demonstrates fundamental natural language processing concepts in Python. It cleans, normalizes, and analyzes user queries to provide intelligent, contextual conversational answers.",
      problem: "Unstructured conversational inputs contain slang, varying casing, and filler words that impede rule-based pattern matching without preprocessing.",
      solution: "Implemented an end-to-end NLP pipeline applying tokenization, stop-word filtering, and lemmatization to structure query intents effectively.",
      architecture: "Raw User Text -> Tokenization & Lowercasing -> Stop-word Removal & Lemmatization -> Feature Vectorization -> Intent Classifier -> Response Dispatcher.",
      techStack: [
        { label: "Core NLP", value: "Python, NLTK, Regular Expressions" },
        { label: "ML & Logic", value: "Intent Classification, Text Preprocessing" }
      ],
      results: "Built a robust conversational agent handling diverse conversational inputs with structured text normalization.",
      repository: "https://github.com/ponnim05-arch",
      demoNotes: "Clone repository, install requirements (`pip install -r requirements.txt`), run `python chatbot.py`."
    }
  },
  {
    id: "cluster",
    name: "cluster",
    title: "Cluster Analysis & Unsupervised Learning",
    shortTitle: "Unsupervised Clustering",
    isFlagship: false,
    rank: "06 // UNSUPERVISED ML WORKSPACE",
    category: "AI / ML & Agents",
    categories: ["ALL", "AI / ML & Agents", "Tools & Analytics"],
    description: "Machine learning workspace for clustering algorithms, customer and data segmentation pipelines, unsupervised pattern discovery, and high-dimensional model evaluation.",
    oneLiner: "An unsupervised machine learning project implementing K-Means, hierarchical clustering, and PCA for dataset segmentation and pattern discovery.",
    tags: ["Python", "Scikit-Learn", "K-Means", "Clustering", "Data Analytics"],
    url: "https://github.com/ponnim05-arch/cluster",
    githubUrl: "https://github.com/ponnim05-arch/cluster",
    liveDemoUrl: null,
    hasTechnicalArchitecture: true,
    keyFeatures: [
      "Unsupervised clustering models including K-Means and Hierarchical Agglomerative clustering",
      "Dimensionality reduction with Principal Component Analysis (PCA)",
      "Elbow Method and Silhouette Score evaluation to identify optimal cluster counts",
      "Data visualization plots showing cluster boundaries and scatter distributions"
    ],
    architectureFlow: [
      { step: "01", name: "Dataset Ingestion", desc: "Loads multi-dimensional tabular feature dataset" },
      { step: "02", name: "Data Preprocessing", desc: "Handles missing values, encodes categories, and applies StandardScaler" },
      { step: "03", name: "Dimensionality Reduction", desc: "PCA projects high-dimensional features into 2D/3D component space" },
      { step: "04", name: "Cluster Training", desc: "Executes K-Means with inertia calculation across multiple K values" },
      { step: "05", name: "Evaluation & Plots", desc: "Generates Silhouette score analysis and visual clustering diagrams" }
    ],
    caseStudy: {
      overview: "Cluster Analysis & Unsupervised Learning is an exploratory data science project focused on identifying hidden patterns and segments in high-dimensional unlabeled datasets.",
      problem: "Finding natural groupings in unlabeled data without predefined ground-truth labels requires rigorous statistical validation and optimal cluster selection.",
      solution: "Constructed an automated segmentation pipeline utilizing feature scaling, PCA dimensionality reduction, K-Means clustering, and Silhouette metric evaluation.",
      architecture: "Tabular Dataset -> Missing Value & Scaling Preprocessing -> PCA Dimensionality Reduction -> K-Means / Agglomerative Clustering -> Silhouette & Inertia Validation -> Visualization Plots.",
      techStack: [
        { label: "Algorithms", value: "K-Means, Agglomerative Clustering, PCA" },
        { label: "Data & ML", value: "Python, Scikit-Learn, Pandas, NumPy" },
        { label: "Visualization", value: "Matplotlib, Seaborn" }
      ],
      results: "Delivered a structured clustering framework with automated evaluation and clear cluster boundary visualizations.",
      repository: "https://github.com/ponnim05-arch/cluster",
      demoNotes: "Clone repository, install requirements (`pip install -r requirements.txt`), run Jupyter notebook or `python cluster.py`."
    }
  },
  {
    id: "dashboard",
    name: "Dashboard",
    title: "AI Analytics & Metrics Dashboard",
    shortTitle: "Analytics Dashboard",
    isFlagship: false,
    rank: "07 // FRONTEND ANALYTICS UI",
    category: "Tools & Analytics",
    categories: ["ALL", "Tools & Analytics", "Full-Stack & APIs"],
    description: "Interactive frontend dashboard for monitoring machine learning performance metrics, model evaluation analytics, data visualization and experiment tracking.",
    oneLiner: "A modern React web dashboard for visualizing model accuracy, evaluation curves, and machine learning telemetry.",
    tags: ["React", "JavaScript", "Vite", "Data Analytics", "CSS3"],
    url: "https://github.com/ponnim05-arch/Dashboard",
    githubUrl: "https://github.com/ponnim05-arch/Dashboard",
    liveDemoUrl: null,
    hasTechnicalArchitecture: false,
    keyFeatures: [
      "Dynamic data visualization components for training curves and accuracy metrics",
      "Responsive card-based analytics layout with modern dark aesthetic",
      "Interactive filtering by experiment parameters and model checkpoints",
      "High performance rendering built with React and Vite"
    ],
    caseStudy: {
      overview: "An interactive analytics dashboard built to visualize machine learning experiment metrics and model performance analytics.",
      problem: "ML experiment tracking often requires clear, real-time visual summaries of loss curves, accuracy, and metric comparisons.",
      solution: "Created a responsive React + Vite interface with reusable chart components and interactive cards.",
      architecture: "React Client -> State Store -> Visual Metric Components -> Interactive Dashboard.",
      techStack: [
        { label: "Frontend", value: "React, Vite, JavaScript, CSS3" },
        { label: "Focus", value: "Data Visualization & Metrics Tracking" }
      ],
      results: "Built a fast, responsive telemetry dashboard for model evaluation visualization.",
      repository: "https://github.com/ponnim05-arch/Dashboard"
    }
  },
  {
    id: "ponnim05-arch",
    name: "ponnim05-arch",
    title: "Kumar Ponmani — Developer Profile Hub",
    shortTitle: "Developer Profile Hub",
    isFlagship: false,
    rank: "08 // PROFILE & ROADMAP HUB",
    category: "Tools & Analytics",
    categories: ["ALL", "Tools & Analytics"],
    description: "Special GitHub profile repository featuring animated headers, comprehensive AI/ML skillset, education, certifications, contribution metrics, and learning roadmap.",
    oneLiner: "A comprehensive GitHub profile repository highlighting verified AI/ML skills, learning journey, projects, and developer metrics.",
    tags: ["Markdown", "GitHub Actions", "CI/CD", "Developer Metrics"],
    url: "https://github.com/ponnim05-arch/ponnim05-arch",
    githubUrl: "https://github.com/ponnim05-arch/ponnim05-arch",
    liveDemoUrl: null,
    hasTechnicalArchitecture: false,
    keyFeatures: [
      "Dynamic GitHub profile repository detailing technical competencies",
      "Categorized presentation of AI/ML, Full-Stack, and Tooling capabilities",
      "Automated GitHub Actions workflows updating developer stats",
      "Centralized index of all public projects and educational background"
    ],
    caseStudy: {
      overview: "The central GitHub profile hub for Kumar Ponmani detailing active repositories, technical roadmap, and verified credentials.",
      problem: "Maintaining a clear, updated public developer presence with accurate repository links and skill listings.",
      solution: "Constructed a dynamic Markdown profile hub integrated with GitHub Actions for automated metrics.",
      architecture: "GitHub Actions -> Repository Metrics -> Profile Readme Markdown -> Developer Portfolio Hub.",
      techStack: [
        { label: "Platform", value: "GitHub, Markdown, GitHub Actions" }
      ],
      results: "Created a clear, well-structured developer hub representing all verified projects and achievements.",
      repository: "https://github.com/ponnim05-arch/ponnim05-arch"
    }
  }
];

export const EXPERIENCE = [
  {
    role: "AI/ML Intern",
    company: "ThirdEye Technology Solutions",
    location: "Chennai",
    period: "MAY 2026 — JUN 2026",
    bullets: [
      "Gained practical experience by working on real-world technology concepts, strengthening analytical thinking, problem-solving and technical skills in a collaborative environment.",
      "Collaborated on applied machine learning workflows, exploring model evaluation pipelines, data preprocessing, and algorithm optimization.",
      "Strengthened engineering best practices through active team problem solving and technical implementation."
    ]
  }
];

export const EDUCATION = [
  {
    degree: "B.E CSE (AI & ML)",
    institution: "Prathyusha Engineering College",
    location: "Tiruvallur, Tamil Nadu",
    period: "Aug 2023 — Sep 2027",
    score: "CGPA 8.3",
    badge: "Bachelor of Engineering Track"
  },
  {
    degree: "12th Standard (Higher Secondary)",
    institution: "Sri Chaitanya Junior College",
    location: "Tirupati",
    period: "Jun 2021 — Jun 2023",
    score: "GPA 9.4",
    badge: "Higher Secondary Education"
  },
  {
    degree: "10th Standard (Secondary School)",
    institution: "Vidvas School",
    location: "Kalur",
    period: "Jun 2020 — Jun 2021",
    score: "GPA 9.933",
    badge: "Secondary School Certificate"
  }
];

export const CERTIFICATIONS = [
  {
    title: "Anthropic Certified in Claude",
    issuer: "Anthropic",
    category: "LLM & Generative AI",
    date: "Verified Credential",
    icon: "Sparkles"
  },
  {
    title: "Google Certified in Generative AI",
    issuer: "Google Cloud",
    category: "Generative AI Foundations",
    date: "Verified Credential",
    icon: "Cpu"
  },
  {
    title: "AWS Certificate",
    issuer: "Amazon Web Services",
    category: "Cloud Architecture",
    date: "Verified Credential",
    icon: "Network"
  },
  {
    title: "Infosys Certified — Artificial Intelligence For All",
    issuer: "Infosys Springboard",
    category: "AI Foundations & Ethical AI",
    date: "Verified Credential",
    icon: "GraduationCap"
  }
];

export const PUBLIC_REPOS = [
  {
    name: "Autonomous-Browsing-Agent",
    title: "Autonomous Browsing Agent",
    desc: "Adaptive prompt-engineering framework for reliable autonomous web agents with dynamic prompts, self-evaluation, repair loops, and Playwright automation.",
    tech: ["Python", "Playwright", "Prompt Engineering", "AI Agents", "Streamlit"],
    url: "https://github.com/ponnim05-arch/Autonomous-Browsing-Agent"
  },
  {
    name: "Handwritten-Character-Recognition",
    title: "Handwritten Character & Number Recognition",
    desc: "Full-stack CNN application for handwritten digits 0–9 and uppercase alphabets A–Z recognition with Flask REST APIs and React + Vite frontend.",
    tech: ["Python", "TensorFlow", "CNN", "Flask", "React", "Vite"],
    url: "https://github.com/ponnim05-arch/Handwritten-Character-Recognition"
  },
  {
    name: "one-peice-AI",
    title: "One-Piece AI Developer Tool Suite",
    desc: "Interactive developer workspace combining multi-model LLM chat testing via OpenRouter, developer profile scrapers, and AI resume generation.",
    tech: ["Python", "Flask", "LangChain", "OpenRouter", "Selenium"],
    url: "https://github.com/ponnim05-arch/one-peice-AI"
  },
  {
    name: "fraud-detection",
    title: "Fact-Checking & Fraud Detection API",
    desc: "Flask backend service for automated claim verification, social post analysis, news retrieval via NewsAPI, and digital forensic checks.",
    tech: ["Python", "Flask", "OpenRouter", "NewsAPI", "REST APIs"],
    url: "https://github.com/ponnim05-arch/fraud-detection"
  },
  {
    name: "cluster",
    title: "Cluster Analysis & Unsupervised Learning",
    desc: "Machine learning workspace for clustering algorithms, customer segmentation pipelines, unsupervised pattern discovery, and evaluation.",
    tech: ["Python", "Scikit-Learn", "K-Means", "Clustering", "PCA"],
    url: "https://github.com/ponnim05-arch/cluster"
  },
  {
    name: "Dashboard",
    title: "AI Analytics & Metrics Dashboard",
    desc: "Interactive frontend dashboard for monitoring machine learning performance metrics, model evaluation analytics, and data visualization.",
    tech: ["React", "JavaScript", "Vite", "Data Analytics"],
    url: "https://github.com/ponnim05-arch/Dashboard"
  }
];
