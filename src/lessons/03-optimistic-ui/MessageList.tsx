import { useOptimistic, useState, useRef } from 'react';
import { sendMessage, type Message } from './actions';

export function MessageList() {
  // 1. 真实状态：来自服务器（或已确认）的消息列表
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', text: 'Hello! 这是初始消息' },
  ]);

  // 2. 乐观状态：useOptimistic(当前真实状态, 更新函数)
  // optimisticMessages 是 UI 渲染时使用的列表
  // addOptimisticMessage 是一个函数，用于临时修改这个列表
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (state: Message[], newMessage: string) => [
      ...state,
      { id: Date.now().toString(), text: newMessage, sending: true },
    ]
  );

  const formRef = useRef<HTMLFormElement>(null);

  // 3. 表单 Action
  async function formAction(formData: FormData) {
    const text = formData.get('message') as string;
    if (!text) return;

    // A. 立即乐观更新 UI
    addOptimisticMessage(text);
    
    // 清空表单
    formRef.current?.reset();

    try {
      // B. 发送真实请求
      const sentMessage = await sendMessage(text);
      
      // C. 请求成功，更新真实状态
      // 注意：一旦真实状态更新，useOptimistic 会自动丢弃之前的乐观状态，使用最新的真实状态
      setMessages((prev) => [...prev, sentMessage]);
    } catch (error) {
      console.error(error);
      alert('发送失败！消息将自动回滚。');
      // D. 请求失败：这里什么都不用做，因为 Action 执行完毕后
      // React 会自动重新计算 optimisticMessages，它会回退到 messages 的状态
    }
  }

  return (
    <div className="flex flex-col items-center gap-8 p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl w-full max-w-md border border-gray-100 dark:border-gray-700 h-[500px]">
      <div className="w-full text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Lesson 3: Optimistic UI
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          使用 useOptimistic 实现即时响应
        </p>
      </div>

      {/* 消息列表区域 */}
      <div className="flex-1 w-full overflow-y-auto space-y-3 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700">
        {optimisticMessages.map((msg, index) => (
          <div
            key={msg.id || index}
            className={`flex flex-col p-3 rounded-lg max-w-[80%] ${
              msg.sending
                ? 'self-end bg-blue-100 text-blue-900 dark:bg-blue-900 dark:text-blue-100 opacity-70' // 正在发送样式
                : 'self-start bg-white text-gray-800 dark:bg-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700' // 普通消息样式
            }`}
          >
            <span>{msg.text}</span>
            {msg.sending && (
              <span className="text-[10px] text-blue-500 mt-1">发送中...</span>
            )}
          </div>
        ))}
        {optimisticMessages.length === 0 && (
          <p className="text-center text-gray-400 text-sm mt-10">暂无消息</p>
        )}
      </div>

      {/* 发送表单 */}
      <form ref={formRef} action={formAction} className="w-full flex gap-2">
        <input
          type="text"
          name="message"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          placeholder="输入消息..."
          autoComplete="off"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium cursor-pointer"
        >
          发送
        </button>
      </form>
      
      <div className="text-xs text-gray-400 w-full text-center">
        输入包含 "error" 的文本来模拟发送失败
      </div>
    </div>
  );
}

