import React from 'react'
import logo from "../images/small_logo.png"
const Footer = () => {
  return (
    <footer>
        <section>
          <div className='company-info'>
            <img src={logo} alt='small logo'></img>
            <p>We are family owned mediterranian restaurant</p>
          </div>
          <div>
            <h3>Important Links</h3>
            <ul>
              <li href="/">Home</li>
              <li href="/">About</li>
              <li href="/">Menu</li>
              <li href="/">Reservations</li>
              <li href="/">Order Online</li>
              <li href="/">Login</li>
            </ul>
          </div>
          <div>
            <h3>Contact</h3>
            <ul>
              <li>Address <br/> 123 Twon City Newyork</li>
              <li>Phone: <br/> ++ 01230131231243</li>
              <li>Email <br/> littlelemon@restaurant.com</li>
            </ul>
          </div>

          <div>
            <h3>Social Media Links</h3>
            <ul>
              <li><a href='/'>Facebook</a></li>
              <li><a href='/'>Instagram</a></li>
              <li><a href='/'>Twitter</a></li>
            </ul>
          </div>
        </section>
    </footer>
  )
}

export default Footer