import React from "react";
import { PERSONAL_INFO } from "../data/portfolioData";

export default function Marquee() {
  const items = PERSONAL_INFO.marqueeTechnologies || [
    "PYTHON",
    "MACHINE LEARNING",
    "GENERATIVE AI",
    "TENSORFLOW",
    "REACT",
    "REST APIs",
    "NLP",
    "FLASK"
  ];

  // Duplicate list to achieve continuous infinite marquee loop
  const displayItems = [...items, ...items];

  return (
    <section className="marquee-section" aria-label="Technology Marquee">
      <div className="marquee">
        {displayItems.map((tech, i) => (
          <React.Fragment key={`${tech}-${i}`}>
            <span>{tech}</span>
            <b aria-hidden="true">✦</b>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
