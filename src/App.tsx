import { useState } from 'react'
import './App.css'
import { MultiStepForm } from './lessons/01-state-management/MultiStepForm'
import { SignupForm } from './lessons/02-react19-actions/SignupForm'
import { MessageList } from './lessons/03-optimistic-ui/MessageList'
import { UserListContainer } from './lessons/04-use-api/UserList'
import { ThemeContainer } from './lessons/05-use-context/ThemeCard'
import { FocusDemo } from './lessons/06-ref-as-prop/FocusDemo'

function App() {
  const [currentLesson, setCurrentLesson] = useState(1);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center py-12 px-4">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          React 19 Study
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto mb-6">
          Exploring new features and best practices in React 19.
        </p>
        
        {/* Navigation Tabs */}
        <div className="inline-flex flex-wrap justify-center gap-1 p-1 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 max-w-full">
          {[
            { id: 1, label: '1. State' },
            { id: 2, label: '2. Actions' },
            { id: 3, label: '3. Optimistic' },
            { id: 4, label: '4. use(Promise)' },
            { id: 5, label: '5. use(Context)' },
            { id: 6, label: '6. Ref Prop' },
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
        {currentLesson === 1 && <MultiStepForm />}
        {currentLesson === 2 && <SignupForm />}
        {currentLesson === 3 && <MessageList />}
        {currentLesson === 4 && <UserListContainer />}
        {currentLesson === 5 && <ThemeContainer />}
        {currentLesson === 6 && <FocusDemo />}
      </main>
    </div>
  )
}

export default App
