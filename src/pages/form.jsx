import './form.css'

export default function Form() {
  return (
    <>
      {/* Bootstrap CSS */}
      <link 
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" 
        rel="stylesheet" 
        integrity="sha384-9ndCyUa6/+K6PkuQwjvt4A6fck64gLfDpAA6hAGOFMuABjoqXfG7DrVPiRdLPanZ" 
        crossOrigin="anonymous"
      />
      
      <div className="storage-form">
        <div className="storage-header">
          <div className="storage-company-info">
            <h1>San Felipe Storage LLC</h1>
            <p>1571 San Felipe Rd</p>
            <p>Hollister, CA 95023</p>
            <p>831-634-1993</p>
            <a href="mailto:info@sanfelipestorage.com">info@sanfelipestorage.com</a>
          </div>
          
          <div className="storage-language-selector">
            <select>
              <option>Select Language ▼</option>
            </select>
          </div>
        </div>

        <nav className="storage-navigation">
          <a href="#" className="storage-nav-link storage-active">Home</a>
          <a href="#" className="storage-nav-link">My Account</a>
          <a href="#" className="storage-nav-link">Reservation</a>
          <a href="#" className="storage-nav-link">Storage Tips & Tools</a>
          <a href="#" className="storage-nav-link">Contact Us</a>
        </nav>

        <div className="storage-main-content">
          <div className="storage-left-section">
            <div className="storage-site-selection">
              <h2>Select Your Unit At Site: <em>San Felipe Storage LLC</em></h2>
              
              <div className="storage-location-info">
                <h3>San Felipe Storage LLC</h3>
                <p>1571 San Felipe Rd</p>
                <p>Hollister, CA 95023</p>
                <p>831-634-1993</p>
                <a href="mailto:info@sanfelipestorage.com">info@sanfelipestorage.com</a>
              </div>
              
              <div className="storage-map-container">
                <button className="storage-view-map-btn">View larger map</button>
                <div className="storage-map-placeholder">
                  <div className="storage-map-marker">📍</div>
                  <div className="storage-google-logo">Google</div>
                </div>
              </div>
            </div>
          </div>

          <div className="storage-right-section">
            <div className="storage-reservation-form">
              <h2>Complete this form to reserve a unit or make an appointment</h2>
              <p className="storage-required-note">(* Required fields)</p>
              
              <form>
                <div className="storage-form-row">
                  <label>First Name:*</label>
                  <input type="text" required />
                </div>
                
                <div className="storage-form-row">
                  <label>Last Name:*</label>
                  <input type="text" required />
                </div>
                
                <div className="storage-form-row">
                  <label>Email Address:*</label>
                  <input type="email" required />
                </div>
                
                <div className="storage-form-row">
                  <label>Phone Number:*</label>
                  <input type="tel" required />
                </div>
                
                <div className="storage-form-row">
                  <label>Address:</label>
                  <input type="text" />
                </div>
                
                <div className="storage-form-row">
                  <label>City:</label>
                  <input type="text" />
                </div>
                
                <div className="storage-form-row">
                  <label>State:</label>
                  <input type="text" />
                </div>
                
                <div className="storage-form-row">
                  <label>Postal Code:</label>
                  <input type="text" />
                </div>
                
                <div className="storage-form-row">
                  <label>Date Needed On:*</label>
                  <input type="text" defaultValue="02/13/2026" required />
                </div>
                
                <div className="storage-form-row">
                  <label>Questions And Comments:</label>
                  <textarea rows="4"></textarea>
                </div>
                
                <div className="storage-appointment-link">
                  <a href="#">Click here to make an Appointment without selecting a unit.</a>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="storage-units-section">
          <div className="storage-table-wrapper">
            <div className="storage-table-container">
              <table className="storage-units-table">
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Size</th>
                    <th>Climate<br/>Controlled</th>
                    <th>Monthly Rate</th>
                    <th>Available</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Self Storage</td>
                    <td>5 x 10</td>
                    <td>No</td>
                    <td>99.00</td>
                    <td>Yes</td>
                    <td><button className="storage-select-btn">Select</button></td>
                  </tr>
                  <tr>
                    <td>Self Storage</td>
                    <td>10 x 15</td>
                    <td>No</td>
                    <td>175.00</td>
                    <td>Yes</td>
                    <td><button className="storage-select-btn">Select</button></td>
                  </tr>
                  <tr>
                    <td>Self Storage</td>
                    <td>10 x 20</td>
                    <td>No</td>
                    <td>185.00</td>
                    <td>Yes</td>
                    <td><button className="storage-select-btn">Select</button></td>
                  </tr>
                  <tr>
                    <td>Covered Parking</td>
                    <td>10 x 25</td>
                    <td>No</td>
                    <td>140.00</td>
                    <td>Yes</td>
                    <td><button className="storage-select-btn">Select</button></td>
                  </tr>
                  <tr>
                    <td>Self Storage</td>
                    <td>10 x 25</td>
                    <td>No</td>
                    <td>210.00</td>
                    <td>Yes</td>
                    <td><button className="storage-select-btn">Select</button></td>
                  </tr>
                  <tr>
                    <td>Self Storage</td>
                    <td>15 x 20</td>
                    <td>No</td>
                    <td>250.00</td>
                    <td>Yes</td>
                    <td><button className="storage-select-btn">Select</button></td>
                  </tr>
                  <tr>
                    <td>Self Storage</td>
                    <td>20 x 20</td>
                    <td>Yes</td>
                    <td>320.00</td>
                    <td>Yes</td>
                    <td><button className="storage-select-btn">Select</button></td>
                  </tr>
                  <tr>
                    <td>Self Storage</td>
                    <td>12 x 30</td>
                    <td>No</td>
                    <td>280.00</td>
                    <td>Yes</td>
                    <td><button className="storage-select-btn">Select</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="storage-table-footer">
            <div className="storage-footer-left">
              <a href="#" className="storage-help-link">Help in Choosing Unit Size</a>
              <p className="storage-reservation-note">Reservations will be honored for 7 days.</p>
            </div>
            <div className="storage-footer-right">
              <button className="storage-continue-btn">Continue</button>
              <button className="storage-start-over-btn">Start Over</button>
            </div>
          </div>
        </div>

        <footer className="storage-footer">
          <nav className="storage-footer-nav">
            <a href="#">Home</a>
            <span>|</span>
            <a href="#">My Account</a>
            <span>|</span>
            <a href="#">Reservation</a>
            <span>|</span>
            <a href="#">Storage Tips & Tools</a>
            <span>|</span>
            <a href="#">Contact Us</a>
          </nav>
          
          <div className="storage-footer-content">
            <div className="storage-footer-logo">
              <img src="/sitelink-logo.png" alt="Sitelink by Storable" />
            </div>
            
            <div className="storage-security-badge">
              <img src="/godaddy-verified.png" alt="GoDaddy Verified & Secured" />
            </div>
          </div>
        </footer>
      </div>

      {/* Bootstrap JS */}
      <script 
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" 
        integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" 
        crossOrigin="anonymous"
      ></script>
    </>
  );
}