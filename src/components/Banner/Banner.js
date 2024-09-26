import clsx from 'clsx'
import React from 'react'

function Banner({ status, handleRestart, children }) {
  return (
    <div className={clsx('banner', status)}>
      <p>{children}</p>
      <button onClick={handleRestart}>Попробовать ещё раз</button>
    </div>
  )
}

export default Banner
