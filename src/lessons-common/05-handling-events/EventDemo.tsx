import React from 'react';

export default function EventDemo() {
  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    alert('The link was clicked.');
  }

  function handleSwitch(isOn: boolean) {
    alert(`Switch is now ${isOn ? 'ON' : 'OFF'}`);
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
          <div className="flex gap-2">
            <button 
              onClick={() => handleSwitch(true)}
              className="bg-green-500 text-white px-3 py-1 rounded"
            >
              Turn ON
            </button>
            <button 
              onClick={() => handleSwitch(false)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Turn OFF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

