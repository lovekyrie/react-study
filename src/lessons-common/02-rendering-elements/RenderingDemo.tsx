import React, { useState, useEffect } from 'react';

export default function RenderingDemo() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  // Simulating the "tick" update that changes the UI
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="p-4 border rounded shadow-sm">
      <h2 className="text-xl font-bold mb-4">2. Rendering Elements</h2>
      <p className="mb-2">React updates only what's necessary:</p>
      <div className="text-2xl font-mono bg-black text-green-400 p-4 rounded inline-block">
        {time}
      </div>
      <p className="text-sm text-gray-500 mt-2">
        Inspect the DOM in browser tools - only the text node changes!
      </p>
    </div>
  );
}

