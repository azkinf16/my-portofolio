import React from 'react'
import About from '../components/Home/About'
import Experiences from '../components/Home/Experiences'
import Hero from '../components/Home/Hero'
import Navbar from '../components/Navbar'

function Homepage() {
  return (
    <div className='homepage'>
        <Navbar />
        <Hero />
        <About />
        <Experiences />
    </div>
  )
}

export default Homepage