import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import ps5Image from "./images/ps5.png"; // ✅ PS5 Bild
import internetTvImage from "./images/internet-tv.png"; // ✅ Bild für Internet + TV Special

function InternetPage() {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqs = [
    {
      question: "Welche Internet-Abos bietet TechCom?",
      answer: "TechCom bietet flexible Internet-Abos mit Geschwindigkeiten von 100 Mbit/s bis 10 Gbit/s – perfekt für Streaming, Gaming und Homeoffice."
    },
    {
      question: "Welche Internetgeschwindigkeit benötige ich?",
      answer: "Für einfaches Surfen reichen 100 Mbit/s. Für Streaming und Homeoffice empfehlen wir 1 Gbit/s, und für High-End-Gaming oder grosse Haushalte sind 10 Gbit/s ideal."
    },
    {
      question: "Welche Vorteile bieten Internet-Abos von TechCom?",
      answer: "Unsere Abos bieten ultraschnelles Glasfaser-Internet, gratis WLAN-Router, integrierten Surf-Schutz und flexible Tarife ohne versteckte Kosten."
    },
    {
      question: "Wie kann ich mein Internet-Abo zu TechCom wechseln?",
      answer: "Einfach online das gewünschte Abo auswählen und Verfügbarkeit prüfen. Unser Team kümmert sich um den nahtlosen Wechsel von Ihrem aktuellen Anbieter."
    },
    {
      question: "Welche kostenlosen Zusatzleistungen bieten Internet-Abos von TechCom?",
      answer: "Unsere Abos beinhalten einen Gratis-WLAN-Router, Kinderschutz, Firewall, sowie Zugang zu unseren exklusiven WLAN-Hotspots in der ganzen Schweiz."
    }
  ];

  const internetProducts = [
    {
      title: "🏠 TechCom Connect S",
      speed: "Bis zu 100 Mbit/s Download & Upload",
      router: "Gratis WLAN-Router mit Wi-Fi 6",
      security: "Integrierte Firewall & Jugendschutz",
      extras: ["Kostenlose WLAN-Hotspots", "Sicherer Surf-Schutz"],
      price: "39.90 CHF/Monat",
      oldPrice: "64.90 CHF"
    },
    {
      title: "🔥 TechCom Connect M",
      speed: "Bis zu 1 Gbit/s Download & Upload",
      router: "Gratis High-Speed WLAN-Router",
      security: "Erweiterte Firewall & Virenschutz",
      extras: ["Optimiert für Streaming & Gaming"],
      price: "49.90 CHF/Monat",
      oldPrice: "79.90 CHF"
    },
    {
      title: "🚀 TechCom Connect L",
      speed: "Bis zu 10 Gbit/s Download & Upload",
      router: "Gratis Router mit Wi-Fi 7",
      security: "Maximale Sicherheit + VPN inklusive",
      extras: ["Ideal für E-Sports & 4K-Streaming"],
      price: "59.90 CHF/Monat",
      oldPrice: "89.90 CHF"
    }
  ];

  return (
    <div>
      {/* 🔹 Navigation mit "Über TechCom" Button */}
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

      {/* 🔹 Hauptbereich */}
      <main>
        <section className="hero">
          <h1>Die besten Internet-Abos der Schweiz</h1>
          <p>Surfen Sie im grössten Glasfasernetz der Schweiz mit gratis Router & Surf-Schutz.</p>
          <p className="promo">🎁 <strong>Jetzt alle Abos für 59.90 CHF/Monat.</strong></p>
          <div className="address-check">
            <input type="text" id="address" placeholder="Strasse, Ort oder PLZ eingeben" />
            <button className="check-availability">Jetzt prüfen</button>
          </div>
        </section>

        {/* 📌 Angebots-Banner */}
        <section className="offer-banner">
          <h2>Entscheiden Sie sich für das Angebot Ihrer Wahl</h2>
          <div className="internet-offer-container">
            <div className="internet-offer-box">
              <img src={ps5Image} alt="PS5 Angebot" className="internet-offer-image" />
              <div className="internet-offer-content">
                <p>Zum besten Internet und beliebtesten TV-Abo</p>
                <h3>Nur bis 02.03. – PlayStation®5 Slim geschenkt</h3>
                <p className="internet-offer-price">💰 <span>104.90 CHF/Monat</span></p>
                <Link to="/angebot" className="internet-offer-btn">➝ Zum Angebot</Link>
              </div>
            </div>

            <div className="internet-offer-box">
              <img src={internetTvImage} alt="Internet + TV Angebot" className="internet-offer-image" />
              <div className="internet-offer-content">
                <p>Bestes Internet und beliebtestes TV</p>
                <h3>Alle Internet und TV-Abos 1 Jahr für 59.90/Mt.</h3>
                <p className="internet-offer-price">💰 <span>114.90 CHF/Monat</span></p>
                <Link to="/angebot" className="internet-offer-btn">➝ Zum Angebot</Link>
              </div>
            </div>
          </div>
        </section>

        {/* 🔹 Häufige Fragen Sektion */}
        <section className="faq-section">
          <h2>❓ Häufige Fragen</h2>
          <div className="faq-container">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button className="faq-question" onClick={() => toggleQuestion(index)}>
                  {faq.question}
                  <span className="faq-icon">{openQuestion === index ? "▲" : "▼"}</span>
                </button>
                {openQuestion === index && <p className="faq-answer">{faq.answer}</p>}
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* 🔹 Footer */}
      <footer>
        <p>&copy; 2025 TechCom - Alle Rechte vorbehalten</p>
      </footer>
    </div>
  );
}

export default InternetPage;
