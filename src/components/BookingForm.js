import React, { useState } from 'react';

const BookingForm = (props) => {
  const [date, setDate] = useState('');
  const [times, setTimes] = useState('');
  const [guests, setGuests] = useState('');
  const [occasion, setOccasion] = useState('');
  const [submitted, setSubmitted] = useState(false); // New state for confirmation message

  const handleSubmit = (e) => {
    e.preventDefault();
    props.SubmitForm(e); // If parent handles logic, keep this
    setSubmitted(true); // Show confirmation message

    // Optional: Reset form after submission
    setDate('');
    setTimes('');
    setGuests('');
    setOccasion('');
  };

  const handleChange = (e) => {
    setDate(e);
    props.dispatch(e); // You might be updating available times based on date
  };

  return (
    <header>
      <section>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div>
              <label htmlFor='book-date'>Choose date</label>
              <input
                id='book-date'
                type='date'
                value={date}
                required
                onChange={(e) => handleChange(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor='book-time'>Choose Time:</label>
              <select
                id='book-time'
                value={times}
                onChange={(e) => setTimes(e.target.value)}
                required
              >
                <option value=''>Select a Time</option>
                {
                  props.availableTimes.availableTimes.map((availableTime) => (
                    <option key={availableTime} value={availableTime}>
                      {availableTime}
                    </option>
                  ))
                }
              </select>
            </div>

            <div>
              <label htmlFor='book-guests'>Number of Guests:</label>
              <input
                id='book-guests'
                type='number'
                min='1'
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor='book-occassion'>Occasion:</label>
              <select
                id='book-occassion'
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                required
              >
                <option value=''>Select Occasion</option>
                <option value='Birthday'>Birthday</option>
                <option value='Anniversary'>Anniversary</option>
              </select>
            </div>

            <div className='btnReceive'>
              <input
                aria-label='On-Click'
                type='submit'
                value='Make your Reservation'
              />
            </div>

            {submitted && (
              <div className='confirmation-message' style={{ marginTop: '1rem', color: 'green' }}>
                <p>Your reservation is confirmed!</p>
              </div>
            )}
          </fieldset>
        </form>
      </section>
    </header>
  );
};

export default BookingForm;
