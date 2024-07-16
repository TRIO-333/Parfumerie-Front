import React from 'react';
import './PopAlerte.css';

const PopAlerte = () => {
  return (
    <div className="pop-alerte">
      <div className="alert-section">
        <img src="https://via.placeholder.com/300x150" alt="Alerte tendances" />
        <div className="alert-content">
          <h3>Alerte tendances</h3>
          <p>Les produits les plus viraux des réseaux sociaux sont déjà chez nous.</p>
          <button>Découvrir</button>
          <span>Hot on social media = tendance sur les réseaux sociaux.</span>
        </div>
      </div>
      <div className="alert-section">
        <img src="https://via.placeholder.com/300x150" alt="Offre fidélité" />
        <div className="alert-content">
          <h3>Offre fidélité</h3>
          <p>-25% sur une sélection de produits.</p>
          <button>Découvrir</button>
          <span>*Voir conditions ici.</span>
        </div>
      </div>
    </div>
  );
};

export default PopAlerte;
