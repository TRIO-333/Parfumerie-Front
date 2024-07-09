import React from 'react'
import MethodePaiement from '../components/Paiement/MethodePaiement'
import Navbar from '../components/Basics/Navbar'
import Footer from '../components/Basics/Footer'
import OptionsLivraison from '../components/Paiement/OptionsLivraison'
import RecapCommande from '../components/Paiement/RecapCommande'
import ValiderLePaiement from '../components/Paiement/ValiderLePaiement'

function Paiement() {
  return (
    <div>
      <Navbar/>
      <MethodePaiement/>
      <OptionsLivraison/>
      <RecapCommande/>
      <ValiderLePaiement/>
      <Footer/>
    </div>
  )
}

export default Paiement
