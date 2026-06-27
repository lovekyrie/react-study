import { useState, type ReactNode } from 'react';
import './App.css';

// Common Concepts
import JsxDemo from './lessons-common/01-jsx/JsxDemo';
import RenderingDemo from './lessons-common/02-rendering-elements/RenderingDemo';
import PropsDemo from './lessons-common/03-components-props/PropsDemo';
import LifecycleDemo from './lessons-common/04-state-lifecycle/LifecycleDemo';
import ClassLifecycleDemo from './lessons-common/04-state-lifecycle/ClassLifecycleDemo';
import EventDemo from './lessons-common/05-handling-events/EventDemo';
import ConditionDemo from './lessons-common/06-conditional-rendering/ConditionDemo';
import ListDemo from './lessons-common/07-lists-keys/ListDemo';
import FormDemo from './lessons-common/08-forms/FormDemo';
import LiftingStateDemo from './lessons-common/09-lifting-state-up/LiftingStateDemo';
import CompositionDemo from './lessons-common/10-composition/CompositionDemo';
import PureDemo from './lessons-common/11-pure-components/PureDemo';
import ContextDemo from './lessons-common/12-use-context/ContextDemo';

// React 16 style comparisons
import React16Counter from './lessons-react16/01-state-management/Counter';
import React16SignupForm from './lessons-react16/02-manual-actions/SignupForm';
import React16MessageList from './lessons-react16/03-optimistic-ui/MessageList';
import React16UserList from './lessons-react16/04-use-api/UserList';
import React16ThemeCard from './lessons-react16/05-use-context/ThemeCard';
import { ThemeProvider as React16ThemeProvider } from './lessons-react16/05-use-context/ThemeContext';
import React16FocusDemo from './lessons-react16/06-ref-as-prop/FocusDemo';

// React 19 comparisons
import { MultiStepForm } from './lessons-react19/01-state-management/MultiStepForm';
import { SignupForm as React19SignupForm } from './lessons-react19/02-react19-actions/SignupForm';
import { MessageList as React19MessageList } from './lessons-react19/03-optimistic-ui/MessageList';
import { UserListContainer } from './lessons-react19/04-use-api/UserList';
import { ThemeContainer } from './lessons-react19/05-use-context/ThemeCard';
import { FocusDemo as React19FocusDemo } from './lessons-react19/06-ref-as-prop/FocusDemo';
import { AsyncSearchDemo } from './lessons-react19/07-async-transitions/AsyncSearchDemo';
import { React192Demo } from './lessons-react19/08-react19-2/React192Demo';

// Juejin Lessons
import UseEffectJuejin from './lessons-juejin/hooks/useEffect';
import UseReducerJuejin from './lessons-juejin/hooks/useReducer';

type SectionId = 'common' | 'react16' | 'react19' | 'react192' | 'juejin';

type Lesson = {
  id: number;
  label: string;
  component: ReactNode;
};

type Section = {
  label: string;
  description: string;
  lessons: Lesson[];
};

const commonLessons: Lesson[] = [
  { id: 1, label: 'JSX', component: <JsxDemo /> },
  { id: 2, label: 'Rendering', component: <RenderingDemo /> },
  { id: 3, label: 'Components', component: <PropsDemo /> },
  {
    id: 4,
    label: 'State & Lifecycle',
    component: (
      <div className="space-y-8">
        <LifecycleDemo />
        <ClassLifecycleDemo />
      </div>
    ),
  },
  { id: 5, label: 'Events', component: <EventDemo /> },
  { id: 6, label: 'Conditional', component: <ConditionDemo /> },
  { id: 7, label: 'Lists', component: <ListDemo /> },
  { id: 8, label: 'Forms', component: <FormDemo /> },
  { id: 9, label: 'Lifting State', component: <LiftingStateDemo /> },
  { id: 10, label: 'Composition', component: <CompositionDemo /> },
  { id: 11, label: 'Pure Components', component: <PureDemo /> },
  { id: 12, label: 'Context', component: <ContextDemo /> },
];

const react16Lessons: Lesson[] = [
  { id: 1, label: '1. State', component: <React16Counter /> },
  { id: 2, label: '2. Manual Actions', component: <React16SignupForm /> },
  { id: 3, label: '3. Optimistic', component: <React16MessageList /> },
  { id: 4, label: '4. Data Fetching', component: <React16UserList /> },
  {
    id: 5,
    label: '5. Context',
    component: (
      <React16ThemeProvider>
        <React16ThemeCard />
      </React16ThemeProvider>
    ),
  },
  { id: 6, label: '6. Forward Ref', component: <React16FocusDemo /> },
];

const react19Lessons: Lesson[] = [
  { id: 1, label: '1. State Split', component: <MultiStepForm /> },
  { id: 2, label: '2. Actions', component: <React19SignupForm /> },
  { id: 3, label: '3. Optimistic', component: <React19MessageList /> },
  { id: 4, label: '4. use() API', component: <UserListContainer /> },
  { id: 5, label: '5. use(Context)', component: <ThemeContainer /> },
  { id: 6, label: '6. Ref as Prop', component: <React19FocusDemo /> },
  { id: 7, label: '7. Transitions', component: <AsyncSearchDemo /> },
];

const juejinLessons: Lesson[] = [
  { id: 1, label: '1. useEffect', component: <UseEffectJuejin /> },
  { id: 2, label: '2. useReducer', component: <UseReducerJuejin /> },
];

const sections: Record<SectionId, Section> = {
  common: {
    label: 'Common Concepts',
    description: 'React 基础概念',
    lessons: commonLessons,
  },
  react16: {
    label: 'React 16 Style',
    description: 'React 16.8 Hooks 时代的手动写法',
    lessons: react16Lessons,
  },
  react19: {
    label: 'React 19',
    description: 'React 19 客户端可演示的新能力',
    lessons: react19Lessons,
  },
  react192: {
    label: 'React 19.2',
    description: 'Activity 与 useEffectEvent 附录',
    lessons: [{ id: 1, label: '19.2 Appendix', component: <React192Demo /> }],
  },
  juejin: {
    label: 'Juejin',
    description: '额外学习笔记',
    lessons: juejinLessons,
  },
};

const sectionIds = Object.keys(sections) as SectionId[];

function App() {
  const [section, setSection] = useState<SectionId>('common');
  const [currentLesson, setCurrentLesson] = useState(1);

  const activeSection = sections[section];
  const activeLesson = activeSection.lessons.find((lesson) => lesson.id === currentLesson)
    ?? activeSection.lessons[0];

  const selectSection = (nextSection: SectionId) => {
    setSection(nextSection);
    setCurrentLesson(1);
  };

  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-50 px-4 py-12 dark:bg-gray-900">
      <header className="mb-8 w-full max-w-5xl text-center">
        <h1 className="mb-3 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          React Study
        </h1>
        <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
          {activeSection.description}
        </p>

        <div className="mb-6 flex justify-center">
          <div className="inline-flex flex-wrap justify-center gap-1 rounded-lg border border-gray-200 bg-white p-1 dark:border-gray-700 dark:bg-gray-800">
            {sectionIds.map((sectionId) => (
              <button
                key={sectionId}
                onClick={() => selectSection(sectionId)}
                className={`rounded-md px-4 py-2 text-sm font-bold transition-colors ${
                  section === sectionId
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                {sections[sectionId].label}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {activeSection.lessons.map((lesson) => (
            <button
              key={lesson.id}
              onClick={() => setCurrentLesson(lesson.id)}
              className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                currentLesson === lesson.id
                  ? 'border-black bg-black text-white'
                  : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
              }`}
            >
              {lesson.label}
            </button>
          ))}
        </div>
      </header>

      <main className="w-full max-w-2xl">
        {activeLesson?.component}
      </main>
    </div>
  );
}

export default App;
