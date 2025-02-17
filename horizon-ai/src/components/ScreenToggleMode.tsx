'use client';

import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ScreenModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedMode);

    if (savedMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode.toString());

    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="w-5 h-5 flex items-center justify-center rounded-full transition-all ml-4 lg:ml-6 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-10 xl:h-10"
    >
      {darkMode ? (
        <FaSun className="w-4 h-4 text-yellow-400 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-6 xl:h-6" />
      ) : (
        <FaMoon className="w-4 h-4 text-gray-700 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-6 xl:h-6" />
      )}
    </button>
  );
};

export default ScreenModeToggle;
