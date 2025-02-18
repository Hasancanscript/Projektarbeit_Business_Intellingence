import React from "react";
import "./styles.css";
import ps5Image from "./images/ps5.png"; // ✅ PS5-Bild importiert

function OfferPage() {
  return (
    <div className="offer-page">
      {/* Angebots-Banner */}
      <section className="offer-banner">
        <h2>Entscheiden Sie sich für das Angebot Ihrer Wahl</h2>
        <div className="offer-container">
          
          {/* Angebot 1: PS5 Slim Geschenk */}
          <div className="offer-box">
            <img src={ps5Image} alt="PS5 Angebot" className="offer-image" />
            <div className="offer-content">
              <p>Zum besten Internet und beliebtesten TV-Abo</p>
              <h3>Nur bis 02.03. – PlayStation®5 Slim geschenkt</h3>
              <p className="offer-price">💰 104.90 CHF/Monat</p>
              <a href="#" className="offer-btn">→ Zum Angebot</a>
            </div>
          </div>

          {/* Angebot 2: Internet + TV Special */}
          <div className="offer-box">
            {/* ❌ Problematisches Bild entfernt */}
            <div className="offer-content">
              <p>Bestes Internet und beliebtestes TV</p>
              <h3>Alle Internet und TV-Abos 1 Jahr für 59.90/Mt.</h3>
              <p className="offer-price">💰 114.90 CHF/Monat</p>
              <a href="#" className="offer-btn">→ Zum Angebot</a>
            </div>
          </div>
        </div>
      </section>

      {/* Hotline-Bereich */}
      <section className="offer-hotline">
        <p>📞 Hast du Fragen? Wir beraten dich gerne: <a href="tel:0800300300">0800 300 300</a></p>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 TechCom - Alle Rechte vorbehalten</p>
      </footer>
    </div>
  );
}

export default OfferPage;
