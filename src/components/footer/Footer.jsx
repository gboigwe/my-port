import React from 'react'
import "./footer.css"
import { FaFacebookF } from "react-icons/fa"
import { BsMedium } from "react-icons/bs"
import { IoLogoTwitter } from "react-icons/io"

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">AGE</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonial">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__social'>
        <a href="https://facebook.com/gboigwe" target="_blank" ><FaFacebookF /></a>
        <a href="https://medium.com/@AkandeGbolahan" target="_blank"><BsMedium /></a>
        <a href="https://twitter.com/AgeNeutral" target="_blank"><IoLogoTwitter /></a>
      </div>

      <div className="footer__copy">
        <small>&copy; AgeTech. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer