import React from "react";
import { ArrowUpRight, BrainCircuit, Code2, Download, Mail } from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";
import AnimatedCard from "./AnimatedCard";

export default function Hero({ onExploreProjects }) {
  const scrollToProjects = (e) => {
    e.preventDefault();
    if (onExploreProjects) {
      onExploreProjects();
    } else {
      const el = document.getElementById("projects");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero" id="home" aria-label="Introduction">
      <div className="hero-copy">
        <div className="eyebrow">
          <span className="pulse-dot" aria-hidden="true" />
          {PERSONAL_INFO.headlineRole} STUDENT
        </div>

        <h1>
          Building <span className="gradient-text">intelligent</span>
          <br />
          software with <span className="outline-text">purpose.</span>
        </h1>

        <p className="hero-desc">
          {PERSONAL_INFO.summary}
        </p>

        <div className="hero-actions">
          <a className="btn primary" href="#projects" onClick={scrollToProjects}>
            Explore Projects <ArrowUpRight size={18} />
          </a>
          <a
            className="btn ghost"
            href={PERSONAL_INFO.resumePath}
            download="Kumar_Ponmani_Resume.pdf"
            title="Download verified resume"
          >
            <Download size={17} /> Résumé
          </a>
          <a className="btn ghost" href={`mailto:${PERSONAL_INFO.email}`}>
            <Mail size={17} /> Contact Me
          </a>
        </div>

        <div className="hero-meta" aria-label="Key highlights">
          <span>
            <b>8.3</b> CGPA
          </span>
          <i aria-hidden="true" />
          <span>
            <b>99.2%</b> digit recognition
          </span>
          <i aria-hidden="true" />
          <span>
            <b>AI/ML</b> focus
          </span>
        </div>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />

        <div className="floating-chip chip-top">
          <BrainCircuit size={15} /> GENERATIVE AI
        </div>
        <div className="floating-chip chip-bottom">
          <Code2 size={15} /> FULL-STACK ML
        </div>

        <AnimatedCard className="portrait-card">
          <div className="portrait-holo" />
          <img
            src={PERSONAL_INFO.profileImage}
            alt="Kumar Ponmani"
            className="portrait"
          />
          <div className="portrait-caption">
            <span>KUMAR PONMANI</span>
            <span>AI / ML</span>
          </div>
        </AnimatedCard>
      </div>
    </section>
  );
}
