import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import "./styles.css"; // Deine CSS-Datei

function SupportPage() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleClick = (topic) => {
    setSelectedTopic(selectedTopic === topic ? null : topic);
  };

  return (
    <div>
      {/* 🔹 Navigationsleiste mit "Preisvergleich" und "Über uns" hinzugefügt */}
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/internet">Internet</Link></li>
            <li><Link to="/tv">TV</Link></li>
            <li><Link to="/support">Support</Link></li>
            <li><Link to="/preisvergleich">Preisvergleich</Link></li> {/* ✅ Neu hinzugefügt */}
            <li><Link to="/about">Über uns</Link></li>
            <li><Link to="/about-techcom">Über TechCom</Link></li>
            <li><Link to="/login">Anmelden</Link></li>
          </ul>
        </nav>
      </header>

      <div className="support-container">
        {/* 🔹 Überschrift */}
        <h1>📞 Kontakt & Support</h1>
        <p>Wählen Sie Ihr Anliegen und treten Sie mit uns in Kontakt.</p>

        {/* 🔹 Support-Buttons */}
        <div className="support-options">
          <button className="support-btn" onClick={() => handleClick("beratung")}>
            💬 Beratung & Bestellung
          </button>
          <button className="support-btn" onClick={() => handleClick("produkt")}>
            ⚙️ Produkt einrichten
          </button>
          <button className="support-btn" onClick={() => handleClick("stoerung")}>
            📞 Störungen & Reparaturen
          </button>
          <button className="support-btn" onClick={() => handleClick("rechnung")}>
            💰 Rechnungen & Bezahlen
          </button>
          <button className="support-btn" onClick={() => handleClick("vertraege")}>
            📑 Verträge & Daten
          </button>
          <button className="support-btn" onClick={() => handleClick("wechsel")}>
            🔄 Wechsel zu TechCom
          </button>
          <button className="support-btn" onClick={() => handleClick("kuendigung")}>
            🚫 Kündigung
          </button>
        </div>

        {/* 🔹 Detailansicht */}
        {selectedTopic === "beratung" && (
          <div className="support-detail">
            <h2>💬 Beratung & Bestellung</h2>
            <p>Wie können wir Ihnen helfen?</p>
            <ul>
              <li>📞 <strong>Hotline:</strong> 0800 300 300 (08:00 - 20:00)</li>
              <li>📩 <strong>Kontaktformular:</strong> <a href="#">Hier ausfüllen</a></li>
              <li>💬 <strong>Live-Chat:</strong> <a href="#">Jetzt starten</a></li>
            </ul>
          </div>
        )}

        {selectedTopic === "produkt" && (
          <div className="support-detail">
            <h2>⚙️ Produkt einrichten</h2>
            <p>Schritt-für-Schritt-Anleitungen zur Einrichtung deines Geräts.</p>
            <ul>
              <li>📑 <strong>Anleitungen:</strong> <a href="#">Hier ansehen</a></li>
              <li>📞 <strong>Support:</strong> 0800 300 301</li>
            </ul>
          </div>
        )}

        {selectedTopic === "stoerung" && (
          <div className="support-detail">
            <h2>📞 Störungen & Defekte</h2>
            <p>Überprüfe den aktuellen Status oder melde ein Problem.</p>
            <ul>
              <li>🔍 <strong>Störungsmeldung:</strong> <a href="#">Hier prüfen</a></li>
              <li>📞 <strong>Technischer Support:</strong> 0800 300 302</li>
            </ul>
          </div>
        )}

        {selectedTopic === "rechnung" && (
          <div className="support-detail">
            <h2>💰 Rechnungen & Bezahlen</h2>
            <p>Alles zu deinen Rechnungen und Zahlungsmöglichkeiten.</p>
            <ul>
              <li>🧾 <strong>Rechnung einsehen:</strong> <a href="#">Hier öffnen</a></li>
              <li>💳 <strong>Zahlungsmethoden:</strong> <a href="#">Hier ändern</a></li>
            </ul>
          </div>
        )}

        {selectedTopic === "vertraege" && (
          <div className="support-detail">
            <h2>📑 Verträge & Daten</h2>
            <p>Vertragsdetails und persönliche Daten verwalten.</p>
            <ul>
              <li>📜 <strong>Vertrag einsehen:</strong> <a href="#">Hier öffnen</a></li>
              <li>📧 <strong>Daten ändern:</strong> <a href="#">Hier aktualisieren</a></li>
            </ul>
          </div>
        )}

        {selectedTopic === "wechsel" && (
          <div className="support-detail">
            <h2>🔄 Wechsel zu TechCom</h2>
            <p>Wechsle zu TechCom in wenigen Schritten.</p>
            <ul>
              <li>📄 <strong>Wechselantrag:</strong> <a href="#">Jetzt starten</a></li>
              <li>☎️ <strong>Kostenlose Beratung:</strong> 0800 300 303</li>
            </ul>
          </div>
        )}

        {selectedTopic === "kuendigung" && (
          <div className="support-detail">
            <h2>🚫 Kündigung</h2>
            <p>Hier kannst du dein Abo kündigen oder anpassen.</p>
            <ul>
              <li>📄 <strong>Kündigung einreichen:</strong> <a href="#">Hier beantragen</a></li>
              <li>📞 <strong>Beratung zur Kündigung:</strong> 0800 300 304</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default SupportPage;
