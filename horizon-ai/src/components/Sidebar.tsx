'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ProPromotionCard from './ProPromotionCard';
import UserProfile from './UserProfile';

const Sidebar = () => {
  const [isOtherPagesDropdownOpen, setOtherPagesDropdownOpen] = useState(true);
  const [isAdminPagesDropdownOpen, setAdminPagesDropdownOpen] = useState(true);

  return (
    <aside className="w-64 bg-white p-4 shadow-lg dark:bg-gray-800 dark:text-gray-200">
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
              href="/templates"
              className="p-2 rounded-lg hover:bg-gray-300 flex items-center"
            >
              <img src="/Icons/template.png" alt="template icon" />
              <span className="ml-4 flex-1 text-[#718096]">Templates</span>
              <img
                src="/Icons/PRO-Badge.png"
                alt="pro badge icon"
                className="ml-4"
              />
            </Link>

            <div
              className="p-2 rounded-lg hover:bg-gray-300 flex items-center cursor-pointer"
              onClick={() =>
                setOtherPagesDropdownOpen(!isOtherPagesDropdownOpen)
              }
            >
              <img src="/Icons/other-pages.png" alt="other pages icon" />
              <span className="ml-4 flex-1 text-[#718096]">Other Pages</span>
              <img
                src="/Icons/PRO-Badge.png"
                alt="pro badge icon"
                className="ml-4"
              />
            </div>

            {isOtherPagesDropdownOpen && (
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

            <div
              className="p-2 rounded-lg hover:bg-gray-300 flex items-center cursor-pointer"
              onClick={() =>
                setAdminPagesDropdownOpen(!isAdminPagesDropdownOpen)
              }
            >
              <img src="/Icons/admin-pages.png" alt="admin pages icon" />
              <span className="ml-4 flex-1 text-[#718096]">Admin Pages</span>
              <img
                src="/Icons/PRO-Badge.png"
                alt="pro badge icon"
                className="ml-4"
              />
            </div>

            {isAdminPagesDropdownOpen && (
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
          </li>
        </ul>
      </nav>

      <ProPromotionCard />

      <UserProfile />
    </aside>
  );
};

export default Sidebar;
