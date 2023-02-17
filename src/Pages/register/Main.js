import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Form({changeState}) {

  useEffect(() => {
    const registerBtn = document.querySelector(".fields-container--btn.fill");
    const email = document.querySelector("#email");
    registerBtn.addEventListener("click", () => {
      if (email.value) {
        changeState()
      }
    });
  }, [changeState]);

  return (
    <form className="fields-container" onSubmit={(e) => e.preventDefault()}>
      <div className="fields-container--field">
        <label htmlFor="email">Email</label>
        <input type="text" id="email" required placeholder="john@example.com" />
      </div>
      <button type="submit" className="fields-container--btn fill">Send Email</button>
      <div className="fields-container--btn">Already registered? <Link to="/login" className="link-text">Login</Link></div>
    </form>
  )
}

function Success() {
  return (
    <div className="fields-container">
      <img src="/assets/gifs/success.gif" alt="success" />
      <p className="success-msg--notification">Please verify you email by clicking on the link which we have send you</p>
    </div>
  )
}

function Main() {
  const [success, setSuccess] = useState(false);

  function changeState() {
    setSuccess((prv) => !prv);
  }

  return (
    <div className="container-area">
      <h1 className="area--heading">Invite Based Registration</h1>
      <p className="area--description">We are letting user register based on invitation, please give your email with which you want to register</p>
      {(!success)?<Form changeState={() => changeState()} />:<Success />}
    </div>
  );
}

export default Main;
