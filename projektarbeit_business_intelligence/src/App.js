import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from './LandingPage';
import ProduktePage from './ProduktePage';
import TvPage from './TvPage';
import InternetPage from './InternetPage';  // <- Stelle sicher, dass diese Datei existiert

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/product" element={<ProduktePage />} />
        <Route path="/tv" element={<TvPage />} />
        <Route path="/internet" element={<InternetPage />} />
      </Routes>
    </Router>
  );
}

export default App;
