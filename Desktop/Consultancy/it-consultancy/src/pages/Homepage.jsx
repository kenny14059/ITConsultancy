import React from 'react'
import Navbar from '../components/Navbar'
import Services from '../components/Services'
import About from '../components/About'
import Footer from '../components/Footer'

const Homepage = () => {
  return (
    <div>
        <Navbar/>
        <About/>
        <Services/>
        <Footer/>
    </div>
  )
}

export default Homepage