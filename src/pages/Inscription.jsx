import React from 'react';
import Navbar from '../components/Basics/Navbar';
import Footer from '../components/Basics/Footer';
import InscriptionForm from '../components/Authentification/InscriptionForm';

const Inscription = () => {
  return (
    <div>
      <Navbar />
      <InscriptionForm />
      <Footer />
    </div>
  );
};

export default Inscription;
