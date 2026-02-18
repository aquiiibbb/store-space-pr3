import './form.css'
import { useEffect } from 'react'

export default function Form() {
  useEffect(() => {
    const dateInput = document.querySelector('.reservation-date-input');
    
    if (dateInput) {
      const handleClick = (e) => {
        const ripple = document.createElement('span');
        const rect = dateInput.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
          position: absolute;
          width: ${size}px;
          height: ${size}px;
          left: ${x}px;
          top: ${y}px;
          background: rgba(40, 167, 69, 0.3);
          border-radius: 50%;
          transform: scale(0);
          animation: ripple 0.6s ease-out;
          pointer-events: none;
          z-index: 1;
        `;
        
        dateInput.style.position = 'relative';
        dateInput.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
      };
      
      dateInput.addEventListener('click', handleClick);
      
      return () => dateInput.removeEventListener('click', handleClick);
    }
  }, []);

  return (
    <>
      <link 
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" 
        rel="stylesheet" 
      />
      
      <div className="container-fluid p-0">
        <div className="reservation-page">
          <div className="container">
            <div className="row g-4">
              {/* Left Column - Form */}
              <div className="col-lg-8">
                <div className="reservation-form-container">
                  <div className="reservation-form__header">
                    <h1 className="reservation-form__title">Reserve This Space</h1>
                  </div>

                  <form className="reservation-form">
                    {/* Email and Mobile Row */}
                    <div className="row g-3">
                      <div className="col-md-6">
                        <div className="form-field">
                          <input 
                            type="email" 
                            className="form-field__input" 
                            placeholder=" "
                            required 
                          />
                          <label className="form-field__label">
                            Email <span className="form-field__required">*</span>
                          </label>
                          <span className="form-field__error">Email is required</span>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-field">
                          <input 
                            type="tel" 
                            className="form-field__input" 
                            placeholder=" "
                            required 
                          />
                          <label className="form-field__label">
                            Mobile <span className="form-field__required">*</span>
                          </label>
                          <span className="form-field__error">Mobile is required</span>
                        </div>
                      </div>
                    </div>

                    {/* First Name and Last Name Row */}
                    <div className="row g-3">
                      <div className="col-md-6">
                        <div className="form-field">
                          <input 
                            type="text" 
                            className="form-field__input" 
                            placeholder=" "
                            required 
                          />
                          <label className="form-field__label">
                            First name <span className="form-field__required">*</span>
                          </label>
                          <span className="form-field__error">First name is required</span>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-field">
                          <input 
                            type="text" 
                            className="form-field__input" 
                            placeholder=" "
                            required 
                          />
                          <label className="form-field__label">
                            Last name <span className="form-field__required">*</span>
                          </label>
                          <span className="form-field__error">Last name is required</span>
                        </div>
                      </div>
                    </div>

                    {/* Date of Birth and Button Row */}
                    <div className="row g-3 align-items-end">
                      <div className="col-md-6">
                        <div className="form-field">
                          <div className="reservation-date-wrapper">
                            <input 
                              type="date" 
                              className="form-field__input reservation-date-input" 
                              placeholder=" "
                              required 
                            />
                            <label className="form-field__label">
                              Date of Birth <span className="form-field__required">*</span>
                            </label>
                            <i className="fas fa-calendar-alt reservation-date__icon"></i>
                          </div>
                          <span className="form-field__error">Date of birth is required</span>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="reservation-form__button-wrapper">
                          <button type="submit" className="btn reservation-form__submit-btn">
                            Reserve This Space
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              {/* Right Column - Space Details */}
              <div className="col-lg-4">
                <div className="space-details-container">
                  {/* Storage Location */}
                  <div className="space-location">
                    <h3 className="space-location__name">CINDERELLA SELF ONLINE STORAGE</h3>
                    <p className="space-location__address">
                      110 San Felipe rd,<br />
                      Hollister, CA 95023
                    </p>
                    <div className="space-location__phone">
                      <i className="fas fa-phone"></i>
                      <span>+1 (831) 637-5761</span>
                    </div>
                  </div>

                  {/* Space Info */}
                  <div className="space-info">
                    <div className="space-info__header">
                      <div className="space-info__details">
                        <span className="space-info__number">#3008</span>
                        <span className="space-info__size">10' x 15'</span>
                      </div>
                      <a href="#" className="space-info__change-link">Change Space</a>
                    </div>

                    {/* Online Price */}
                    <div className="space-pricing">
                      <span className="space-pricing__badge">ONLINE</span>
                      <div className="space-pricing__display">
                        <span className="space-pricing__amount">$43</span>
                        <span className="space-pricing__period">per month</span>
                      </div>
                    </div>

                    {/* Amenities */}
                    <div className="space-amenities">
                      <h4 className="space-amenities__title">Amenities</h4>
                      <ul className="space-amenities__list">
                        <li>Elevator Access</li>
                        <li>Keypad Entry</li>
                        <li>Video Surveillance</li>
                        <li>Security Fencing</li>
                      </ul>
                    </div>

                    {/* Pricing Breakdown */}
                    <div className="space-breakdown">
                      <div className="space-breakdown__rent">
                        <span className="space-breakdown__label">Monthly Rent</span>
                        <span className="space-breakdown__value">$16.89</span>
                      </div>
                      <div className="space-breakdown__note">(Prorated)</div>
                      
                      <div className="space-breakdown__fee">
                        <span>Admin Fee - $25</span>
                        <span>$25.00</span>
                      </div>
                      <div className="space-breakdown__fee">
                        <span>$12 Protection Plan</span>
                        <span>$4.71</span>
                      </div>
                      
                      <div className="space-breakdown__total">
                        <span className="space-breakdown__total-label">Total Cost to Move-in:</span>
                        <span className="space-breakdown__total-amount">$46.60</span>
                      </div>
                    </div>

                    {/* Payment Methods */}
                    <div className="space-payment">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/200px-Visa_Inc._logo.svg.png" alt="Visa" className="space-payment__card" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/200px-Mastercard-logo.svg.png" alt="Mastercard" className="space-payment__card" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/200px-American_Express_logo_%282018%29.svg.png" alt="American Express" className="space-payment__card" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Paypal_2014_logo.png/200px-Paypal_2014_logo.png" alt="PayPal" className="space-payment__card" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    </>
  );
}