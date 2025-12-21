import React, { useState, memo } from 'react';

// Pure Component using React.memo
// It only re-renders if props change
const Greeting = memo(function Greeting({ name }: { name: string }) {
  console.log("Greeting rendered at", new Date().toLocaleTimeString());
  return <h3 className="text-lg mb-2">Hello, {name}!</h3>;
});

export default function PureDemo() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  return (
    <div className="p-4 border rounded shadow-sm">
      <h2 className="text-xl font-bold mb-4">11. Keeping Components Pure</h2>
      <p className="text-sm text-gray-500 mb-4">
        Open console. 'Greeting' only re-renders when Name changes, not Address.
      </p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-bold">Name:</label>
          <input 
            value={name} 
            onChange={e => setName(e.target.value)} 
            className="border p-2 w-full rounded"
          />
        </div>
        
        <div>
          <label className="block text-sm font-bold">Address (won't trigger Greeting render):</label>
          <input 
            value={address} 
            onChange={e => setAddress(e.target.value)} 
            className="border p-2 w-full rounded"
          />
        </div>

        <div className="p-4 border text-green-200 rounded mt-4">
          <Greeting name={name} />
        </div>
      </div>
    </div>
  );
}

