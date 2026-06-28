import { createContext, useContext, useState } from 'react';

// 1. Create Context
const ThemeContext = createContext('light');

export default function ContextDemo() {
  const [theme, setTheme] = useState('light');

  return (
    <div className="p-4 border rounded shadow-sm">
      <h2 className="text-xl font-bold mb-4">12. UseContext (Basic)</h2>
      
      <ThemeContext.Provider value={theme}>
        <div className="flex flex-col gap-4">
          <label className="flex items-center gap-2">
            <input 
              type="checkbox" 
              checked={theme === 'dark'}
              onChange={e => setTheme(e.target.checked ? 'dark' : 'light')}
            />
            Use Dark Mode
          </label>
          
          <ThemedButton />
        </div>
      </ThemeContext.Provider>
    </div>
  );
}

function ThemedButton() {
  // 2. Consume Context
  const theme = useContext(ThemeContext);
  
  const className = theme === 'dark' 
    ? "bg-black text-white" 
    : "bg-gray-200 text-black";

  return (
    <button className={`${className} px-4 py-2 rounded transition-colors`}>
      I am styled by theme context!
    </button>
  );
}
