import React from 'react'
import { func, string } from 'prop-types';
import { HiSun } from "react-icons/hi";
import { HiMoon } from "react-icons/hi";

const Toggle = ({theme,  toggleTheme }) => {
    return (
      <button onClick={toggleTheme} className="theme-toggle"
        aria-label={ (theme === "light") ? "Switch to dark version" : "Switch to light version"}
        title={ (theme === "light") ? "Switch to dark version" : "Switch to light version"}
      >
        { (theme === "light") ? <HiMoon className="w-8 h-8" aria-hidden="true" /> : <HiSun className="w-8 h-8" aria-hidden="true" />}
      </button>
    );
};
Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}
export default Toggle;
