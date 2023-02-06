import { createContext } from "react";

import useThemeHook from "../../hooks/useThemeHook";

export const ThemeContext = createContext<ReturnType<typeof useThemeHook>>({
  theme: "light",
  setTheme: () => "",
});

const ThemeContextProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const { theme, setTheme } = useThemeHook();
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
