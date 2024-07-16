// src/pages/Accueil.jsx
import React from 'react';
import Navbar from '../components/Basics/Navbar';
import Banner from '../components/Accueil/Banner/Banner';
import InscriptionNewsletter from '../components/Accueil/Newsletter/InscriptionNewsletter';
import Offre from '../components/Accueil/Offre/Offre';
import Produits from '../components/Accueil/Parfum/Produits';
import PopAlerte from '../components/Accueil/PopAlerte/PopAlerte';
import Footer from '../components/Basics/Footer';
import PostReview from '../components/Accueil/Avis/PostReview';
import Reviews from '../components/Accueil/Avis/Reviews';
import './Accueil.css';

const Accueil = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <div className="content-wrapper">
        <PopAlerte />
        <Produits />
        <Offre />
        <PostReview /> {/* Formulaire pour poster un avis */}
        <Reviews /> {/* Liste des avis */}
        <InscriptionNewsletter />
      </div>
      <Footer />
    </div>
  );
};

export default Accueil;
