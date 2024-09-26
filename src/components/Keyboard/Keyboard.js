import React from 'react'
import Key from '../Key/Key'
import {
  KEYS_FIRST_ROW,
  KEYS_SECOND_ROW,
  KEYS_THIRD_ROW,
  STATUSES_GRADE,
} from '../../constants'

function Keyboard({ guesses }) {
  const statuses = guesses.flat().reduce((acc, { letter, status }) => {
    const previousStatus = acc[letter]
    const isBetterStatus =
      !previousStatus || STATUSES_GRADE[status] > STATUSES_GRADE[previousStatus]

    return { ...acc, [letter]: isBetterStatus ? status : previousStatus }
  }, {})

  return (
    <div className="keyboard">
      <div className="keyboardRow">
        {KEYS_FIRST_ROW.map((key) => (
          <Key key={key} status={statuses[key]}>
            {key}
          </Key>
        ))}
      </div>
      <div className="keyboardRow">
        {KEYS_SECOND_ROW.map((key) => (
          <Key key={key} status={statuses[key]}>
            {key}
          </Key>
        ))}
      </div>
      <div className="keyboardRow">
        {KEYS_THIRD_ROW.map((key) => (
          <Key key={key} status={statuses[key]}>
            {key}
          </Key>
        ))}
      </div>
    </div>
  )
}

export default Keyboard
