import React from "react";
import "./styles.css";

function OfferPage() {
  return (
    <div className="offer-page">
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
        <section className="offer-hero">
          <h1>🎁 PlayStation®5 Slim geschenkt zum besten Internet & TV-Abo</h1>
          <p>Jetzt profitieren: Sichere dir ultraschnelles Internet mit exklusiven Extras.</p>
        </section>

        <section className="offer-container">
          <div className="offer-card">
            <img src="ps5-internet.png" alt="PS5 Angebot" className="offer-image" />
            <h2>Internet M + TV M + PS5 Slim</h2>
            <ul>
              <li>Bis zu 1 Gbit/s Internetgeschwindigkeit</li>
              <li>290+ TV-Sender und Replay TV</li>
              <li>Gratis Router mit Wi-Fi 6</li>
              <li>PS5 Slim geschenkt</li>
            </ul>
            <p className="offer-price">💰 104.90 CHF/Monat</p>
            <button className="offer-btn">Zum Angebot</button>
          </div>

          <div className="offer-card">
            <img src="ps5-premium.png" alt="PS5 Premium Angebot" className="offer-image" />
            <h2>Internet L + TV M + PS5 Slim</h2>
            <ul>
              <li>Bis zu 10 Gbit/s Internetgeschwindigkeit</li>
              <li>290+ TV-Sender und Replay TV</li>
              <li>Gratis Router mit Wi-Fi 7</li>
              <li>PS5 Slim geschenkt</li>
            </ul>
            <p className="offer-price">💰 114.90 CHF/Monat</p>
            <button className="offer-btn">Zum Angebot</button>
          </div>
        </section>

        <section className="offer-hotline">
          <p>📞 Hast du Fragen? Wir beraten dich gerne: <a href="tel:0800300300">0800 300 300</a></p>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 TechCom - Alle Rechte vorbehalten</p>
      </footer>
    </div>
  );
}

export default OfferPage;
