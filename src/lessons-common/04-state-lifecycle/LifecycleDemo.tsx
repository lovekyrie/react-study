import React, { useState, useEffect, useRef } from 'react';

export default function LifecycleDemo() {
  const [count, setCount] = useState(0);
  // Use ref to track first render without triggering re-renders
  const isFirstRender = useRef(true);

  // componentDidMount
  useEffect(() => {
    console.log('Component Mounted');
    
    // componentWillUnmount
    return () => {
      console.log('Component Will Unmount');
    };
  }, []);

  // componentDidUpdate (when count changes)
  useEffect(() => {
    // Skip the first run (mount) to simulate componentDidUpdate
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    console.log(`Count updated to ${count}`);
  }, [count]);

  return (
    <div className="p-4 border rounded shadow-sm">
      <h2 className="text-xl font-bold mb-4">4. State and Lifecycle</h2>
      <p className="mb-4">Check the console logs to see lifecycle events.</p>
      
      <div className="flex items-center gap-4">
        {/* Since we can see this component, it is mounted. 
            Removing the state-based toggle avoids the extra render pass. */}
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span>Status: Mounted</span>
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
