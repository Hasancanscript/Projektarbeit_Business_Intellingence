import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import ProduktePage from "./ProduktePage";
import TvPage from "./TvPage";
<<<<<<< HEAD
import InternetPage from "./InternetPage"; // Neu hinzugefügt
=======
>>>>>>> 1da34192b32bcc6a33fdbe791750343aa8f52296
import "./styles.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/produkte" element={<ProduktePage />} />
        <Route path="/tv" element={<TvPage />} />
<<<<<<< HEAD
        <Route path="/internet" element={<InternetPage />} /> {/* Neu hinzugefügt */}
=======
>>>>>>> 1da34192b32bcc6a33fdbe791750343aa8f52296
      </Routes>
    </Router>
  );
}

export default App;
