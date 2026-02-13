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
    

    </footer>
  );
}
