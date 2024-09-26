import { clsx } from 'clsx'
import React from 'react'

function Key({ children, status }) {
  return <div className={clsx('key', [status])}>{children}</div>
}

export default Key
