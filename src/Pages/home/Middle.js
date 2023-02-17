import React from "react";
import "../../css/Pages/home/middle.css";
import {internship_cities} from "./categories-db";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import CompaniesCarousel from "../consultant-info/Companies";

const sliderOptions = {
  dots: true,
  infinite: false,
  speed: 500,
}

function Categories({title, categories}) {

  let result = 6

  const width = window.innerWidth;

  if (width <= 340) {
    result = 1;
  }
  else if (width <= 500) {
    result = 2;
  }
  else if (width <= 600) {
    result = 3;
  }
  else if (width <= 800) {
    result = 4;
  }
  else if (width <= 900) {
    result = 5;
  }
  else if (width > 1200) {
    result = 8;
  }

  return (
    <div className="container">
      <h3>{title}</h3>
      <Slider {...sliderOptions} slidesToShow={result} slidesToScroll={result} className="container__categories">
        {categories.map((cat, i) => {
          return <Link onClick={() => window.scrollTo(0, 0)} to="/search" key={i} className="container__categories--option">
            <img src={cat.img} alt="option" />
            <p>{cat.name}</p>
          </Link>})}
      </Slider>
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
        <Link to="/search" onClick={() => window.scrollTo(0, 0)}  className="details__searchbox--search">Search</Link>
      </div>

      <div className="internship cat-container">
        <div className="cat-container__header">
          <span className="cat-container__header--text">
            <h1>Internships</h1>
            <p>Apply to 10,000+ internships for free</p>
          </span>

          <span className="cat-container__header--link">
            <Link to="/search">View all internships</Link>
            <i className="uil uil-arrow-right"></i>
          </span>
        </div>

        <Categories title={"Popular cities"} categories={internship_cities} />
        <Categories title={"Popular cities"} categories={internship_cities} />
      </div>

      <CompaniesCarousel />

      <div className="job cat-container">
        <div className="cat-container__header">
          <span className="cat-container__header--text">
            <h1>Jobs</h1>
            <p>Apply to 10,000+ Jobs for free</p>
          </span>

          <span className="cat-container__header--link">
            <Link to="/search">View all jobs</Link>
            <i className="uil uil-arrow-right"></i>
          </span>
        </div>

        <Categories title={"Popular cities"} categories={internship_cities} />
        <Categories title={"Popular categories"} categories={internship_cities} />
      </div>
      

    </section>
  );
}

export default Middle;
