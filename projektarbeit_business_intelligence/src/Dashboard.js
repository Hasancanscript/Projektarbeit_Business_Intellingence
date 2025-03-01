import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHome, FaGift, FaFileInvoice, FaChartBar, FaWifi, FaTachometerAlt, FaTv, FaUsers, FaPowerOff, FaNetworkWired, FaLock } from "react-icons/fa";
import "./styles.css";
import skySportImage from "./images/sky-sport.png"; // Stelle sicher, dass das Bild existiert
import tvConnectImage from "./images/tv-connect.png"; // Stelle sicher, dass das Bild existiert

function Dashboard() {
  const [user, setUser] = useState({ name: "Hasan Balci" });
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>TechCom</h2>
        <ul>
          <li className="active"><FaHome /> Home</li>
          <li><FaGift /> Benefits</li>
          <li><FaFileInvoice /> Rechnungen</li>
          <li><FaChartBar /> Aktivitäten</li>
        </ul>
      </div>

      {/* Dashboard Content */}
      <div className="dashboard-content">
        <div className="header">
          <h1>Hallo, {user.name}</h1>
          <button className="logout-btn" onClick={() => { localStorage.removeItem("token"); navigate("/login"); }}>
            <FaPowerOff /> Logout
          </button>
        </div>

        {/* Grid Layout für Karten */}
        <div className="grid-container">
          <div className="card">
            <FaWifi className="icon" />
            <h3>Internet-Abo</h3>
            <p>Max. Geschwindigkeit: 1 Gbit/s</p>
            <p>Preis: 49.90 CHF/Monat</p>
          </div>

          <div className="card">
            <FaTv className="icon" />
            <h3>TV-Paket</h3>
            <p>150 Sender + Netflix inklusive</p>
            <p>Preis: 24.90 CHF/Monat</p>
          </div>

          <div className="card">
            <FaUsers className="icon" />
            <h3>Mein Haushalt</h3>
            <p>Mehrere Abos kombiniert für Rabatte</p>
            <button className="link-btn">Personen einladen</button>
          </div>

          <div className="card">
            <FaTachometerAlt className="icon" />
            <h3>Internet-Status</h3>
            <p>Online</p>
            <button className="link-btn">Speedtest</button>
          </div>

          <div className="card">
            <FaNetworkWired className="icon" />
            <h3>Internetanschluss</h3>
            <p>Status: Aktiv</p>
          </div>

          <div className="card">
            <FaTachometerAlt className="icon" />
            <h3>Speedtest</h3>
            <button className="link-btn">Jetzt testen</button>
          </div>

          <div className="card">
            <FaWifi className="icon" />
            <h3>Geräte online</h3>
            <p>5 verbundene Geräte</p>
          </div>

          <div className="card">
            <FaLock className="icon" />
            <h3>Internetsperre</h3>
            <button className="link-btn">Einstellungen</button>
          </div>

          {/* NEUER BEREICH: Optimieren Sie Ihr Abo */}
          <div className="card optimieren-abo">
            <h3>Optimieren Sie Ihr Abo</h3>
            <div className="abo-bilder">
              <img src={skySportImage} alt="Sky Sport" className="abo-bild" />
              <img src={tvConnectImage} alt="TV Connect L" className="abo-bild" />
            </div>
            <p>Holen Sie sich jetzt das beste TV-Erlebnis mit Sky Sport und TV Connect L.</p>
            <a href="#" className="link-btn">Jetzt Abo optimieren</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
