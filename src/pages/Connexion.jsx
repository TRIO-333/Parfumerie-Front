import React from 'react'
import Navbar from '../components/Basics/Navbar'
import Footer from '../components/Basics/Footer'
import ConnexionForm from '../components/Authentification/ConnexionForm'

function Connexion() {
  return (
    <div>
      <Navbar/>
      Connexion
      <ConnexionForm/>
      <Footer/>
    </div>
  )
}

export default Connexion
