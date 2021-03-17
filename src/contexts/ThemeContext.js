import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProviderContext = ({ children }) => {
  const [thema, setThema] = useState(false);

  return (
    <ThemeContext.Provider value={{ thema, setThema }}>
      {children}
    </ThemeContext.Provider>
  );
};
