import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const BACKEND = process.env.REACT_APP_BACKEND_SERVER;

function Form({changeState}) {

  const [disable, setDisable] = useState(false);

  const emailSubscribeAPI = async (email) => {
    const responce = await fetch(BACKEND + "/subscribe", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email }),
    });
    const data = await responce.json();

    console.log(data.code);
  
    if(data.code > 0) {
      changeState(false);
      return;
    }

    return changeState(true);
  }

  useEffect(() => {
    const registerBtn = document.querySelector(".fields-container--btn.fill");
    const email = document.querySelector("#email");
    registerBtn.addEventListener("click", () => {
      if (email.value && !disable) {
        emailSubscribeAPI(email.value)
        setDisable(true)
      }
    });
  }, []);

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

function Success({success, changeState}) {
  return (
    <div className="fields-container">
      <img src={`/assets/gifs/${success?"success":"wrong"}.gif`} alt="success" />
      <p className="success-msg--notification">
        {success?
          <span>Please verify you email by clicking on the link which we have send you</span>:
          <><span className="red">You can't use this email</span><button onClick={() => changeState(false)} className="fields-container--btn fill">Go Back</button></>}
      </p>
    </div>
  )
}

function Main() {
  const [success, setSuccess] = useState(false);
  const showSuccess = useRef(false);

  function changeState(success) {
    if(!success) showSuccess.current = false;
    else showSuccess.current = true
    setSuccess((prv) => !prv);
  }

  return (
    <div className="container-area">
      <h1 className="area--heading">Invite Based Registration</h1>
      <p className="area--description">We are letting user register based on invitation, please give your email with which you want to register</p>
      {(!success)?<Form changeState={changeState} />:<Success changeState={changeState} success={showSuccess.current} />}
    </div>
  );
}

export default Main;
