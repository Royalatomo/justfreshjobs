import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import "../css/Pages/navbar.css";

// section (A) page links - about site
const hamburger_pages = [
  { name: "Home", link: "/" },
  { name: "internships", link: "/search" },
  { name: "jobs", link: "/search" },
  { name: "Consultants", link: "/Consultant" },
  { name: "contact us", link: "/contact-us" },
]

// section (B) page links - user login/register
const hamburger_user = [
  { name: "register - as job seeker", link: "/register" },
  { name: "register - as consultant", link: "/register" },
  { name: "login", link: "/login" },
]

// section (B) page links - user login/register
const register_options = [
  { name: "As a student", link: "/register" },
  { name: "As a consultant", link: "/register" }
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

    const navLinks = document.querySelectorAll(".navbar__links--link");
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        window.scrollTo(0, 0);
      });
    });

    const hamburgerLinks = document.querySelectorAll(".navbar__hamburger__menu--link");
    hamburgerLinks.forEach((link) => {
      link.addEventListener("click", () => {
        document.querySelector(".navbar__hamburger").classList.toggle("active");
        window.scrollTo(0, 0);
      });
    });
  }, [])

  return (
    <header className="navbar">
      <div className="holder">
        <span className="navbar__hamburger">
          <i className="uil uil-bars"></i>
          <div className="black-screen"></div>
          <div className="navbar__hamburger__menu">
            {hamburger_pages.map((page, i) => {
              return <Link to={page.link} key={i} className="navbar__hamburger__menu--link">{page.name}</Link>
            })}
            <hr />
            {hamburger_user.map((page, i) => {
              return <Link to={page.link} key={i} className="navbar__hamburger__menu--link">{page.name}</Link>
            })}
          </div>
        </span>

        <span className="navbar__logo">
          <Link to="/">
            <img src="https://internshala.com/static/images/common/new_internshala_logo.svg" alt="Logo" /> 
          </Link>
        </span>

        <span className="navbar__links">
          <Link to="/search" className="navbar__links--link">Jobs</Link>
          <Link to="/search" className="navbar__links--link">Internships</Link>
          <Link to="/consultant" className="navbar__links--link">Consultants</Link>
          <Link to="/contact-us" className="navbar__links--link">Contact Us</Link>
        </span>

        <span className="navbar__buttons">
          <Link to="/login" className="navbar__buttons--login">Login</Link>
          <button className="navbar__buttons--register">
            <span>Register</span>
            <i className="uil uil-angle-down"></i>
            <div className="navbar__buttons--register-menu">
              {register_options.map((option, i) => {
                return <Link key={i} to={option.link} className="navbar__buttons--register-option">{option.name}</Link>
              })}
            </div>
          </button>
        </span>
      </div>
    </header>
  );
}

export default Navbar;
