import React, { useMemo, useState } from "react";
import {
  ExternalLink,
  Sparkles,
  ChevronRight,
  ArrowDown,
  ArrowUp,
  Github,
  BookOpen
} from "lucide-react";
import { PROJECTS } from "../data/portfolioData";
import AnimatedCard from "./AnimatedCard";

const CATEGORIES = [
  "ALL",
  "AI / ML & Agents",
  "Deep Learning & CV",
  "Full-Stack & APIs",
  "Tools & Analytics"
];

export default function Projects({ onSelectCaseStudy }) {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = useMemo(() => {
    const list =
      activeCategory === "ALL"
        ? PROJECTS
        : PROJECTS.filter((p) =>
            p.categories ? p.categories.includes(activeCategory) : p.category === activeCategory
          );
    return showAll ? list : list.slice(0, 6);
  }, [activeCategory, showAll]);

  return (
    <section className="section projects-section" id="projects" aria-label="Selected Projects">
      <div className="section-heading">
        <div className="section-label">03 — PROJECTS</div>
        <h2>
          Selected work from the <span>GitHub lab.</span>
        </h2>
        <p className="section-subtitle">
          Flagship AI/ML builds, autonomous agents, and full-stack software from my public GitHub repositories.
        </p>
      </div>

      <div className="filter-tabs" role="tablist" aria-label="Filter projects">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={activeCategory === cat}
            className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat === "ALL" ? `All Repositories (${PROJECTS.length})` : cat}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((p, i) => (
          <AnimatedCard
            key={p.name + "-" + i}
            className="project-card glass"
            delay={i * 0.06}
            tilt={true}
          >
            <div className="project-top">
              <span className="project-num">{String(i + 1).padStart(2, "0")}</span>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                {p.caseStudy && (
                  <button
                    onClick={() => onSelectCaseStudy && onSelectCaseStudy(p)}
                    className="case-study-quick-btn"
                    title="Open Technical Case Study"
                    aria-label={`Open Case Study for ${p.title}`}
                  >
                    <BookOpen size={12} />
                    <span>Case Study</span>
                  </button>
                )}
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

            <div className="project-bottom-actions">
              <a
                className="project-link"
                href={p.url}
                target="_blank"
                rel="noreferrer"
              >
                Open repository <ChevronRight size={15} />
              </a>

              {p.caseStudy && (
                <button
                  type="button"
                  className="project-case-link"
                  onClick={() => onSelectCaseStudy && onSelectCaseStudy(p)}
                >
                  View Details & Pipeline
                </button>
              )}
            </div>
          </AnimatedCard>
        ))}
      </div>

      <div className="project-more">
        <button
          className="btn ghost"
          onClick={() => setShowAll((v) => !v)}
          aria-expanded={showAll}
        >
          {showAll
            ? "Show featured only"
            : `Show all public repositories (${PROJECTS.length})`}{" "}
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

      <div className="repo-strip" aria-label="Direct Repository Links">
        {PROJECTS.map((r, i) => (
          <a key={r.name} href={r.url} target="_blank" rel="noreferrer">
            <span>#{String(i + 1).padStart(2, "0")}</span>
            {r.name}
            <ExternalLink size={12} />
          </a>
        ))}
      </div>
    </section>
  );
}
