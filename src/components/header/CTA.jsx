import React from 'react'
import CV from '../../assets/cvGbolahan.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download className='btn' onClick={() => alert("ALERT!!!: Please if download doesn't show in 10seconds, refresh page")}>Download CV</a>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA
