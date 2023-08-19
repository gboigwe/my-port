import React from 'react'
import "./about.css"
import ProfThird from "../../assets/proF3.jpeg"
import { FaAward } from "react-icons/fa"
import { FiUsers } from "react-icons/fi"
import { VscFolderLibrary } from "react-icons/vsc"

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={ProfThird} alt="Gbolahan" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>5+ Years Experience</small>
            </article>
            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>10+ Freelancing</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          
       {/*<p>
            With a innovative and creative mind, I have met the requirement of several clients, successfully completed their projects and have been awarded the best so far
          </p> */}
          
        </div>
        
      </div>
      <h1>AKANDE GBOLAHAN</h1>
      <p className="container">
            An enthusiastic tech lover, with the aim of promoting and establishing businesses through technology. 
            I have the skill set to achieve the goals from tech ideas that I have encoutered overtime. 
            Over the years, I have been gaining experience in the process of supporting several tech innovative during my undergraduate days. 
            I have participated in some tech activities such as the Microsoft Student Learn ambassador boot-camp that held as a 
            tech event in my school, completing several joint works of building standard website for different organization.

            I have worked on several web projects, analyzed data of different sort during my undergraduate school days. 
            With my expertise, I am sure to carry out any analysis on any data and to join any group in carrying out a project 
            and to get any task given to me done based on my technical skills.

            A graduate from the department of Statistics, Federal University of Agriculture, Abeokuta, Ogun state, Nigeria. 
            Coding for over 5 years now, I have successfully built websites for personal use and numerous organizational uses. 
            I am currently taking a professional software engineering certificate course with ALX AFRICA, I aim to improve my technical skills,
            so I can improve businesses/brands with softwares that promotes their businesses/brands to a better level.
            If you are looking to build your business/brand or you need an upgrade to a better level, reach out to me and let me make you 
            achieve your business vision.
          </p>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </section>
  )
}

export default About
