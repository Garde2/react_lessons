import React, { useContext } from "react";
import { ThemeContextLightDark } from "../contexts/cont_task";

const Header = () => {
  const { toggleTheme } = useContext(ThemeContextLightDark);

  return (
    <header className="header">
      <h1>light/dark</h1>
      <button onClick={toggleTheme}>Сменить тему</button>
    </header>
  );
};

export default Header;
