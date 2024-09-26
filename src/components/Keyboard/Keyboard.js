import React from 'react'
import Key from '../Key/Key'
import { ROWS, STATUSES_RANKS } from '../../constants'

function Keyboard({ validatedGuesses }) {
  const statuses = validatedGuesses.flat().reduce((acc, { letter, status }) => {
    const previousStatus = acc[letter]
    const isBetterStatus =
      !previousStatus || STATUSES_RANKS[status] > STATUSES_RANKS[previousStatus]

    return { ...acc, [letter]: isBetterStatus ? status : previousStatus }
  }, {})

  return (
    <div className="keyboard">
      {ROWS.map((row, index) => (
        <div key={index} className="keyboardRow">
          {row.map((key) => (
            <Key key={key} status={statuses[key]}>
              {key}
            </Key>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Keyboard
