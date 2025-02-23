import React from "react";
import { Link } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import "./styles.css";

function PreisvergleichPage() {
  const preisData = [
    { 
      name: "August 2024", TechCom: 39.90, Swisscom: 49.90,
      TechComProduct: "TechCom Connect S 100 Mbit/s", 
      SwisscomProduct: "Swisscom blue Internet S 100 Mbit/s"
    },
    { 
      name: "September 2024", TechCom: 39.90, Swisscom: 59.90,
      TechComProduct: "TechCom Connect S 100 Mbit/s", 
      SwisscomProduct: "Swisscom blue Internet M 1 Gbit/s"
    },
    { 
      name: "Oktober 2024", TechCom: 49.90, Swisscom: 39.90,
      TechComProduct: "TechCom Connect M 1 Gbit/s", 
      SwisscomProduct: "Swisscom blue Internet M 1 Gbit/s"
    },
    { 
      name: "November 2024", TechCom: 59.90, Swisscom: 89.90,
      TechComProduct: "TechCom Connect L 10 Gbit/s", 
      SwisscomProduct: "Swisscom blue Internet L 10 Gbit/s"
    },
    { 
      name: "Dezember 2024", TechCom: 59.90, Swisscom: 39.90,
      TechComProduct: "TechCom Connect L 10 Gbit/s", 
      SwisscomProduct: "Swisscom blue Internet L 10 Gbit/s"
    },
    { 
      name: "Januar 2025", TechCom: 49.90, Swisscom: 79.90,
      TechComProduct: "TechCom Connect M 1 Gbit/s", 
      SwisscomProduct: "Swisscom blue Internet M 1 Gbit/s"
    },
    { 
      name: "Februar 2025", TechCom: 59.90, Swisscom: 49.90,
      TechComProduct: "TechCom Connect S 100 Mbit/s", 
      SwisscomProduct: "Swisscom blue Internet S 100 Mbit/s"
    }
  ];

  // Custom Tooltip für detaillierte Produktinformationen
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="custom-tooltip">
          <p><strong>{data.name}</strong></p>
          <p style={{ color: "#007bff" }}>🔹 {data.TechComProduct}: CHF {data.TechCom}</p>
          <p style={{ color: "#dc3545" }}>🔸 {data.SwisscomProduct}: CHF {data.Swisscom}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      {/* 🔹 Navigation */}
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/internet">Internet</Link></li>
            <li><Link to="/tv">TV</Link></li>
            <li><Link to="/support">Support</Link></li>
            <li><Link to="/preisvergleich" className="active">Preisvergleich</Link></li>
            <li><Link to="/about">Über uns</Link></li>
            <li><Link to="/login">Anmelden</Link></li>
          </ul>
        </nav>
      </header>

      {/* 🔹 Einführung zum Preisvergleich */}
      <section className="preisvergleich-intro">
        <div className="preisvergleich-box">
          <h1>💰 Sparen mit TechCom – Der beste Preis in der Schweiz! 🚀</h1>
          <p>
            Warum mehr bezahlen? Bei TechCom erhalten Sie erstklassige Internetprodukte zu dauerhaft fairen Preisen – ohne versteckte Kosten.  
            Wir beobachten den Markt kontinuierlich und reagieren flexibel, um Ihnen stets das beste Preis-Leistungs-Verhältnis zu bieten.  
            Wenn ein Mitbewerber seine Preise ändert, passen wir uns schnell an, damit Sie immer von den günstigsten Tarifen profitieren.  
          </p>
          <p>
          🔍 <strong>Nutzen Sie unseren interaktiven Preisvergleich und sichern Sie sich Top-Geschwindigkeiten zum besten Preis!</strong>
          </p>
        </div>
      </section>

      {/* 🔹 Diagramm für Preisentwicklung */}
      <section className="pricing-chart">
        <h2>📊 Preisentwicklung von TechCom & Swisscom</h2>
        <p>Vergleichen Sie die Preisentwicklung der letzten Monate.</p>

        <ResponsiveContainer width="95%" height={350}>
          <LineChart data={preisData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis 
              domain={[35, 90]} 
              tick={{ fill: "#333", fontSize: 14 }} /* Bessere Lesbarkeit */
              label={{ 
                value: "CHF", 
                angle: -90, 
                position: "insideLeft", 
                dy: -10, /* Vertikale Feinjustierung */
                dx: -30, /* Horizontale Feinjustierung */
                style: { fontSize: 16, fontWeight: "bold", fill: "#333" } 
              }} 
            /> 
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Line type="monotone" dataKey="TechCom" stroke="#007bff" strokeWidth={3} dot={{ r: 5 }} />
            <Line type="monotone" dataKey="Swisscom" stroke="#dc3545" strokeWidth={3} dot={{ r: 5 }} />
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

export default PreisvergleichPage;
