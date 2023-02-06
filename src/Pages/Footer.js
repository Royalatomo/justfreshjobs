import React from "react";
import "../css/Pages/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__pagelink">
        <div className="holder">
          <li className="footer__pagelink--link">About us</li>
          <li className="footer__pagelink--link">Contact us</li>
        </div>

        <div className="holder">
          <li className="footer__pagelink--link">Our Services</li>
          <li className="footer__pagelink--link">Terms & Conditions</li>
        </div>

        <div className="holder">
          <li className="footer__pagelink--link">Privacy</li>
          <li className="footer__pagelink--link">Consultants</li>
        </div>
      </div>

      <div className="footer__socials">
        <div className="holder">
          <li className="footer__socials--link">
            <i className="uil uil-instagram"></i>
          </li>
          <li className="footer__socials--link">
            <i className="uil uil-twitter"></i>
          </li>
          <li className="footer__socials--link">
            <i className="uil uil-youtube"></i>
          </li>
          <li className="footer__socials--link">
            <i className="uil uil-linkedin-alt"></i>
          </li>
        </div>

        <div className="holder">
          <p className="copyright">&copy; Copyright {new Date().getFullYear()} JustFreshJobs</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
