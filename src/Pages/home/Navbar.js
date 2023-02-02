import React from "react";
import "../../css/Pages/home/navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <span className="navbar_logo">
        <img src="https://internshala.com/static/images/common/new_internshala_logo.svg" alt="Logo" />
      </span>

      <span className="navbar_links">
        <li to="/" className="navbar_links--link">Jobs <i className="uil uil-angle-down"></i></li>
        <li to="/" className="navbar_links--link space">Internships <i className="uil uil-angle-down"></i></li>
        <li to="/" className="navbar_links--link">About Us</li>
      </span>

      <span className="navbar_buttons">
        <button className="navbar_buttons--login">Login</button>
        <button className="navbar_buttons--register">Register <i className="uil uil-angle-down"></i></button>
      </span>
    </header>
  );
}

export default Navbar;
