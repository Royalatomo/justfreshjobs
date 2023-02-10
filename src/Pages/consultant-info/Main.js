import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Middle from './Middle'
import Pricing from './Pricing'
import Companies from './Companies'

function Main() {
  return (
    <div className="consultant-container">
      <Navbar activate='consultants' />
      <Middle />
      <Pricing />
      <Companies />
      <Footer />
    </div>
  )
}

export default Main