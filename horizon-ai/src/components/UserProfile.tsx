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
    <div className="flex items-center justify-between p-3 mt-4 bg-white rounded-xl dark:bg-gray-800 dark:text-gray-200">
      {isLoggedIn ? (
        <div className="flex items-center justify-between">
          <Image
            src="/Icons/user-avatar.png"
            alt="User Avatar"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="ml-3 font-medium text-gray-800 dark:text-gray-200">
            {`${userName} Parkison`}
          </span>
          <button
            onClick={() => setIsLoggedIn(false)}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-300 transition dark:bg-gray-700 dark:hover:bg-gray-600 ml-3"
          >
            <HiOutlineLogout className="w-5 h-5 text-gray-700 dark:text-gray-300" />
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
            className="bg-white dark:bg-[#1a1c23] p-6 rounded-lg shadow-lg border border-gray-300 dark:border-gray-700 w-[450px]"
          >
            <h2 className="text-xl font-semibold text-[#1b2559] dark:text-gray-200 mb-4 text-center">
              Sign in to horizonAI.com with Google
            </h2>
            <div className="flex items-center mb-4">
              <img
                src="/Icons/user-avatar.png"
                alt="Profile"
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <p className="text-lg text-[#1b2559] dark:text-gray-200 font-medium">
                  {userName}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {userEmail}
                </p>
              </div>
            </div>
            <button
              onClick={() => {
                setIsLoggedIn(true);
                setIsLoginModalOpen(false);
              }}
              className="w-full p-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition"
            >
              Continue as {userName}
            </button>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-4 text-center">
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
