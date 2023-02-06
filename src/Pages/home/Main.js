import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Middle from './Middle'

function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <Middle />
      <Footer />
    </div>
  )
}

export default Home