import React, { useState } from 'react'
import './App.css'
import Counter from './lessons-react16/01-state-management/Counter'
import SignupForm from './lessons-react16/02-manual-actions/SignupForm'
import MessageList from './lessons-react16/03-optimistic-ui/MessageList'
import UserList from './lessons-react16/04-use-api/UserList'
import ThemeCard from './lessons-react16/05-use-context/ThemeCard'
import { ThemeProvider } from './lessons-react16/05-use-context/ThemeContext'
import FocusDemo from './lessons-react16/06-ref-as-prop/FocusDemo'

function App() {
  const [currentLesson, setCurrentLesson] = useState(1);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center py-12 px-4">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          React 16 Study (Hooks Era)
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto mb-6">
          Reviewing manual state management, effects, and classic patterns.
        </p>
        
        {/* Navigation Tabs */}
        <div className="inline-flex flex-wrap justify-center gap-1 p-1 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 max-w-full">
          {[
            { id: 1, label: '1. State' },
            { id: 2, label: '2. Manual Actions' },
            { id: 3, label: '3. Optimistic' },
            { id: 4, label: '4. Data Fetching' },
            { id: 5, label: '5. Context' },
            { id: 6, label: '6. Forward Ref' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setCurrentLesson(tab.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                currentLesson === tab.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </header>
      
      <main className="w-full flex justify-center">
        {currentLesson === 1 && <Counter />}
        {currentLesson === 2 && <SignupForm />}
        {currentLesson === 3 && <MessageList />}
        {currentLesson === 4 && <UserList />}
        {currentLesson === 5 && (
          <ThemeProvider>
            <ThemeCard />
          </ThemeProvider>
        )}
        {currentLesson === 6 && <FocusDemo />}
      </main>
    </div>
  )
}

export default App
