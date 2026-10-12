import React, { useState, useCallback } from "react";
import { createRoot } from "react-dom/client";
import { CheckCircle } from "lucide-react";
import CursorGlow from "./components/CursorGlow";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ExperienceEducation from "./components/ExperienceEducation";
import Certifications from "./components/Certifications";
import BuildingInPublic from "./components/BuildingInPublic";
import ResumeCTA from "./components/ResumeCTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CaseStudyModal from "./components/CaseStudyModal";
import "./styles.css";

function App() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  const showNotification = useCallback((msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 2800);
  }, []);

  const handleScrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app">
      {/* 3D Cursor glow and background textures */}
      <CursorGlow />
      <div className="noise" aria-hidden="true" />
      <div className="grid-bg" aria-hidden="true" />

      {/* Accessible skip link */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Navigation */}
      <Navbar />

      {/* Main Content Flow: Hero → Marquee → About → Skills → Projects → Experience & Education → Certifications → Building in Public → Résumé CTA → Contact */}
      <main id="main-content">
        <Hero onExploreProjects={handleScrollToProjects} />
        <Marquee />
        <About />
        <Skills />
        <Projects onSelectCaseStudy={(proj) => setSelectedCaseStudy(proj)} />
        <ExperienceEducation />
        <Certifications />
        <BuildingInPublic />
        <ResumeCTA />
        <Contact onNotify={showNotification} />
      </main>

      {/* Footer */}
      <Footer />

      {/* 12-Section Project Case Study Modal Drawer */}
      {selectedCaseStudy && (
        <CaseStudyModal
          project={selectedCaseStudy}
          onClose={() => setSelectedCaseStudy(null)}
        />
      )}

      {/* Toast Notification */}
      {toastMessage && (
        <div className="toast-notification" role="status" aria-live="polite">
          <CheckCircle size={16} color="var(--cyan)" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}

const rootEl = document.getElementById("root");
if (rootEl) {
  if (!window.__reactRoot) {
    window.__reactRoot = createRoot(rootEl);
  }
  window.__reactRoot.render(<App />);
}
