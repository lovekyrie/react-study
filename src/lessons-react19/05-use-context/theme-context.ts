import { createContext } from 'react'

export type Theme = 'light' | 'dark' | 'system'

export interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
}

// React 19 can render this context object directly as a provider.
export const ThemeContext = createContext<ThemeContextType | null>(null)
