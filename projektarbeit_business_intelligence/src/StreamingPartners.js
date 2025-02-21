import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';  // ✅ Importiere die richtige CSS-Datei

// ✅ Korrekte Video-URLs aus public/assets/
const skySportVideo = process.env.PUBLIC_URL + "/assets/sky-sport.mp4";
const disneyVideo = process.env.PUBLIC_URL + "/assets/disney.mp4";
const netflixVideo = process.env.PUBLIC_URL + "/assets/netflix.mp4";

function StreamingPartners() {
  return (
    <div className="streaming-container">
      <h1>Unsere Streaming-Partner</h1>
      <p>Erleben Sie beste Unterhaltung mit unseren exklusiven Streaming-Partnern.</p>

      <div className="video-section">
        <div className="video-card">
          <h2>⚽ Sky Sport</h2>
          <div className="video-border">
            <video muted autoPlay loop playsInline>
              <source src={skySportVideo} type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="video-card">
          <h2>🎬 Disney+</h2>
          <div className="video-border">
            <video muted autoPlay loop playsInline>
              <source src={disneyVideo} type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="video-card">
          <h2>📺 Netflix</h2>
          <div className="video-border">
            <video muted autoPlay loop playsInline>
              <source src={netflixVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      <div className="back-button">
        <Link to="/">Zurück zur Startseite</Link>
      </div>
    </div>
  );
}

export default StreamingPartners;
