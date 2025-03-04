import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHome, FaGift, FaFileInvoice, FaChartBar, FaWifi, FaTachometerAlt, FaTv, FaUsers, FaPowerOff, FaNetworkWired, FaLock } from "react-icons/fa";
import "./styles.css";
import skySportImage from "./images/sky-sport.png";
import tvConnectImage from "./images/tv-connect.png";

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
          <li className="active"><FaHome className="sidebar-icon" /> Home</li>
          <li onClick={() => navigate("/benefits")} style={{ cursor: "pointer" }}>
            <FaGift className="sidebar-icon" /> Benefits
          </li>
          <li><FaFileInvoice className="sidebar-icon" /> Rechnungen</li>
          <li><FaChartBar className="sidebar-icon" /> Aktivitäten</li>
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
          {/* Aktuelles (Großes Rechteck) */}
          <div className="card aktuelles">
            <h3>Aktuelles</h3>
            <p>Jetzt mit <b>Sky Sport</b> und <b>TechCom TVL</b> das beste Unterhaltungspaket sichern!</p>
            <div className="abo-bilder">
              <img src={skySportImage} alt="Sky Sport" className="abo-bild" />
              <img src={tvConnectImage} alt="TV Connect L" className="abo-bild" />
            </div>
            <button className="optimieren-btn">Jetzt Abo optimieren</button>
          </div>

          {/* Karten oben zusammenziehen */}
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
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
