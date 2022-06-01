import React from 'react'
import { BsLinkedin } from "react-icons/bs"
import { FaGithub, FaSlack } from "react-icons/fa"

const HeaderSocial = () => {
  return (
    <div className='header__social'>
      <a href="https://www.linkedin.com/in/gbolahan-akande-079ba814b/" target="_blank"><BsLinkedin /></a>
      <a href="https://github.com/gboigwe" target="_blank"><FaGithub /></a>
      <a href="https://slack.com/geakande" target="_blank"><FaSlack /></a>
    </div>
  )
}

export default HeaderSocial