import React, { useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <StyledThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles />
            <button onClick={toggleTheme}>Toggle Theme</button>
            {children}
        </StyledThemeProvider>
    );
};

export default ThemeProvider;