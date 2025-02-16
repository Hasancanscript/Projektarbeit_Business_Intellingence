<<<<<<< HEAD
import React, { useState } from "react";

function LandingPage() {
  const [address, setAddress] = useState("");

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

=======
import React from "react";

function LandingPage() {
>>>>>>> 1da34192b32bcc6a33fdbe791750343aa8f52296
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/internet">Internet</a></li>
            <li><a href="/tv">TV</a></li>
            <li><a href="#">Mobil</a></li>
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
<<<<<<< HEAD
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
=======
          <div className="address-check">
            <input type="text" id="address" placeholder="Adresse eingeben" />
            <button className="check-availability">Prüfen</button>
>>>>>>> 1da34192b32bcc6a33fdbe791750343aa8f52296
          </div>
        </section>

        <section className="company-info">
          <h2>Über TechCom</h2>
          <p>TechCom bietet Glasfaser-Internet, TV & Mobilfunk in der Schweiz.</p>
          <p><strong>Projektarbeit im Fach Business Intelligence</strong></p>
        </section>

        <section className="products">
          {[ 
            { title: "🏠 TechCom Connect S", speed: "Bis zu 100 Mbit/s Download & Upload", router: "Gratis WLAN-Router mit Wi-Fi 6", price: "39.90 CHF/Monat", oldPrice: "64.90 CHF" },
            { title: "🔥 TechCom Connect M", speed: "Bis zu 1 Gbit/s Download & Upload", router: "Gratis High-Speed WLAN-Router", price: "49.90 CHF/Monat", oldPrice: "79.90 CHF" },
            { title: "🚀 TechCom Connect L", speed: "Bis zu 10 Gbit/s Download & Upload", router: "Gratis Router mit Wi-Fi 7", price: "59.90 CHF/Monat", oldPrice: "89.90 CHF" }
          ].map((product, index) => (
            <div className="product" key={index}>
              <h3>{product.title}</h3>
              <p><strong>Internet:</strong> {product.speed}</p>
              <p><strong>Router:</strong> {product.router}</p>
              <p className="price"><del>{product.oldPrice}</del> <strong>{product.price}</strong></p>
              <p className="montage"><del>Techniker-Montage: 249 CHF</del> ✅ Jetzt kostenlos!</p>
              <a href="#" className="details-link">➝ Abo-Details</a>
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
