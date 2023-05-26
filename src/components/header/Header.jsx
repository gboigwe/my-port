import React from 'react'
import "./header.css"
import CTA from "./CTA"
import ME from "../../assets/proF1.png"
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header id='header'>
      <div className='container header__container'>
        <h5>Hello I'm AGE</h5>
        <h2>Akande Gbolahan Emmanuel</h2>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={ME} alt="Me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
