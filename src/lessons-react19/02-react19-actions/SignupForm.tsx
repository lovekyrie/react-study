import { useActionState } from 'react';
import { signupUser } from './actions';
import { SubmitButton } from './SubmitButton';

export function SignupForm() {
  const [state, formAction] = useActionState(signupUser, null);

  return (
    <div className="flex flex-col items-center gap-8 p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl w-full max-w-md border border-gray-100 dark:border-gray-700">
      <div className="w-full text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Lesson 2: Actions
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          使用 useActionState 和 useFormStatus
        </p>
      </div>

      <form action={formAction} className="flex flex-col gap-4 w-full">
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-200">
            注册邮箱
          </label>
          <input
            id="email"
            type="text"
            name="email"
            defaultValue={state?.email || ''}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            placeholder="输入 error@example.com 测试错误"
          />
          {state?.error && (
            <p className="text-red-500 text-sm font-medium">{state.error}</p>
          )}
          {state?.message && (
            <p className="text-green-500 text-sm font-medium">{state.message}</p>
          )}
        </div>

        {/* 
          这里使用了独立的 SubmitButton 组件。
          它内部使用 useFormStatus() 来自动感知表单的提交状态，
          而不需要我们通过 Props 传递 isPending。
        */}
        <SubmitButton />
      </form>
      
      <div className="text-xs text-gray-400 w-full text-center border-t border-gray-100 dark:border-gray-700 pt-4">
        尝试输入 <b>error@example.com</b> 来查看服务器错误处理
      </div>
    </div>
  );
}
