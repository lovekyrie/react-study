import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export default function ThemeCard() {
  // 3. Use Context Hook
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('ThemeCard must be used within a ThemeProvider');
  }

  const { theme, toggleTheme } = context;

  return (
    <div 
      className={`p-6 rounded-lg transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800 shadow-md'
      }`}
    >
      <h2 className="text-xl font-bold mb-2">Themed Component</h2>
      <p className="mb-4">Current theme is: <strong>{theme}</strong></p>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Toggle Theme
      </button>
    </div>
  );
}

