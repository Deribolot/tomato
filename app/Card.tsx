import React, { useState } from 'react'
import './Card.css'

function Card1() {
  const [count, setCount] = useState(0)

  return (
    <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR 3
      </p>
    </div>
  )
}

export default Card1