import React from 'react'
import {Link} from 'react-router-dom'
import banner from "../images/restauranfood.jpg"
const Header = () => {
  return (
    <header className="header">
        <section>
          <div className="banner">
            <h2> Little Lemon </h2>
            <h3>Chicago</h3>
            <p>We are family owned Mediterranian Restaurant </p>
            <Link to="/booking"><button aria-label="On Click">Reserve Table</button></Link>
          </div>
          <div className="banner-img">
            <img src={banner} alt='banner-image'/>
          </div>
        </section>
    </header>
  )
}

export default Header