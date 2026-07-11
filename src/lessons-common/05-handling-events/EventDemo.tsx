import React, { useState } from 'react'

export default function EventDemo() {
  const [switchState, setSwitchState] = useState(false)
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault()
    alert('The link was clicked.')
  }

  return (
    <div className="p-4 border rounded shadow-sm">
      <h2 className="text-xl font-bold mb-4">5. Handling Events</h2>

      <div className="space-y-4">
        <div>
          <h3 className="font-semibold">Prevent Default:</h3>
          <a href="#" onClick={handleClick} className="text-blue-500 underline">
            Click me (I won't navigate)
          </a>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Passing Arguments:</h3>
          <p>Switch is now {switchState ? 'ON' : 'OFF'}</p>
          <div className="flex gap-2">
            <button
              onClick={() => setSwitchState(true)}
              className="bg-green-500 text-white px-3 py-1 rounded"
            >
              Turn ON
            </button>
            <button
              onClick={() => setSwitchState(false)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Turn OFF
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
