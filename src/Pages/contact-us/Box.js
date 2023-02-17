import React, { useEffect, useRef, useState } from "react";
import "../../css/Pages/contact-us/box.css";
import ReCAPTCHA from "react-google-recaptcha";

const RECAPTCHA_KEY = process.env.REACT_APP_RECAPTCHA_CLIENT_KEY
const BACKEND = process.env.REACT_APP_BACKEND_SERVER;


function Message({changeState, success}) {

  useEffect(() => window.scrollTo(0, 0), [])

  return <div className="success">
    {success?<h1>Message Send Successfully</h1>:<h1 className="red">Message Not Sent</h1>}
    {success?<p>Thanks for reaching out to us. We will soon get back to you (^_^)</p>:<p>Information provided is invalid, please fill carefully</p>}
    <img style={{"objectFit": success?"cover":"contain"}} src={`/assets/gifs/${success?"success":"wrong"}.gif`} alt="success" />
    <button onClick={() => changeState(false)}>Go Back</button>
  </div>
}

function BoxContent( {changeState} ) {

  const [disabled, setDisabled] = useState(true);
  const captchaValue = useRef(null);

  const contactAPI = async (email, message, first_name, last_name, phone) => {
    const responce = await fetch(BACKEND + "/contact", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, message, first_name, last_name, phone, recaptcha: captchaValue.current }),
    });
    const data = await responce.json();
  
    if(data.code > 0) {
      changeState(false);
      return;
    }

    return changeState(true);
  }

  useEffect(() => {
    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => {
      const parent = input.parentElement;
      input.addEventListener("focus", () => parent.classList.add("active"));

      input.addEventListener("focusout", () => {
        if (input.value === "") parent.classList.add("wrong");
        parent.classList.remove("active");
      });

      input.addEventListener("keyup", () => {
        if (input.value !== "") {
          parent.classList.add("active");
          parent.classList.remove("wrong");
        } else {
          parent.classList.add("wrong");
        }
      });
    });
  }, []);

  function submit() {
    const first = document.querySelector("#first")?.value;
    const last = document.querySelector("#last")?.value;
    const email = document.querySelector("#email")?.value;
    const phone = document.querySelector("#phone")?.value;
    const msg = document.querySelector("#query")?.value;

    if (first && last && email &&  phone && msg) {
      if (disabled) {
        document.querySelector("#error").innerHTML = "Please fill the recaptcha";
      }else {
        contactAPI(email, msg, first, last, phone);
      }
    }
  }

  function captcha(value) {
    setDisabled(false);
    captchaValue.current = value
  }

  return (
    <form className="contact__box" onSubmit={(e) => { e.preventDefault(); submit() }}>
      <div className="contact__box--div">
        <span className="input-box">
          <i class="uil uil-user"></i>
          <input id="first" type="text" required placeholder="First Name" />
        </span>

        <span className="input-box">
          <i class="uil uil-user"></i>
          <input id="last" type="text" required placeholder="Last Name" />
        </span>
      </div>

      <span className="input-box fill">
        <i class="uil uil-envelopes"></i>
        <input id="email" type="email" required placeholder="Email Address" />
      </span>

      <span className="input-box fill">
        <i class="uil uil-mobile-android"></i>
        <input id="phone" type="text" required placeholder="Phone Number" />
      </span>

      <textarea id="query" className="input-box" required placeholder="Describe your query"></textarea>
      <ReCAPTCHA sitekey={RECAPTCHA_KEY} onChange={captcha} className="recaptcha"/>
      <p id="error"></p>
      <button type="submit">Send</button>
    </form>
  );
}

function Box() {
  const [submited, setSubmited] = useState(false);
  const showSuccess = useRef(false);

  function changeState(success) {
    if(!success) showSuccess.current = false;
    else showSuccess.current = true
    setSubmited((prv) => !prv);
  }

  return (
    <section className="contact">
      {(!submited)?<BoxContent changeState={changeState} />:<Message success={showSuccess.current} changeState={changeState} />}
      <div className="contact__img">
        <img src="/assets/contact_us.jpg" alt="" />
      </div>
    </section>
  );
}

export default Box;