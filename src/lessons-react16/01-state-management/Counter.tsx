import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-xl font-bold mb-4">React 16 State</h2>
      <p className="mb-4">Count: {count}</p>
      <div className="flex gap-2">
        <button
          onClick={() => setCount(c => c - 1)}
          className="px-3 py-1 bg-red-500 text-white rounded"
        >
          -
        </button>
        <button
          onClick={() => setCount(c => c + 1)}
          className="px-3 py-1 bg-blue-500 text-white rounded"
        >
          +
        </button>
      </div>
    </div>
  );
}
