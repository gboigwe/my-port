import React from 'react'
import EP from '../../assets/Elevator_Pitch.mp3'

const EPA = () => {
  return (
    <div className='cta'>
      <a href={EP} download className='btn btn-primary' onClick={() => alert("ALERT!!!: Please if download doesn't show in 10 seconds, refresh page. This file is an audio of my elevator")}>Download Audio Pitch</a>
    </div>
  )
}

export default EPA
