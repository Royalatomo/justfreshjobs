import React from "react";
import Navbar from "../Navbar";
import Box from "./Box";
import Footer from "../Footer";

function Main() {
  return (
    <>
      <Navbar activate="contact" />
      <div className="consultant-container">
        <Box />
      </div>
      <Footer />
    </>
  );
}

export default Main;
