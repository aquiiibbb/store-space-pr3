import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import image from '../Assest/store-logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
  // Function to scroll to top when nav link is clicked
  const handleNavClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Close mobile menu after clicking nav link
    const navbarCollapse = document.querySelector('#navbarNav');
    const toggleButton = document.querySelector('.custom-navbar-toggler');
    
    if (navbarCollapse && toggleButton) {
      navbarCollapse.classList.remove('show');
      toggleButton.setAttribute('aria-expanded', 'false');
      toggleButton.classList.remove('active');
    }
  };

  // Custom navbar toggle functionality
  useEffect(() => {
    const toggleButton = document.querySelector('.custom-navbar-toggler');
    const navbarCollapse = document.querySelector('#navbarNav');
    
    if (toggleButton && navbarCollapse) {
      const handleToggle = () => {
        const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
        
        if (isExpanded) {
          navbarCollapse.classList.remove('show');
          toggleButton.setAttribute('aria-expanded', 'false');
          toggleButton.classList.remove('active');
        } else {
          navbarCollapse.classList.add('show');
          toggleButton.setAttribute('aria-expanded', 'true');
          toggleButton.classList.add('active');
        }
      };
      
      toggleButton.addEventListener('click', handleToggle);
      
      // Cleanup
      return () => {
        toggleButton.removeEventListener('click', handleToggle);
      };
    }
  }, []);

  return (
    <header className="cinderella-header-wrapper">
      <nav className="navbar navbar-expand-lg navbar-dark w-100">
        <div className="container-fluid">
          {/* Brand */}
          <div className="cinderella-brand-container navbar-brand">
            <img src={image} alt="Logo" className="cinderella-crown-logo" />
            <h2 className="mb-0">CINDERELLA SELF ONLINE STORAGE</h2>
          </div>

          {/* Custom Mobile Toggle Button */}
          <button
            className="custom-navbar-toggler"
            type="button"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
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

            <div className="cinderella-cta-wrapper">
              <button className="cinderella-reserve-button">
                <a style={{ textDecoration: "none" }} href="/form">
                  RESERVE NOW →
                </a>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}