import "./footer.css";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import image1 from '../Assest/store-logo.png';

export default function Footer() {
  return (
    <footer className="cinderella-footer-main">
      <div className="cinderella-footer-content">
        {/* LEFT SECTION */}
        <div className="cinderella-footer-column cinderella-col-brand">
          <div className="cinderella-logo-area">
            <img src={image1} alt="Cinderella Storage" className="cinderella-footer-logo" />
            <h2 className="cinderella-footer-brand">San Felipe <br /> Storage</h2>
          </div>

          <ul className="cinderella-nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/storage">Cinderella Self Storage Car, RV and Trailer</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* HEAD OFFICE */}
        <div className="cinderella-footer-column cinderella-col-office">
          <h4 className="cinderella-column-title">HEAD OFFICE</h4>
          <div className="cinderella-contact-info">
            <p className="cinderella-address-line">110 San Felipe rd</p>
            <p className="cinderella-address-line">Hollister, CA 95023</p>
            <a href="tel:+18316375761" className="cinderella-contact-link">+1 (831) 637-5761</a>
            <a href="mailto:MotelCinderella1@gmail.com" className="cinderella-contact-link">MotelCinderella1@gmail.com</a>
          </div>
        </div>

        {/* INQUIRIES */}
        <div className="cinderella-footer-column cinderella-col-inquiry">
          <div className="cinderella-cta-container">
            <a href="/rent" className="cinderella-footer-cta">
              RESERVE NOW →
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}