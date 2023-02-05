import React from "react";
import "../../css/Pages/home/middle.css";

function Middle() {
  return (
    <section className="details">
      <div className="details__heading">
        <h1>Find your dream job now</h1>
        <p>5 lakh+ jobs for you to explore</p>
      </div>

      <div className="details__searchbox">
        <div className="container">
          <i className="uil uil-search"></i>
          <input type="text" placeholder="Enter skill / degree / designation" className="details__searchbox--query" />
        </div>
        <hr className="details__searchbox--divider" />
        <div className="container">
          <i className="uil uil-map-marker"></i>
          <input type="text" placeholder="Enter location" className="details__searchbox--location" />
        </div>
        <button className="details__searchbox--search">Search</button>
      </div>

    </section>
  );
}

export default Middle;
