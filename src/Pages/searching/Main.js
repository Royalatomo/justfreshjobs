import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Filters from "./Filters";
import Card from "./Card";

import "../../css/defaults.css";
import "../../css/Pages/searching/main.css";

function Main() {
  return (
    <>
      <Navbar />
      <div className="searching-container">
        <Filters />

        <div className="cards-container">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Main;
