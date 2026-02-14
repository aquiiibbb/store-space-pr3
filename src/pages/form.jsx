import './form.css'

export default function Form() {
  return (
    <>
      {/* Bootstrap CSS */}
      <link 
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" 
        rel="stylesheet" 
      />
      
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <div className="storage-reservation-container">
              <h2 className="text-center mb-3">Complete this form to reserve a unit or make an appointment</h2>
              <p className="storage-required-fields-note text-center">( * Required fields)</p>
              
              <form className="storage-booking-form">
                <div className="row mb-3">
                  <div className="col-md-6">
                    <div className="storage-input-group">
                      <label className="form-label">First Name:*</label>
                      <input type="text" className="form-control storage-input" required />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="storage-input-group">
                      <label className="form-label">Last Name:*</label>
                      <input type="text" className="form-control storage-input" required />
                    </div>
                  </div>
                </div>
                
                <div className="row mb-3">
                  <div className="col-12">
                    <div className="storage-input-group">
                      <label className="form-label">Email Address:*</label>
                      <input type="email" className="form-control storage-input" required />
                    </div>
                  </div>
                </div>
                
                <div className="row mb-3">
                  <div className="col-md-6">
                    <div className="storage-input-group">
                      <label className="form-label">Phone Number:*</label>
                      <input type="tel" className="form-control storage-input" required />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="storage-input-group">
                      <label className="form-label">Date Needed On:*</label>
                      <input type="date" className="form-control storage-input" defaultValue="2026-02-14" required />
                    </div>
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-12">
                    <div className="storage-input-group">
                      <label className="form-label">Storage Unit:*</label>
                      <select className="form-select storage-select" required>
                        <option value="">Select a storage unit</option>
                        <option value="5x10-99">5 x 10 - $99.00/month (Self Storage)</option>
                        <option value="10x15-175">10 x 15 - $175.00/month (Self Storage)</option>
                        <option value="10x20-185">10 x 20 - $185.00/month (Self Storage)</option>
                        <option value="10x25-140">10 x 25 - $140.00/month (Covered Parking)</option>
                        <option value="10x25-210">10 x 25 - $210.00/month (Self Storage)</option>
                        <option value="15x20-250">15 x 20 - $250.00/month (Self Storage)</option>
                        <option value="20x20-320">20 x 20 - $320.00/month (Self Storage - Climate Controlled)</option>
                        <option value="12x30-280">12 x 30 - $280.00/month (Self Storage)</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div className="row mb-3">
                  <div className="col-12">
                    <div className="storage-input-group">
                      <label className="form-label">Address:</label>
                      <input type="text" className="form-control storage-input" />
                    </div>
                  </div>
                </div>
                
                <div className="row mb-3">
                  <div className="col-md-4">
                    <div className="storage-input-group">
                      <label className="form-label">City:</label>
                      <input type="text" className="form-control storage-input" />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="storage-input-group">
                      <label className="form-label">State:</label>
                      <input type="text" className="form-control storage-input" />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="storage-input-group">
                      <label className="form-label">Postal Code:</label>
                      <input type="text" className="form-control storage-input" />
                    </div>
                  </div>
                </div>
                
                <div className="row mb-4">
                  <div className="col-12">
                    <div className="storage-input-group">
                      <label className="form-label">Questions And Comments:</label>
                      <textarea rows="4" className="form-control storage-textarea"></textarea>
                    </div>
                  </div>
                </div>
                
                <div className="text-center mb-4">
                  <a href="#" className="storage-appointment-link">Click here to make an Appointment without selecting a unit.</a>
                </div>

                <div className="d-flex justify-content-center gap-3">
                  <button type="submit" className="btn storage-submit-button px-4 py-2">
                    Submit Reservation
                  </button>
                  <button type="reset" className="btn storage-reset-button px-4 py-2">
                    Clear Form
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bootstrap JS */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    </>
  );
}