import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Filters from "./Filters";

import "../../css/defaults.css";
import "../../css/Pages/searching/main.css";

function Main() {
  return (
    <>
      <Navbar />
      <div className="searching-container">
        <Filters />
      </div>
      <Footer />
    </>
  );
}

export default Main;
