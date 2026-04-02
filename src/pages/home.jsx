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
  FaChevronRight,
  FaTimes,
  FaKeyboard,
  FaUndo,
  FaQuestionCircle
} from 'react-icons/fa';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAccessibilityOpen, setIsAccessibilityOpen] = useState(false);
  const [activeSettings, setActiveSettings] = useState({
    monoChrome: false,
    grayScale: false,
    highContrast: false,
    invertColors: false,
    sepia: false,
    wcagContrast: false,
    boldFonts: false,
    removeImages: false,
    disableAnimations: false
  });
  const toggleA11yPanel = () => {
    setIsAccessibilityOpen(prev => !prev);
  };
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

  // ESC key to close widget
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape' && isAccessibilityOpen) {
        setIsAccessibilityOpen(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isAccessibilityOpen]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const toggleAccessibility = () => {
    setIsAccessibilityOpen(!isAccessibilityOpen);
  };

  const applyAccessibility = (type) => {
    const body = document.body;

    // Remove all existing color classes first
    const colorClasses = ['mono-chrome', 'gray-scale', 'high-contrast', 'invert-colors', 'sepia', 'wcag-contrast'];

    switch (type) {
      case 'increase-font':
        const currentSize = parseFloat(getComputedStyle(body).fontSize) || 16;
        body.style.fontSize = (currentSize + 2) + 'px';
        break;

      case 'decrease-font':
        const currentSize2 = parseFloat(getComputedStyle(body).fontSize) || 16;
        body.style.fontSize = Math.max(12, currentSize2 - 2) + 'px';
        break;

      case 'reset-font':
        body.style.fontSize = '16px';
        break;

      case 'zoom-increase':
        document.body.style.zoom = (parseFloat(document.body.style.zoom) || 1) + 0.1;
        break;

      case 'zoom-decrease':
        document.body.style.zoom = Math.max(0.5, (parseFloat(document.body.style.zoom) || 1) - 0.1);
        break;

      case 'mono-chrome':
        colorClasses.forEach(cls => body.classList.remove(cls));
        body.classList.toggle('mono-chrome');
        setActiveSettings(prev => ({
          ...prev,
          monoChrome: !prev.monoChrome,
          grayScale: false,
          highContrast: false,
          invertColors: false,
          sepia: false,
          wcagContrast: false
        }));
        break;

      case 'gray-scale':
        colorClasses.forEach(cls => body.classList.remove(cls));
        body.classList.toggle('gray-scale');
        setActiveSettings(prev => ({
          ...prev,
          grayScale: !prev.grayScale,
          monoChrome: false,
          highContrast: false,
          invertColors: false,
          sepia: false,
          wcagContrast: false
        }));
        break;

      case 'high-contrast':
        colorClasses.forEach(cls => body.classList.remove(cls));
        body.classList.toggle('high-contrast');
        setActiveSettings(prev => ({
          ...prev,
          highContrast: !prev.highContrast,
          monoChrome: false,
          grayScale: false,
          invertColors: false,
          sepia: false,
          wcagContrast: false
        }));
        break;

      case 'invert-colors':
        colorClasses.forEach(cls => body.classList.remove(cls));
        body.classList.toggle('invert-colors');
        setActiveSettings(prev => ({
          ...prev,
          invertColors: !prev.invertColors,
          monoChrome: false,
          grayScale: false,
          highContrast: false,
          sepia: false,
          wcagContrast: false
        }));
        break;

      case 'sepia':
        colorClasses.forEach(cls => body.classList.remove(cls));
        body.classList.toggle('sepia');
        setActiveSettings(prev => ({
          ...prev,
          sepia: !prev.sepia,
          monoChrome: false,
          grayScale: false,
          highContrast: false,
          invertColors: false,
          wcagContrast: false
        }));
        break;

      case 'wcag-contrast':
        colorClasses.forEach(cls => body.classList.remove(cls));
        body.classList.toggle('wcag-contrast');
        setActiveSettings(prev => ({
          ...prev,
          wcagContrast: !prev.wcagContrast,
          monoChrome: false,
          grayScale: false,
          highContrast: false,
          invertColors: false,
          sepia: false
        }));
        break;

      case 'increase-line-height':
        body.style.lineHeight = '2';
        break;

      case 'decrease-line-height':
        body.style.lineHeight = '1.2';
        break;

      case 'bold-fonts':
        body.classList.toggle('bold-fonts');
        setActiveSettings(prev => ({ ...prev, boldFonts: !prev.boldFonts }));
        break;

      case 'remove-images':
        body.classList.toggle('remove-images');
        setActiveSettings(prev => ({ ...prev, removeImages: !prev.removeImages }));
        break;

      case 'disable-animations':
        body.classList.toggle('disable-animations');
        setActiveSettings(prev => ({ ...prev, disableAnimations: !prev.disableAnimations }));
        break;

      case 'reset-all':
        body.style.fontSize = '16px';
        body.style.lineHeight = '1.5';
        body.style.zoom = '1';
        body.className = '';
        setActiveSettings({
          monoChrome: false,
          grayScale: false,
          highContrast: false,
          invertColors: false,
          sepia: false,
          wcagContrast: false,
          boldFonts: false,
          removeImages: false,
          disableAnimations: false
        });
        break;

      default:
        break;
    }
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
          <button className="rent-btn">
            <a style={{ textDecoration: "none", color: "white" }} href="/rent">Rent Online</a>
          </button>
        </div>

        {/* Slider Controls */}
        <button className="slider-btn prev" onClick={prevSlide} aria-label="Previous slide">
          <FaChevronLeft />
        </button>
        <button className="slider-btn next" onClick={nextSlide} aria-label="Next slide">
          <FaChevronRight />
        </button>

        {/* Slider Dots */}
        <div className="slider-dots">
          {heroImages.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
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
              <a style={{ textDecoration: "none", color: "white" }} href="/rent">Find Your Perfect Unit</a> <FaArrowRight />
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
              <span className="price"><a style={{ textDecoration: "none" }} href="/rent">Book Now</a></span>
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
              <span className="price"><a style={{ textDecoration: "none" }} href="/rent">Book Now</a></span>
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

      {/* FACILITY GALLERY - FIXED */}
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
            <img src={image13} alt="Security Gate" />
            <div className="gallery-overlay">
              <h3>Secure Access</h3>
              <p>Gated entry</p>
            </div>
          </div>
          <div className="gallery-item">
            <img src={image14} alt="Drive-up Units" />
            <div className="gallery-overlay">
              <h3>Red Hot Rod - Storage Unit 13</h3>
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

      {/* ACCESSIBILITY WIDGET */}
      <button
        className="accessibility-fab"
        onClick={toggleA11yPanel}
        aria-label="Open Accessibility Panel"
      />

      {isAccessibilityOpen && (
        <div className="accessibility-widget">
          <div className="widget-header">
            <div className="widget-logo">
              <span className="logo-text">ada.tray</span>
            </div>
            <button className="close-btn" onClick={toggleAccessibility}>
              <span>ESC</span>
              <FaTimes />
            </button>
          </div>

          <div className="widget-sidebar">
            <div className="sidebar-item">
              <FaKeyboard />
              <div>
                <div className="sidebar-title">Keyboard Nav</div>
                <div className="sidebar-subtitle">(Shift + A To Activate)</div>
              </div>
            </div>
            <div className="sidebar-item">
              <FaUndo />
              <div className="sidebar-title">Reset Button</div>
            </div>
            <div className="sidebar-item">
              <FaQuestionCircle />
              <div className="sidebar-title">Help Button</div>
            </div>
          </div>

          <div className="widget-content">
            {/* CONTENT & DISPLAY ADJUSTMENTS */}
            <div className="widget-section">
              <div className="section-header">
                <h4>CONTENT & DISPLAY ADJUSTMENTS</h4>
                <span className="expand-icon">▼</span>
              </div>
              <div className="widget-grid">
                <button
                  className={`widget-btn ${activeSettings.removeImages ? 'active' : ''}`}
                  onClick={() => applyAccessibility('remove-images')}
                >
                  <div className="btn-icon">🖼️</div>
                  <span>Remove Images</span>
                </button>
                <button className="widget-btn">
                  <div className="btn-icon">🔊</div>
                  <span>Listen</span>
                </button>
                <button
                  className={`widget-btn ${activeSettings.disableAnimations ? 'active' : ''}`}
                  onClick={() => applyAccessibility('disable-animations')}
                >
                  <div className="btn-icon">🎬</div>
                  <span>Disable Animations</span>
                </button>
                <button className="widget-btn" onClick={() => applyAccessibility('increase-font')}>
                  <div className="btn-icon">A+</div>
                  <span>Increase Fonts</span>
                </button>
                <button className="widget-btn" onClick={() => applyAccessibility('decrease-font')}>
                  <div className="btn-icon">A-</div>
                  <span>Decrease Fonts</span>
                </button>
                <button className="widget-btn" onClick={() => applyAccessibility('reset-font')}>
                  <div className="btn-icon">A</div>
                  <span>Reset Font</span>
                </button>
                <button className="widget-btn" onClick={() => applyAccessibility('zoom-increase')}>
                  <div className="btn-icon">🔍+</div>
                  <span>Zoom Increase</span>
                </button>
                <button className="widget-btn" onClick={() => applyAccessibility('zoom-decrease')}>
                  <div className="btn-icon">🔍-</div>
                  <span>Zoom Decrease</span>
                </button>
                <button className="widget-btn" onClick={() => applyAccessibility('increase-line-height')}>
                  <div className="btn-icon">≡</div>
                  <span>Increase Line Height</span>
                </button>
                <button className="widget-btn" onClick={() => applyAccessibility('decrease-line-height')}>
                  <div className="btn-icon">≡</div>
                  <span>Decrease Line Height</span>
                </button>
                <button className="widget-btn">
                  <div className="btn-icon">≡</div>
                  <span>Increase Word Spacing</span>
                </button>
                <button className="widget-btn">
                  <div className="btn-icon">≡</div>
                  <span>Decrease Word Spacing</span>
                </button>
                <button className="widget-btn">
                  <div className="btn-icon">A+</div>
                  <span>Increase Letter Spacing</span>
                </button>
                <button className="widget-btn">
                  <div className="btn-icon">A-</div>
                  <span>Decrease Letter Spacing</span>
                </button>
                <button className="widget-btn">
                  <div className="btn-icon">≡</div>
                  <span>Align Center</span>
                </button>
                <button className="widget-btn">
                  <div className="btn-icon">≡</div>
                  <span>Align Left</span>
                </button>
                <button className="widget-btn">
                  <div className="btn-icon">≡</div>
                  <span>Align Right</span>
                </button>
                <button className="widget-btn">
                  <div className="btn-icon">≡</div>
                  <span>Align Justify</span>
                </button>
                <button
                  className={`widget-btn ${activeSettings.boldFonts ? 'active' : ''}`}
                  onClick={() => applyAccessibility('bold-fonts')}
                >
                  <div className="btn-icon">B</div>
                  <span>Bold Fonts</span>
                </button>
                <button className="widget-btn">
                  <div className="btn-icon">T</div>
                  <span>Highlights Titles</span>
                </button>
                <button className="widget-btn">
                  <div className="btn-icon">🔗</div>
                  <span>Highlights Links</span>
                </button>
                <button className="widget-btn">
                  <div className="btn-icon">↗</div>
                  <span>Black Cursor</span>
                </button>
              </div>
            </div>

            {/* COLOR ADJUSTMENTS */}
            <div className="widget-section">
              <div className="section-header">
                <h4>COLOR ADJUSTMENTS</h4>
                <span className="expand-icon">▼</span>
              </div>
              <div className="widget-grid color-grid">
                <button
                  className={`widget-btn color-btn ${activeSettings.monoChrome ? 'active' : ''}`}
                  onClick={() => applyAccessibility('mono-chrome')}
                >
                  <div className="color-circle mono-chrome-bg"></div>
                  <span>Mono Chrome</span>
                </button>
                <button
                  className={`widget-btn color-btn ${activeSettings.grayScale ? 'active' : ''}`}
                  onClick={() => applyAccessibility('gray-scale')}
                >
                  <div className="color-circle gray-scale-bg"></div>
                  <span>Gray Scale</span>
                </button>
                <button className="widget-btn color-btn">
                  <div className="color-circle title-color-bg"></div>
                  <span>Title Color</span>
                </button>
                <button className="widget-btn color-btn">
                  <div className="color-circle text-color-bg"></div>
                  <span>Text Color</span>
                </button>
                <button
                  className={`widget-btn color-btn ${activeSettings.sepia ? 'active' : ''}`}
                  onClick={() => applyAccessibility('sepia')}
                >
                  <div className="color-circle sepia-bg"></div>
                  <span>Sepia</span>
                </button>
                <button
                  className={`widget-btn color-btn ${activeSettings.highContrast ? 'active' : ''}`}
                  onClick={() => applyAccessibility('high-contrast')}
                >
                  <div className="color-circle high-contrast-bg"></div>
                  <span>High Contrast</span>
                </button>
                <button
                  className={`widget-btn color-btn ${activeSettings.invertColors ? 'active' : ''}`}
                  onClick={() => applyAccessibility('invert-colors')}
                >
                  <div className="color-circle invert-bg"></div>
                  <span>Invert</span>
                </button>
                <button
                  className={`widget-btn color-btn ${activeSettings.wcagContrast ? 'active' : ''}`}
                  onClick={() => applyAccessibility('wcag-contrast')}
                >
                  <div className="color-circle wcag-bg"></div>
                  <span>WCAG Contrast</span>
                </button>
              </div>
            </div>

            {/* ADDITIONAL INFORMATION */}
            <div className="widget-section">
              <div className="section-header">
                <h4>ADDITIONAL INFORMATION</h4>
                <span className="expand-icon">▼</span>
              </div>
              <div className="widget-grid info-grid">
                <button className="widget-btn info-btn">
                  <div className="info-icon">W3C</div>
                  <span>Initiative</span>
                </button>
                <button className="widget-btn info-btn">
                  <div className="info-icon">♿</div>
                  <span>Accessibility Statement</span>
                </button>
              </div>
            </div>

            {/* RESET ALL */}
            <div className="widget-section">
              <div className="section-header">
                <h4>RESET ALL</h4>
                <span className="expand-icon">▼</span>
              </div>
              <div className="widget-grid">
                <button className="widget-btn reset-btn" onClick={() => applyAccessibility('reset-all')}>
                  <div className="btn-icon">🔄</div>
                  <span>Reset All Settings</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}