import { createContext, useState } from 'react';

const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

const useMode = () => {
  const [mode, setMode] = useState('dark');

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return [mode, toggleColorMode];
};

export { ColorModeContext, useMode };