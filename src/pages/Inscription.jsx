import React from 'react'
import Navbar from '../components/Basics/Navbar'
import Footer from '../components/Basics/Footer'
import InscriptionForm from '../components/Authentification/InscriptionForm'

function Inscription() {
  return (
    <div>
      <Navbar/>
      Inscription
      <InscriptionForm/>
      <Footer/>
    </div>
  )
}

export default Inscription
