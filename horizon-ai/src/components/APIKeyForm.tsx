'use client';

import React from 'react';
import { useState } from 'react';

const APIKeyForm = () => {
  const [apiKey, setApiKey] = useState('');

  return (
    <div className="flex flex-col items-center justify-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-96 text-center">
        <h2 className="text-xl font-semibold text-[#1b2559]">
          Enter your OpenAI API Key
        </h2>

        <p className="text-sm text-gray-500 mt-2">
          You need an OpenAI API Key to use Horizon Chat UI. Your API Key is
          stored locally on your browser and never sent anywhere else.
        </p>

        <div className="flex items-center p-2 rounded-lg mt-4 justify-between">
          <input
            type="password"
            className="flex-1 border border-gray-200 rounded-full outline-none text-gray-700 p-2"
            placeholder="sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
          />
          <button
            style={{
              background: 'linear-gradient(180deg, #7BCBD4 0%, #29C6B7 100%)',
            }}
            className="text-white px-4 py-1 rounded-full font-medium ml-2"
          >
            Save
          </button>
        </div>

        <a
          href="https://platform.openai.com/signup"
          className="text-sm text-[#603CFF] font-medium block mt-3"
        >
          Get your API key from OpenAI Dashboard
        </a>

        <button className="font-semibold text-[#1b2559] mt-4 flex items-center justify-center w-full">
          Your API Key is not working?
        </button>

        <p className="text-xs text-gray-400 mt-4 mb-4">
          *The app will connect to OpenAI API server to check if your API Key is
          working properly.
        </p>
      </div>
    </div>
  );
};

export default APIKeyForm;
