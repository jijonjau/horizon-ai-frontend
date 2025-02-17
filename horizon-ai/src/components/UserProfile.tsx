'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { HiOutlineLogout } from 'react-icons/hi';

const UserProfile: React.FC<{
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  userName: string;
  userEmail: string;
  isLoginModalOpen: boolean;
  setIsLoginModalOpen: (isLoggedIn: boolean) => void;
}> = ({
  isLoggedIn,
  setIsLoggedIn,
  userName,
  userEmail,
  isLoginModalOpen,
  setIsLoginModalOpen,
}) => {
  const modalRef = useRef(null);
  return (
    <div className="flex items-center justify-between p-2 mt-4 bg-white rounded-xl dark:bg-gray-800 dark:text-gray-200 w-full sm:w-[300px]">
      {isLoggedIn ? (
        <div className="flex items-center justify-between">
          <Image
            src="/Icons/user-avatar.png"
            alt="User Avatar"
            width={24}
            height={24}
            className="rounded-full"
          />
          <span className="ml-2 text-sm font-medium text-gray-800 dark:text-gray-200">
            {`${userName} Parkison`}
          </span>
          <button
            onClick={() => setIsLoggedIn(false)}
            className="p-1 rounded-full bg-gray-100 hover:bg-gray-300 transition dark:bg-gray-700 dark:hover:bg-gray-600 ml-2"
          >
            <HiOutlineLogout className="w-4 h-4 text-gray-700 dark:text-gray-300" />
          </button>
        </div>
      ) : (
        <button
          onClick={() => setIsLoginModalOpen(true)}
          className="ml-4 px-4 py-2 bg-[#4A25E1] text-white rounded-lg w-48"
        >
          Login
        </button>
      )}

      {isLoginModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div
            ref={modalRef}
            className="bg-white dark:bg-[#1a1c23] p-4 rounded-lg shadow-lg border border-gray-300 dark:border-gray-700 w-full max-w-sm sm:w-[300px]"
          >
            <div className="flex flex-row sm:flex-row items-start mb-1 border-gray-300 dark:border-gray-700">
              <img
                src="/Icons/google.png"
                alt="Google Icon"
                className="w-4 h-4 mr-2"
              />
              <h2 className="text-sm text-[#1b2559] dark:text-gray-200">
                Sign in to horizonAI.com with Google
              </h2>
            </div>
            <div className="border-t border-b border-gray-300 dark:border-gray-700 my-1"></div>
            <div className="flex items-center mb-2">
              <img
                src="/Icons/user-avatar.png"
                alt="Profile"
                className="w-8 h-8 rounded-full mr-2"
              />
              <div>
                <p className="text-sm text-[#1b2559] dark:text-gray-200 font-medium">
                  {userName}
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {userEmail}
                </p>
              </div>
            </div>
            <button
              onClick={() => {
                setIsLoggedIn(true);
                setIsLoginModalOpen(false);
              }}
              className="w-full p-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition text-sm"
            >
              Continue as {userName}
            </button>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 text-center">
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

export default UserProfile;
