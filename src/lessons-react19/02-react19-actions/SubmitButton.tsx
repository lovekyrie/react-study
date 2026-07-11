import { useFormStatus } from 'react-dom'

export function SubmitButton() {
  // useFormStatus 必须在 <form> 内部渲染的组件中调用
  // 它会自动寻找最近的父级 <form> 并获取其状态
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      disabled={pending}
      className={`px-4 py-2 rounded-lg text-white font-medium transition-colors ${
        pending
          ? 'bg-blue-400 cursor-not-allowed'
          : 'bg-blue-600 hover:bg-blue-700 cursor-pointer'
      }`}
    >
      {pending ? '提交中...' : '立即注册'}
    </button>
  )
}
