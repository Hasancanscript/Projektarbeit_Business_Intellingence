import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import meganFox from "./images/megan-fox.png";
import "./styles.css";

function LandingPage() {
  const [address, setAddress] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  useEffect(() => {
    // Nach 3 Sekunden das Popup anzeigen
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const sendMessage = () => {
    if (message.trim() !== "") {
      setChat([...chat, { user: "Du", text: message }]);
      setMessage("");
    }
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

  // 💡 Dummy-Daten für den Chart
  const dummyData = [
    { name: "Tag 1", TechCom: 39.90, Swisscom: 49.90 },
    { name: "Tag 2", TechCom: 41.00, Swisscom: 50.00 },
    { name: "Tag 3", TechCom: 38.50, Swisscom: 48.50 },
    { name: "Tag 4", TechCom: 40.00, Swisscom: 51.00 },
    { name: "Tag 5", TechCom: 42.00, Swisscom: 49.00 },
  ];

  return (
    <div>
      {/* 🔹 Navigation */}
      <header>
        <nav>
          <ul>
            <li><NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink></li>
            <li><NavLink to="/internet" className={({ isActive }) => (isActive ? "active" : "")}>Internet</NavLink></li>
            <li><NavLink to="/tv" className={({ isActive }) => (isActive ? "active" : "")}>TV</NavLink></li>
            <li><NavLink to="/support" className={({ isActive }) => (isActive ? "active" : "")}>Support</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>Über uns</NavLink></li>
            <li><NavLink to="/login" className={({ isActive }) => (isActive ? "active" : "")}>Anmelden</NavLink></li>
          </ul>
        </nav>
      </header>

      {/* 🔹 Hauptbereich */}
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

        {/* 🔹 Produktübersicht */}
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

      {/* 🔹 Support Popup mit Megan Fox */}
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

      {/* 🔹 Preisdiagramm (Chart) ganz unten */}
      <section className="pricing-chart">
        <h2>📈 Preisentwicklung von TechCom & Swisscom</h2>
        <ResponsiveContainer width="90%" height={300}>
          <LineChart data={dummyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis domain={['auto', 'auto']} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="TechCom" stroke="#007bff" strokeWidth={2} />
            <Line type="monotone" dataKey="Swisscom" stroke="#dc3545" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </section>

      {/* 🔹 Footer */}
      <footer>
        <p>&copy; 2025 TechCom - Alle Rechte vorbehalten</p>
      </footer>
    </div>
  );
}

export default LandingPage;
