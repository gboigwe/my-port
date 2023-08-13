import React from 'react'
import EP from '../../assets/Elevator_Pitch.mp3'

const EPA = () => {
  return (
    <div className='cta'>
      <a href={EP} download className='btn btn-primary' onClick={() => alert('If download doesn't show, please refresh page')}>Download Audio Pitch</a>
    </div>
  )
}

export default EPA
