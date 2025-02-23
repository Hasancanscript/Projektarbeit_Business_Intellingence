import React, { useEffect } from "react"; // 🔹 useEffect hinzugefügt
import { Link } from "react-router-dom";
import "./styles.css"; // ✅ Stelle sicher, dass styles.css im selben Ordner existiert

// ✅ Video-Pfade aus `public/assets/`
const skySportVideo = "/assets/sky-sport.mp4";
const disneyVideo = "/assets/disney.mp4";
const netflixVideo = "/assets/netflix.mp4";

// ✅ Bilder der Streaming-Produkte aus `public/assets/`
const skySportImage = "/assets/sky-sport-logo.png";
const disneyImage = "/assets/disney-logo.png";
const netflixImage = "/assets/netflix-logo.png";

function StreamingPartners() {
  // 🔹 Scrollt automatisch nach oben beim Laden
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* 🔹 Navigationsbereich */}
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/internet">Internet</Link></li>
            <li><Link to="/tv">TV</Link></li>
            <li><Link to="/support">Support</Link></li>
            <li><Link to="/preisvergleich">Preisvergleich</Link></li>
            <li><Link to="/about">Über uns</Link></li>
            <li><Link to="/login">Anmelden</Link></li>
          </ul>
        </nav>
      </header>

      {/* 🔹 Hauptinhalt */}
      <main>
        <h1>Unsere Streaming-Partner</h1>
        <p>Erleben Sie beste Unterhaltung mit unseren exklusiven Streaming-Partnern.</p>

        {/* 🔹 Video-Bereich */}
        <div className="video-section">
          <div className="video-card">
            <h2>⚽ Sky Sport</h2>
            <div className="video-border">
              <video muted autoPlay loop playsInline>
                <source src={skySportVideo} type="video/mp4" />
                Dein Browser unterstützt das Video-Tag nicht.
              </video>
            </div>
          </div>

          <div className="video-card">
            <h2>🎬 Disney+</h2>
            <div className="video-border">
              <video muted autoPlay loop playsInline>
                <source src={disneyVideo} type="video/mp4" />
                Dein Browser unterstützt das Video-Tag nicht.
              </video>
            </div>
          </div>

          <div className="video-card">
            <h2>📺 Netflix</h2>
            <div className="video-border">
              <video muted autoPlay loop playsInline>
                <source src={netflixVideo} type="video/mp4" />
                Dein Browser unterstützt das Video-Tag nicht.
              </video>
            </div>
          </div>
        </div>

        {/* 🔹 Streaming-Produkte unter den Videos */}
        <section className="streaming-products">
          <h2>📺 Wählen Sie Ihr Streaming-Paket</h2>

          <div className="product-grid">
            {/* Disney+ */}
            <div className="product-card">
              <img src={disneyImage} alt="Disney+" className="product-logo" />
              <div className="product-content">
                <p><strong>Disney+</strong>: Nonstop-Entertainment mit den neuesten Blockbustern und jeder Menge Serien von Disney, Pixar, Marvel, Star Wars, National Geographic und Star.</p>
                <p className="highlight">🎁 Die ersten 3 Monate für nur 7.90 CHF/Monat.</p>
                <p className="price"><strong>Ab 7.90 CHF/Monat</strong></p>
              </div>
              <button className="subscribe-btn">Paket wählen</button>
            </div>

            {/* Netflix */}
            <div className="product-card">
              <img src={netflixImage} alt="Netflix" className="product-logo" />
              <div className="product-content">
                <p><strong>Netflix</strong>: Riesige Auswahl an Spielfilmen, Dokumentationen, Serien, Anime, preisgekrönten Netflix-Originals und mehr. Schauen Sie, wann und wo Sie möchten.</p>
                <p className="highlight">💡 Verfügbar in verschiedenen Abo-Varianten.</p>
                <p className="price"><strong>Ab 12.90 CHF/Monat</strong></p>
              </div>
              <button className="subscribe-btn">Paket wählen</button>
            </div>

            {/* Sky Sport */}
            <div className="product-card">
              <img src={skySportImage} alt="Sky Sport" className="product-logo" />
              <div className="product-content">
                <p><strong>Sky Sport</strong>: Das beste Sportangebot mit Sky Sport Expertise.</p>
                <p><strong>⚽ Fussball:</strong> Premier League, Bundesliga, Serie A, Cupspiele und mehr.</p>
                <p><strong>🎾 Tennis & Motorsport:</strong> Wimbledon, Formel 1, DP World Tour.</p>
                <p><strong>🥊 Weitere Sportarten:</strong> UFC, MMA, Basketball, Handball, Cricket.</p>
                <p className="price"><strong>24.90 CHF/Monat</strong></p>
              </div>
              <button className="subscribe-btn">Paket wählen</button>
            </div>
          </div>
        </section>

        <div className="back-button">
          <Link to="/">⬅️ Zurück zur Startseite</Link>
        </div>
      </main>

      {/* 🔹 Footer */}
      <footer>
        <p>&copy; 2025 TechCom - Alle Rechte vorbehalten</p>
      </footer>
    </div>
  );
}

export default StreamingPartners;
