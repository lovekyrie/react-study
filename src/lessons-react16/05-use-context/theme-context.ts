import { createContext } from 'react'

type Theme = 'light' | 'dark'

export interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

// 1. Create Context
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)
