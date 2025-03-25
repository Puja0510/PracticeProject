import React, { createContext, useState, useContext } from "react";

// Create the ThemeContext with default values
const ThemeContext = createContext({
  theme: "light", // Default theme
  setTheme: () => {}, // Default function (no-op)
});

const ThemeCheck = () => {
  const [theme, setTheme] = useState("light");

  return (
    // Provide the context value (theme and setTheme)
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Toolbar />
    </ThemeContext.Provider>
  );
};

export default ThemeCheck;

const Toolbar = () => {
  // Toolbar passes no props; it simply renders ThemedButton
  return <ThemedButton />;
};

const ThemedButton = () => {
  // Consume the context values using useContext
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      <button
        style={{
          background: theme === "light" ? "#fff" : "#333",
          color: theme === "light" ? "#000" : "#fff",
        }}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        Toggle Theme
      </button>
    </div>
  );
};
