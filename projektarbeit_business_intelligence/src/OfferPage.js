import React from "react";
import "./styles.css";
import ps5Image from "./images/ps5.png"; // ✅ PS5-Bild importiert
import internetTvImage from "./images/internet-tv.png"; // ✅ Internet-TV-Bild importiert

function OfferPage() {
  return (
    <div className="offer-page">
      {/* Angebots-Banner */}
      <section className="offer-banner">
        <h2>Entscheiden Sie sich für das Angebot Ihrer Wahl</h2>
        <div className="offer-container">
          
          {/* Angebot 1: PS5 Slim Geschenk */}
          <div className="offer-box-offerpage">
            <img src={ps5Image} alt="PS5 Angebot" className="offer-image-offerpage" />
            <div className="offer-content-offerpage">
              <p className="offer-subtitle">Zum besten Internet und beliebtesten TV-Abo</p>
              <h3 className="offer-title">Nur bis 02.03. – PlayStation®5 Slim geschenkt</h3>
              <p className="offer-description">
                <ul>
                  <li>Bis zu 1 Gbit/s Internetgeschwindigkeit</li>
                  <li>290+ TV-Sender inkl. Replay</li>
                  <li>Inkl. Router mit Wi-Fi 6</li>
                </ul>
              </p>
              <p className="offer-price-offerpage">💰 104.90 CHF/Monat</p>
              <a href="#" className="offer-btn-offerpage">→ Zum Angebot</a>
            </div>
          </div>

          {/* Angebot 2: Internet + TV Special */}
          <div className="offer-box-offerpage">
            <img src={internetTvImage} alt="Internet + TV Angebot" className="offer-image-offerpage" />
            <div className="offer-content-offerpage">
              <p className="offer-subtitle">Bestes Internet und beliebtestes TV</p>
              <h3 className="offer-title">Alle Internet und TV-Abos 1 Jahr für 59.90/Mt.</h3>
              <p className="offer-description">
                <ul>
                  <li>Bis zu 10 Gbit/s Download & Upload</li>
                  <li>300+ Sender, inkl. UHD & Replay</li>
                  <li>High-Speed WLAN-Router inklusive</li>
                </ul>
              </p>
              <p className="offer-price-offerpage">💰 114.90 CHF/Monat</p>
              <a href="#" className="offer-btn-offerpage">→ Zum Angebot</a>
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
