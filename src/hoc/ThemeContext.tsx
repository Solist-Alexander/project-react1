import React, { createContext, useContext, useState } from 'react';

interface ThemeContextType {
    darkTheme: boolean;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    const [darkTheme, setDarkTheme] = useState(false);

    const toggleTheme = () => {
        setDarkTheme(prevTheme => !prevTheme);
        if (!darkTheme) {
            document.body.style.backgroundColor = "#ffefef"; // для светлой темы
        } else {
            document.body.style.backgroundColor = "#3c3c3c"; // для темной темы
        }
    };

    return (
        <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);

    return context;
};