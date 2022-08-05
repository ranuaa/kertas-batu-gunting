import React from 'react'
import '../style/Pilihan.css'

const Pilihan = ({computerChoice, userChoice}) => {
  return (
    <div className='pilihan'>
        <h1>{userChoice}</h1>
        <h1>VS</h1>
        <h1>{computerChoice}</h1>
    </div>
  )
}

export default Pilihan