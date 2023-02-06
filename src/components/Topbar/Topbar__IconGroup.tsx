import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

import { BiMoon } from "react-icons/bi";
import { BiBell } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import { BsGear } from "react-icons/bs";
import { BsSun } from "react-icons/bs";

const TopbarIconGroup = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  function changeColorSchemeClick(evt: React.MouseEvent) {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  }

  const btns = {
    "theme-icon": {
      "moon-icon": <BiMoon />,
      "sun-icon": <BsSun />,
    },
    "bell-icon": <BiBell />,
    "user-icon": <BiUser />,
    "gear-icon": <BsGear />,
  };

  const btnClasses = `text-xl p-2 transition-colors hover:text-slate-400 rounded-sm outline-none ${
    theme === "dark"
      ? "text-slate-100 focus-visible:outline-slate-500"
      : "text-slate-700 focus-visible:outline-slate-500"
  }`;

  const icons = Object.keys(btns) as Array<keyof typeof btns>;

  return (
    <ul className="flex">
      {icons.map((icon) => {
        return (
          <li key={icon}>
            {icon === "theme-icon" ? (
              <button className={btnClasses} onClick={changeColorSchemeClick}>
                {theme === "dark"
                  ? btns[icon]["moon-icon"]
                  : btns[icon]["sun-icon"]}
              </button>
            ) : (
              <button className={btnClasses}>{btns[icon]}</button>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default TopbarIconGroup;
