import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Main() {

  useEffect(() => {
    const loginBtn = document.querySelector(".fields-container--btn.fill");

    const email = document.querySelector("#email");
    const pass = document.querySelector("#pass");

    loginBtn.addEventListener("click", () => {
      if (pass.value && email.value) {
        const error = document.querySelector(".fields-container--error");
        error.classList.add('active');
      }
    })
  }, []);

  return (
    <div className="container-area">
      <h1 className="area--heading">Welcome Back, Login User</h1>
      <form className="fields-container" onSubmit={(e) => e.preventDefault()}>
        <div className="fields-container--field">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" required placeholder="john@example.com" />
        </div>

        <div className="fields-container--field">
          <label htmlFor="pass">Password</label>
          <input type="password" required id="pass" placeholder="I love my password" />
        </div>

        <p className="fields-container--error">Email or Password is incorrect</p>
        <button type="submit" className="fields-container--btn fill">Login</button>

        <div className="fields-container--btn">New Here? <Link to="/register" className="link-text">Register</Link></div>
      </form>
    </div>
  );
}

export default Main;
