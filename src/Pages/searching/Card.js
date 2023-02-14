import React from "react";
import "../../css/Pages/searching/card.css";

function Card() {
  return (
    <div className="card">
      <div className="card__head">
        <div className="card__head__info-banner">
          <i class="uil uil-arrow-up-right"></i>
          <span className="card__info-banner--text">Actively Hiring</span>
        </div>

        <div className="card__head--save">
          <i class="uil uil-bookmark"></i>
          <span>Save</span>
        </div>
      </div>

      <div className="card__company-info">
        <div className="card__company-info__text">
          <div className="card__company-info__text--post">Brand Management & Marketing</div>
          <div className="card__company-info__text--comp-name">Crizo & Tubros</div>
        </div>

        <div className="card__company-info__logo">
          <img src="https://internshala.com/cached_uploads/logo%2F61e5649ac143e1642423450.jpg" alt="logo" />
        </div>
      </div>

      <div className="card__job-info">
        <div className="card__job-info__item experience">
          <i class="uil uil-bag-alt"></i>
          <span className="card__job-info__item--text">0-5 Yrs</span>
        </div>
        <div className="card__job-info__item pay">
        <i class="uil uil-rupee-sign"></i>
          <span className="card__job-info__item--text">4.5L - 6L PA</span>
        </div>
        <div className="card__job-info__item location">
          <i class="uil uil-location-point"></i>
          <span className="card__job-info__item--text">Kolkata, Mumbai, Uttrakhand</span>
        </div>

        <div className="card__job-info__item role">
          <i class="uil uil-file-alt"></i>
          <span className="card__job-info__item--text">Ab initio experience including GDE, Plans, continuous flow, m-hub and including GDE, Plans, continuous ...</span>
        </div>
      </div>

      <div className="card__tags">
        <div className="card__tags--item">Application Secuirty</div>
        <span className="dot" />
        <div className="card__tags--item">aws</div>
        <span className="dot" />
        <div className="card__tags--item">cyber security</div>
        <span className="dot" />
        <div className="card__tags--item">programming</div>
        <span className="dot" />
        <div className="card__tags--item">web development</div>
      </div>

      <div className="card__foot">
        <div className="card__foot--time">5 hrs ago</div>
        
        <div className="card__foot__buttons">
          <div className="card__foot__buttons--detail foot-btn">Learn More</div>
          <div className="card__foot__buttons--apply foot-btn">Apply Now</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
