import "./home.css";
import { 
  FaCheck, 
  FaLock, 
  FaSmile, 
  FaThumbsUp,
  FaArrowRight
} from 'react-icons/fa';

export default function Home() {
  return (
    <div className="home">

      {/* HERO SECTION */}
      <section
        className="hero"
        style={{
          backgroundImage: `url("https://launchworkplaces.com/wp-content/uploads/2024/11/a-flexible-office-space-with-multiple-private-offices-which-helps-reduce-the-cost-to-rent-an-office-scaled.jpg")`
        }}
      >
        <div className="hero-overlay">
          <h1>AN FELIPE STORAGE</h1>
          <h2>Storage in Felipe, CA 95023</h2>
          <p>
            We have a state-of-the-art facility with the best customer service around
            and 24/7 Video Surveillance! Give us a call or book online today!
          </p>
          <button className="rent-btn">Rent Online</button>
        </div>
      </section>

      {/* HERO BANNER - PREMIUM SECTION */}
      <section className="hero-banner">
        <div className="banner-content">
          <div className="banner-card">
            <h1>Premium Self Storage Solutions</h1>
            <p>Secure, convenient, and affordable storage units in Felipe</p>
            <button className="cta-button">
              Find Your Perfect Unit <FaArrowRight />
            </button>
          </div>
        </div>
      </section>
  
      {/* STORAGE UNIT SHOWCASE */}
      <section className="units-showcase">
        <h2>Choose Your Perfect Storage Size</h2>
        <div className="units-grid">
          <div className="unit-card">
            <div className="unit-image-wrapper">
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop" alt="Small Storage Unit" />
              <div className="unit-badge">Small</div>
            </div>
            <div className="unit-info">
              <h3>Small Units</h3>
              <p className="unit-size">5' x 5' - 5' x 10'</p>
              <p className="unit-desc">Perfect for seasonal items, documents, and small furniture</p>
              <span className="price">Starting at $49/month</span>
            </div>
          </div>
          
          <div className="unit-card featured">
            <div className="unit-image-wrapper">
              <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=250&fit=crop" alt="Medium Storage Unit" />
              <div className="unit-badge popular">Most Popular</div>
            </div>
            <div className="unit-info">
              <h3>Medium Units</h3>
              <p className="unit-size">10' x 10' - 10' x 15'</p>
              <p className="unit-desc">Ideal for apartment contents, appliances, and business inventory</p>
              <span className="price">Starting at $89/month</span>
            </div>
          </div>
          
          <div className="unit-card">
            <div className="unit-image-wrapper">
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=250&fit=crop" alt="Large Storage Unit" />
              <div className="unit-badge">Large</div>
            </div>
            <div className="unit-info">
              <h3>Large Units</h3>
              <p className="unit-size">10' x 20' - 10' x 30'</p>
              <p className="unit-desc">Great for entire home contents, vehicles, and commercial use</p>
              <span className="price">Starting at $149/month</span>
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
            <img src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&h=400&fit=crop" alt="Modern Storage Facility" />
            <div className="gallery-overlay">
              <h3>Modern Facility</h3>
              <p>State-of-the-art storage complex</p>
            </div>
          </div>
          <div className="gallery-item">
            <img src="https://media.istockphoto.com/id/1938106570/photo/digitally-generated-domestic-bedroom-interior.jpg?s=612x612&w=0&k=20&c=bC_YWy11iWh0ZtHJIT5ia4v9QELdl94SVqDge9XNZcc=" alt="Security Gate" />
            <div className="gallery-overlay">
              <h3>Secure Access</h3>
              <p>Gated entry</p>
            </div>
          </div>
          <div className="gallery-item">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=300&h=300&fit=crop" alt="Drive-up Units" />
            <div className="gallery-overlay">
              <h3>Drive-up Access</h3>
              <p>Easy loading</p>
            </div>
          </div>
          <div className="gallery-item">
            <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop" alt="Climate Controlled" />
            <div className="gallery-overlay">
              <h3>Climate Control</h3>
              <p>Temperature regulated</p>
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