'use client';

import React, { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

const ScreenModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check localStorage for saved mode
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
      className="w-8 h-8 flex items-center justify-center rounded-full transition-all"
    >
      {darkMode ? (
        <SunIcon className="w-6 h-6 text-yellow-400" />
      ) : (
        <MoonIcon className="w-6 h-6 text-gray-700" />
      )}
    </button>
  );
};

export default ScreenModeToggle;

// 'use client';

// import React, { useState, useEffect } from 'react';
// import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

// const ScreenModeToggle = () => {
//   const [darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }
//   }, [darkMode]);

//   return (
//     <button
//       onClick={() => setDarkMode(!darkMode)}
//       className="w-6 h-6 flex items-center justify-center rounded-full ml-4"
//     >
//       {darkMode ? (
//         <SunIcon className="w-6 h-6 text-yellow-400" />
//       ) : (
//         <MoonIcon className="w-6 h-6 text-gray-700" />
//       )}
//     </button>
//   );
// };

// export default ScreenModeToggle;
