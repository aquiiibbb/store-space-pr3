import './contact.css'

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact-container">
        <div className="contact-form-section">
          <div className="contact-header">
            <span className="contact-label">CONTACT US</span>
            <h1>Send Us A Message</h1>
            <p>We'd love to chat with you</p>
          </div>

          <form className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First name *</label>
                <input type="text" id="firstName" name="firstName" required />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last name *</label>
                <input type="text" id="lastName" name="lastName" required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <div className="phone-input">
                  <select className="country-code">
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+91">🇮🇳 +91</option>
                    <option value="+44">🇬🇧 +44</option>
                  </select>
                  <input type="tel" id="phone" name="phone" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input type="email" id="email" name="email" required />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>

            <button type="submit" className="submit-btn">SUBMIT</button>
          </form>
        </div>

        <div className="contact-image-section">
          <div className="animated-background">
            <div className="floating-particles"></div>
            <div className="wave-animation"></div>
          </div>
          <div className="promo-content">
            <h2 className="winter-text">Winter</h2>
            <h2 className="savings-text">SAVINGS</h2>
            <div className="offer-text">
              <span className="percentage">50% OFF</span>
              <span className="duration">FOR UP TO</span>
              <span className="months">3 MONTHS</span>
              <span className="sizes">SELECT SIZES!</span>
            </div>
            <p className="move-in-text">FREE MOVE-IN TRUCK</p>
          </div>
        </div>
      </div>
    </div>
  );
}