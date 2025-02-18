import React from 'react';
import InformationMenu from '@/components/Information';
import ScreenModeToggle from '@/components/ScreenToggleMode';
import Notifications from '@/components/Notifications';
import UserMenu from '@/components/UserMenu';
import { HiMenu } from 'react-icons/hi';

const Header: React.FC<{
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  userName: string;
  userEmail: string;
  isLoginModalOpen: boolean;
  setIsLoginModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isSidebarCollapsed: boolean;
  setIsSidebarCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({
  isLoggedIn,
  setIsLoggedIn,
  userName,
  userEmail,
  isLoginModalOpen,
  setIsLoginModalOpen,
  isOpen,
  setIsOpen,
  isSidebarCollapsed,
  setIsSidebarCollapsed,
}) => {
  return (
    <header className="w-screen p-4 flex items-center bg-white shadow-sm dark:bg-gray-900 dark:shadow-lg dark:text-white">
      <div className="flex items-center space-x-2 ml-4">
        <button
          className="lg:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 dark:focus:ring-offset-gray-900"
          onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        >
          <HiMenu className="h-5 w-5 text-gray-700 dark:text-white" />
        </button>
        <h1 className="text-base lg:text-lg font-semibold text-[#1b2559] dark:text-white">
          Chat UI
        </h1>
      </div>

      <div className="flex-1 flex justify-center px-4">
        <input
          type="text"
          placeholder="Search"
          className="border p-2 rounded-full pl-10 bg-white dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 outline-none focus:ring-0 focus:border-transparent text-[#1b2559] w-full max-w-xs sm:max-w-sm"
        />
      </div>

      <div className="flex items-center space-x-3 sm:space-x-4">
        <Notifications notifications={[]} />
        <ScreenModeToggle />
        <InformationMenu />
        <UserMenu
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          isLoginModalOpen={isLoginModalOpen}
          setIsLoginModalOpen={setIsLoginModalOpen}
          userName={userName}
          userEmail={userEmail}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </div>
    </header>
  );
};

export default Header;
