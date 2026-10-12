import React, { useState } from "react";
import { ArrowUpRight, Copy, Check, Github, ExternalLink, Mail, Phone } from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";

export default function Contact({ onNotify }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopied(true);
      if (onNotify) {
        onNotify(`Email copied to clipboard: ${PERSONAL_INFO.email}`);
      }
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section className="contact" id="contact" aria-label="Contact">
      <div className="contact-orb" aria-hidden="true" />
      <div className="section-label">09 — CONTACT</div>

      <h2>
        Let's build the
        <br />
        <span>next intelligent thing.</span>
      </h2>

      <p>
        Have an idea, internship opportunity, or research collaboration in AI/ML? Let's connect.
      </p>

      <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap", marginBottom: "20px" }}>
        <a className="contact-mail" href={`mailto:${PERSONAL_INFO.email}`}>
          {PERSONAL_INFO.email} <ArrowUpRight />
        </a>

        <button
          onClick={handleCopyEmail}
          className="btn ghost copy-email-btn"
          title="Copy email address"
          aria-label="Copy email address"
        >
          {copied ? <Check size={16} color="var(--green)" /> : <Copy size={16} />}
          <span>{copied ? "Copied!" : "Copy Email"}</span>
        </button>
      </div>

      <div className="social-row">
        <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer">
          <Github size={18} /> GitHub
        </a>
        <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer">
          <ExternalLink size={17} /> LinkedIn
        </a>
        <a href={`tel:${PERSONAL_INFO.phone}`}>
          <Phone size={17} /> {PERSONAL_INFO.phone}
        </a>
      </div>
    </section>
  );
}
