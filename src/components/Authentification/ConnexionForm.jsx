import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, firestore } from '../../firebase'; // Chemin correct vers le fichier firebase.js
import PropTypes from 'prop-types';
import './ConnexionForm.css';

const ConnexionForm = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      alert("Adresse e-mail invalide");
      return;
    }
    if (pass.length < 8) {
      alert("Le mot de passe doit contenir au moins 8 caractères");
      return;
    }
    try {
      const userCredential = await auth.signInWithEmailAndPassword(email, pass);
      const user = userCredential.user;

      // Récupérer les données de l'utilisateur depuis Firestore
      const userDoc = await firestore.collection('users').doc(user.uid).get();
      const userData = userDoc.data();

      // Naviguer vers la page de profil avec les données de l'utilisateur
      navigate('/profil', { state: { userData } });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={submit} className="connexion-form">
      <div className='box-renamed'>
        <input
          type='email'
          value={email}
          placeholder='E-mail'
          onChange={(e) => setEmail(e.target.value)}
          className="input-field-renamed"
          required
        />
      </div>
      <div className='box-renamed'>
        <input
          type='password'
          value={pass}
          placeholder='Mot de passe'
          onChange={(e) => setPass(e.target.value)}
          className="input-field-renamed"
          required
        />
      </div>
      <button type='submit' className="submit-button">Se connecter</button>
      <div className="forgot-password">
        <a href="#">Mot de passe oublié?</a>
      </div>
      <div className="sign-up-link">
        Pas de compte? <a href="/inscription">S'inscrire</a>
      </div>
    </form>
  );
};

ConnexionForm.propTypes = {
  email: PropTypes.string.isRequired,
  pass: PropTypes.string.isRequired,
};

export default ConnexionForm;
