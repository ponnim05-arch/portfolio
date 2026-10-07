import React, { useEffect, useMemo, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  ArrowUpRight, BrainCircuit, Code2, Database, Download, ExternalLink,
  Github, GraduationCap, Mail, Menu, MessageCircle, Network, Sparkles,
  Terminal, X, Cpu, Layers3, ChevronRight, ArrowDown, ArrowUp
} from "lucide-react";
import "./styles.css";

const profileImage = "/profile.jpg";

const skills = [
  ["Python", "Programming", "python"],
  ["SQL", "Data", "database"],
  ["Java", "Programming", "code"],
  ["React JS", "Frontend", "layers"],
  ["Node.js", "Backend", "network"],
  ["REST APIs", "Backend", "terminal"],
  ["Machine Learning", "AI / ML", "brain"],
  ["Artificial Intelligence", "AI / ML", "cpu"],
  ["Generative AI", "AI / ML", "sparkles"],
  ["TensorFlow", "Deep Learning", "brain"],
  ["OOP", "CS Fundamentals", "code"],
  ["Data Structures & Algorithms", "CS Fundamentals", "layers"],
  ["Git & GitHub", "Tools", "github"]
];

const REPOS = [
  {
    name: "Autonomous-Browsing-Agent",
    title: "Autonomous Browsing Agent",
    category: "AI / ML & Agents",
    description: "Adaptive prompt-engineering framework for reliable autonomous web agents with dynamic prompts, self-evaluation, repair loops, Playwright automation and telemetry.",
    tags: ["Python", "Playwright", "Prompt Engineering", "AI Agents", "Streamlit"],
    url: "https://github.com/ponnim05-arch/Autonomous-Browsing-Agent"
  },
  {
    name: "Handwritten-Character-Recognition",
    title: "Handwritten Character & Number Recognition",
    category: "Deep Learning & CV",
    description: "Full-stack CNN application for handwritten digits 0–9 and uppercase alphabets A–Z recognition with Flask REST APIs and React + Vite frontend.",
    tags: ["Python", "TensorFlow", "CNN", "Flask", "React", "Vite"],
    url: "https://github.com/ponnim05-arch/Handwritten-Character-Recognition"
  },
  {
    name: "one-peice-AI",
    title: "One-Piece AI Developer Tool Suite",
    category: "Full-Stack & APIs",
    description: "Interactive developer workspace combining multi-model LLM chat testing via OpenRouter, developer profile scrapers, and AI resume generation across HTML, PDF and DOCX.",
    tags: ["Python", "Flask", "LangChain", "OpenRouter", "Selenium", "BeautifulSoup"],
    url: "https://github.com/ponnim05-arch/one-peice-AI"
  },
  {
    name: "fraud-detection",
    title: "Fact-Checking & Fraud Detection API",
    category: "Full-Stack & APIs",
    description: "Flask backend service for automated claim verification, social post and article analysis, news retrieval via NewsAPI, and digital forensic checks using OpenRouter LLMs.",
    tags: ["Python", "Flask", "OpenRouter", "NewsAPI", "Digital Forensics", "REST APIs"],
    url: "https://github.com/ponnim05-arch/fraud-detection"
  },
  {
    name: "AI-Chatbot-NLP",
    title: "AI Chatbot using NLP",
    category: "Deep Learning & CV",
    description: "Intelligent Python conversational assistant leveraging NLP techniques for user query intent understanding, text normalization, and contextual response generation.",
    tags: ["Python", "NLP", "Text Preprocessing", "Tokenization", "Machine Learning"],
    url: "https://github.com/ponnim05-arch"
  },
  {
    name: "cluster",
    title: "Cluster Analysis & Unsupervised Learning",
    category: "AI / ML & Agents",
    description: "Machine learning workspace for clustering algorithms, customer and data segmentation pipelines, unsupervised pattern discovery, and high-dimensional model evaluation.",
    tags: ["Python", "Scikit-Learn", "K-Means", "Clustering", "Data Analytics"],
    url: "https://github.com/ponnim05-arch/cluster"
  },
  {
    name: "Dashboard",
    title: "AI Analytics & Metrics Dashboard",
    category: "Tools & Analytics",
    description: "Interactive frontend dashboard for monitoring machine learning performance metrics, model evaluation analytics, data visualization and experiment tracking.",
    tags: ["React", "JavaScript", "Vite", "Data Analytics", "CSS3"],
    url: "https://github.com/ponnim05-arch/Dashboard"
  },
  {
    name: "ponnim05-arch",
    title: "Kumar Ponmani — Developer Profile Hub",
    category: "Tools & Analytics",
    description: "Special GitHub profile repository featuring animated headers, comprehensive AI/ML skillset, education, certifications, contribution metrics, and learning roadmap.",
    tags: ["Markdown", "GitHub Actions", "CI/CD", "Developer Metrics"],
    url: "https://github.com/ponnim05-arch/ponnim05-arch"
  }
];

const education = [
  {
    period: "Aug 2023 — Sep 2027",
    title: "B.E CSE (AI & ML)",
    org: "Prathyusha Engineering College",
    place: "Tiruvallur, Tamil Nadu",
    score: "CGPA 8.3"
  },
  {
    period: "Jun 2021 — Jun 2023",
    title: "12th Standard",
    org: "Sri Chaitanya Junior College",
    place: "Tirupati",
    score: "GPA 9.4"
  },
  {
    period: "Jun 2020 — Jun 2021",
    title: "10th Standard",
    org: "Vidvas School",
    place: "Kalur",
    score: "GPA 9.933"
  }
];

const certifications = [
  "Anthropic Certified in Claude",
  "Google Certified in Generative AI",
  "AWS Certificate",
  "Infosys Certified — Artificial Intelligence For All"
];

function Icon({ name, size = 18 }) {
  const props = { size, strokeWidth: 1.8 };
  const map = {
    python: <Terminal {...props} />,
    database: <Database {...props} />,
    code: <Code2 {...props} />,
    layers: <Layers3 {...props} />,
    network: <Network {...props} />,
    terminal: <Terminal {...props} />,
    brain: <BrainCircuit {...props} />,
    cpu: <Cpu {...props} />,
    sparkles: <Sparkles {...props} />,
    github: <Github {...props} />
  };
  return map[name] || <Sparkles {...props} />;
}

function MagneticCard({ children, className = "" }) {
  const ref = useRef(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(rotateX, { stiffness: 180, damping: 18 });
  const sy = useSpring(rotateY, { stiffness: 180, damping: 18 });
  const ssx = useSpring(x, { stiffness: 180, damping: 18 });
  const ssy = useSpring(y, { stiffness: 180, damping: 18 });

  const move = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    rotateY.set(px * 12);
    rotateX.set(py * -12);
    x.set(px * 5);
    y.set(py * 5);
  };

  const leave = () => {
    rotateX.set(0); rotateY.set(0); x.set(0); y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={`tilt-card ${className}`}
      style={{ rotateX: sx, rotateY: sy, x: ssx, y: ssy }}
      onMouseMove={move}
      onMouseLeave={leave}
    >
      {children}
    </motion.div>
  );
}

function CursorGlow() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 120, damping: 22 });
  const sy = useSpring(y, { stiffness: 120, damping: 22 });

  useEffect(() => {
    const move = (e) => { x.set(e.clientX); y.set(e.clientY); };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);

  return <motion.div className="cursor-glow" style={{ left: sx, top: sy }} />;
}

function App() {
  const [menu, setMenu] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [activeCategory, setActiveCategory] = useState("ALL");

  const closeMenu = () => setMenu(false);

  const filteredRepos = useMemo(() => {
    const list = activeCategory === "ALL"
      ? REPOS
      : REPOS.filter((r) => r.category === activeCategory);
    return showAll ? list : list.slice(0, 6);
  }, [activeCategory, showAll]);

  return (
    <div className="app">
      <CursorGlow />
      <div className="noise" />
      <div className="grid-bg" />

      <header className="nav">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-dot" />
          <span className="brand-mark">KP</span>
          <span className="brand-title">KUMAR PONMANI</span>
          <span className="brand-sub">AI / ML</span>
        </a>
        <nav className={menu ? "nav-links open" : "nav-links"}>
          {["about", "experience", "projects", "skills", "education", "contact"].map((id) => (
            <a key={id} href={`#${id}`} onClick={closeMenu}>{id.toUpperCase()}</a>
          ))}
          <a
            className="nav-github-btn"
            href="https://github.com/ponnim05-arch"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={15} /> GitHub
          </a>
        </nav>
        <a className="nav-cta" href="mailto:ponnim05@gmail.com">Let's Talk <ArrowUpRight size={15}/></a>
        <button className="menu-btn" onClick={() => setMenu(!menu)} aria-label="Menu">
          {menu ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="pulse-dot" /> AI & MACHINE LEARNING STUDENT</div>
            <h1>
              Building <span className="gradient-text">intelligent</span><br />
              software with <span className="outline-text">purpose.</span>
            </h1>
            <p className="hero-desc">
              Motivated AIML student with a strong foundation in Python, Artificial Intelligence,
              Machine Learning and software development — turning ideas into practical AI experiences.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href="#projects">Explore Projects <ArrowUpRight size={18}/></a>
              <a className="btn ghost" href="mailto:ponnim05@gmail.com"><Mail size={17}/> Contact Me</a>
            </div>
            <div className="hero-meta">
              <span><b>8.3</b> CGPA</span><i /> <span><b>99.2%</b> digit recognition</span><i /> <span><b>AI/ML</b> focus</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="floating-chip chip-top"><BrainCircuit size={15}/> GENERATIVE AI</div>
            <div className="floating-chip chip-bottom"><Code2 size={15}/> FULL-STACK ML</div>
            <MagneticCard className="portrait-card">
              <div className="portrait-holo" />
              <img src={profileImage} alt="Kumar Ponmani" className="portrait" />
              <div className="portrait-caption">
                <span>KUMAR PONMANI</span><span>AI / ML</span>
              </div>
            </MagneticCard>
          </div>
        </section>

        <section className="marquee-section">
          <div className="marquee">
            {["PYTHON", "MACHINE LEARNING", "GENERATIVE AI", "TENSORFLOW", "REACT", "REST APIs", "NLP", "FLASK"].map((s, i) =>
              <React.Fragment key={s}><span>{s}</span><b>✦</b></React.Fragment>
            )}
          </div>
        </section>

        <section className="section about" id="about">
          <div className="section-label">01 — ABOUT</div>
          <div className="about-grid">
            <div>
              <h2>Curious mind.<br /><span>Builder mindset.</span></h2>
            </div>
            <div className="about-copy">
              <p>
                I am <strong>Kumar Ponmani</strong>, an AIML student passionate about building innovative
                software solutions. My work sits at the intersection of machine learning, generative AI,
                web development and practical problem solving.
              </p>
              <p>
                I enjoy taking an idea from preprocessing and model development through APIs and
                interactive interfaces. I am a quick learner with strong communication skills and a
                focus on real-world applications.
              </p>
              <div className="about-tags">
                <span>Problem Solving</span><span>Creativity</span><span>Communication</span><span>Continuous Learning</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-heading">
            <div className="section-label">02 — SKILLS</div>
            <h2>My technical <span>toolbox.</span></h2>
          </div>
          <div className="skills-grid">
            {skills.map(([name, cat, icon]) => (
              <MagneticCard className="skill-card" key={name}>
                <div className="skill-icon"><Icon name={icon}/></div>
                <div><h3>{name}</h3><p>{cat}</p></div>
              </MagneticCard>
            ))}
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-heading">
            <div className="section-label">03 — PROJECTS</div>
            <h2>Selected work from the <span>GitHub lab.</span></h2>
            <p className="section-subtitle">
              Flagship AI/ML builds, autonomous agents, and full-stack software from my public GitHub repositories.
            </p>
          </div>

          <div className="filter-tabs">
            {["ALL", "AI / ML & Agents", "Deep Learning & CV", "Full-Stack & APIs", "Tools & Analytics"].map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat === "ALL" ? `All Repositories (${REPOS.length})` : cat}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredRepos.map((p, i) => (
              <MagneticCard key={p.name + '-' + i} className="project-card glass">
                <div className="project-top">
                  <span className="project-num">{String(i + 1).padStart(2, '0')}</span>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${p.name} on GitHub`}
                    className="project-ext-link"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>

                <div className="project-icon">
                  <Sparkles size={20} />
                </div>

                <div className="project-title-row">
                  <h3>{p.title}</h3>
                  <span className="repo-slug">{p.name}</span>
                </div>

                <p className="project-desc">{p.description}</p>

                <div className="tags">
                  {p.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>

                <a className="project-link" href={p.url} target="_blank" rel="noreferrer">
                  Open repository <ChevronRight size={15} />
                </a>
              </MagneticCard>
            ))}
          </div>

          <div className="project-more">
            <button className="btn ghost" onClick={() => setShowAll((v) => !v)}>
              {showAll ? "Show featured only" : `Show all public repositories (${REPOS.length})`}{" "}
              {showAll ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
            </button>
            <a
              className="btn primary"
              href="https://github.com/ponnim05-arch?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={16} /> Explore GitHub
            </a>
          </div>

          <div className="repo-strip">
            {REPOS.map((r, i) => (
              <a key={r.name} href={r.url} target="_blank" rel="noreferrer">
                <span>#{String(i + 1).padStart(2, '0')}</span>
                {r.name}
                <ArrowUpRight size={13} />
              </a>
            ))}
          </div>
        </section>

        <section className="section split-section" id="experience">
          <div className="section-label">04 — EXPERIENCE</div>
          <div className="experience-card">
            <div className="exp-date">MAY 2026 — JUN 2026</div>
            <div>
              <div className="exp-title-row">
                <h2>AI/ML Intern</h2>
                <span>THIRDEYE TECHNOLOGY SOLUTIONS</span>
              </div>
              <p className="exp-place">Chennai</p>
              <p>
                Gained practical experience by working on real-world technology concepts,
                strengthening analytical thinking, problem-solving and technical skills in a collaborative environment.
              </p>
            </div>
            <div className="exp-symbol"><Cpu size={38}/></div>
          </div>
        </section>

        <section className="section" id="education">
          <div className="section-heading">
            <div className="section-label">05 — EDUCATION</div>
            <h2>The foundation behind <span>the work.</span></h2>
          </div>
          <div className="timeline">
            {education.map((e, i) => (
              <div className="timeline-row" key={e.title}>
                <div className="timeline-dot">{i + 1}</div>
                <div className="timeline-date">{e.period}</div>
                <div className="timeline-content">
                  <h3>{e.title}</h3><p>{e.org} · {e.place}</p>
                </div>
                <strong>{e.score}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="section cert-section">
          <div className="section-label">06 — CERTIFICATIONS</div>
          <div className="cert-grid">
            {certifications.map((c, i) => (
              <MagneticCard className="cert-card" key={c}>
                <span>0{i + 1}</span><GraduationCap size={22}/><p>{c}</p>
              </MagneticCard>
            ))}
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="contact-orb" />
          <div className="section-label">07 — CONTACT</div>
          <h2>Let's build the<br /><span>next intelligent thing.</span></h2>
          <p>Have an idea, internship opportunity, or project collaboration in AI/ML? Let's connect.</p>
          <a className="contact-mail" href="mailto:ponnim05@gmail.com">ponnim05@gmail.com <ArrowUpRight /></a>
          <div className="social-row">
            <a href="https://github.com/ponnim05-arch" target="_blank" rel="noreferrer"><Github size={18}/> GitHub</a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><ExternalLink size={17}/> LinkedIn</a>
          </div>
          <p className="social-note">Replace the LinkedIn link with the profile URL from the resume.</p>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Kumar Ponmani</span>
        <span>AI · ML · SOFTWARE DEVELOPMENT</span>
        <span>BUILT WITH REACT</span>
      </footer>
    </div>
  );
}

const rootEl = document.getElementById("root");
if (!window.__reactRoot) {
  window.__reactRoot = createRoot(rootEl);
}
window.__reactRoot.render(<App />);
