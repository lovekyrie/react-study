import { use, useState } from 'react';
import { ThemeProvider } from './ThemeContext';
import { ThemeContext } from './theme-context';

function ThemeCard({ showDetails }: { showDetails: boolean }) {
  // 传统 Hooks 规则：Hooks 必须在顶层，不能在 if 里
  // const context = useContext(ThemeContext); // 必须在所有 return 之前

  if (!showDetails) {
    return (
      <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-500 text-center">
        点击展开以查看主题详情
      </div>
    );
  }

  // 新的 use() API：可以在条件语句中使用！
  // 只有当 showDetails 为 true 时，才会订阅 Context
  const context = use(ThemeContext);
  
  if (!context) throw new Error('ThemeCard must be used within a ThemeProvider');
  
  const { theme, setTheme } = context;

  return (
    <div className={`p-6 rounded-xl transition-colors duration-300 border-2 ${
      theme === 'dark' 
        ? 'bg-gray-900 border-purple-500 text-white' 
        : theme === 'light'
        ? 'bg-white border-yellow-400 text-gray-900'
        : 'bg-gray-100 border-gray-300 text-gray-700'
    }`}>
      <h3 className="text-lg font-bold mb-4">当前主题: {theme.toUpperCase()}</h3>
      
      <div className="flex gap-2">
        <button
          onClick={() => setTheme('light')}
          className={`px-3 py-1 rounded border ${theme === 'light' ? 'bg-yellow-100 border-yellow-400' : 'border-gray-300'}`}
        >
          Light
        </button>
        <button
          onClick={() => setTheme('dark')}
          className={`px-3 py-1 rounded border ${theme === 'dark' ? 'bg-purple-900 border-purple-500 text-white' : 'border-gray-300'}`}
        >
          Dark
        </button>
        <button
          onClick={() => setTheme('system')}
          className={`px-3 py-1 rounded border ${theme === 'system' ? 'bg-gray-300 border-gray-500' : 'border-gray-300'}`}
        >
          System
        </button>
      </div>
    </div>
  );
}

// 容器组件
export function ThemeContainer() {
  const [show, setShow] = useState(false);

  return (
    <ThemeProvider>
      <div className="flex flex-col items-center gap-8 p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl w-full max-w-md border border-gray-100 dark:border-gray-700">
        <div className="w-full text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Lesson 5: use(Context)
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            在条件语句中读取 Context
          </p>
        </div>

        <div className="w-full flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">显示详情</span>
            <button
              onClick={() => setShow(!show)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                show ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition transition-transform ${
                  show ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          <ThemeCard showDetails={show} />
          
          {show && (
             <p className="text-xs text-gray-400 mt-2">
               注意：当开关关闭时，ThemeCard 组件完全不会订阅 Context，这在大型应用中可能有微小的性能优势。
             </p>
          )}
        </div>
      </div>
    </ThemeProvider>
  );
}
