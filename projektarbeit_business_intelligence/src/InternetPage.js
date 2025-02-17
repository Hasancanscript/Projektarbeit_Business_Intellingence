import React, { useState } from "react";
import "./styles.css";

function InternetPage() {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

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

  const faqItems = [
    { question: "Welche Internet-Abos bietet TechCom?", answer: "TechCom bietet verschiedene Internet-Abos mit Geschwindigkeiten von 100 Mbit/s bis 10 Gbit/s." },
    { question: "Welche Internetgeschwindigkeit benötige ich?", answer: "Das hängt von Ihrem Bedarf ab. Normales Surfen: 100 Mbit/s, Streaming & Gaming: 1 Gbit/s oder mehr." },
    { question: "Welche Vorteile bietet TechCom Internet?", answer: "Unsere Abos bieten ultraschnelles Internet, kostenloses WLAN, Sicherheitspakete und eine stabile Verbindung." },
    { question: "Wie kann ich mein Internet-Abo zu TechCom wechseln?", answer: "Ein Wechsel ist einfach: Bestellen Sie Ihr neues Abo, und wir kümmern uns um den Rest." },
    { question: "Gibt es kostenlose Zusatzleistungen?", answer: "Ja, Sie erhalten kostenlose WLAN-Hotspots, sicheres Surfen und einen gratis Router." }
  ];

  return (
    <div>
      {/* Navigation */}
      <header>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/internet">Internet</a></li>
            <li><a href="/tv">TV</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Anmelden</a></li>
          </ul>
        </nav>
      </header>

      {/* Hauptbereich */}
      <main>
        <section className="hero">
          <h1>Die besten Internet-Abos der Schweiz</h1>
          <p>Surfen Sie im größten Glasfasernetz der Schweiz mit gratis Router & Surf-Schutz.</p>
          <p className="promo">🎁 <strong>Jetzt alle Abos für 59.90 CHF/Monat.</strong></p>
          <div className="address-check">
            <input type="text" id="address" placeholder="Strasse, Ort oder PLZ eingeben" />
            <button className="check-availability">Jetzt prüfen</button>
          </div>
        </section>

        {/* 📌 Angebots-Banner */}
        <section className="offer-banner">
          <h2>Entscheiden Sie sich für das Angebot Ihrer Wahl</h2>
          <div className="offer-container">
            <div className="offer-box">
              <img src="https://via.placeholder.com/100" alt="PS5 Angebot" />
              <p>Zum besten Internet und beliebtesten TV-Abo</p>
              <h3>Nur bis 02.03. – PlayStation®5 Slim geschenkt</h3>
              <a href="#">➝ Zum Angebot</a>
            </div>
            <div className="offer-box">
              <img src="https://via.placeholder.com/100" alt="Internet + TV" />
              <p>Bestes Internet und beliebtestes TV</p>
              <h3>Alle Internet und TV-Abos 1 Jahr für 59.90/Mt.</h3>
              <a href="#">➝ Zum Angebot</a>
            </div>
          </div>
        </section>

        {/* Produktübersicht */}
        <section className="internet-products">
          {internetProducts.map((product, index) => (
            <div className="internet-card" key={index}>
              <h3 className="internet-title">{product.title}</h3>
              <div className="internet-info">
                <p><strong>Internet-Geschwindigkeit</strong></p>
                <p>{product.speed}</p>

                <p><strong>WLAN-Router</strong></p>
                <p>{product.router}</p>

                <p><strong>Sicherheit</strong></p>
                <p>{product.security}</p>

                <p><strong>Zusatzleistungen</strong></p>
                <p>{product.extras.join(", ")}</p>
              </div>
              <p className="price">
                <del>{product.oldPrice}</del> <strong>{product.price}</strong>
              </p>
              <button className="subscribe-btn">Abo wählen</button>
            </div>
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 TechCom - Alle Rechte vorbehalten</p>
      </footer>
    </div>
  );
}

export default InternetPage;
