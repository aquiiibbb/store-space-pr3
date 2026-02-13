import "./home.css";
import { FaCheck } from "react-icons/fa";
import { FaLock, FaSmile, FaThumbsUp } from "react-icons/fa";
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

      {/* WHY USE SECTION */}
      <section className="why-section">
        <h2>Why Use Hollister Storage?</h2>

        <div className="why-grid">
          <div>
            <h3>Customer Service</h3>
            <p>
              We are dedicated to customer service. We are committed to offering you
              exceptional value for your hard-earned money.
            </p>
          </div>

          <div>
            <h3>Book and Pay Online</h3>
            <p>
              Our online software is easy to use and has all the features for a rich,
              interactive experience.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="features-section">
        <h2>All the Convenience and Security You Need</h2>

        <div className="features-grid">

          <div className="feature-item">
            <FaCheck /> <span>Security Cameras</span>
          </div>

          <div className="feature-item">
            <FaCheck /> <span>Great Customer Service</span>
          </div>

          <div className="feature-item">
            <FaCheck /> <span>Security Gate</span>
          </div>

          <div className="feature-item">
            <FaCheck /> <span>24/7 Video Surveillance</span>
          </div>

          <div className="feature-item">
            <FaCheck /> <span>Online Bill Pay</span>
          </div>

          <div className="feature-item">
            <FaCheck /> <span>Variety of Unit Sizes Available</span>
          </div>

          <div className="feature-item">
            <FaCheck /> <span>Drive-up Access</span>
          </div>

        </div>
      </section>


 <div className="promise-container">

      <div className="promise-title">
        <h2>Our Promise to You</h2>
      </div>

      <div className="promise-grid">

        <div className="promise-item">
          <FaLock className="promise-icon" />
          <h3>Security</h3>
          <p>
            We take the security of your property seriously, and our
            SSL secure website protects your personal information.
          </p>
        </div>

        <div className="promise-item">
          <FaSmile className="promise-icon" />
          <h3>Customer Service</h3>
          <p>
            We commit to providing you a clean, ready-to-rent unit
            and friendly, helpful employees.
          </p>
        </div>

        <div className="promise-item">
          <FaThumbsUp className="promise-icon" />
          <h3>Convenience</h3>
          <p>
            Access your account from the convenience of your own
            home, 24 hours a day and 7 days a week.
          </p>
        </div>

      </div>

    </div>
    </div>
  );
}
