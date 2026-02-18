import './form.css'

export default function Tentwenty() {
  return (
    <>
      {/* Bootstrap CSS */}
      <link 
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" 
        rel="stylesheet" 
      />
      
      <div className="container-fluid p-0">
        <div className="reservation-wrapper">
          <div className="container">
            <div className="row g-4">
              {/* Left Column - Form */}
              <div className="col-lg-8">
                <div className="reservation-form-card">
                  <div className="form-header">
                    <h1 className="form-title">Reserve This Space</h1>
                    <p className="form-subtitle">
                      <strong>No Credit Card Required!</strong> Lock in Your Online Rate Today! No Obligation to Rent.
                    </p>
                  </div>

                  <form className="reservation-form">
                    {/* Business Checkbox */}
                    <div className="business-check-wrapper">
                      <div className="form-check">
                        <input 
                          className="form-check-input" 
                          type="checkbox" 
                          id="businessRental"
                        />
                        <label className="form-check-label" htmlFor="businessRental">
                          I am renting as a business
                        </label>
                      </div>
                    </div>

                    {/* Email and Mobile Row */}
                    <div className="row g-3">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-label">
                            Email <span className="required">*</span>
                          </label>
                          <input 
                            type="email" 
                            className="form-control reservation-input" 
                            required 
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-label">
                            Mobile <span className="required">*</span>
                          </label>
                          <input 
                            type="tel" 
                            className="form-control reservation-input" 
                            required 
                          />
                        </div>
                      </div>
                    </div>

                    {/* First Name and Last Name Row */}
                    <div className="row g-3">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-label">
                            First name <span className="required">*</span>
                          </label>
                          <input 
                            type="text" 
                            className="form-control reservation-input" 
                            required 
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-label">
                            Last name <span className="required">*</span>
                          </label>
                          <input 
                            type="text" 
                            className="form-control reservation-input" 
                            required 
                          />
                        </div>
                      </div>
                    </div>

                    {/* Move-in Date */}
                    <div className="row g-3">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-label">
                            Move-in date (MM/DD/YYYY) <span className="required">*</span>
                          </label>
                          <div className="date-input-wrapper">
                            <input 
                              type="date" 
                              className="form-control reservation-input date-input" 
                              defaultValue="2026-02-18"
                              required 
                            />
                            <i className="fas fa-calendar-alt date-icon"></i>
                          </div>
                        </div>
                        <p className="date-note">
                          <em>Reservations can be made 14 days in advance.</em>
                        </p>
                      </div>
                    </div>

                    {/* Reserve Button */}
                    <div className="reserve-button-wrapper">
                      <button type="submit" className="btn reserve-btn">
                        Reserve This Space
                      </button>
                    </div>

                    {/* Terms and Privacy */}
                    <div className="terms-wrapper">
                      <p className="terms-text">
                        By providing your phone number, you consent to receive informational text messages from 
                        Storelocal® Storage. Message frequency varies. Message & data rates may apply. Reply 
                        HELP for help or STOP to unsubscribe at any time.
                      </p>
                      <a href="#" className="terms-link">
                        Click to see our Terms and Privacy Policy.
                      </a>
                    </div>
                  </form>
                </div>
              </div>

              {/* Right Column - Space Details */}
              <div className="col-lg-4">
                <div className="space-details-card">
                  {/* Holding Space Header */}
                  <div className="holding-header">
                    <span className="holding-text">Holding Space For</span>
                    <span className="holding-time">14:40</span>
                  </div>

                  {/* Storage Location */}
                  <div className="storage-location">
                    <h3 className="location-name">Storelocal Storage</h3>
                    <p className="location-address">
                      104 W Grove St,<br />
                      Middleborough, MA, 02346
                    </p>
                    <div className="phone-number">
                      <i className="fas fa-phone"></i>
                      <span>(508) 923-4600</span>
                    </div>
                  </div>

                  {/* Space Info */}
                  <div className="space-info">
                    <div className="space-header">
                      <div className="space-details">
                        <span className="space-number">#3008</span>
                        <span className="space-size">10' x 20'</span>
                      </div>
                      <a href="#" className="change-space-link">Change Space</a>
                    </div>

                    {/* Online Price */}
                    <div className="online-price">
                      <span className="online-label">ONLINE</span>
                      <div className="price-display">
                        <span className="price">$43</span>
                        <span className="period">per month</span>
                      </div>
                    </div>

                    {/* Amenities */}
                    <div className="amenities">
                      <h4 className="amenities-title">Amenities</h4>
                      <ul className="amenities-list">
                        <li>Elevator Access</li>
                        <li>Keypad Entry</li>
                        <li>Video Surveillance</li>
                        <li>Security Fencing</li>
                      </ul>
                    </div>

                    {/* Pricing Breakdown */}
                    <div className="pricing-breakdown">
                      <div className="monthly-rent">
                        <span className="rent-label">Monthly Rent</span>
                        <span className="rent-amount">$16.89</span>
                      </div>
                      <div className="prorated-label">(Prorated)</div>
                      
                      <div className="fee-item">
                        <span>Admin Fee - $25</span>
                        <span>$25.00</span>
                      </div>
                      <div className="fee-item">
                        <span>$12 Protection Plan</span>
                        <span>$4.71</span>
                      </div>
                      
                      <div className="total-cost">
                        <span className="total-label">Total Cost to Move-in:</span>
                        <span className="total-amount">$46.60</span>
                      </div>
                    </div>

                    {/* Payment Methods */}
                    <div className="payment-methods">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/200px-Visa_Inc._logo.svg.png" alt="Visa" className="payment-card" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/200px-Mastercard-logo.svg.png" alt="Mastercard" className="payment-card" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/200px-American_Express_logo_%282018%29.svg.png" alt="American Express" className="payment-card" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Paypal_2014_logo.png/200px-Paypal_2014_logo.png" alt="PayPal" className="payment-card" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bootstrap JS */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    </>
  );
}