import React from 'react'
import Home from '../components/Home/Hero'
import Navbar from '../components/Navbar'

function Homepage() {
  return (
    <div className='homepage'>
        <Navbar />
        <Home />
    </div>
  )
}

export default Homepage