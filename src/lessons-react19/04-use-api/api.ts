// 模拟用户数据类型
export interface User {
  id: number
  name: string
  email: string
}

// 模拟获取用户列表的 Promise
// 为了演示 suspense，我们让它在组件外部创建（在实际应用中可能是缓存的请求或 Server Component 传递下来的 Promise）
// 但为了简单，这里我们还是定义一个函数，每次调用返回新的 Promise
export function fetchUsers(): Promise<User[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: 'Alice', email: 'alice@example.com' },
        { id: 2, name: 'Bob', email: 'bob@example.com' },
        { id: 3, name: 'Charlie', email: 'charlie@example.com' },
      ])
    }, 2000) // 延迟2秒，以便看清 Suspense 效果
  })
}
