import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext';

interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    const toggleTheme = () => {
        setTheme?.(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };
    document.body.className = newTheme;
    return { theme: theme || Theme.LIGHT, toggleTheme };
}
