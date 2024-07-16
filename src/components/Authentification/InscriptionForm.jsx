import React, { useState } from 'react';
import './ConnexionForm.css'; // Utilisez le même style pour la cohérence
import { useNavigate } from 'react-router-dom';
import { auth, firestore } from '../../firebase'; // Chemin correct vers le fichier firebase.js
import PropTypes from 'prop-types';

const InscriptionForm = () => {
  const [formData, setFormData] = useState({
    genre: '',
    nom: '',
    prenom: '',
    dateNaissance: '',
    email: '',
    telephone: '',
    adresse: '',
    password: ''
  });

  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(formData.email)) {
      alert("Adresse e-mail invalide");
      return;
    }
    if (formData.password.length < 8) {
      alert("Le mot de passe doit contenir au moins 8 caractères");
      return;
    }

    try {
      // Créer un utilisateur avec Firebase Authentication
      const userCredential = await auth.createUserWithEmailAndPassword(formData.email, formData.password);
      const user = userCredential.user;

      // Enregistrer les données de l'utilisateur dans Firestore
      await firestore.collection('users').doc(user.uid).set({
        genre: formData.genre,
        nom: formData.nom,
        prenom: formData.prenom,
        dateNaissance: formData.dateNaissance,
        email: formData.email,
        telephone: formData.telephone,
        adresse: formData.adresse,
      });

      // Rediriger l'utilisateur vers la page de profil
      navigate('/profil');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="connexion-form">
      <div className='box-renamed'>
        <label>Genre:</label>
        <div>
          <label>
            <input
              type="radio"
              name="genre"
              value="Homme"
              checked={formData.genre === 'Homme'}
              onChange={handleChange}
              required
            />
            Homme
          </label>
          <label>
            <input
              type="radio"
              name="genre"
              value="Femme"
              checked={formData.genre === 'Femme'}
              onChange={handleChange}
              required
            />
            Femme
          </label>
        </div>
      </div>
      <div className='box-renamed'>
        <input
          type='text'
          name='nom'
          value={formData.nom}
          placeholder='Nom'
          onChange={handleChange}
          className="input-field-renamed"
          required
        />
      </div>
      <div className='box-renamed'>
        <input
          type='text'
          name='prenom'
          value={formData.prenom}
          placeholder='Prénom'
          onChange={handleChange}
          className="input-field-renamed"
          required
        />
      </div>
      <div className='box-renamed'>
        <input
          type='date'
          name='dateNaissance'
          value={formData.dateNaissance}
          onChange={handleChange}
          className="input-field-renamed"
          required
        />
      </div>
      <div className='box-renamed'>
        <input
          type='email'
          name='email'
          value={formData.email}
          placeholder='E-mail'
          onChange={handleChange}
          className="input-field-renamed"
          required
        />
      </div>
      <div className='box-renamed'>
        <input
          type='tel'
          name='telephone'
          value={formData.telephone}
          placeholder='Téléphone'
          onChange={handleChange}
          className="input-field-renamed"
          required
        />
      </div>
      <div className='box-renamed'>
        <input
          type='text'
          name='adresse'
          value={formData.adresse}
          placeholder='Adresse'
          onChange={handleChange}
          className="input-field-renamed"
          required
        />
      </div>
      <div className='box-renamed'>
        <input
          type='password'
          name='password'
          value={formData.password}
          placeholder='Mot de passe'
          onChange={handleChange}
          className="input-field-renamed"
          required
        />
      </div>
      <button type='submit' className="submit-button">S'inscrire</button>
    </form>
  );
};

InscriptionForm.propTypes = {
  formData: PropTypes.shape({
    genre: PropTypes.string,
    nom: PropTypes.string,
    prenom: PropTypes.string,
    dateNaissance: PropTypes.string,
    email: PropTypes.string,
    telephone: PropTypes.string,
    adresse: PropTypes.string,
    password: PropTypes.string
  }),
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func
};

export default InscriptionForm;
