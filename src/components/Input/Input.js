import React, { useState } from 'react';
import { SPECIAL_KEYS, WORD_LENGTH } from '../../constants';
import { checkGuess } from '../../game-helpers';

function Input({setGuesses, answer,isEnd}) {
  const [guess, setGuess] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (guess.length !== WORD_LENGTH) return

    setGuess('')

    setGuesses(guesses => [...guesses, checkGuess(guess, answer)])
  }

  const handleGuessChange = (e) => {
    const value = e.target.value

    setGuess(value.toUpperCase())
  }

  const handleKeyDown = (e) => {
    if (!/[a-z]/i.test(e.key) && !SPECIAL_KEYS.includes(e.key)) {
      e.preventDefault()
    }
  }

  return <form className="guess-input-wrapper" onSubmit={handleSubmit}>
  <label htmlFor="guess-input">Enter guess:</label>
  <input id="guess-input" type="text" value={guess} onChange={handleGuessChange} onKeyDown={handleKeyDown} maxLength={WORD_LENGTH} disabled={isEnd} autoFocus/>
</form>;
}

export default Input;
