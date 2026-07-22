import { useEffect, useState } from 'react'

interface User {
  id: number
  name: string
}

// Mock API fetch function
async function fetchUsers() {
  await new Promise(resolve => setTimeout(resolve, 1000))
  return [
    { id: 1, name: 'Alice (React 16)' },
    { id: 2, name: 'Bob (React 16)' },
  ]
}

export default function UserList() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let isMounted = true

    const loadData = async () => {
      try {
        const data = await fetchUsers()
        if (isMounted) {
          setUsers(data)
          setLoading(false)
        }
      }
      catch (error) {
        console.error(error)
        if (isMounted)
          setLoading(false)
      }
    }

    loadData()

    return () => {
      isMounted = false
    }
  }, []) // Empty dependency array = run once on mount

  if (loading)
    return <div>Loading users...</div>

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">User List (useEffect)</h2>
      <ul className="list-disc pl-5">
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}
