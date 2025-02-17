'use client';

import React, { useState, useRef, useEffect } from 'react';

const InformationMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      //+
      if (
        modalRef.current &&
        !(modalRef.current as Node).contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative">
      <img
        src="/Icons/info-outline.png"
        alt="info icon"
        className="w-6 h-6 ml-4 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      />

      {isOpen && (
        <div
          ref={modalRef}
          className="absolute right-0 mt-2 w-60 sm:w-72 md:w-80 lg:w-96 bg-white dark:bg-[#1a1c23] shadow-lg rounded-xl p-2 border border-gray-300 dark:border-gray-700"
        >
          <a
            href="https://horizon-ui.com/ai-template/"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-3 text-[#1b2559] dark:text-gray-200 text-sm sm:text-base font-medium rounded-lg border-[2px] border-transparent hover:border-[#4A25E1] hover:bg-gradient-to-r from-[#4A25E1] to-[#7B5AFF] hover:text-white dark:hover:text-white transition duration-300"
          >
            Buy Horizon AI Template
          </a>

          <div className="border-t border-gray-200 dark:border-gray-600 my-2"></div>

          <a
            href="https://horizon-ui.com/docs-ai-template/docs/introduction"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-3 text-[#1b2559] dark:text-gray-200 text-sm sm:text-base font-medium rounded-lg border-[2px] border-transparent hover:border-[#4A25E1] hover:bg-gradient-to-r from-[#4A25E1] to-[#7B5AFF] hover:text-white dark:hover:text-white transition duration-300"
          >
            See Documentation
          </a>

          <div className="border-t border-gray-200 dark:border-gray-600 my-2"></div>

          <a
            href="https://github.com/horizon-ui/chatgpt-ai-template"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-3 text-[#1b2559] dark:text-gray-200 text-sm sm:text-base font-medium rounded-lg border-[2px] border-transparent hover:border-[#4A25E1] hover:bg-gradient-to-r from-[#4A25E1] to-[#7B5AFF] hover:text-white dark:hover:text-white transition duration-300"
          >
            Try Free Version
          </a>
        </div>
      )}
    </div>
  );
};

export default InformationMenu;
