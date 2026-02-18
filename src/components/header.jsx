import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import image from '../Assest/store-logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Header() {
  // Function to scroll to top when nav link is clicked
  const handleNavClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <header className="cinderella-header-wrapper">
      <nav className="navbar navbar-expand-lg navbar-dark w-100">
        <div className="container-fluid">
          {/* Brand */}
          <div className="cinderella-brand-container navbar-brand">
            <img src={image} alt="Logo" className="cinderella-crown-logo" />
            <h2 className="mb-0">CINDERELLA SELF ONLINE STORAGE</h2>
          </div>

          {/* Mobile Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible Content */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav">
              <NavLink
                to="/"
                end
                className="nav-link cinderella-nav-link"
                onClick={handleNavClick}
              >
                HOME
              </NavLink>
              <NavLink
                to="/rent"
                className="nav-link cinderella-nav-link"
                onClick={handleNavClick}
              >
                RENT STORAGE
              </NavLink>
              <NavLink
                to="/contact"
                className="nav-link cinderella-nav-link"
                onClick={handleNavClick}
              >
                CONTACT US
              </NavLink>
            </div>

            <div className="cinderella-cta-wrapper ms-auto">
              <button className="cinderella-reserve-button">
                <a style={{ textDecoration: "none" }} href="/form"> RESERVE NOW →</a>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}