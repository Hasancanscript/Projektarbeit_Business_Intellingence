import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./LandingPage";
import ProduktePage from "./ProduktePage";
import TvPage from "./TvPage";
import InternetPage from "./InternetPage";
import OfferPage from "./OfferPage";
import SupportPage from "./SupportPage";
import LoginPage from "./LoginPage";
import AboutPage from "./AboutPage";
import PreisvergleichPage from "./PreisvergleichPage"; // ✅ Preisvergleich eingebunden

// 🔹 ScrollToTop: Behebt das Problem mit "Anmelden" nach Navigation
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // 🔹 Immer nach oben scrollen bei Routenwechsel
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/produkte" element={<ProduktePage />} />
        <Route path="/tv" element={<TvPage />} />
        <Route path="/internet" element={<InternetPage />} />
        <Route path="/angebot" element={<OfferPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/preisvergleich" element={<PreisvergleichPage />} /> {/* ✅ Neue Preisvergleich-Seite */}
      </Routes>
    </Router>
  );
}

export default App;
