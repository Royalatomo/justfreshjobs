import React, { useEffect } from "react";
import "../../css/Pages/consultant-info/middle.css";
import { Link } from "react-router-dom";

function DetailsContainer({ position="right", heading, desc, img }) {
  let information = (
    <div className="middle__details__container--holder text">
      <h4>{heading}</h4>
      <p>{desc}</p>
    </div>
  );

  let img_html = (
    <div className="middle__details__container--holder img">
      <img src={img} alt="illustration" />
    </div>
  );

  return <div className="middle__details__container">
    {position==="left"?<>{information}{img_html}</>: <>{img_html}{information}</>}
  </div>;
}

function Middle() {

  useEffect(() => {
    const btn = document.querySelector('.middle__banner__info--register');
    btn.addEventListener('click', () => window.scrollTo(0, 0));
  }, [])
  return (
    <section className="middle">
      <div className="middle__banner">
        <div className="middle__banner__img">
          <img
            className="middle__banner__img--img"
            src="/assets/consultant_home.jpg"
            alt=""
          ></img>
        </div>

        <div className="middle__banner__info">
          <h1 className="middle__banner__info--heading">
            Recruite <span>Fresh</span> and Best <span>Telent</span>
          </h1>
          <p className="middle__banner__info--sub-heading">
            Hire interns, freshers & experienced professionals.{" "}
            <span>For Absolutely FREE</span>
          </p>
          <Link to="/register" className="middle__banner__info--register">Join Now</Link>
        </div>
      </div>

      <div className="middle__details">
        <h2 className="middle__details--heading">Why Hire Online?</h2>
        <h2 className="middle__details--description">
          Lorem ipsum dolor sit officia esse dolor soluta eligendi nobis
          deleniti laborum unde quisquam?
        </h2>

        <DetailsContainer heading={'Lorem ipsum dolor sit amet'} desc={"Lorem ipsum dolor sit, amet consectetur adipisicing elit.Praesentium voluptatibus fuga distinctio laborum autem totam blanditiis animi esse. Sunt temporibus aliquam nam quod quasi fugiat autem ea cum tempore nesciunt."} img={'/assets/connect.svg'} position="left" />
        <DetailsContainer heading={'Lorem ipsum dolor sit amet'} desc={"Lorem ipsum dolor sit, amet consectetur adipisicing elit.Praesentium voluptatibus fuga distinctio laborum autem totam blanditiis animi esse. Sunt temporibus aliquam nam quod quasi fugiat autem ea cum tempore nesciunt."} img={'/assets/growth.svg'} />
        <DetailsContainer heading={'Lorem ipsum dolor sit amet'} desc={"Lorem ipsum dolor sit, amet consectetur adipisicing elit.Praesentium voluptatibus fuga distinctio laborum autem totam blanditiis animi esse. Sunt temporibus aliquam nam quod quasi fugiat autem ea cum tempore nesciunt."} img={'/assets/save_money.svg'} position="left" />
        <DetailsContainer heading={'Lorem ipsum dolor sit amet'} desc={"Lorem ipsum dolor sit, amet consectetur adipisicing elit.Praesentium voluptatibus fuga distinctio laborum autem totam blanditiis animi esse. Sunt temporibus aliquam nam quod quasi fugiat autem ea cum tempore nesciunt."} img={'/assets/wide_options.svg'} />
      </div>
    </section>
  );
}

export default Middle;
