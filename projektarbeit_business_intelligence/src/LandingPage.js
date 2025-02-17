import React, { useState } from "react";
import "./styles.css";

function LandingPage() {
  const [address, setAddress] = useState("");

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

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
            <li><a href="/">Home</a></li>
            <li><a href="/internet">Internet</a></li>
            <li><a href="/tv">TV</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Anmelden</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1>TechCom Internet-Abos</h1>
          <p>Schnelles Glasfaser-Internet mit gratis Router & Surf-Schutz.</p>
          <p className="promo">🎁 <strong>Jetzt alle Abos nur 59.90 CHF/Monat.</strong></p>
          <p className="sustainability">🌱 <strong>TechCom setzt auf nachhaltige Technologien für eine grünere Zukunft.</strong></p>
          <div className="address-check">
            <input 
              type="text" 
              id="address" 
              placeholder="Strasse, Ort oder PLZ eingeben" 
              value={address} 
              onChange={handleAddressChange}
            />
            <button className="check-availability">Jetzt prüfen</button>
          </div>
        </section>

        <section className="company-info">
          <h2>Über TechCom</h2>
          <p>TechCom bietet Glasfaser-Internet, TV & Mobilfunk in der Schweiz.</p>
          <p><strong>Projektarbeit im Fach Business Intelligence</strong></p>
        </section>

        {/* Produktübersicht mit gleicher Struktur wie TV- & Internet-Seite */}
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

      <footer>
        <p>&copy; 2025 TechCom - Alle Rechte vorbehalten</p>
      </footer>
    </div>
  );
}

export default LandingPage;
