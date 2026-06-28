import { useCallback, useRef, useState, type Ref } from 'react';

// 1. 子组件：直接接收 ref prop
// 注意：在 TypeScript 中，我们可能需要显式定义 props 类型
type CustomInputProps = {
  placeholder?: string;
  ref?: Ref<HTMLInputElement>;
};

function CustomInput({ placeholder, ref }: CustomInputProps) {
  return (
    <input
      ref={ref} // 直接透传 ref
      className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white w-full"
      placeholder={placeholder}
      type="text"
    />
  );
}

// 2. 父组件
export function FocusDemo() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [showCallbackInput, setShowCallbackInput] = useState(true);
  const [callbackStatus, setCallbackStatus] = useState('callback ref 等待挂载');

  const handleFocus = () => {
    // 操作 DOM
    inputRef.current?.focus();
    
    // 也可以设置值
    if (inputRef.current) {
      inputRef.current.style.backgroundColor = '#eef2ff'; // 浅蓝色背景
      setTimeout(() => {
        if (inputRef.current) inputRef.current.style.backgroundColor = '';
      }, 500);
    }
  };

  const cleanupRef = useCallback((node: HTMLInputElement | null) => {
    if (!node) return;

    setCallbackStatus('callback ref 已挂载');
    node.classList.add('ring-2', 'ring-emerald-400');

    return () => {
      node.classList.remove('ring-2', 'ring-emerald-400');
      setCallbackStatus('callback ref cleanup 已执行');
    };
  }, []);

  return (
    <div className="flex flex-col items-center gap-8 p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl w-full max-w-md border border-gray-100 dark:border-gray-700">
      <div className="w-full text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Lesson 6: Ref as Prop
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          再见了，forwardRef！
        </p>
      </div>

      <div className="w-full flex flex-col gap-4">
        {/* 把 ref 像普通 prop 一样传递 */}
        <CustomInput ref={inputRef} placeholder="点击下方按钮聚焦我..." />
        
        <button
          onClick={handleFocus}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium cursor-pointer"
        >
          聚焦输入框
        </button>

        <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
          <div className="mb-3 flex items-center justify-between gap-3">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
              Callback ref cleanup
            </span>
            <button
              onClick={() => setShowCallbackInput((value) => !value)}
              className="rounded bg-emerald-600 px-3 py-1 text-sm font-medium text-white hover:bg-emerald-700"
            >
              {showCallbackInput ? '隐藏' : '显示'}
            </button>
          </div>

          {showCallbackInput ? (
            <input
              ref={cleanupRef}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              placeholder="隐藏时会运行 ref cleanup"
            />
          ) : (
            <p className="text-sm text-gray-500">输入框已卸载</p>
          )}

          <p className="mt-2 text-xs text-gray-400">{callbackStatus}</p>
        </div>
      </div>
      
      <div className="text-xs text-gray-400 w-full text-center border-t border-gray-100 dark:border-gray-700 pt-4">
        查看代码：CustomInput 组件不再使用 forwardRef 包裹，callback ref 可以返回 cleanup
      </div>
    </div>
  );
}
