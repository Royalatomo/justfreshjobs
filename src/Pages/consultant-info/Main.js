import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Middle from './Middle'

function Main() {
  return (
    <div className="consultant-container">
      <Navbar activate='consultants' />
      <Middle />
      <Footer />
    </div>
  )
}

export default Main