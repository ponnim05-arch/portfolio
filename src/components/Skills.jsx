import React, { useState } from "react";
import {
  BrainCircuit,
  Code2,
  Cpu,
  Database,
  Github,
  Layers3,
  Network,
  Sparkles,
  Terminal,
  Filter
} from "lucide-react";
import { SKILLS_CATEGORIZED } from "../data/portfolioData";
import AnimatedCard from "./AnimatedCard";

function SkillIcon({ name, size = 18 }) {
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

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const categories = ["ALL", ...SKILLS_CATEGORIZED.map((c) => c.category)];

  const allSkills = SKILLS_CATEGORIZED.flatMap((cat) =>
    cat.skills.map((s) => ({ ...s, group: cat.category }))
  );

  const displayedSkills =
    selectedCategory === "ALL"
      ? allSkills
      : allSkills.filter((s) => s.group === selectedCategory);

  return (
    <section className="section" id="skills" aria-label="Technical Skills">
      <div className="section-heading">
        <div className="section-label">02 — SKILLS</div>
        <h2>
          My technical <span>toolbox.</span>
        </h2>
        <p className="section-subtitle">
          Categorized competencies across machine learning, deep learning architectures, full-stack APIs, and software engineering tools.
        </p>
      </div>

      {/* Category Selection Tabs */}
      <div className="filter-tabs" role="tablist" aria-label="Skill categories">
        {categories.map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={selectedCategory === cat}
            className={`filter-btn ${selectedCategory === cat ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat === "ALL" ? `ALL SKILLS (${allSkills.length})` : cat}
          </button>
        ))}
      </div>

      {/* Skills Grid strictly using existing target skill-card markup and animations */}
      <div className="skills-grid">
        {displayedSkills.map((skill, i) => (
          <AnimatedCard
            className="skill-card"
            key={`${skill.name}-${i}`}
            delay={i * 0.035}
            tilt={true}
          >
            <div className="skill-icon">
              <SkillIcon name={skill.icon} />
            </div>
            <div>
              <h3>{skill.name}</h3>
              <p>{skill.type}</p>
            </div>
          </AnimatedCard>
        ))}
      </div>
    </section>
  );
}
