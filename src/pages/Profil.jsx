import React from 'react'
import Navbar from '../components/Basics/Navbar'
import Footer from '../components/Basics/Footer'
import InformationsProfil from '../components/Profil/InformationsProfil'

function Profil() {
  return (
    <div>
      <Navbar/>
      Profil
      <InformationsProfil/>
      <Footer/>
    </div>
  )
}

export default Profil
