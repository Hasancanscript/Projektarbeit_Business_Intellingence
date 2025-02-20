import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import meganFox from "./images/megan-fox.png";
import "./styles.css";

function LandingPage() {
  const [address, setAddress] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [supportChat, setSupportChat] = useState([]); // Neu: Chat-Verlauf mit Support

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleAddressChange = (e) => setAddress(e.target.value);

  const sendSupportMessage = () => {
    if (message.trim() !== "") {
      const newChat = [...supportChat, { user: "Du", text: message }];

      setSupportChat(newChat);
      setMessage("");

      // Simulierte Antwort von "Megan"
      setTimeout(() => {
        setSupportChat([...newChat, { user: "Megan", text: "Hey! Wie kann ich dir helfen? 😊" }]);
      }, 1000);
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

  return (
    <div>
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

      <main>
        <section className="hero">
          <h1>TechCom Internet-Abos</h1>
          <p>Schnelles Glasfaser-Internet mit gratis Router & Surf-Schutz.</p>
          <div className="address-check">
            <input 
              type="text" 
              placeholder="Strasse, Ort oder PLZ eingeben" 
              value={address} 
              onChange={handleAddressChange}
            />
            <button className="check-availability">Jetzt prüfen</button>
          </div>
        </section>

        <section className="home-products">
          {homeProducts.map((product, index) => (
            <div className="home-card" key={index}>
              <h3>{product.title}</h3>
              <p>{product.speed}</p>
              <p>{product.router}</p>
              <p>{product.security}</p>
              <p>{product.extras.join(", ")}</p>
              <p className="price"><del>{product.oldPrice}</del> <strong>{product.price}</strong></p>
              <button className="subscribe-btn">Abo wählen</button>
            </div>
          ))}
        </section>
      </main>

      {showPopup && (
        <div className={`support-popup ${isMinimized ? "minimized" : ""}`}>
          <div className="support-header">
            <button onClick={() => setIsMinimized(!isMinimized)} className="toggle-btn">
              {isMinimized ? "➕" : "➖"}
            </button>
          </div>
          {!isMinimized && (
            <>
              <div className="support-avatar">
                <img src={meganFox} alt="Support Fee Verkäuferin Megan Fox" />
              </div>
              <div className="support-text">
                <h3>Support Fee</h3>
                <p>„Hey, ich bin Megan! 💖 Hast du gerade nach einem Engel gesucht? Hier bin ich. 😘“</p>
              </div>

              {/* Chat-Funktion */}
              <div className="chat-box">
                <div className="chat-messages">
                  {supportChat.map((msg, index) => (
                    <div key={index} className={`chat-message ${msg.user === "Du" ? "user-message" : "bot-message"}`}>
                      <strong>{msg.user}: </strong> {msg.text}
                    </div>
                  ))}
                </div>
                <input 
                  type="text" 
                  value={message} 
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Nachricht eingeben..."
                />
                <button onClick={sendSupportMessage} className="send-btn">Senden</button>
              </div>
            </>
          )}
          <button onClick={() => setShowPopup(false)} className="close-btn">✖</button>
        </div>
      )}
    </div>
  );
}

export default LandingPage;
