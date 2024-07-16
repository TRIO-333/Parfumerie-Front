import React, { useState } from 'react';
import { firestore } from '../../../firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './InscriptionNewsletter.css';

const InscriptionNewsletter = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setError('');
      try {
        await firestore.collection('newsletterSubscribers').add({ email });
        toast.success('Inscription réussie !');
        setEmail('');
      } catch (error) {
        toast.error('Erreur lors de l\'inscription. Veuillez réessayer.');
        console.error('Erreur lors de l\'inscription:', error);
      }
    } else {
      setError('Veuillez entrer une adresse e-mail valide.');
    }
  };

  const handleIconClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div className="newsletter">
      <ToastContainer />
      <div className="newsletter-content">
        <h2>Newsletter beauté</h2>
        <p>
          Recevez les nouveautés, actualités et offres LiVanLux par email
        </p>
        <form onSubmit={handleSubmit} className="newsletter-form">
          <input
            type="email"
            placeholder="Saisissez votre e-mail *"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">S’inscrire</button>
        </form>
        {error && <p className="error-message">{error}</p>}
        <p className="newsletter-disclaimer">
          En m'inscrivant, j'accepte de recevoir par email mon code de réduction ainsi que les offres et actualités de LiVanLux et je déclare avoir plus de 16 ans. Je consens au traitement de mes données personnelles et accepte la politique de confidentialité.
        </p>
      </div>
      <div className="newsletter-benefits">
        <div className="benefit" onClick={() => handleIconClick('https://example.com/shipping')}>
          <i className="fas fa-shipping-fast"></i>
          <p>Livraison gratuite à domicile dès 60€</p>
        </div>
        <div className="benefit" onClick={() => handleIconClick('https://example.com/returns')}>
          <i className="fas fa-undo"></i>
          <p>Retours gratuits</p>
        </div>
        <div className="benefit" onClick={() => handleIconClick('https://example.com/satisfaction')}>
          <i className="fas fa-smile"></i>
          <p>Satisfaction ou remboursement</p>
        </div>
        <div className="benefit" onClick={() => handleIconClick('https://example.com/support')}>
          <i className="fas fa-headset"></i>
          <p>Service clients</p>
        </div>
        <div className="benefit" onClick={() => handleIconClick('https://example.com/security')}>
          <i className="fas fa-lock"></i>
          <p>Paiement sécurisé</p>
        </div>
      </div>
    </div>
  );
};

export default InscriptionNewsletter;
