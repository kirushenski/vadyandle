import React from 'react'
import Banner from '../Banner'

function HappyBanner({ guessesCount, handleRestart }) {
  return (
    <Banner status="happy" handleRestart={handleRestart}>
      Поздравляю! Отгадал с{' '}
      <strong>
        {guessesCount} {guessesCount === 1 ? 'попытки' : 'попыток'}
      </strong>
      .
    </Banner>
  )
}

export default HappyBanner
