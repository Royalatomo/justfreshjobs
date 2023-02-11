import React from "react";
import Navbar from "../Navbar";
import Box from "./Box";
import Footer from "../Footer";

function Main() {
  return (
    <div className="consultant-container">
      <Navbar activate='contact' />
      <Box />
      <Footer />
    </div>
  )
}

export default Main;
