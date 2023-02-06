import { useState, useEffect } from "react";

const useThemeHook = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const checkColorScheme = () => {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        setTheme("dark");
      }
    };

    checkColorScheme();

    const changeThemeHandler = (evt: MediaQueryListEvent) => {
      const newColorScheme = evt.matches ? "dark" : "light";
      setTheme(newColorScheme);
    };

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", changeThemeHandler);
    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", changeThemeHandler);
    };
  }, []);

  return { theme, setTheme };
};

export default useThemeHook;
