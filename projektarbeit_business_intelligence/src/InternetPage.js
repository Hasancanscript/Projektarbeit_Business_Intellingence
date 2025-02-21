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
      {/* 🔹 Navigation */}
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/internet">Internet</Link></li>
            <li><Link to="/tv">TV</Link></li>
            <li><Link to="/support">Support</Link></li>
            <li><Link to="/preisvergleich">Preisvergleich</Link></li> {/* ✅ Jetzt mit "Preisvergleich" */}
            <li><Link to="/about">Über uns</Link></li> 
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
            
            {/* Angebot 1: PS5 Slim Geschenk */}
            <div className="internet-offer-box">
              <img src={ps5Image} alt="PS5 Angebot" className="internet-offer-image" />
              <div className="internet-offer-content">
                <p>Zum besten Internet und beliebtesten TV-Abo</p>
                <h3>Nur bis 02.03. – PlayStation®5 Slim geschenkt</h3>
                <p className="internet-offer-price">💰 <span>104.90 CHF/Monat</span></p>
                <Link to="/angebot" className="internet-offer-btn">➝ Zum Angebot</Link>
              </div>
            </div>

            {/* Angebot 2: Internet + TV Special */}
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

        {/* 🔹 Produktübersicht */}
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

      {/* 🔹 Footer */}
      <footer>
        <p>&copy; 2025 TechCom - Alle Rechte vorbehalten</p>
      </footer>
    </div>
  );
}

export default InternetPage;
