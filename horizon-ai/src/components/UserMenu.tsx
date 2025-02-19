'use client';

import { useEffect, useRef } from 'react';

const UserMenu: React.FC<{
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  userName: string;
  userEmail: string;
  isLoginModalOpen: boolean;
  setIsLoginModalOpen: (isLoggedIn: boolean) => void;
  isOpen: boolean;
  setIsOpen: (isLoggedIn: boolean) => void;
}> = ({
  isLoggedIn,
  setIsLoggedIn,
  userName,
  userEmail,
  isLoginModalOpen,
  setIsLoginModalOpen,
  isOpen,
  setIsOpen,
}) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !(modalRef.current as Node).contains(event.target as Node)
      ) {
        setIsOpen(false);
        setIsLoginModalOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative">
      {isLoggedIn ? (
        <img
          src="/Icons/user-avatar.png"
          alt="User Avatar"
          className="w-6 h-6 ml-4 cursor-pointer rounded-full"
          onClick={() => setIsOpen(true)}
        />
      ) : (
        <button
          onClick={() => setIsLoginModalOpen(true)}
          className="ml-4 px-2 py-1 bg-[#4A25E1] text-white rounded-lg text-sm"
        >
          Login
        </button>
      )}

      {isOpen && isLoggedIn && (
        <div
          ref={modalRef}
          className="absolute top-12 right-0 w-44 bg-white dark:bg-[#1a1c23] shadow-lg rounded-xl p-2 border border-gray-300 dark:border-gray-700 z-50"
        >
          <div className="pb-1 border-b border-gray-200 dark:border-gray-600">
            <h3 className="font-semibold text-[#1b2559] dark:text-gray-200 text-sm">
              Hello, {userName} 👋
            </h3>
          </div>

          <div className="mt-2 space-y-1">
            <a
              href="/profile-settings"
              className="block p-1 text-[#1b2559] dark:text-gray-200 font-medium hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition"
            >
              Profile Settings
            </a>
            <a
              href="/newsletter-settings"
              className="block p-1 text-[#1b2559] dark:text-gray-200 font-medium hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition"
            >
              Newsletter Settings
            </a>
            <button
              onClick={() => {
                setIsLoggedIn(false);
                setIsOpen(false);
                window.location.reload();
              }}
              className="block w-full text-left p-1 text-red-600 dark:text-red-400 font-medium hover:bg-red-100 dark:hover:bg-red-700 rounded-lg transition text-sm"
            >
              Log out
            </button>
          </div>
        </div>
      )}
      {isLoginModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-2 sm:p-0">
          <div
            ref={modalRef}
            className="bg-white dark:bg-[#1a1c23] p-3 sm:p-4 md:p-6 rounded-lg shadow-lg border border-gray-300 dark:border-gray-700 
                 w-full max-w-[350px] sm:max-w-[400px] md:max-w-[450px]"
          >
            <div className="flex items-start mb-2 sm:mb-3">
              <img
                src="/Icons/google.png"
                alt="Google Icon"
                className="w-5 sm:w-6 h-5 sm:h-6 mr-2 sm:mr-3"
              />
              <h2 className="text-lg sm:text-xl text-[#1b2559] dark:text-gray-200">
                Sign in to horizonAI.com with Google
              </h2>
            </div>

            <div className="border-t border-b border-gray-300 dark:border-gray-700 my-2 sm:my-3"></div>

            <div className="flex items-center mb-3 sm:mb-4">
              <img
                src="/Icons/user-avatar.png"
                alt="Profile"
                className="w-8 sm:w-10 h-8 sm:h-10 rounded-full mr-2 sm:mr-3"
              />
              <div>
                <p className="text-sm sm:text-lg text-[#1b2559] dark:text-gray-200 font-medium">
                  {userName}
                </p>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  {userEmail}
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                setIsLoggedIn(true);
                setIsLoginModalOpen(false);
              }}
              className="w-full p-1.5 sm:p-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 
                   dark:bg-blue-500 dark:hover:bg-blue-600 transition text-sm sm:text-base"
            >
              Continue as {userName}
            </button>

            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-2 sm:mt-4 text-center">
              To continue, google.com will share your name, email address, and
              profile picture with this site. See this site's{' '}
              <a
                href="https://horizon-ui.notion.site/Privacy-Policy-8addde50aa8e408ca5c5f5811c38f971"
                className="text-blue-500 hover:underline"
              >
                privacy policy
              </a>{' '}
              and{' '}
              <a
                href="https://horizon-ui.notion.site/Terms-Conditions-6e79229d25ed48f48a481962bc6de3ee"
                className="text-blue-500 hover:underline"
              >
                terms of service
              </a>
              .
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
