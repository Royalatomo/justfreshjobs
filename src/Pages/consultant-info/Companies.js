import React from "react";
import "../../css/Pages/consultant-info/companies.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const sliderOptions = {
  dots: false,
  infinite: true,
  speed: 800,
  autoplay: true,
};

const LOGOS = [
  "/assets/logos/tcs.png",
  "/assets/logos/flipkart.png",
  "/assets/logos/byjus.png",
  "/assets/logos/hcl_tech.png",
  "/assets/logos/infosys.png",
  "/assets/logos/paytm.png",
  "/assets/logos/swiggy.png",
  "/assets/logos/wipro.png",
  "/assets/logos/zomato.png",
]

function Companies() {
  let result = 6;

  const width = window.innerWidth;

  if (width <= 340) {
    result = 1;
  } else if (width <= 500) {
    result = 1;
  } else if (width <= 800) {
    result = 2;
  } else if (width <= 1200) {
    result = 3;
  } else if (width <= 1250) {
    result = 4;
  } else if (width > 1250) {
    result = 5;
  }


  return <section className="companies-carousel">
    <h1 className="companies-carousel--heading">Our Clients</h1>
    <p className="companies-carousel--description">Jobs listed from various companies by their recruiters across India</p>
    <Slider {...sliderOptions} slidesToShow={result} slidesToScroll={result} className="campanies-carousel--companies">
      {LOGOS.map((logo, i) => {
        return <div key={i} className="campanies-carousel--companies-logo">
          <img src={logo} alt="option" />
        </div>})}
    </Slider>
  </section>;
}

export default Companies;
