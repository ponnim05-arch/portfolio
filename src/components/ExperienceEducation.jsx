import React from "react";
import { Cpu, GraduationCap, Briefcase, Calendar, MapPin } from "lucide-react";
import { EXPERIENCE, EDUCATION } from "../data/portfolioData";
import AnimatedCard from "./AnimatedCard";

export default function ExperienceEducation() {
  return (
    <>
      {/* Experience Section */}
      <section className="section split-section" id="experience" aria-label="Work Experience">
        <div className="section-label">04 — EXPERIENCE</div>
        <div className="section-heading" style={{ marginBottom: "20px" }}>
          <h2>Engineering <span>Experience.</span></h2>
          <p className="section-subtitle">
            Hands-on internship in machine learning concepts, data preprocessing, and collaborative problem solving.
          </p>
        </div>

        {EXPERIENCE.map((exp, idx) => (
          <AnimatedCard className="experience-card" key={idx} tilt={false}>
            <div className="exp-date">{exp.period}</div>
            <div>
              <div className="exp-title-row">
                <h2>{exp.role}</h2>
                <span>{exp.company.toUpperCase()}</span>
              </div>
              <p className="exp-place">{exp.location}</p>
              <p>{exp.bullets[0]}</p>
              {exp.bullets[1] && (
                <p style={{ marginTop: "10px", fontSize: "13.5px" }}>{exp.bullets[1]}</p>
              )}
            </div>
            <div className="exp-symbol" aria-hidden="true">
              <Cpu size={38} />
            </div>
          </AnimatedCard>
        ))}
      </section>

      {/* Education Section */}
      <section className="section" id="education" aria-label="Education History">
        <div className="section-heading">
          <div className="section-label">05 — EDUCATION</div>
          <h2>
            The foundation behind <span>the work.</span>
          </h2>
          <p className="section-subtitle">
            Academic training in Computer Science & Artificial Intelligence with verified marks and transcripts.
          </p>
        </div>

        <div className="timeline">
          {EDUCATION.map((e, i) => (
            <AnimatedCard
              className="timeline-row"
              key={e.degree}
              delay={i * 0.08}
              tilt={false}
            >
              <div className="timeline-dot">{i + 1}</div>
              <div className="timeline-date">{e.period}</div>
              <div className="timeline-content">
                <h3>{e.degree}</h3>
                <p>
                  {e.institution} · {e.location}
                </p>
              </div>
              <strong>{e.score}</strong>
            </AnimatedCard>
          ))}
        </div>
      </section>
    </>
  );
}
