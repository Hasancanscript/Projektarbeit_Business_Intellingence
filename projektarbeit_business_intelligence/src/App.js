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
import PreisvergleichPage from "./PreisvergleichPage";
import StreamingPartners from "./StreamingPartners"; 

function App() {
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
        <Route path="/about" element={<AboutPage />} />
        <Route path="/preisvergleich" element={<PreisvergleichPage />} />
        <Route path="/streaming" element={<StreamingPartners />} />
      </Routes>
    </Router>
  );
}

export default App;
