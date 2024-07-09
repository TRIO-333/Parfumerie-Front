import React from 'react'
import Navbar from '../components/Basics/Navbar'
import VotrePanier from '../components/Panier/VotrePanier'
import MontantCommande from '../components/Panier/MontantCommande'
import Footer from '../components/Basics/Footer'

function Panier() {
  return (
    <div>
      <Navbar/>
      Panier
      <VotrePanier/>
      <MontantCommande/>
      <Footer/>
    </div>
  )
}

export default Panier
