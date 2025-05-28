import React from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';
import { useTheme } from '../../context/ThemeContext';
import './theme-toggle.css';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button 
      className="theme-toggle" 
      onClick={toggleTheme}
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
    >
      {isDarkMode ? <BsSun /> : <BsMoon />}
    </button>
  );
};

export default ThemeToggle; 