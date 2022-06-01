import React from 'react'
import "./nav.css"
import { AiOutlineHome } from "react-icons/ai"
import { AiOutlineUser } from "react-icons/ai"
import { BiBook } from "react-icons/bi"
import { RiServiceLine } from "react-icons/ri"
import { BiMessageSquareDetail } from "react-icons/bi"
import { useState } from 'react';

const Nav = () => {
  const [actClass, setActClass] = useState('#')
  return (
    <nav>
      <a href="#header" onClick={() => setActClass('#header')} className={actClass === '#header' ? 'active' : ""} ><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActClass('#about')} className={actClass === '#about' ? 'active' : ""} ><AiOutlineUser /></a>
      <a href="#experience" onClick={() => setActClass('#experience')} className={actClass === '#experience' ? 'active' : ""} ><BiBook /></a>
      <a href="#services" onClick={() => setActClass('#services')} className={actClass === '#services' ? 'active' : ""}><RiServiceLine /></a>
      <a href="#contact" onClick={() => setActClass('#contact')} className={actClass === '#contact' ? 'active' : ""}><BiMessageSquareDetail /></a>
    </nav>
  )
}


export default Nav