import ScreenModeToggle from '@/components/ScreenToggleMode';
import React from 'react';
const Header = () => {
  return (
    <header className="w-full p-4 flex justify-between bg-white shadow-sm dark:bg-gray-900 dark:shadow-lg dark:text-white">
      <h1 className="text-lg font-semibold text-[#1b2559] dark:text-white">
        Chat UI
      </h1>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search"
          className="border p-2 rounded-full pl-10 bg-white dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700"
        />

        <img
          src="/Icons/notifications.png"
          alt="notifications icon"
          className="w-6 h-6 ml-4"
        />
        <ScreenModeToggle />
        <img
          src="/Icons/info-outline.png"
          alt="info icon"
          className="w-6 h-6 ml-4"
        />
        <img
          src="/Icons/user-avatar.png"
          alt="User Avatar"
          className="w-8 h-8 ml-4"
        />
      </div>
    </header>
  );
};

export default Header;
