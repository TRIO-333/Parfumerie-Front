// src/components/Accueil/Avis/PostReview.jsx
import React, { useState, useEffect } from 'react';
import { firestore, auth } from '../../../firebase';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Reviews.css';

const PostReview = () => {
  const [review, setReview] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.currentUser) {
      setUserEmail(auth.currentUser.email);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!auth.currentUser) {
      toast.error("Veuillez vous connecter pour poster un avis.");
      navigate('/connexion');
      return;
    }
    try {
      await firestore.collection('reviews').add({
        user: auth.currentUser.email,
        review,
        createdAt: new Date()
      });
      setReview('');
      toast.success("Avis posté!");
    } catch (error) {
      console.error("Erreur lors de la publication de l'avis: ", error);
      toast.error("Erreur lors de la publication de l'avis.");
    }
  };

  return (
    <div className="review-container">
      <ToastContainer />
      <h3>Écrire un avis</h3>
      <form onSubmit={handleSubmit} className="review-form">
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Écrivez votre avis ici"
          required
        />
        <button type="submit">Poster l'avis</button>
      </form>
    </div>
  );
};

export default PostReview;
