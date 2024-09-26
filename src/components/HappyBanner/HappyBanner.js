import React from 'react'
import { sample } from '../../utils'
import { WORDS } from '../../data'

function HappyBanner({ guessesCount, setAnswer, setGuesses }) {
  const handleRestart = () => {
    setAnswer(sample(WORDS).value)
    setGuesses([])
  }

  return (
    <div className="happy banner">
      <p>
        <strong>Молорик!</strong> Отгадал с{' '}
        <strong>
          {guessesCount} {guessesCount === 1 ? 'попытки' : 'попыток'}
        </strong>
        .
      </p>
      <button onClick={handleRestart}>Круто, роллим</button>
    </div>
  )
}

export default HappyBanner
