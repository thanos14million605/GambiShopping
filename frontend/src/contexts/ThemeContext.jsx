import React, { createContext, useState, useMemo } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const handleThemeToggle = () => {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  };

  const value = useMemo(() => {
    return {
      theme,
      onToggleTheme: handleThemeToggle,
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
