import React, { createContext, useContext, useState, useEffect } from 'react';

interface ThemeContextType {
    darkTheme: boolean;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    const [darkTheme, setDarkTheme] = useState<boolean>(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? JSON.parse(savedTheme) : false;
    });

    const toggleTheme = () => {
        setDarkTheme(prevTheme => {
            const newTheme = !prevTheme;
            localStorage.setItem('theme', JSON.stringify(newTheme));
            return newTheme;
        });
    };

    useEffect(() => {
        document.body.style.backgroundColor = darkTheme ? "#ffefef" : "#3c3c3c";
    }, [darkTheme]);

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