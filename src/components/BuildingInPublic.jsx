import React from "react";
import { ArrowUpRight, FolderGit2, Github } from "lucide-react";
import { PUBLIC_REPOS, PERSONAL_INFO } from "../data/portfolioData";
import AnimatedCard from "./AnimatedCard";

export default function BuildingInPublic() {
  return (
    <section className="section" id="building-in-public" aria-label="Open Source & Repositories">
      <div className="section-label">07 — OPEN SOURCE</div>
      <div className="section-heading">
        <h2>
          Building in <span>Public.</span>
        </h2>
        <p className="section-subtitle">
          Explore my code, autonomous agents, deep learning architectures, and developer experiments directly on GitHub.
        </p>
      </div>

      <div className="bip-grid">
        {PUBLIC_REPOS.map((repo, idx) => (
          <AnimatedCard
            as="a"
            key={repo.name}
            href={repo.url}
            target="_blank"
            rel="noreferrer"
            className="bip-card"
            delay={idx * 0.05}
            tilt={true}
          >
            <div className="bip-card-top">
              <div style={{ display: "flex", alignItems: "center", gap: "9px" }}>
                <FolderGit2 size={16} color="var(--cyan)" aria-hidden="true" />
                <span className="bip-repo-name">{repo.name}</span>
              </div>
              <ArrowUpRight size={16} className="bip-arrow" aria-hidden="true" />
            </div>

            <div className="bip-title">{repo.title}</div>
            <p className="bip-desc">{repo.desc}</p>

            <div className="tags" style={{ marginTop: "auto", paddingTop: "12px" }}>
              {repo.tech.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </AnimatedCard>
        ))}
      </div>

      <div style={{ marginTop: "36px", textAlign: "center" }}>
        <a
          href={PERSONAL_INFO.github}
          target="_blank"
          rel="noreferrer"
          className="btn primary"
        >
          <Github size={16} /> Explore Ponmani's GitHub Profile
        </a>
      </div>
    </section>
  );
}
