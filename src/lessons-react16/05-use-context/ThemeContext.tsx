import type { ReactNode } from 'react'
import { useState } from 'react'
import { ThemeContext } from './theme-context'

type Theme = 'light' | 'dark'

// 2. Create Provider Component
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light')

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
