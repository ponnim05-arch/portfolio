import React from "react";
import { Brain, Cpu, Sparkles, Layers, Award, BookOpen } from "lucide-react";
import { PERSONAL_INFO, FOCUS_AREAS } from "../data/portfolioData";
import AnimatedCard from "./AnimatedCard";

const focusIcons = {
  Brain: Brain,
  Cpu: Cpu,
  Sparkles: Sparkles,
  Layers: Layers
};

export default function About() {
  return (
    <section className="section about" id="about" aria-label="About Me">
      <div className="section-label">01 — ABOUT</div>

      <div className="about-grid">
        <div>
          <h2>
            Curious mind.
            <br />
            <span>Builder mindset.</span>
          </h2>
          <div className="about-meta-panel" style={{ marginTop: "28px" }}>
            <div className="about-stat-row">
              <span className="about-stat-label">DEGREE</span>
              <span className="about-stat-val">{PERSONAL_INFO.stats.education}</span>
            </div>
            <div className="about-stat-row">
              <span className="about-stat-label">INSTITUTION</span>
              <span className="about-stat-val">Prathyusha Engineering College</span>
            </div>
            <div className="about-stat-row">
              <span className="about-stat-label">CGPA</span>
              <span className="about-stat-val" style={{ color: "var(--cyan)" }}>
                {PERSONAL_INFO.stats.cgpa} / 10
              </span>
            </div>
            <div className="about-stat-row">
              <span className="about-stat-label">TIMELINE</span>
              <span className="about-stat-val">{PERSONAL_INFO.stats.graduation}</span>
            </div>
          </div>
        </div>

        <div className="about-copy">
          {PERSONAL_INFO.aboutContent.map((para, i) => (
            <p key={i}>{para}</p>
          ))}

          <div className="about-tags" aria-label="Core Strengths">
            <span>Problem Solving</span>
            <span>Creativity</span>
            <span>Communication</span>
            <span>Continuous Learning</span>
            <span>Time Management</span>
          </div>
        </div>
      </div>

      {/* Core Focus Cards Adapted to Target Aesthetic */}
      <div className="about-focus-grid" style={{ marginTop: "55px" }}>
        {FOCUS_AREAS.map((area, idx) => {
          const IconComp = focusIcons[area.icon] || Brain;
          return (
            <AnimatedCard
              key={area.id}
              className="about-focus-card"
              delay={idx * 0.08}
              tilt={true}
            >
              <div className="focus-card-header">
                <div className="focus-card-icon">
                  <IconComp size={20} />
                </div>
                <span className="focus-card-tag">{area.tag}</span>
              </div>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </AnimatedCard>
          );
        })}
      </div>
    </section>
  );
}
