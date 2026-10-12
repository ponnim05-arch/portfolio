import React from "react";
import { GraduationCap, Award, CheckCircle2 } from "lucide-react";
import { CERTIFICATIONS } from "../data/portfolioData";
import AnimatedCard from "./AnimatedCard";

export default function Certifications() {
  return (
    <section className="section cert-section" id="certifications" aria-label="Certifications">
      <div className="section-label">06 — CERTIFICATIONS</div>
      <div className="section-heading" style={{ marginBottom: "35px" }}>
        <h2>Professional <span>Certifications.</span></h2>
        <p className="section-subtitle">
          Industry-recognized credentials in Claude LLMs, Generative AI, Cloud Computing, and Artificial Intelligence foundations.
        </p>
      </div>

      <div className="cert-grid">
        {CERTIFICATIONS.map((c, i) => (
          <AnimatedCard className="cert-card" key={c.title} delay={i * 0.07} tilt={true}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span>0{i + 1}</span>
              <span className="cert-issuer-badge">{c.issuer}</span>
            </div>
            <GraduationCap size={26} aria-hidden="true" />
            <div>
              <p>{c.title}</p>
              <span className="cert-cat-label">{c.category}</span>
            </div>
          </AnimatedCard>
        ))}
      </div>
    </section>
  );
}
