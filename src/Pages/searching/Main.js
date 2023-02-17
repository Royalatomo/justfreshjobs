import React, { useEffect } from "react";
import Filters from "./Filters";
import Card from "./Card";

import "../../css/defaults.css";
import "../../css/Pages/searching/main.css";

function Main() {

  useEffect(() => {
    const mobFilterBtn = document.querySelector(".filters-mob");
    mobFilterBtn.addEventListener("click", () => {
      const mainFilters = document.querySelector(".filters");
      mainFilters.classList.add("active");

      const searchContainer = document.querySelector(".searching-container");
      searchContainer.classList.add("disable-scroll");
    });
  }, []);

  return (
    <>
      <div className="searching-container">
        <Filters />

        <div className="filters-mob">
          <h4 className="filters__heading">
            <i className="uil uil-filter"></i> Filters
          </h4>
        </div>

        <div className="cards-container">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}

export default Main;
