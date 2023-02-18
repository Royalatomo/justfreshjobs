import React, { useEffect } from "react";
import "../../css/Pages/consultant-info/pricing.css";
import { prices } from "./database-temp";
import { Link } from "react-router-dom";

// head_icon - uil uil-bag
function PriceBox({heading, description, items, price, head_icon, informations }) {

  useEffect(() => {
    const links = document.querySelectorAll('.submit');
    links.forEach((link) => link.addEventListener('click', () => window.scrollTo(0, 0)));
  }, [])
  return (
    <div className="pricing__body__box">
      <div className="pricing__body__box--head">
        <h1 className="heading">
          <i class={head_icon}></i> {heading}
        </h1>
        <p className="description">{description}</p>
        <span className="price">
          <i class="uil uil-rupee-sign"></i> <h1>{price}</h1>
        </span>
      </div>

      <div className="pricing__body__box--body">
        <p className="description">
          This pack includes <i class="uil uil-corner-right-down"></i>
        </p>

        {items.map((item, index) => {
          return (
            <span key={index} className="item">
              <i class={item.icon + " " + item.color}></i> {item.text}
            </span>
          )
        })}
      </div>

      <div className="pricing__body__box--foot">
        <Link to="/login" className="submit">Buy Now</Link>
        <ul className="information">
          {informations.map((info, index) => <li key={index} className="information--warning">{info}</li>)}
        </ul>
      </div>
    </div>
  );
}

function Pricing() {
  return (
    <section className="pricing">
      <div className="pricing__head">
        <h1 className="pricing__head--heading">Ready To Get Started?</h1>
        <p className="pricing__head--sub-heading">
          Choose the plan fit for your needs
        </p>
      </div>

      <div className="pricing__body">
        {prices.map((price, index) => <PriceBox {...price} key={index} />)}
      </div>
    </section>
  );
}

export default Pricing;
