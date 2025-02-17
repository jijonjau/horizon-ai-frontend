'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ProPromotionCard from './ProPromotionCard';
import UserProfile from './UserProfile';

const Sidebar = () => {
  const [isOtherPagesDropdownOpen, setOtherPagesDropdownOpen] = useState(true);
  const [isAdminPagesDropdownOpen, setAdminPagesDropdownOpen] = useState(true);
  const [isProUser, setIsProUser] = useState(true);

  return (
    <aside className="w-64 bg-white p-4 shadow-lg dark:bg-gray-800 dark:text-gray-200 h-fit">
      <h2 className="text-xl font-semibold text-[#1b2559] dark:text-white">
        HORIZON <span className="font-normal">AI FREE</span>
      </h2>
      <hr className="border-t border-gray-200 my-7 w-full" />
      <nav className="mt-4">
        <ul>
          <li>
            <Link
              href="/chat"
              className="p-2 rounded-lg hover:bg-gray-400 flex items-center mb-4"
            >
              <img src="/Icons/auto-awesome.png" alt="awesome icon" />
              <span className="text-[#1b2559] dark:text-white ml-4">
                Chat UI
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="p-2 rounded-lg hover:bg-gray-300 flex items-center"
            >
              <img src="/Icons/projects.png" alt="project icon" />
              <span className="ml-4 flex-1 text-[#718096]">My Projects</span>
              <img
                src="/Icons/PRO-Badge.png"
                alt="pro badge icon"
                className="ml-4"
              />
            </Link>

            <Link
              href={isProUser ? '#' : '/templates'}
              onClick={(e) => {
                if (isProUser) e.preventDefault();
              }}
              className={`p-2 rounded-lg flex items-center transition ${
                isProUser
                  ? 'cursor-not-allowed'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <img
                src="/Icons/template.png"
                alt="template icon"
                className="w-5 h-5"
              />
              <span className="ml-4 flex-1 text-[#718096]">Templates</span>
              {isProUser && (
                <img
                  src="/Icons/PRO-Badge.png"
                  alt="pro badge icon"
                  className="ml-4"
                />
              )}
            </Link>

            <div
              className={`p-2 rounded-lg flex items-center transition ${
                isProUser
                  ? 'cursor-not-allowed'
                  : 'hover:bg-gray-300 cursor-pointer'
              }`}
              onClick={(e) => {
                if (isProUser) e.preventDefault();
                else setOtherPagesDropdownOpen(!isOtherPagesDropdownOpen);
              }}
            >
              <img src="/Icons/other-pages.png" alt="other pages icon" />
              <span className="ml-4 flex-1 text-[#718096]">Other Pages</span>
              {isProUser && (
                <img
                  src="/Icons/PRO-Badge.png"
                  alt="pro badge icon"
                  className="ml-4"
                />
              )}
            </div>

            {isOtherPagesDropdownOpen && !isProUser && (
              <div className="ml-8 flex flex-col text-[#718096]">
                <Link
                  href="/prompt"
                  className="p-2 rounded-lg hover:bg-gray-300 flex items-center"
                >
                  <span>Prompt Page</span>
                </Link>
                <Link
                  href="/register"
                  className="p-2 rounded-lg hover:bg-gray-300 flex items-center"
                >
                  <span>Register</span>
                </Link>
                <Link
                  href="/login"
                  className="p-2 rounded-lg hover:bg-gray-300 flex items-center"
                >
                  <span>Sign in</span>
                </Link>
              </div>
            )}

            {isOtherPagesDropdownOpen && isProUser && (
              <div className="ml-8 flex flex-col text-[#718096]">
                <div className="p-2 rounded-lg cursor-not-allowed flex items-center">
                  <span>Prompt Page</span>
                </div>
                <div className="p-2 rounded-lg cursor-not-allowed flex items-center">
                  <span>Register</span>
                </div>
                <div className="p-2 rounded-lg cursor-not-allowed flex items-center">
                  <span>Sign in</span>
                </div>
              </div>
            )}

            <div
              className={`p-2 rounded-lg flex items-center transition ${
                isProUser
                  ? 'cursor-not-allowed'
                  : 'hover:bg-gray-300 cursor-pointer'
              }`}
              onClick={(e) => {
                if (isProUser) e.preventDefault();
                else setAdminPagesDropdownOpen(!isAdminPagesDropdownOpen);
              }}
            >
              <img src="/Icons/admin-pages.png" alt="admin pages icon" />
              <span className="ml-4 flex-1 text-[#718096]">Admin Pages</span>
              {isProUser && (
                <img
                  src="/Icons/PRO-Badge.png"
                  alt="pro badge icon"
                  className="ml-4"
                />
              )}
            </div>

            {isAdminPagesDropdownOpen && !isProUser && (
              <div className="ml-8 flex flex-col text-[#718096]">
                <Link
                  href="/allTemplates"
                  className="p-2 rounded-lg hover:bg-gray-300 flex items-center"
                >
                  <span>All Templates</span>
                </Link>
                <Link
                  href="/newTemplate"
                  className="p-2 rounded-lg hover:bg-gray-300 flex items-center"
                >
                  <span>New Template</span>
                </Link>
                <Link
                  href="/editTemplate"
                  className="p-2 rounded-lg hover:bg-gray-300 flex items-center"
                >
                  <span>Edit Template</span>
                </Link>
                <Link
                  href="/usersOverview"
                  className="p-2 rounded-lg hover:bg-gray-300 flex items-center"
                >
                  <span>Users Overview</span>
                </Link>
              </div>
            )}

            {isAdminPagesDropdownOpen && isProUser && (
              <div className="ml-8 flex flex-col text-[#718096]">
                <div className="p-2 rounded-lg cursor-not-allowed flex items-center">
                  <span>All Templates</span>
                </div>
                <div className="p-2 rounded-lg cursor-not-allowed flex items-center">
                  <span>New Template</span>
                </div>
                <div className="p-2 rounded-lg cursor-not-allowed flex items-center">
                  <span>Edit Template</span>
                </div>
                <div className="p-2 rounded-lg cursor-not-allowed flex items-center">
                  <span>Users Overview</span>
                </div>
              </div>
            )}
          </li>
        </ul>
      </nav>

      <ProPromotionCard />

      <UserProfile />
    </aside>
  );
};

export default Sidebar;
