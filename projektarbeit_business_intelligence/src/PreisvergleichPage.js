import React from "react";
import { Link } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import "./styles.css";

function PreisvergleichPage() {
  const preisData = [
    { name: "Tag 1", TechCom: 42, Swisscom: 55 },
    { name: "Tag 2", TechCom: 43, Swisscom: 54 },
    { name: "Tag 3", TechCom: 41, Swisscom: 53 },
    { name: "Tag 4", TechCom: 44, Swisscom: 54 },
    { name: "Tag 5", TechCom: 45, Swisscom: 55 },
  ];

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
            Warum mehr bezahlen? TechCom bietet Ihnen die gleiche Leistung wie grosse Anbieter – aber günstiger!
            Unsere Preise sind dauerhaft fair und transparent. Sehen Sie selbst, wie TechCom im Vergleich zur Konkurrenz abschneidet.  
          </p>
          <p>
          🔍 Nutzen Sie unseren interaktiven Preisvergleich und sparen Sie bares Geld!
          </p>
        </div>
      </section>

      {/* 🔹 Diagramm für Preisentwicklung */}
      <section className="pricing-chart">
        <h2>📊 Preisentwicklung von TechCom & Swisscom</h2>
        <p>Vergleichen Sie die Preisentwicklung der letzten Tage.</p>

        <ResponsiveContainer width="95%" height={350}>
          <LineChart data={preisData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis domain={[35, 60]} />
            <Tooltip />
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
