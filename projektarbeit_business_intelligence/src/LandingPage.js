import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import meganFox from "./images/megan-fox.png";
import "./styles.css";

function LandingPage() {
  const [address, setAddress] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  // Pop-up nach 3 Sekunden anzeigen
  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleAddressChange = (e) => setAddress(e.target.value);

  const homeProducts = [
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
      <header>
        <nav>
          <ul>
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/internet">Internet</NavLink></li>
            <li><NavLink to="/tv">TV</NavLink></li>
            <li><NavLink to="/support">Support</NavLink></li>
            <li><NavLink to="/preisvergleich">Preisvergleich</NavLink></li>
            <li><NavLink to="/about">Über uns</NavLink></li>
            <li><NavLink to="/login">Anmelden</NavLink></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1>TechCom Internet-Abos</h1>
          <p>Schnelles Glasfaser-Internet mit gratis Router & Surf-Schutz.</p>
          <div className="address-check">
            <input 
              type="text" 
              placeholder="Strasse, Ort oder PLZ eingeben" 
              value={address} 
              onChange={handleAddressChange}
            />
            <button className="check-availability">Jetzt prüfen</button>
          </div>
        </section>

        <section className="home-products">
          {homeProducts.map((product, index) => (
            <div className="home-card" key={index}>
              <h3 className="home-title">{product.title}</h3>
              <div className="home-info">
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

      {showPopup && (
        <div className="support-popup">
          <div className="support-avatar">
            <img src={meganFox} alt="Support Fee Verkäuferin Megan Fox" />
          </div>
          <div className="support-text">
            <h3>Support Fee</h3>
            <p>„Hey, ich bin Megan! 💖 Hast du gerade nach einem Engel gesucht? Hier bin ich. 😘“</p>
            <p>Und weisst du was? Ich bin die Frau von Simon Gemetti. 😉🔥</p>
          </div>
          <button onClick={() => setShowPopup(false)} className="close-btn">✖</button>
        </div>
      )}
    </div>
  );
}

export default LandingPage;