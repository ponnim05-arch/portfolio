import React from "react";
import { PERSONAL_INFO } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer role="contentinfo">
      <span>© {new Date().getFullYear()} {PERSONAL_INFO.name}</span>
      <span>AI · ML · DEEP LEARNING · SOFTWARE DEVELOPMENT</span>
      <span>PRATHYUSHA ENGINEERING COLLEGE</span>
    </footer>
  );
}
