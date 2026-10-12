import React, { useState, useEffect } from "react";
import { ArrowUpRight, Github, Menu, X, FileText } from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";

export default function Navbar() {
  const [menu, setMenu] = useState(false);

  const closeMenu = () => setMenu(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && menu) {
        setMenu(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menu]);

  useEffect(() => {
    if (menu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menu]);

  const navLinks = [
    { label: "ABOUT", href: "#about" },
    { label: "SKILLS", href: "#skills" },
    { label: "PROJECTS", href: "#projects" },
    { label: "EXPERIENCE", href: "#experience" },
    { label: "EDUCATION", href: "#education" },
    { label: "CERTIFICATIONS", href: "#certifications" },
    { label: "REPOSITORIES", href: "#building-in-public" },
    { label: "CONTACT", href: "#contact" }
  ];

  return (
    <header className="nav" role="banner">
      <a className="brand" href="#home" onClick={closeMenu} aria-label="Kumar Ponmani Home">
        <span className="brand-dot" aria-hidden="true" />
        <span className="brand-mark">KP</span>
        <span className="brand-title">KUMAR PONMANI</span>
        <span className="brand-sub">AI / ML</span>
      </a>

      <nav className={menu ? "nav-links open" : "nav-links"} aria-label="Main Navigation">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}

        <a
          className="nav-resume-link"
          href={PERSONAL_INFO.resumePath}
          download="Kumar_Ponmani_Resume.pdf"
          onClick={closeMenu}
        >
          <FileText size={14} /> RÉSUMÉ
        </a>

        <a
          className="nav-github-btn"
          href={PERSONAL_INFO.github}
          target="_blank"
          rel="noreferrer"
          onClick={closeMenu}
        >
          <Github size={15} /> GitHub
        </a>
      </nav>

      <a className="nav-cta" href={`mailto:${PERSONAL_INFO.email}`}>
        Let's Talk <ArrowUpRight size={15} />
      </a>

      <button
        className="menu-btn"
        onClick={() => setMenu(!menu)}
        aria-label={menu ? "Close menu" : "Open menu"}
        aria-expanded={menu}
      >
        {menu ? <X size={24} /> : <Menu size={24} />}
      </button>
    </header>
  );
}
