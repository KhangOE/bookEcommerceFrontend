import React, { useState, useContext } from "react";

const DarkThemeContext = React.createContext();

export function useTheme() {
  return useContext(DarkThemeContext);
}

export function ThemeContext2({ children }) {
  const [dark, setDark] = useState([]);

  const handleToggleDark = () => {
    setDark((prev) => [...prev, { d: 12, sl: 2 }]);
  };

  return (
    <DarkThemeContext.Provider value={{ dark, toggleDark: handleToggleDark }}>
      {children}
    </DarkThemeContext.Provider>
  );
}
