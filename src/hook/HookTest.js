import React, { useState, useEffect } from 'react'

export default function HookTest() {
  
  const [count, setCount] = useState(0)
  
  // 还可以在useEffect中 更新dom
  useEffect(() => {
    document.title=`You Clicked ${count} times`
  });

  return (
    <div>
      <p> You clicked {count} times</p>
      <button onClick={() =>  setCount(count + 1) }>
        Click me
      </button>
    </div>
  )
}
