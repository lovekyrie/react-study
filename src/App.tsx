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
import UseReducerImmerJuejin from './lessons-juejin/hooks/useReducerImmer';
import UseRefJuejin from './lessons-juejin/hooks/useRef';
import ForwardRefUseImperativeHandleJuejin from './lessons-juejin/hooks/forwardRefUseImperativeHandle';
import UseContextJuejin from './lessons-juejin/hooks/useContext';
import MemoUseMemoUseCallbackJuejin from './lessons-juejin/hooks/memoUseMemoUseCallback';
import HooksSummaryJuejin from './lessons-juejin/hooks/summary';

type SectionId = 'common' | 'react16' | 'react19' | 'react192' | 'juejin';

type Lesson = {
  id: number;
  label: string;
  component: ReactNode;
};

type Section = {
  label: string;
  description: string;
  accent: string;
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
  { id: 3, label: '3. useReducer + immer', component: <UseReducerImmerJuejin /> },
  { id: 4, label: '4. useRef', component: <UseRefJuejin /> },
  {
    id: 5,
    label: '5. forwardRef + useImperativeHandle',
    component: <ForwardRefUseImperativeHandleJuejin />,
  },
  { id: 6, label: '6. useContext', component: <UseContextJuejin /> },
  {
    id: 7,
    label: '7. memo + useMemo + useCallback',
    component: <MemoUseMemoUseCallbackJuejin />,
  },
  { id: 8, label: '8. 总结', component: <HooksSummaryJuejin /> },
];

const sections: Record<SectionId, Section> = {
  common: {
    label: 'Common Concepts',
    description: 'React 基础概念',
    accent: 'Core',
    lessons: commonLessons,
  },
  react16: {
    label: 'React 16 Style',
    description: 'React 16.8 Hooks 时代的手动写法',
    accent: 'Legacy',
    lessons: react16Lessons,
  },
  react19: {
    label: 'React 19',
    description: 'React 19 客户端可演示的新能力',
    accent: 'Modern',
    lessons: react19Lessons,
  },
  react192: {
    label: 'React 19.2',
    description: 'Activity 与 useEffectEvent 附录',
    accent: 'Latest',
    lessons: [{ id: 1, label: '19.2 Appendix', component: <React192Demo /> }],
  },
  juejin: {
    label: 'Juejin',
    description: '额外学习笔记',
    accent: 'Notes',
    lessons: juejinLessons,
  },
};

const sectionIds = Object.keys(sections) as SectionId[];
const lessonIndex = sectionIds.flatMap((sectionId) =>
  sections[sectionId].lessons.map((lesson) => ({
    sectionId,
    lesson,
  })),
);

function App() {
  const [section, setSection] = useState<SectionId>('common');
  const [currentLesson, setCurrentLesson] = useState(1);

  const activeSection = sections[section];
  const activeLesson = activeSection.lessons.find((lesson) => lesson.id === currentLesson)
    ?? activeSection.lessons[0];
  const activeIndex = Math.max(
    lessonIndex.findIndex(
      (entry) => entry.sectionId === section && entry.lesson.id === activeLesson.id,
    ),
    0,
  );
  const activeNumber = activeIndex + 1;
  const progress = Math.round((activeNumber / lessonIndex.length) * 100);
  const previousLesson = lessonIndex[activeIndex - 1];
  const nextLesson = lessonIndex[activeIndex + 1];

  const selectSection = (nextSection: SectionId) => {
    setSection(nextSection);
    setCurrentLesson(1);
  };

  const selectLesson = (nextSection: SectionId, lessonId: number) => {
    setSection(nextSection);
    setCurrentLesson(lessonId);
  };

  return (
    <div className="app-shell">
      <aside className="course-sidebar" aria-label="React course navigation">
        <div className="brand-panel">
          <span className="brand-kicker">React Study</span>
          <h1>学习工作台</h1>
          <p>{activeSection.description}</p>
        </div>

        <nav className="course-nav" aria-label="Course sections">
          {sectionIds.map((sectionId) => {
            const currentSection = sections[sectionId];
            const isActiveSection = section === sectionId;

            return (
              <section
                key={sectionId}
                className={`nav-section ${isActiveSection ? 'is-active' : ''}`}
              >
                <button
                  type="button"
                  onClick={() => selectSection(sectionId)}
                  className="section-button"
                  aria-expanded={isActiveSection}
                >
                  <span>
                    <span className="section-label">{currentSection.label}</span>
                    <span className="section-description">{currentSection.description}</span>
                  </span>
                  <span className="section-meta">{currentSection.lessons.length}</span>
                </button>

                {isActiveSection && (
                  <div className="lesson-list">
                    {currentSection.lessons.map((lesson) => (
                      <button
                        key={lesson.id}
                        type="button"
                        onClick={() => setCurrentLesson(lesson.id)}
                        className={`lesson-link ${currentLesson === lesson.id ? 'is-active' : ''}`}
                        aria-current={currentLesson === lesson.id ? 'page' : undefined}
                      >
                        <span className="lesson-number">{String(lesson.id).padStart(2, '0')}</span>
                        <span>{lesson.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </section>
            );
          })}
        </nav>
      </aside>

      <div className="study-workspace">
        <header className="study-header">
          <div>
            <div className="lesson-eyebrow">
              <span>{activeSection.accent}</span>
              <span>{activeNumber} / {lessonIndex.length}</span>
            </div>
            <h2>{activeLesson.label}</h2>
            <p>{activeSection.description}</p>
          </div>

          <div className="progress-card" aria-label={`Course progress ${progress}%`}>
            <span>Progress</span>
            <strong>{progress}%</strong>
            <div className="progress-track">
              <div className="progress-value" style={{ width: `${progress}%` }} />
            </div>
          </div>
        </header>

        <main className="lesson-stage">
          <div className="lesson-shell">
            {activeLesson?.component}
          </div>
        </main>

        <footer className="lesson-controls" aria-label="Lesson controls">
          <button
            type="button"
            onClick={() => previousLesson && selectLesson(previousLesson.sectionId, previousLesson.lesson.id)}
            disabled={!previousLesson}
            className="control-button"
          >
            <span aria-hidden="true">&larr;</span>
            <span>
              <small>Previous</small>
              {previousLesson ? previousLesson.lesson.label : 'Start'}
            </span>
          </button>

          <button
            type="button"
            onClick={() => nextLesson && selectLesson(nextLesson.sectionId, nextLesson.lesson.id)}
            disabled={!nextLesson}
            className="control-button control-button-primary"
          >
            <span>
              <small>Next</small>
              {nextLesson ? nextLesson.lesson.label : 'Completed'}
            </span>
            <span aria-hidden="true">&rarr;</span>
          </button>
        </footer>
      </div>
    </div>
  );
}

export default App;
