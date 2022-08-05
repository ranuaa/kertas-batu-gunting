import React from 'react'
import '../style/Skore.css'

const Skor = ({userPoints, computerPoints}) => {
  return (
    <div className='score'>
        <h1>User : {userPoints}</h1>
        <h1>Komputer:  {computerPoints}</h1>
    </div>
  )
}

export default Skor