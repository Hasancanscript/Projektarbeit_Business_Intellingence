import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles.css"; // ✅ Bestehende CSS-Datei bleibt!

const AboutTechCom = () => {
  useEffect(() => {
    // Fügt nach der Animation die "animated"-Klasse hinzu
    const items = document.querySelectorAll(".techcom-value-item");
    items.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add("animated");
      }, (index + 1) * 800); // Verzögerung für jeden Wert
    });
  }, []);

  return (
    <div className="techcom-page">
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/internet">Internet</Link></li>
            <li><Link to="/tv">TV</Link></li>
            <li><Link to="/support">Support</Link></li>
            <li><Link to="/preisvergleich">Preisvergleich</Link></li>
            <li><Link to="/about">Über uns</Link></li>
            <li><Link to="/about-techcom">Über TechCom</Link></li>
            <li><Link to="/login">Anmelden</Link></li>
          </ul>
        </nav>
      </header>

      {/* 🔹 Inhaltsbereich nur für TechCom */}
      <div className="techcom-container">
        <h1 className="techcom-title">Über TechCom – Vision, Strategie und Werte</h1>
        <p className="techcom-intro">
          Wir gestalten die digitale Zukunft mit innovativen Lösungen in den Bereichen Internet, TV und Telekommunikation.
          Unsere Vision, Strategie und Werte sind die Grundlage unseres Handelns.
        </p>

        <section className="techcom-purpose">
          <h2>Unser Purpose</h2>
          <p>"Innovative digitale Lösungen für eine vernetzte Welt"</p>
        </section>

        <section className="techcom-vision">
          <h2>Unsere Vision</h2>
          <p>"TechCom – Dein zuverlässiger Partner für digitale Konnektivität."</p>
        </section>

        <section className="techcom-values">
          <h2>Unsere Werte</h2>
          <div className="techcom-values-grid">
            <div className="techcom-value-item">
              <h3>Vertrauenswürdig</h3>
              <p>Wir stehen für Sicherheit, Datenschutz und Qualität.</p>
            </div>
            <div className="techcom-value-item">
              <h3>Innovativ</h3>
              <p>Wir entwickeln moderne Technologien für eine vernetzte Zukunft.</p>
            </div>
            <div className="techcom-value-item techcom-full-width">
              <h3>Kundenorientiert</h3>
              <p>Unsere Lösungen sind auf die individuellen Bedürfnisse unserer Kunden abgestimmt.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutTechCom;
