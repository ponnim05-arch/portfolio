import React, { useEffect } from "react";
import {
  X,
  ExternalLink,
  Code2,
  AlertTriangle,
  CheckCircle,
  Terminal,
  Layers,
  Sparkles,
  Cpu,
  Github,
  BookOpen
} from "lucide-react";

export default function CaseStudyModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!project || !project.caseStudy) return null;

  const cs = project.caseStudy;

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Case Study: ${project.title}`}
    >
      <div
        className="modal-drawer-container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header */}
        <div className="modal-sticky-header">
          <div className="modal-header-meta">
            <span className="modal-header-tag">
              CASE STUDY // {project.rank || project.category}
            </span>
            <h2 className="modal-project-title">{project.title}</h2>
          </div>

          <div className="modal-header-actions">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="btn ghost modal-ext-btn"
                title="View Source on GitHub"
              >
                <Github size={15} />
                <span>GitHub</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="modal-close-btn"
              aria-label="Close Case Study"
              title="Close (Esc)"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Scrollable Case Study Body */}
        <div className="modal-scrollable-body">
          {/* 01 — Overview */}
          <section className="case-section">
            <div className="case-section-header">
              <span className="case-sec-index">01</span>
              <h3 className="case-sec-title">Project Overview</h3>
            </div>
            <p className="case-text">{cs.overview}</p>
          </section>

          {/* 02 — Problem */}
          <section className="case-section">
            <div className="case-section-header">
              <span className="case-sec-index">02</span>
              <h3 className="case-sec-title">The Engineering Challenge & Problem</h3>
            </div>
            <p className="case-text">{cs.problem}</p>
          </section>

          {/* 03 — Solution */}
          <section className="case-section">
            <div className="case-section-header">
              <span className="case-sec-index">03</span>
              <h3 className="case-sec-title">Implemented Technical Solution</h3>
            </div>
            <p className="case-text">{cs.solution}</p>
          </section>

          {/* 04 — System Architecture Flowchart */}
          {project.architectureFlow && (
            <section className="case-section">
              <div className="case-section-header">
                <span className="case-sec-index">04</span>
                <h3 className="case-sec-title">System Architecture & Pipeline Flow</h3>
              </div>
              <p className="case-text">{cs.architecture}</p>

              <div className="case-arch-flow-box">
                <div className="arch-flow-title">SYSTEM EXECUTION PIPELINE</div>
                <div className="arch-steps-grid">
                  {project.architectureFlow.map((step, idx) => (
                    <div key={idx} className="arch-step-item">
                      <div className="arch-step-num">{step.step}</div>
                      <div className="arch-step-name">{step.name}</div>
                      <div className="arch-step-desc">{step.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* 05 — Technology Stack */}
          {cs.techStack && (
            <section className="case-section">
              <div className="case-section-header">
                <span className="case-sec-index">05</span>
                <h3 className="case-sec-title">Technology Stack & Tooling</h3>
              </div>
              <div className="case-tech-grid">
                {cs.techStack.map((tech, idx) => (
                  <div key={idx} className="case-tech-card">
                    <span className="case-tech-label">{tech.label}</span>
                    <span className="case-tech-value">{tech.value}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 06 — Key Features Detailed */}
          {cs.keyFeaturesDetailed && (
            <section className="case-section">
              <div className="case-section-header">
                <span className="case-sec-index">06</span>
                <h3 className="case-sec-title">Key Architectural Features</h3>
              </div>
              <ul className="case-bullet-list">
                {cs.keyFeaturesDetailed.map((feat, idx) => (
                  <li key={idx}>
                    <CheckCircle size={16} className="case-check-icon" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* 07 — Challenges & Solutions */}
          {cs.challenges && (
            <section className="case-section">
              <div className="case-section-header">
                <span className="case-sec-index">07</span>
                <h3 className="case-sec-title">Technical Challenges & Solutions</h3>
              </div>
              <div className="case-challenges-list">
                {cs.challenges.map((c, idx) => (
                  <div key={idx} className="challenge-item">
                    <div className="challenge-title">
                      <AlertTriangle size={15} color="#ffa552" />
                      <span>{c.challenge}</span>
                    </div>
                    <p className="solution-text">
                      <strong>Solution: </strong>
                      {c.solution}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 08 — Measured Results */}
          {cs.results && (
            <section className="case-section">
              <div className="case-section-header">
                <span className="case-sec-index">08</span>
                <h3 className="case-sec-title">Measured Results & Performance</h3>
              </div>
              <div className="case-results-card">
                <Sparkles size={18} color="var(--cyan)" />
                <p>{cs.results}</p>
              </div>
            </section>
          )}

          {/* 09 — Reproduction & Repository Link */}
          <section className="case-section case-footer-actions">
            <div className="case-section-header">
              <span className="case-sec-index">09</span>
              <h3 className="case-sec-title">Repository & Reproduction</h3>
            </div>
            {cs.demoNotes && <p className="case-text">{cs.demoNotes}</p>}

            <div className="modal-cta-row">
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn primary"
                >
                  <Github size={16} /> Open Repository on GitHub
                </a>
              )}
              <button onClick={onClose} className="btn ghost">
                Close Case Study
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
