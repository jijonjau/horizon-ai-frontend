import React from 'react';

const Footer = () => {
  return (
    <footer className="bottom-0 w-full p-4 bg-white text-[#718096] text-center justify-between flex flex-col sm:flex-row sm:items-center dark:bg-gray-900 dark:text-gray-300">
      <div className="text-sm sm:text-xs">
        &copy; 2023 Horizon AI. All rights reserved.
      </div>

      <div className="flex flex-wrap justify-center items-center sm:flex-row sm:ml-4">
        <a
          href="https://horizon-ui.com/pro"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 focus:underline hover:underline text-sm sm:text-xs"
        >
          Home Page
        </a>

        <a
          href="https://horizon-ui.notion.site/End-User-License-Agreement-8fb09441ea8c4c08b60c37996195a6d5"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 focus:underline hover:underline text-sm sm:text-xs"
        >
          License
        </a>

        <a
          href="https://horizon-ui.notion.site/Terms-Conditions-6e79229d25ed48f48a481962bc6de3ee"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 focus:underline hover:underline text-sm sm:text-xs"
        >
          Terms of Use
        </a>

        <a
          href="https://horizon-ui.notion.site/Privacy-Policy-8addde50aa8e408ca5c5f5811c38f971"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 focus:underline hover:underline text-sm sm:text-xs"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
