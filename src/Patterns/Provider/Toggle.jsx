import React, { useContext } from "react";
import { ThemeContext } from "./Index";

export default function Toggle() {
  const theme = useContext(ThemeContext);

  return (
    <label>
      <input type="checkbox" onClick={theme ? theme.toggleTheme : null} />
      <span />
    </label>
  );
}
