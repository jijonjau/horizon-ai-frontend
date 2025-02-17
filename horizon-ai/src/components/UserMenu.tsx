import { useEffect, useRef, useState } from 'react';

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userName, setUserName] = useState('Adela');
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
          className="w-8 h-8 ml-4 cursor-pointer rounded-full border-2 border-gray-300 dark:border-gray-600 hover:border-[#4A25E1] transition"
          onClick={() => setIsOpen(!isOpen)}
        />
      ) : (
        <button
          onClick={() => setIsLoginModalOpen(true)}
          className="ml-4 px-4 py-2 bg-[#4A25E1] text-white rounded-lg hover:bg-[#6B4FFF] transition dark:bg-[#6B4FFF] dark:hover:bg-[#4A25E1]"
        >
          Login
        </button>
      )}

      {isOpen && isLoggedIn && (
        <div
          ref={modalRef}
          className="absolute top-12 right-0 w-56 bg-white dark:bg-[#1a1c23] shadow-lg rounded-xl p-3 border border-gray-300 dark:border-gray-700 z-50"
        >
          <div className="pb-2 border-b border-gray-200 dark:border-gray-600">
            <h3 className="font-semibold text-[#1b2559] dark:text-gray-200">
              Hello, {userName} 👋
            </h3>
          </div>

          <div className="mt-2 space-y-2">
            <a
              href="/profile-settings"
              className="block p-2 text-[#1b2559] dark:text-gray-200 font-medium hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition"
            >
              Profile Settings
            </a>
            <a
              href="/newsletter-settings"
              className="block p-2 text-[#1b2559] dark:text-gray-200 font-medium hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition"
            >
              Newsletter Settings
            </a>
            <button
              onClick={() => {
                setIsLoggedIn(false);
                setIsOpen(false);
              }}
              className="block w-full text-left p-2 text-red-600 dark:text-red-400 font-medium hover:bg-red-100 dark:hover:bg-red-700 rounded-lg transition"
            >
              Log out
            </button>
          </div>
        </div>
      )}

      {isLoginModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div
            ref={modalRef}
            className="bg-white dark:bg-[#1a1c23] p-6 rounded-lg shadow-lg border border-gray-300 dark:border-gray-700 w-80"
          >
            <h2 className="text-xl font-semibold text-[#1b2559] dark:text-gray-200 mb-4 text-center">
              Login Options
            </h2>
            <button
              onClick={() => {
                setIsLoggedIn(true);
                setIsLoginModalOpen(false);
              }}
              className="w-full p-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition"
            >
              Login with Google
            </button>
            <button
              onClick={() => {
                setIsLoggedIn(true);
                setIsLoginModalOpen(false);
              }}
              className="w-full mt-2 p-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            >
              Continue as {userName} via Google
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
