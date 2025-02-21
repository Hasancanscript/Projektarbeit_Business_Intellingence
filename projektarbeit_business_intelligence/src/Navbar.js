import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css"; // ✅ Stelle sicher, dass deine Styles geladen werden

function Navbar() {
  return (
    <header>
      <nav>
        <ul>
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/internet">Internet</NavLink></li>
          <li><NavLink to="/tv">TV</NavLink></li>
          <li><NavLink to="/support">Support</NavLink></li>
          <li><NavLink to="/preisvergleich">Preisvergleich</NavLink></li>
          <li><NavLink to="/about">Über uns</NavLink></li>
          <li><NavLink to="/login">Anmelden</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
