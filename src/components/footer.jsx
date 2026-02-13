import "./footer.css";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        {/* LEFT SECTION */}
        <div className="footer-col">
          <h2 className="footer-title">San Felipe <br /> Storage</h2>

          <ul>
            <li>HOME</li>
           
           
            <li>RENT STORAGE</li>
            
            <li>CONTACT US</li>
          </ul>
        </div>

        {/* HEAD OFFICE */}
        <div className="footer-col">
          <h4>HEAD OFFICE</h4>
          <p>1571 San Felipe Rd</p>
          <p>Hollister, CA 95023</p>
          <p className="link">+1 (831) 265-8021</p>
          <p className="link">info@SanFelipeStorage.com</p>
          <p className="small-link">SITE MAP</p>
        </div>

        {/* SOCIALS */}
        <div className="footer-col">
          <h4>SOCIALS</h4>
          <div className="social-icons">
            <FaFacebookF className="icon" />
            <FaInstagram className="icon" />
          </div>
        </div>

        {/* INQUIRIES */}
        <div className="footer-col">
          <h4>INQUIRIES</h4>
          <p>Looking to get a quote?</p>
          <button className="reserve-btn">
            RESERVE NOW →
          </button>
        </div>

      </div>

      {/* DISCLAIMER */}
      <div className="disclaimer">
        <p>
          <strong>DISCLAIMER:</strong> By providing my phone number to San Felipe Storage, 
          I agree and acknowledge that San Felipe Storage may send text messages 
          to my wireless phone number for any purpose. Message and data rates may apply.
          Message frequency will vary, and you will be able to Opt-out by replying “STOP”.
        </p>
      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <p className="privacy">Privacy Policy</p>
        <p>Back to Top</p>
        <p>©2024 San Felipe Storage by Dove Media Marketing</p>
      </div>

    </footer>
  );
}
