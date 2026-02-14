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
            <li>HOME</li>
            <li>RENT STORAGE</li>
            <li>CONTACT US</li>
          </ul>
        </div>

        {/* HEAD OFFICE */}
        <div className="cinderella-footer-column cinderella-col-office">
          <h4 className="cinderella-column-title">HEAD OFFICE</h4>
          <p className="cinderella-address-line">110 San Felipe rd</p>
          <p className="cinderella-address-line">Hollister, CA 95023</p>
          <p className="cinderella-contact-link">+1 (831) 637-5761</p>
          <p className="cinderella-contact-link">MotelCinderella1@gmail.com</p>
          <p className="cinderella-site-link">SITE MAP</p>
        </div>

        {/* SOCIALS */}
        <div className="cinderella-footer-column cinderella-col-social">
          <h4 className="cinderella-column-title">SOCIALS</h4>
          <div className="cinderella-social-container">
            <FaFacebookF className="cinderella-social-icon" />
            <FaInstagram className="cinderella-social-icon" />
          </div>
        </div>

        {/* INQUIRIES */}
        <div className="cinderella-footer-column cinderella-col-inquiry">
          <h4 className="cinderella-column-title">INQUIRIES</h4>
          <p className="cinderella-inquiry-text">Looking to get a quote?</p>
          <button className="cinderella-footer-cta">
             <a style={{textDecoration:"none"}} href="/form"> RESERVE NOW →</a>
          </button>
        </div>
      </div>
    </footer>
  );
}