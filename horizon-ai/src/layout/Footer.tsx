import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full p-4 bg-white text-[#718096] text-center flex items-center justify-between dark:bg-gray-900 dark:text-gray-300">
      <div>&copy; 2023 Horizon AI. All rights reserved.</div>

      <div className="flex items-center space-x-4">
        <a
          href="https://horizon-ui.com/pro"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg hover:bg-gray-200"
        >
          Home Page
        </a>

        <a
          href="https://horizon-ui.notion.site/End-User-License-Agreement-8fb09441ea8c4c08b60c37996195a6d5"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg hover:bg-gray-200"
        >
          License
        </a>

        <a
          href="https://horizon-ui.notion.site/Terms-Conditions-6e79229d25ed48f48a481962bc6de3ee"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg hover:bg-gray-200"
        >
          Terms of Use
        </a>

        <a
          href="https://horizon-ui.notion.site/Privacy-Policy-8addde50aa8e408ca5c5f5811c38f971"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg hover:bg-gray-200"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
