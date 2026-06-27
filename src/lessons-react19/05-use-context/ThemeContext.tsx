import { useState, type ReactNode } from 'react';
import { ThemeContext } from './theme-context';

type Theme = 'light' | 'dark' | 'system';

// Provider 组件
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('system');

  return (
    <ThemeContext value={{ theme, setTheme }}>
      {children}
    </ThemeContext>
  );
}
