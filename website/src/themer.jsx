import React, { createContext, useState, useContext } from 'react';
  
const ThemeContext = createContext();

export const useTheme = () => {
    return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
    const [isLight, setTheme] = useState(false);

    const toggleTheme = () => {
        setTheme((prevTheme) => (!prevTheme));
    };

    return (
        <ThemeContext.Provider value={{ isLight, toggleTheme }}>
        {children}
        </ThemeContext.Provider>
    );
};