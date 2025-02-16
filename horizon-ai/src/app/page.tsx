'use client';

import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../layout/Header';
import APIKeyForm from '../components/APIKeyForm';
import Footer from '@/layout/Footer';

export default function Chat() {
  const [selectedModel, setSelectedModel] = useState('gpt-3.5');
  return (
    <div className="flex bg-white dark:bg-gray-900 dark:text-white p-6 rounded-lg shadow-md">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <div className="flex flex-col items-center flex-1 ">
          <div className="flex items-center bg-white p-1 mb-3 mt-4 dark:bg-gray-800 dark:text-gray-200">
            <button
              onClick={() => setSelectedModel('gpt-3.5')}
              className={`flex items-center gap-3 px-6 py-2 rounded-lg text-sm transition-all text-[#1b2559] font-semibold mr-1 
    ${selectedModel === 'gpt-3.5' ? 'scale-110 brightness-125 shadow-md' : 'opacity-100'} 
    hover:scale-110 hover:brightness-125 hover:shadow-md dark:text-gray-200 dark:hover:text-white`}
              style={{ lineHeight: '1' }}
            >
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-b from-[#FBFBFF] to-[#CACAFF] border border-[#CACAFF] dark:from-gray-700 dark:to-gray-900 dark:border-gray-600">
                <img
                  src="/Icons/auto-awesome.png"
                  alt="gpt-3.5 icon"
                  className="w-4 h-4 object-contain"
                />
              </div>
              <span className="whitespace-nowrap">GPT-3.5</span>
            </button>

            <button
              onClick={() => setSelectedModel('gpt-4')}
              className={`flex items-center gap-3 px-6 py-2 rounded-lg text-sm transition-all text-[#1b2559] font-semibold mr-1 
    ${selectedModel === 'gpt-4' ? 'scale-110 brightness-125 shadow-md' : 'opacity-100'} 
    hover:scale-110 hover:brightness-125 hover:shadow-md dark:text-gray-200 dark:hover:text-white`}
              style={{ lineHeight: '1' }}
            >
              <div className="w-8 h-8 flex items-center justify-center rounded-full border border-[#CACAFF] bg-gradient-to-b from-[#FBFBFF] to-[#CACAFF] dark:from-gray-700 dark:to-gray-900 dark:border-gray-600">
                <img
                  src="/Icons/gpt-4.png"
                  alt="gpt-4 icon"
                  className="w-4 h-4 object-contain"
                />
              </div>
              <span className="whitespace-nowrap">GPT-4</span>
            </button>
          </div>

          <p className="flex items-center text-sm text-[#718096] mb-10">
            No plugins enabled{' '}
            <span className="ml-2">
              <img
                src="/Icons/plugin-dropdown.png"
                alt="plugin dropdown icon"
              />
            </span>
          </p>
          <APIKeyForm />
        </div>
        <Footer />
      </div>
    </div>
  );
}
