import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Accueil from './pages/Accueil';
import Connexion from './pages/Connexion';
import Inscription from './pages/Inscription';
import Paiement from './pages/Paiement';
import PaiementValide from './pages/PaiementValide';
import Panier from './pages/Panier';
import Profil from './pages/Profil';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/paiement" element={<Paiement />} />
          <Route path="/paiement-valide" element={<PaiementValide />} />
          <Route path="/panier" element={<Panier />} />
          <Route path="/profil" element={<Profil />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
