import React from 'react'
import TP from '../../assets/Team_Project.pdf'

const TPA = () => {
  return (
    <div className='cta'>
      <a href={TP} download className='btn btn-primary' onClick={() => alert("ALERT!!!: Please if download doesn't show in 10 seconds, refresh page")}>Download Team Project</a>
    </div>
  )
}

export default TPA
