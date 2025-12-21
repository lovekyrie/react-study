import { useSyncExternalStore } from 'react';

// 1. External Store Logic (Outside Component)
// This logic is decoupled from React
let listeners: Array<() => void> = [];
let currentTime = new Date().toLocaleTimeString();

setInterval(() => {
  currentTime = new Date().toLocaleTimeString();
  listeners.forEach(l => l());
}, 1000);

const store = {
  subscribe(listener: () => void) {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  },
  getSnapshot() {
    return currentTime;
  }
};

export default function RenderingDemo() {
  // 2. useSyncExternalStore (React 19 / 18+ Recommended)
  // Subscribes to an external store and updates when snapshot changes
  const time = useSyncExternalStore(store.subscribe, store.getSnapshot);

  // 当不能使用useSyncExternalStore时，可以使用useEffect
  //  const [time, setTime] = useState(new Date().toLocaleTimeString());
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setTime(new Date().toLocaleTimeString());
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);
  return (
    <div className="p-4 border rounded shadow-sm">
      <h2 className="text-xl font-bold mb-4">2. Rendering Elements (React 19)</h2>
      <p className="mb-2">React updates only what's necessary:</p>
      <div className="text-2xl font-mono bg-black text-green-400 p-4 rounded inline-block">
        {time}
      </div>
      <p className="text-sm text-gray-500 mt-2">
        Impl: <code>useSyncExternalStore</code> (Subscribe to time)
      </p>
      
      <div className="mt-4 p-2  text-sm border border-yellow-200 rounded">
        <strong>Note on `use`:</strong> The `use` API is for Promises and Context. 
        For subscriptions (like intervals/events), `useSyncExternalStore` or `useEffect` is correct.
      </div>
    </div>
  );
}
