import React from "react";
import { Download, Github, ExternalLink, FileText } from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";
import AnimatedCard from "./AnimatedCard";

export default function ResumeCTA() {
  return (
    <section className="section" id="resume" aria-label="Resume and Credentials">
      <AnimatedCard className="resume-cta-box" tilt={false}>
        <div className="section-label" style={{ justifyContent: "center", marginBottom: "16px" }}>
          08 — RÉSUMÉ & CREDENTIALS
        </div>
        <h2>Want to know more about my experience?</h2>
        <p className="resume-cta-desc">
          Download my verified resume detailing academic background, technical skills, machine learning projects, and certification credentials.
        </p>

        <div className="resume-cta-actions">
          <a
            href={PERSONAL_INFO.resumePath}
            download="Kumar_Ponmani_Resume.pdf"
            className="btn primary"
            title="Download verified resume PDF"
          >
            <Download size={16} />
            <span>DOWNLOAD RÉSUMÉ</span>
          </a>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="btn ghost"
          >
            <Github size={16} />
            <span>VIEW GITHUB</span>
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="btn ghost"
          >
            <ExternalLink size={16} />
            <span>CONNECT ON LINKEDIN</span>
          </a>
        </div>
      </AnimatedCard>
    </section>
  );
}
