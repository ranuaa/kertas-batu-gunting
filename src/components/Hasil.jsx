import React from 'react'

const Hasil = ({turnResult, result}) => {
  return (
    <div style={{
        color: 'white',
        backgroundColor: 'black'
    }}>
        <h1>{turnResult}</h1>
        <h1>{result}</h1>
    </div>
  )
}

export default Hasil