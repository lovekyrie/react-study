import React, { useState, useEffect } from 'react';

export default function LifecycleDemo() {
  const [mounted, setMounted] = useState(false);
  const [count, setCount] = useState(0);

  // componentDidMount
  useEffect(() => {
    setMounted(true);
    console.log('Component Mounted');
    
    // componentWillUnmount
    return () => {
      console.log('Component Will Unmount');
      setMounted(false);
    };
  }, []);

  // componentDidUpdate (when count changes)
  useEffect(() => {
    if (mounted) {
      console.log(`Count updated to ${count}`);
    }
  }, [count, mounted]);

  return (
    <div className="p-4 border rounded shadow-sm">
      <h2 className="text-xl font-bold mb-4">4. State and Lifecycle</h2>
      <p className="mb-4">Check the console logs to see lifecycle events.</p>
      
      <div className="flex items-center gap-4">
        <div className={`w-3 h-3 rounded-full ${mounted ? 'bg-green-500' : 'bg-red-500'}`}></div>
        <span>Status: {mounted ? 'Mounted' : 'Unmounted'}</span>
      </div>

      <div className="mt-4">
        <p className="mb-2">Count: {count}</p>
        <button 
          onClick={() => setCount(c => c + 1)}
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          Update State
        </button>
      </div>
    </div>
  );
}

