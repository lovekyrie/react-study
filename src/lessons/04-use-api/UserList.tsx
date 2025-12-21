import { use, Suspense, useState } from 'react';
import { fetchUsers, type User } from './api';

// 1. 展示组件：直接读取 Promise
function UserList({ usersPromise }: { usersPromise: Promise<User[]> }) {
  // use() 会暂停组件渲染，直到 Promise 完成
  // 如果 Promise 失败，它会抛出错误（可以用 ErrorBoundary 捕获）
  const users = use(usersPromise);

  return (
    <ul className="w-full space-y-2">
      {users.map((user) => (
        <li
          key={user.id}
          className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-100 dark:border-gray-700 flex justify-between items-center"
        >
          <span className="font-medium text-gray-900 dark:text-white">{user.name}</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">{user.email}</span>
        </li>
      ))}
    </ul>
  );
}

// 2. 容器组件：管理 Promise 和 Suspense
export function UserListContainer() {
  // 我们将 Promise 存储在 state 中，以确保渲染期间 Promise 实例不变
  const [usersPromise, setUsersPromise] = useState<Promise<User[]> | null>(null);

  const loadData = () => {
    setUsersPromise(fetchUsers());
  };

  return (
    <div className="flex flex-col items-center gap-8 p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl w-full max-w-md border border-gray-200 dark:border-gray-700">
      <div className="w-full text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Lesson 4: use() API
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          配合 Suspense 进行数据读取
        </p>
      </div>

      {!usersPromise ? (
        <button
          onClick={loadData}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-lg cursor-pointer"
        >
          加载用户列表
        </button>
      ) : (
        <div className="w-full">
          {/* Suspense 捕获子组件的挂起状态，并展示 fallback */}
          <Suspense
            fallback={
              <div className="flex flex-col items-center gap-4 py-8">
                <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-gray-500 text-sm">正在从服务器获取数据...</p>
              </div>
            }
          >
            <UserList usersPromise={usersPromise} />
          </Suspense>
          
          <button 
            onClick={() => setUsersPromise(null)}
            className="mt-6 text-sm text-blue-500 hover:text-blue-700 underline cursor-pointer w-full text-center"
          >
            重置 / 再次加载
          </button>
        </div>
      )}
    </div>
  );
}

