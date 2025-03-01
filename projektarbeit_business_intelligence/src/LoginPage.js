import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // 🔹 Navigation nach Login
import "./styles.css";
import logo from "./images/logo.png";

function LoginPage() {
  const [username, setUsername] = useState(""); // 🔹 Benutzername speichern
  const [password, setPassword] = useState(""); // 🔹 Passwort speichern
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // 🔹 Verhindert, dass die Seite neu lädt

    // 🔹 Dummy-Login (später mit Backend)
    if (username === "test" && password === "1234") {
      localStorage.setItem("token", "fake-jwt-token"); // 🔹 Token speichern
      navigate("/dashboard"); // 🔹 Weiterleitung zum Dashboard
    } else {
      alert("Falsche Anmeldedaten!"); // 🔹 Fehlermeldung
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src={logo} alt="TechCom Logo" className="login-logo" />
        <h2 className="login-title">TechCom Login</h2>
        <p className="login-subtitle">Melden Sie sich mit Ihrem TechCom-Konto an.</p>

        {/* 🔹 Login-Formular mit Eingaben */}
        <form className="login-form" onSubmit={handleLogin}>
          <label htmlFor="username" className="login-label">Benutzername</label>
          <input
            type="text"
            id="username"
            className="login-input"
            placeholder="Benutzername eingeben"
            value={username}
            onChange={(e) => setUsername(e.target.value)} // 🔹 Speichert Eingabe
          />

          <label htmlFor="password" className="login-label">Passwort</label>
          <input
            type="password"
            id="password"
            className="login-input"
            placeholder="Passwort eingeben"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // 🔹 Speichert Eingabe
          />

          <button type="submit" className="login-btn">Weiter</button>
        </form>

        <div className="login-links">
          <a href="#" className="login-link">Benutzername vergessen?</a>
          <a href="#" className="login-link">Neu registrieren</a>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
