import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css"; // ✅ Bestehende CSS bleibt!

const AboutTechCom = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsExpanded(scrollPosition > 500); // Ab 500px wird volle Breite aktiviert
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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

      {/* 🔹 Einführung zu TechCom */}
      <section className="techcom-intro">
        <h1>Über TechCom</h1>
        <p>
          Willkommen bei <strong>TechCom</strong> – deinem Partner für innovative Internet- und Telekommunikationslösungen. 
          Unser Ziel ist es, modernste Technologien bereitzustellen, um Menschen und Unternehmen besser zu vernetzen.
        </p>
      </section>

      {/* 🔹 Unsere Mission */}
      <section className="techcom-mission">
        <h2>Unsere Mission</h2>
        <p>
          Wir glauben an eine digitale Zukunft, die <strong>schneller, sicherer und zuverlässiger</strong> ist. 
          Mit TechCom bieten wir hochmoderne Lösungen für Zuhause und Unternehmen, um jederzeit beste Verbindungen zu gewährleisten.
        </p>
      </section>

      {/* 🔹 Warum TechCom? */}
      <section className="techcom-why">
        <h2>Warum TechCom?</h2>
        <div className="techcom-why-grid">
          <div className="techcom-why-item">
            <h3>🚀 Höchste Geschwindigkeiten</h3>
            <p>Erlebe ultraschnelles Internet mit bis zu 10 Gbit/s.</p>
          </div>
          <div className="techcom-why-item">
            <h3>🔒 Sicherheit & Datenschutz</h3>
            <p>Wir garantieren höchste Sicherheitsstandards für deine Daten.</p>
          </div>
          <div className="techcom-why-item">
            <h3>📡 Zukunftssichere Technologie</h3>
            <p>Unsere Netze sind für die digitale Zukunft optimiert.</p>
          </div>
        </div>
      </section>

      {/* 🔹 Unsere Werte mit Apple-ähnlichem Effekt */}
      <section className={`techcom-values ${isExpanded ? "expanded" : ""}`}>
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

      {/* 🔹 TechCom in Zahlen */}
      <section className="techcom-stats">
        <h2>TechCom in Zahlen</h2>
        <div className="techcom-stats-grid">
          <div className="techcom-stats-item">
            <h3>🌍 2 Mio. Kunden</h3>
            <p>Wir versorgen über 2 Millionen Haushalte mit schnellem Internet.</p>
          </div>
          <div className="techcom-stats-item">
            <h3>🚀 10 Gbit/s</h3>
            <p>Die schnellste verfügbare Geschwindigkeit in unserem Netz.</p>
          </div>
          <div className="techcom-stats-item">
            <h3>🏆 99% Netzabdeckung</h3>
            <p>Unser Glasfasernetz deckt fast die gesamte Schweiz ab.</p>
          </div>
        </div>
      </section>

      {/* 🔹 Unser Versprechen */}
      <section className="techcom-promise">
        <h2>Unser Versprechen</h2>
        <p>Bei TechCom steht der Kunde im Mittelpunkt. Wir garantieren:</p>
        <ul>
          <li>✔ Keine versteckten Kosten</li>
          <li>✔ 24/7 Kundenservice</li>
          <li>✔ Ständige Weiterentwicklung unserer Technologie</li>
        </ul>
      </section>

      {/* 🔹 Unsere Partner */}
      <section className="techcom-partners">
        <h2>Unsere Partner</h2>
        <p>Wir arbeiten mit führenden Unternehmen zusammen, um das beste Erlebnis zu bieten:</p>
        <div className="techcom-partners-logos">
          <span>🔹 Swiss Fiber</span>
          <span>🔹 CloudX</span>
          <span>🔹 Telekom Global</span>
        </div>
      </section>
    </div>
  );
};

export default AboutTechCom;
