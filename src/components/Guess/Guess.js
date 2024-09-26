import React from 'react'
import { range } from '../../utils'
import { WORD_LENGTH } from '../../constants'
import { clsx } from 'clsx'

function Guess({ guess = '' }) {
  return (
    <p className="guess">
      {range(0, WORD_LENGTH).map((cell) => {
        const item = guess[cell]
        return (
          <span key={cell} className={clsx('cell', [item?.status])}>
            {item?.letter}
          </span>
        )
      })}
    </p>
  )
}

export default Guess
