import React from 'react'
import Banner from '../Banner'

function SadBanner({ answer, handleRestart }) {
  return (
    <Banner status="sad" handleRestart={handleRestart}>
      Cорре, нужно было отвечать <strong>{answer}</strong> 🤷🏿‍♂️
    </Banner>
  )
}

export default SadBanner
