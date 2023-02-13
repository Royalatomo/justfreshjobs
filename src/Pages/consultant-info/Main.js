import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Middle from "./Middle";
import Pricing from "./Pricing";
import Companies from "./Companies";

function Main() {
  return (
    <>
      <Navbar activate="consultants" />
      <div className="consultant-container">
        <Middle />
        <Pricing />
        <Companies />
      </div>
      <Footer />
    </>
  );
}

export default Main;
