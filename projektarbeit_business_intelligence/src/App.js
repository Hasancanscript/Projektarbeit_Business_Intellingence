import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from './LandingPage';
import ProduktePage from './ProduktePage';
import TvPage from './TvPage';
import InternetPage from './InternetPage';
import OfferPage from './OfferPage'; // Importiere die Angebotsseite
import SupportPage from './SupportPage'; // Importiere die neue Support-Seite

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/produkte" element={<ProduktePage />} />
        <Route path="/tv" element={<TvPage />} />
        <Route path="/internet" element={<InternetPage />} />
        <Route path="/angebot" element={<OfferPage />} /> {/* Route für Angebote */}
        <Route path="/support" element={<SupportPage />} /> {/* Route für Support */}
      </Routes>
    </Router>
  );
}

export default App;
