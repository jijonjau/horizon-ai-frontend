import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full p-4 bg-white text-[#718096] text-center flex flex-col items-center space-y-2 dark:bg-gray-900 dark:text-gray-300 sm:space-y-4">
      <div className="flex flex-col items-center space-y-2 sm:items-center sm:w-full">
        <div className="text-sm sm:text-xs">
          &copy; 2023 Horizon AI. All rights reserved.
        </div>

        <div className="flex flex-wrap justify-center items-center space-x-4 sm:flex-col sm:space-x-0 sm:space-y-2">
          <a
            href="https://horizon-ui.com/pro"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg hover:bg-gray-200 sm:w-full text-sm sm:text-xs"
          >
            Home Page
          </a>

          <a
            href="https://horizon-ui.notion.site/End-User-License-Agreement-8fb09441ea8c4c08b60c37996195a6d5"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg hover:bg-gray-200 sm:w-full text-sm sm:text-xs"
          >
            License
          </a>

          <a
            href="https://horizon-ui.notion.site/Terms-Conditions-6e79229d25ed48f48a481962bc6de3ee"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg hover:bg-gray-200 sm:w-full text-sm sm:text-xs"
          >
            Terms of Use
          </a>

          <a
            href="https://horizon-ui.notion.site/Privacy-Policy-8addde50aa8e408ca5c5f5811c38f971"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg hover:bg-gray-200 sm:w-full text-sm sm:text-xs"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
