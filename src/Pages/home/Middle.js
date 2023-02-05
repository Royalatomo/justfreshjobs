import React from "react";
import "../../css/Pages/home/middle.css";
import {internship_cities} from "./categories-db"

function Categories({title, categories}) {
  return (
    <div className="container">
      <h3>{title}</h3>
      <div className="container__categories">
        {categories.map((cat) => {
          return <div className="container__categories--option">
            <img src={cat.img} alt="option" />
            <p>{cat.name}</p>
          </div>})}
      </div>
    </div>
  )
}

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

      <div className="internship cat-container">
        <div className="cat-container__header">
          <span className="cat-container__header--text">
            <h1>Internships</h1>
            <p>Apply to 10,000+ internships for free</p>
          </span>

          <span className="cat-container__header--link">
            <p>View all internships</p>
            <i className="uil uil-arrow-right"></i>
          </span>
        </div>

        <Categories title={"Popular cities"} categories={internship_cities} />
        <Categories title={"Popular categories"} categories={internship_cities} />
      </div>

      {/* <div className="job cat-container">
        <div className="cat-container__header">
          <span className="cat-container__header--text">
            <h1>Jobs</h1>
            <p>Apply to 10,000+ Jobs for free</p>
          </span>

          <span className="cat-container__header--link">
            <p>View all jobs</p>
            <i className="uil uil-arrow-right"></i>
          </span>
        </div>

        <Categories title={"Popular cities"} categories={internship_cities} />
        <Categories title={"Popular categories"} categories={internship_cities} />
      </div> */}

    </section>
  );
}

export default Middle;
