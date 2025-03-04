import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./LandingPage";
import ProduktePage from "./ProduktePage";
import TvPage from "./TvPage";
import InternetPage from "./InternetPage";
import OfferPage from "./OfferPage";
import SupportPage from "./SupportPage";
import LoginPage from "./LoginPage";
import Dashboard from "./Dashboard"; // ✅ Dashboard importiert
import Benefits from "./Benefits"; // ✅ Benefits importieren
import AboutPage from "./AboutPage";
import PreisvergleichPage from "./PreisvergleichPage";
import StreamingPartners from "./StreamingPartners";
import AboutTechCom from "./AboutTechCom";

function App() {
  useEffect(() => {
    const handleScroll = () => {
      let banner = document.querySelector(".techcom-banner");
      if (banner) {
        if (window.scrollY > 100) {
          banner.classList.add("scrolled");
        } else {
          banner.classList.remove("scrolled");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/produkte" element={<ProduktePage />} />
        <Route path="/tv" element={<TvPage />} />
        <Route path="/internet" element={<InternetPage />} />
        <Route path="/angebot" element={<OfferPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/benefits" element={<Benefits />} /> {/* ✅ NEU: Benefits-Route */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/preisvergleich" element={<PreisvergleichPage />} />
        <Route path="/streaming" element={<StreamingPartners />} />
        <Route path="/about-techcom" element={<AboutTechCom />} />
      </Routes>
    </Router>
  );
}

export default App;
