import React from 'react'
import "./services.css"
import { BiCheck } from "react-icons/bi"

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Digital Marketing</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Content Writing</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Search Engine Optimization</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Content Calendar</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Email Marketing</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Social Media Management</p>
            </li>
          </ul>
        </article>
        {/* End OF DataScience */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Frontend Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Backend Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Api Interaction</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Social Media Bot</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Login/Signup</p>
            </li>
          </ul>
        </article>
        {/* End OF Web Development */}
        <article className="service">
          <div className="service__head">
            <h3>Graphics Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Graphics Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>E-Flyer Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Logo Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Power Point Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Business Card Design</p>
            </li>
          </ul>
        </article>
        {/* End OF Video Animation */}
      </div>
    </section>
  )
}

export default Services
