import { Activity, useEffect, useEffectEvent, useState } from 'react'

const ROOMS = ['general', 'react-16', 'react-19']

function PreservedDraft() {
  const [draft, setDraft] = useState('')

  return (
    <label className="flex flex-col gap-2 text-sm font-medium text-gray-700 dark:text-gray-200">
      Preserved draft
      <textarea
        value={draft}
        onChange={event => setDraft(event.target.value)}
        className="min-h-24 rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
        placeholder="隐藏再显示后，内容仍保留"
      />
    </label>
  )
}

export function React192Demo() {
  const [showDraft, setShowDraft] = useState(true)
  const [roomId, setRoomId] = useState(ROOMS[0])
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [events, setEvents] = useState<string[]>([])

  const recordConnected = useEffectEvent((connectedRoom: string) => {
    const timestamp = new Date().toLocaleTimeString()
    setEvents(currentEvents => [
      `${timestamp} connected to ${connectedRoom} with ${theme} theme`,
      ...currentEvents,
    ].slice(0, 4))
  })

  useEffect(() => {
    const timerId = window.setTimeout(() => {
      recordConnected(roomId)
    }, 400)

    return () => window.clearTimeout(timerId)
  }, [roomId])

  return (
    <div className="flex w-full max-w-md flex-col items-center gap-6 rounded-2xl border border-gray-100 bg-white p-8 shadow-xl dark:border-gray-700 dark:bg-gray-800">
      <div className="w-full text-center">
        <h2 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
          React 19.2 Appendix
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Activity 与 useEffectEvent
        </p>
      </div>

      <div className="w-full rounded-xl border border-gray-200 p-4 dark:border-gray-700">
        <div className="mb-4 flex items-center justify-between gap-4">
          <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
            Activity boundary
          </span>
          <button
            onClick={() => setShowDraft(value => !value)}
            className="rounded bg-blue-600 px-3 py-1 text-sm font-medium text-white hover:bg-blue-700"
          >
            {showDraft ? '隐藏' : '显示'}
          </button>
        </div>

        <Activity mode={showDraft ? 'visible' : 'hidden'} name="preserved-draft">
          <PreservedDraft />
        </Activity>
      </div>

      <div className="w-full rounded-xl border border-gray-200 p-4 dark:border-gray-700">
        <div className="mb-4 flex flex-col gap-3">
          <label className="flex flex-col gap-2 text-sm font-medium text-gray-700 dark:text-gray-200">
            Room
            <select
              value={roomId}
              onChange={event => setRoomId(event.target.value)}
              className="rounded-lg border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            >
              {ROOMS.map(room => (
                <option key={room} value={room}>{room}</option>
              ))}
            </select>
          </label>

          <button
            onClick={() => setTheme(value => value === 'light' ? 'dark' : 'light')}
            className="rounded bg-gray-800 px-3 py-2 text-sm font-medium text-white hover:bg-gray-700"
          >
            Toggle theme snapshot: {theme}
          </button>
        </div>

        <ul className="space-y-2">
          {events.map(eventText => (
            <li
              key={eventText}
              className="rounded-lg bg-gray-50 p-3 text-sm text-gray-700 dark:bg-gray-900 dark:text-gray-200"
            >
              {eventText}
            </li>
          ))}
        </ul>

        {events.length === 0 && (
          <p className="text-sm text-gray-400">Waiting for connection event...</p>
        )}
      </div>
    </div>
  )
}
