import React from 'react'
import Banner from '../Banner'

function SadBanner({ answer, handleRestart }) {
  return (
    <Banner status="sad" handleRestart={handleRestart}>
      В другой раз повезёт! Правильный ответ: <strong>{answer}</strong> 🤷🏿‍♂️
    </Banner>
  )
}

export default SadBanner
