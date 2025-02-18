import React from "react";
import "./styles.css"; // Stelle sicher, dass deine CSS-Datei eingebunden ist

function LoginPage() {
  return (
    <div className="login-container">
      <div className="login-box">
        {/* Logo */}
        <img src="/images/logo.png" alt="TechCom Logo" className="login-logo" />

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
      </div>
    </div>
  );
}

export default LoginPage;
