import React, { useState } from 'react'

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
      <div>
        <Counter />
      </div>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <button onClick={() => setCount((count) => count + 1)} style={{ marginLeft: 10 }}>
      Count: <span>{count}</span>
    </button>
  )
}
