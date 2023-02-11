import React, { useEffect, useState } from "react";
import "../../css/Pages/contact-us/box.css";
import ReCAPTCHA from "react-google-recaptcha";

const RECAPTCHA_KEY = process.env.REACT_APP_RECAPTCHA_CLIENT_KEY


function Message({toggle}) {

  useEffect(() => window.scrollTo(0, 0), [])

  return <div className="success">
    <h1>Message Send Successfully</h1>
    <p>Thanks for reaching out to us. We will soon get back to you (^_^)</p>
    <img src="/assets/gifs/success.gif" alt="success" />
    <button onClick={toggle}>Go Back</button>
  </div>
}

function BoxContent( {toggle} ) {

  const [disabled, setDisabled] = useState(true);

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
    const query = document.querySelector("#query")?.value;

    if (first && last && email &&  phone && query) {
      if (disabled) {
        document.querySelector("#error").innerHTML = "Please fill the recaptcha";
      }else {
        toggle();
      }
    }
  }

  function captcha() {
    setDisabled(false);
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

  function toggleSubmit() {
    setSubmited(!submited);
  }

  return (
    <section className="contact">
      <Message toggle={toggleSubmit} />
      {/* {(!submited)?<BoxContent toggle={toggleSubmit} />:<Message toggle={toggleSubmit} />} */}
      <div className="contact__img">
        <img src="/assets/contact_us.jpg" alt="" />
      </div>
    </section>
  );
}

export default Box;