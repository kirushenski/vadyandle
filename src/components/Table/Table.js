import React from 'react'
import Guess from '../Guess/Guess'
import { range } from '../../utils'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

function Table({ validatedGuesses }) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((row) => (
        <Guess key={row} guess={validatedGuesses[row]} />
      ))}
    </div>
  )
}

export default Table
