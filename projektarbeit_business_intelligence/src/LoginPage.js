import React from "react";
import { Link } from "react-router-dom"; // ✅ Link für Navigation hinzugefügt
import "./styles.css";
import logo from "./images/logo.png"; // ✅ Logo importieren

function LoginPage() {
  return (
    <div className="login-container">
      <div className="login-box">
        {/* Logo */}
        <img src={logo} alt="TechCom Logo" className="login-logo" />

        {/* Titel */}
        <h2 className="login-title">TechCom Login</h2>
        <p className="login-subtitle">Melden Sie sich mit Ihrem TechCom-Konto an.</p>

        {/* Formular */}
        <form className="login-form">
          <label htmlFor="username" className="login-label">Benutzername</label>
          <input type="text" id="username" className="login-input" placeholder="Benutzername eingeben" />

          <button type="submit" className="login-btn">Weiter</button>
        </form>

        {/* Links */}
        <div className="login-links">
          <a href="#" className="login-link">Benutzername vergessen?</a>
          <a href="#" className="login-link">Neu registrieren</a>
        </div>

        {/* 🔹 Navigation zurück zur Startseite */}
        <div className="login-back">
          <Link to="/" className="login-back-link">← Zurück zur Startseite</Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
