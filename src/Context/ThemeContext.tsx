import React from "react";

type ThemeContext = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

const ThemeContext = React.createContext<ThemeContext>({
  isDarkMode: true,
  toggleDarkMode: () => {},
});

export default ThemeContext;
