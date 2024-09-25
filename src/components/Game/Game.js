import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { SPECIAL_KEYS, WORD_LENGTH } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });


function Game() {
  const [guess, setGuess] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (guess.length !== WORD_LENGTH) return

    setGuess('')

    console.info({guess})
  }

  const handleGuessChange = (e) => {
    const value = e.target.value

    setGuess(value.toUpperCase())
  }

  const handleKeyDown = (e) => {
    if (!/\w/i.test(e.key) && !SPECIAL_KEYS.includes(e.key)) {
      e.preventDefault()
    }
  }

  return <form class="guess-input-wrapper" onSubmit={handleSubmit}>
  <label for="guess-input">Enter guess:</label>
  <input id="guess-input" type="text" value={guess} onChange={handleGuessChange} onKeyDown={handleKeyDown} maxLength={WORD_LENGTH}/>
</form>;
}

export default Game;
