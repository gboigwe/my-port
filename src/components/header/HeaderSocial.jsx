import React from 'react'
import { BsLinkedin } from "react-icons/bs"
import { FaGithub, FaSlack } from "react-icons/fa"

const HeaderSocial = () => {
  return (
    <div className='header__social'>
      <a href="https://www.linkedin.com/in/gbolahan-akande-079ba814b/" target="_blank" rel='noopener noreferrer' ><BsLinkedin /></a>
      <a href="https://github.com/gboigwe" target="_blank" rel='noopener noreferrer' ><FaGithub /></a>
      <a href="https://slack.com/geakande" target="_blank" rel='noopener noreferrer' ><FaSlack /></a>
    </div>
  )
}

export default HeaderSocial