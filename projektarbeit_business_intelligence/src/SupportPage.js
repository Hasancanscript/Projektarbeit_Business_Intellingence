import React from "react";
import { Link } from "react-router-dom"; // ✅ Sicherstellen, dass Link importiert ist
import "./styles.css"; // Falls du globale Styles hast

function SupportPage() {
  return (
    <div className="support-container">
      {/* 🔹 Navigation */}
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/internet">Internet</Link></li>
            <li><Link to="/tv">TV</Link></li>
            <li><Link to="/support">Support</Link></li>
            <li><a href="#">Anmelden</a></li>
          </ul>
        </nav>
      </header>

      {/* 🔹 Hauptbereich */}
      <main className="support-main">
        <h1>📞 Kontakt & Support</h1>
        <p>Wählen Sie Ihr Anliegen und treten Sie mit uns in Kontakt.</p>

        {/* Support-Kategorien mit echten Links */}
        <div className="support-options">
          <Link to="#" className="support-btn">💬 Beratung & Bestellung</Link>
          <Link to="#" className="support-btn">⚙️ Produkt einrichten</Link>
          <Link to="#" className="support-btn">📞 Störungen & Defekte</Link>
          <Link to="#" className="support-btn">💰 Rechnungen & Bezahlen</Link>
          <Link to="#" className="support-btn">📑 Verträge & Daten</Link>
          <Link to="#" className="support-btn">🔄 Wechsel zu TechCom</Link>
          <Link to="#" className="support-btn">🚫 Kündigung</Link>
        </div>
      </main>

      {/* 🔹 Footer */}
      <footer>
        <p>&copy; 2025 TechCom - Alle Rechte vorbehalten</p>
      </footer>
    </div>
  );
}

export default SupportPage;
