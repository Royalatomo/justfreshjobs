import React, { useEffect } from "react";
import "../../css/Pages/home/navbar.css";

// section (A) page links - about site
const hamburger_pages = [
  {name: "internships", link: ""},
  {name: "jobs", link: ""},
  {name: "contact us", link: ""},
]

// section (B) page links - user login/register
const hamburger_user = [
  {name: "register - as job seeker", link: ""},
  {name: "register - as employer", link: ""},
  {name: "login", link: ""},
]

function Navbar() {

  useEffect(() => {
    const hamburger = document.querySelector(".navbar__hamburger i");
    hamburger.addEventListener("click", () => {
      document.querySelector(".navbar__hamburger").classList.add("active");
    })

    const black_screen = document.querySelector(".black-screen");
    black_screen.addEventListener("click", () => {
      document.querySelector(".navbar__hamburger").classList.remove("active");
    })
  }, [])

  return (
    <header className="navbar">

      <div className="holder">
        
        <span className="navbar__hamburger">
          <i class="uil uil-bars"></i>

          <div className="black-screen"></div>

          <div className="navbar__hamburger__menu">
            {hamburger_pages.map((page) => {
              return <li className="navbar__hamburger__menu--link">{page.name}</li>
            })}
            <hr />
            {hamburger_user.map((page) => {
              return <li className="navbar__hamburger__menu--link">{page.name}</li>
            })}
          </div>
        </span>

        <span className="navbar__logo">
          <img src="https://internshala.com/static/images/common/new_internshala_logo.svg" alt="Logo" />
        </span>

        <span className="navbar__links">
          <li to="/" className="navbar__links--link">Jobs <i className="uil uil-angle-down"></i></li>
          <li to="/" className="navbar__links--link space">Internships <i className="uil uil-angle-down"></i></li>
          <li to="/" className="navbar__links--link">Contact Us</li>
        </span>

        <span className="navbar__buttons">
          <button className="navbar__buttons--login">Login</button>
          <button className="navbar__buttons--register">Register <i className="uil uil-angle-down"></i></button>
        </span>
      </div>
    </header>
  );
}

export default Navbar;
