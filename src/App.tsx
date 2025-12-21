import React, { useState } from 'react'
import './App.css'
// Advanced Lessons (React 16 Hooks Era)
import Counter from './lessons-react16/01-state-management/Counter'
import SignupForm from './lessons-react16/02-manual-actions/SignupForm'
import MessageList from './lessons-react16/03-optimistic-ui/MessageList'
import UserList from './lessons-react16/04-use-api/UserList'
import ThemeCard from './lessons-react16/05-use-context/ThemeCard'
import { ThemeProvider } from './lessons-react16/05-use-context/ThemeContext'
import FocusDemo from './lessons-react16/06-ref-as-prop/FocusDemo'

// Common Concepts
import JsxDemo from './lessons-common/01-jsx/JsxDemo'
import RenderingDemo from './lessons-common/02-rendering-elements/RenderingDemo'
import PropsDemo from './lessons-common/03-components-props/PropsDemo'
import LifecycleDemo from './lessons-common/04-state-lifecycle/LifecycleDemo'
import ClassLifecycleDemo from './lessons-common/04-state-lifecycle/ClassLifecycleDemo' // Import Class Component
import EventDemo from './lessons-common/05-handling-events/EventDemo'
import ConditionDemo from './lessons-common/06-conditional-rendering/ConditionDemo'
import ListDemo from './lessons-common/07-lists-keys/ListDemo'
import FormDemo from './lessons-common/08-forms/FormDemo'
import LiftingStateDemo from './lessons-common/09-lifting-state-up/LiftingStateDemo'
import CompositionDemo from './lessons-common/10-composition/CompositionDemo'
import PureDemo from './lessons-common/11-pure-components/PureDemo'
import ContextDemo from './lessons-common/12-use-context/ContextDemo'

function App() {
  const [section, setSection] = useState<'advanced' | 'common'>('common');
  const [currentLesson, setCurrentLesson] = useState(1);

  const advancedLessons = [
    { id: 1, label: '1. State', component: <Counter /> },
    { id: 2, label: '2. Manual Actions', component: <SignupForm /> },
    { id: 3, label: '3. Optimistic', component: <MessageList /> },
    { id: 4, label: '4. Data Fetching', component: <UserList /> },
    { id: 5, label: '5. Context', component: <ThemeProvider><ThemeCard /></ThemeProvider> },
    { id: 6, label: '6. Forward Ref', component: <FocusDemo /> },
  ];

  const commonLessons = [
    { id: 1, label: 'JSX', component: <JsxDemo /> },
    { id: 2, label: 'Rendering', component: <RenderingDemo /> },
    { id: 3, label: 'Components', component: <PropsDemo /> },
    // Combine Hook and Class demos for Lesson 4
    { id: 4, label: 'State & Lifecycle', component: (
      <div className="space-y-8">
        <LifecycleDemo />
        <ClassLifecycleDemo />
      </div>
    )},
    { id: 5, label: 'Events', component: <EventDemo /> },
    { id: 6, label: 'Conditional', component: <ConditionDemo /> },
    { id: 7, label: 'Lists', component: <ListDemo /> },
    { id: 8, label: 'Forms', component: <FormDemo /> },
    { id: 9, label: 'Lifting State', component: <LiftingStateDemo /> },
    { id: 10, label: 'Composition', component: <CompositionDemo /> },
    { id: 11, label: 'Pure Components', component: <PureDemo /> },
    { id: 12, label: 'Context', component: <ContextDemo /> },
  ];

  const lessons = section === 'advanced' ? advancedLessons : commonLessons;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center py-12 px-4">
      <header className="mb-8 text-center w-full max-w-4xl">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          React Study
        </h1>
        
        {/* Section Toggle */}
        <div className="flex justify-center mb-6">
          <div className="bg-white dark:bg-gray-800 p-1 rounded-lg border border-gray-200 dark:border-gray-700 inline-flex">
            <button
              onClick={() => { setSection('common'); setCurrentLesson(1); }}
              className={`px-6 py-2 rounded-md text-sm font-bold transition-all ${
                section === 'common' 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Common Concepts
            </button>
            <button
              onClick={() => { setSection('advanced'); setCurrentLesson(1); }}
              className={`px-6 py-2 rounded-md text-sm font-bold transition-all ${
                section === 'advanced' 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Hooks & Patterns
            </button>
          </div>
        </div>
        
        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {lessons.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setCurrentLesson(tab.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all border ${
                currentLesson === tab.id
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </header>
      
      <main className="w-full max-w-2xl">
        {lessons.find(l => l.id === currentLesson)?.component}
      </main>
    </div>
  )
}

export default App
