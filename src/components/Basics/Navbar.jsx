import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="top-banner">
        <span>Offre fidélité: -25% sur une sélection de produit !</span>
      </div>
      <div className="navbar-main">
        <div className="navbar-left">
          <button className="menu-burger" onClick={toggleMenu}>
            <i className="fas fa-bars"></i>
          </button>
          <div className="logo">LiVanLux</div>
        </div>
        <div className="navbar-center">
          <input type="text" placeholder="Rechercher un produit, une marque..." />
          <button><i className="fas fa-search"></i></button>
        </div>
        <div className="navbar-right">
          <a href="#"><i className="fas fa-map-marker-alt"></i> Magasins et Services</a>
          <a href="front-end/src/pages/Connexion.jsx"><i className="fas fa-user"></i> Se connecter</a>
          <a href="#"><i className="fas fa-heart"></i></a>
          <a href="#"><i className="fas fa-shopping-bag"></i></a>
          <a href="#"><i className="fas fa-bell"></i></a>
        </div>
      </div>
      <div className={`navbar-bottom ${isMenuOpen ? 'open' : ''}`}>
        <a href="#">Maquillage</a>
        <a href="#">Parfum</a>
        <a href="#">Soin visage</a>
        <a href="#">Corp & bain</a>
        <a href="#">Cheveux</a>
        <a href="#">Nouveautés</a>
        <a href="#">Marques</a>
        <a href="#">Collection</a>
        <a href="#">Bons plans</a>
        <a href="#">Cadeaux</a>
        <a href="#">Menu</a>
      </div>
    </div>
  );
};

export default Navbar;
