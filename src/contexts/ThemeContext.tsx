import { createContext, useContext} from 'react';
import type { ReactNode } from 'react';

type ThemeContextType = boolean;

const ThemeContext = createContext<ThemeContextType>(false);

interface ThemeProviderProps {
  children: ReactNode;
  dark: boolean;
}

export const ThemeProvider = ({ children, dark }: ThemeProviderProps) => {
  return (
    <ThemeContext.Provider value={dark}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);