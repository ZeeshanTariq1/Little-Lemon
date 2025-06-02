import React, { useState } from 'react'

const BookingForm = (props) => {
    const[date,setDate] = useState("");
    const[times,setTimes] = useState("");
    const[guests,setGuests] = useState("");
    const[occassion,setOccasion] = useState("");

    const handleSubmit=(e)=>{
        e.preventDefault()
        props.SubmitForm(e)

    }
    const handleChange = (e)=>{
        setDate(e)
        props.dispatch(e)
    }

    
  return (
    <header>
        <section>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div>
                        <label htmlFor='book-date'>Choose date</label>
                        <input id='book-date' value={date} type='date' required onChange={(e)=>{handleChange(e.target.value)}}/>
                    </div>
                    <div>
                        <label htmlFor='book-time'>Choose Time:</label>
                        <select id='book-time' value={times} onChange={(e)=>setTimes(e.target.value)}>
                            <option value=" ">Select a Time</option>
                            {
                                props.availableTimes.availableTimes.map(availableTimes=>{return<option key={availableTimes}>{availableTimes}</option>})
                            }
                        </select>
                    </div>

                    <div>
                        <label htmlFor='book-guests'>Number of Guests:</label>
                        <input id='book-guests' min='1' value={guests} onChange={(e)=>setGuests(e.target.value)}></input>
                    </div>

                    <div>
                        <label htmlFor='book-occassion'>Occassion:</label>
                        <select id='book-occassion' key={occassion} value={occassion} onChange={(e)=> setOccasion(e.target.value)}>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                        </select>
                    </div>

                    <div className='btnReceive'>
                        <input aria-label='On-Click' type='submit' value={"Make your Reservation"}></input>
                    </div>
                </fieldset>
            </form>
        </section>
    </header>
  )
}

export default BookingForm