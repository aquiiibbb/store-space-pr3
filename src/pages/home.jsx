import React, { useState, useEffect } from "react";
import image11 from '../Assest/hm1.png';
import image12 from '../Assest/hm2.png';
import image13 from '../Assest/hm3.png';
import image14 from '../Assest/hm4.png';
import image15 from '../Assest/hm5.jpeg';
import image16 from '../Assest/hm6.png';

import "./home.css";
import { 
  FaCheck, 
  FaLock, 
  FaSmile, 
  FaThumbsUp,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight
} from 'react-icons/fa';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroImages = [
    image15,
    image12,
    image13

  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <div className="home">
      {/* HERO SECTION WITH SLIDER */}
      <section className="hero">
        <div className="hero-slider">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </div>
        
        <div className="hero-overlay">
          <h1>Cinderella Self Online Storage</h1>
          <h2>110 San Felipe rd, Hollister CA 95023</h2>
          <p>MotelCinderella1@gmail.com | +1 (831) 637-5761</p>
          <p>
            We have a state-of-the-art facility with the best customer service around
            and 24/7 Video Surveillance! Give us a call or book online today!
          </p>
          <button className="rent-btn"> <a style={{textDecoration:"none",color:"white"}} href="/rent">Rent Online</a></button>
        </div>

        {/* Slider Controls */}
        <button className="slider-btn prev" onClick={prevSlide}>
          <FaChevronLeft />
        </button>
        <button className="slider-btn next" onClick={nextSlide}>
          <FaChevronRight />
        </button>

        {/* Slider Dots */}
        <div className="slider-dots">
          {heroImages.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* HERO BANNER - PREMIUM SECTION */}
      <section className="hero-banner">
        <div className="banner-content">
          <div className="banner-card">
            <h1>Premium Self Storage Solutions</h1>
            <p>Secure, convenient, and affordable storage units in Felipe</p>
            <button className="cta-button">
             <a style={{textDecoration:"none",color:"white"}} href="/rent">Find Your Perfect Unit</a> <FaArrowRight />
            </button>
          </div>
        </div>
      </section>
  
      {/* STORAGE UNIT SHOWCASE */}
      <section className="units-showcase">
        <h2>Choose Your Perfect Storage Size</h2>
        <div className="units-grid">
                    
          <div className="unit-card featured">
            <div className="unit-image-wrapper">
              <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=250&fit=crop" alt="Medium Storage Unit" />
              <div className="unit-badge popular">Most Popular</div>
            </div>
            <div className="unit-info">
              <h3>Medium Units</h3>
              <p className="unit-size">10' x 10'</p>
              <p className="unit-desc">Ideal for apartment contents, appliances, and business inventory</p>
              <span className="price"><a style={{textDecoration:"none"}} href="/rent">Book Now</a></span>
            </div>
          </div>
          
          <div className="unit-card">
            <div className="unit-image-wrapper">
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=250&fit=crop" alt="Large Storage Unit" />
              <div className="unit-badge">Large</div>
            </div>
            <div className="unit-info">
              <h3>Large Units</h3>
              <p className="unit-size">10' x 20'</p>
              <p className="unit-desc">Great for entire home contents, vehicles, and commercial use</p>
              <span className="price"><a style={{textDecoration:"none"}} href="/rent">Book Now</a></span>
            </div>
          </div>
        </div>
      </section>

      {/* WHY USE SECTION */}
      <section className="why-section">
        <h2>Why Choose Felipe Storage?</h2>
        <div className="why-grid">
          <div className="why-card">
            <div className="why-icon">📞</div>
            <h3>Dedicated Customer Service</h3>
            <p>
              We are committed to offering you exceptional value for your hard-earned money with 24/7 support.
            </p>
          </div>
          <div className="why-card">
            <div className="why-icon">💻</div>
            <h3>Easy Online Booking</h3>
            <p>
              Our online software is intuitive and feature-rich for a seamless, interactive experience.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="features-section">
        <h2>All the Convenience and Security You Need</h2>
        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-icon"><FaCheck /></div>
            <span>Security Cameras</span>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><FaCheck /></div>
            <span>Great Customer Service</span>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><FaCheck /></div>
            <span>Security Gate</span>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><FaCheck /></div>
            <span>24/7 Video Surveillance</span>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><FaCheck /></div>
            <span>Online Bill Pay</span>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><FaCheck /></div>
            <span>Variety of Unit Sizes</span>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><FaCheck /></div>
            <span>Drive-up Access</span>
          </div>
        </div>
      </section>

      {/* FACILITY GALLERY */}
      <section className="facility-gallery">
        <h2>Tour Our Facility</h2>
        <div className="gallery-grid">
          <div className="gallery-item large">
            <img src={image12} alt="Modern Storage Facility" />
            <div className="gallery-overlay">
              <h3>Storage Facility at Golden Hour</h3>
              <p>Row of storage units with one open yellow-lit unit, bicycles parked outside, beautiful sunset sky with trees in background.</p>
            </div>
          </div>
          <div className="gallery-item">
            <img src={ image13 } alt="Security Gate" />
            <div className="gallery-overlay">
              <h3>Secure Access</h3>
              <p>Gated entry</p>
            </div>
          </div>
          <div className="gallery-item">
            <img src={image14} alt="Drive-up Units" />
            <div className="gallery-overlay">
              <h3> Red Hot Rod - Storage Unit 13</h3>
              <p>Vintage red hot rod with chrome details, license plate 5JSP182.</p>
            </div>
          </div>
          <div className="gallery-item">
            <img src={image15} alt="Climate Controlled" />
            <div className="gallery-overlay">
              <h3>Modern Residential Gate</h3>
              <p>Black wrought iron double gate with decorative scrollwork for residential property access.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROMISE SECTION */}
      <div className="promise-container">
        <div className="promise-title">
          <h2>Our Promise to You</h2>
          <p className="promise-subtitle">Excellence in every aspect of our service</p>
        </div>
        <div className="promise-grid">
          <div className="promise-item">
            <div className="promise-icon-wrapper">
              <div className="icon-circle">
                <FaLock className="promise-icon" />
              </div>
            </div>
            <h3>Security First</h3>
            <p>
              We take the security of your property seriously with SSL encryption and 24/7 surveillance.
            </p>
            <div className="promise-line"></div>
          </div>
          <div className="promise-item">
            <div className="promise-icon-wrapper">
              <div className="icon-circle">
                <FaSmile className="promise-icon" />
              </div>
            </div>
            <h3>Exceptional Service</h3>
            <p>
              Clean, ready-to-rent units with friendly, helpful staff available whenever you need us.
            </p>
            <div className="promise-line"></div>
          </div>
          <div className="promise-item">
            <div className="promise-icon-wrapper">
              <div className="icon-circle">
                <FaThumbsUp className="promise-icon" />
              </div>
            </div>
            <h3>24/7 Convenience</h3>
            <p>
              Access your account anytime, anywhere. Manage your storage on your schedule, not ours.
            </p>
            <div className="promise-line"></div>
          </div>
        </div>
      </div>
    </div>
  );
}