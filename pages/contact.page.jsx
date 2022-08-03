import React from 'react'
import { Link } from 'react-router-dom'

export { Page }

function Page() {
  return (
    <div>
      <div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </div>
      Contact me
    </div>
  )
}
