import './form.css'
import { useState } from 'react'

export default function Form() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    return {
      daysInMonth: lastDay.getDate(),
      startingDayOfWeek: firstDay.getDay()
    };
  };

  const formatDate = (date) => {
    if (!date) return '';
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  };

  const handleDateSelect = (day) => {
    const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    setSelectedDate(newDate);
    setShowCalendar(false);
  };

  const changeMonth = (direction) => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + direction, 1));
  };

  const renderCalendar = () => {
    const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentMonth);
    const days = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
      date.setHours(0, 0, 0, 0);
      const isToday = date.getTime() === today.getTime();
      const isSelected = selectedDate && date.getTime() === selectedDate.getTime();
      const isPast = date < today;

      days.push(
        <div
          key={day}
          className={`calendar-day ${isToday ? 'today' : ''} ${isSelected ? 'selected' : ''} ${isPast ? 'past' : ''}`}
          onClick={() => !isPast && handleDateSelect(day)}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  return (
    <>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

      <div className="reservation-page">
        <div className="container">
          <div className="row g-4">
            {/* Left Column - Form */}
            <div className="col-lg-6">
              <div className="reservation-form-container">
                <div className="reservation-form__header">
                  <h1 className="reservation-form__title">Reserve This Space</h1>
                </div>

                <form className="reservation-form">
                  {/* Email and Mobile Row */}
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-field">
                        <input type="email" className="form-field__input" placeholder=" " required />
                        <label className="form-field__label">
                          Email <span className="form-field__required">*</span>
                        </label>
                        <span className="form-field__error">Email is required</span>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-field">
                        <input type="tel" className="form-field__input" placeholder=" " required />
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
                        <input type="text" className="form-field__input" placeholder=" " required />
                        <label className="form-field__label">
                          First name <span className="form-field__required">*</span>
                        </label>
                        <span className="form-field__error">First name is required</span>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-field">
                        <input type="text" className="form-field__input" placeholder=" " required />
                        <label className="form-field__label">
                          Last name <span className="form-field__required">*</span>
                        </label>
                        <span className="form-field__error">Last name is required</span>
                      </div>
                    </div>
                  </div>

                  {/* Date and Button Row - UPDATED CALENDAR */}
                  <div className="row g-3 align-items-end">
                    <div className="col-md-6">
                      <div className="form-field">
                        <div className="custom-calendar-wrapper">
                          <div
                            className="custom-calendar-input"
                            onClick={() => setShowCalendar(!showCalendar)}
                          >
                            <i className="fas fa-calendar-alt calendar-icon"></i>
                            <span className={selectedDate ? 'selected' : 'placeholder'}>
                              {selectedDate ? formatDate(selectedDate) : 'Select Move-in Date'}
                            </span>
                            <i className={`fas fa-chevron-down dropdown-icon ${showCalendar ? 'rotate' : ''}`}></i>
                          </div>

                          {showCalendar && (
                            <div className="custom-calendar-dropdown">
                              <div className="calendar-header">
                                <button
                                  type="button"
                                  className="calendar-nav-btn"
                                  onClick={() => changeMonth(-1)}
                                >
                                  <i className="fas fa-chevron-left"></i>
                                </button>
                                <div className="calendar-month-year">
                                  {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                                </div>
                                <button
                                  type="button"
                                  className="calendar-nav-btn"
                                  onClick={() => changeMonth(1)}
                                >
                                  <i className="fas fa-chevron-right"></i>
                                </button>
                              </div>

                              <div className="calendar-weekdays">
                                <div>Su</div>
                                <div>Mo</div>
                                <div>Tu</div>
                                <div>We</div>
                                <div>Th</div>
                                <div>Fr</div>
                                <div>Sa</div>
                              </div>

                              <div className="calendar-days">
                                {renderCalendar()}
                              </div>

                              <div className="calendar-footer">
                                <button
                                  type="button"
                                  className="calendar-today-btn"
                                  onClick={() => {
                                    const today = new Date();
                                    setCurrentMonth(today);
                                    setSelectedDate(today);
                                    setShowCalendar(false);
                                  }}
                                >
                                  Today
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                        <span className="form-field__error">Move-in date is required</span>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <button type="submit" className="btn-reserve-space">
                        Reserve This Space
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Right Column - Space Details */}
            <div className="col-lg-3">
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
                      <span className="space-info__size">12' x 40'</span>
                    </div>
                    <a href="/rent" className="space-info__change-link">Change Space</a>
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