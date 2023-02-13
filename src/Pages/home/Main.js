import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Middle from './Middle'

function Home() {
  return (
    <>
      <Navbar />
        <div className="home-container">
          <Middle />
        </div>
      <Footer />
    </>
  )
}

export default Home