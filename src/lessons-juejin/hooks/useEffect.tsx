import { useEffect, useState } from 'react'

async function fetchData() {
  const data = await new Promise<number>((resolve) => {
    setTimeout(() => {
      resolve(666)
    }, 2000)
  })
  return data
}

export function App() {
  const [num, setNum] = useState(0)
  useEffect(() => {
    console.log('useEffect')
    fetchData().then((data) => {
      setNum(data)
    })
  })
  // useEffect的第二个参数:
  // 这个数组叫做依赖数组，react 是根据它有没有变来决定是否执行 effect 函数的，如果没传则每次都执行。
  return <div onClick={() => setNum(prev => prev + 1)} className="text-2xl font-bold cursor-pointer">num: {num}</div>
}

export default App
