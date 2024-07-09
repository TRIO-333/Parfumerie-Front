import React from 'react'
import Navbar from '../components/Basics/Navbar'
import Banner from '../components/Accueil/Banner/Banner'
import Produits from '../components/Accueil/Parfum/Produits'
import InscriptionNewsletter from '../components/Accueil/Newsletter/InscriptionNewsletter'
import Footer from '../components/Basics/Footer'

function Accueil() {
  return (
    <div>
      <Navbar/>
      Accueil
      <Banner/>
      <Produits/>
      <InscriptionNewsletter/>
      <Footer/>
    </div>
  )
}

export default Accueil
