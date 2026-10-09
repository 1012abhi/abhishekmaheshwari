
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "system";
  });

useEffect(() => {
  const root = document.documentElement;
  const mediaQuery = window.matchMedia(
    "(prefers-color-scheme: dark)"
  );

  const applyTheme = () => {
    const isDark =
      theme === "dark" ||
      (theme === "system" && mediaQuery.matches);

    root.classList.toggle("dark", isDark);
  };

  applyTheme();
  localStorage.setItem("theme", theme);

  if (theme === "system") {
    mediaQuery.addEventListener("change", applyTheme);

    return () => {
      mediaQuery.removeEventListener("change", applyTheme);
    };
  }
}, [theme]);
const toggleTheme = () => {
  setTheme((prev) => {
    const currentIsDark =
      prev === "dark" ||
      (prev === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    return currentIsDark ? "light" : "dark";
  });
};

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};