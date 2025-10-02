import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("Attempting to consume context outside provider");
  }

  return context;
};

export default useTheme;
