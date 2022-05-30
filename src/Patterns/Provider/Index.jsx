import React, { useState } from "react";
import Toggle from "./Toggle";
import List from "./List";

/**
 *  A Provider is a higher order component provided to us by the "Context" object.
 *  higher order components: a higher-order component transforms a component into another component.
 *      -> basically, a HOC component receives a component in children or props, and transforms it into another component.
 *
 */
export const ThemeContext = React.createContext();

const themes = {
  light: { background: "#fff", color: "#000" },
  dark: { background: "#171717", color: "#fff" },
};

export default function Index() {
  const [theme, setTheme] = useState("dark");

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  const providerValue = { theme: themes[theme], toggleTheme };

  return (
    <div style={{ ...themes[theme] }}>
      <ThemeContext.Provider value={providerValue}>
        <Toggle />
        <List />
      </ThemeContext.Provider>
    </div>
  );
}
