import { useState, useTransition } from 'react'

interface SearchResult {
  id: number
  name: string
  role: string
}

const USERS: SearchResult[] = [
  { id: 1, name: 'Ada Lovelace', role: 'Compiler pioneer' },
  { id: 2, name: 'Grace Hopper', role: 'Programming languages' },
  { id: 3, name: 'Dan Abramov', role: 'React education' },
  { id: 4, name: 'Sophie Alpert', role: 'React architecture' },
  { id: 5, name: 'Andrew Clark', role: 'React reconciler' },
]

async function searchUsers(query: string) {
  await new Promise(resolve => setTimeout(resolve, 700))

  const normalizedQuery = query.trim().toLowerCase()
  if (!normalizedQuery)
    return USERS

  return USERS.filter((user) => {
    const searchableText = `${user.name} ${user.role}`.toLowerCase()
    return searchableText.includes(normalizedQuery)
  })
}

export function AsyncSearchDemo() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>(USERS)
  const [lastQuery, setLastQuery] = useState('all')
  const [isPending, startTransition] = useTransition()

  const handleSearch = (value: string) => {
    setQuery(value)

    startTransition(async () => {
      const nextResults = await searchUsers(value)
      setResults(nextResults)
      setLastQuery(value.trim() || 'all')
    })
  }

  return (
    <div className="flex w-full max-w-md flex-col items-center gap-6 rounded-2xl border border-gray-100 bg-white p-8 shadow-xl dark:border-gray-700 dark:bg-gray-800">
      <div className="w-full text-center">
        <h2 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
          Lesson 7: Async Transitions
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          使用 useTransition 管理异步非紧急更新
        </p>
      </div>

      <label className="flex w-full flex-col gap-2 text-sm font-medium text-gray-700 dark:text-gray-200">
        Search people
        <input
          value={query}
          onChange={event => handleSearch(event.target.value)}
          className="rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          placeholder="React, compiler, Grace..."
        />
      </label>

      <div className="w-full rounded-xl border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
            Results for {lastQuery}
          </span>
          {isPending && (
            <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700">
              pending
            </span>
          )}
        </div>

        <ul className="space-y-2">
          {results.map(result => (
            <li
              key={result.id}
              className="rounded-lg border border-gray-200 bg-white p-3 dark:border-gray-700 dark:bg-gray-800"
            >
              <p className="font-medium text-gray-900 dark:text-white">{result.name}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{result.role}</p>
            </li>
          ))}
        </ul>

        {results.length === 0 && (
          <p className="py-6 text-center text-sm text-gray-400">No matching people</p>
        )}
      </div>
    </div>
  )
}
