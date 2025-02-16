'use client';

import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const APIKeyForm = ({ onClose }: { onClose: () => void }) => {
  const [apiKey, setApiKey] = useState('');
  const [showSolutions, setShowSolutions] = useState(false);

  const handleSave = () => {
    if (!apiKey.trim()) {
      toast.error(
        'Invalid API key. Please make sure your API key is still working properly.',
        {
          position: 'top-center',
          style: {
            background: '#FDE0D0',
            color: '#E31A1A',
            fontWeight: 'bold',
            textAlign: 'center',
            whiteSpace: 'nowrap',
            width: '100%',
          },
        }
      );
      setShowSolutions(true);
      return;
    }

    toast.success('Success! You can start using Horizon Chat UI now!', {
      position: 'top-center',
      style: {
        background: '#C9FBD5',
        color: '#01B574',
        fontWeight: 'bold',
        textAlign: 'center',
        whiteSpace: 'nowrap',
        width: '100%',
      },
    });

    onClose();
  };

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
            onClick={handleSave}
          >
            Save
          </button>
        </div>

        <a
          href="https://platform.openai.com/docs/overview"
          className="text-sm text-[#603CFF] underline font-medium block mt-3"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get your API key from OpenAI Dashboard
        </a>

        <button
          className="font-semibold text-[#1b2559] flex items-center justify-center w-full mt-4 gap-2"
          onClick={() => setShowSolutions(!showSolutions)}
        >
          Your API Key is not working?
          {showSolutions ? (
            <FaChevronUp size={14} />
          ) : (
            <FaChevronDown size={14} />
          )}
        </button>

        {showSolutions && (
          <ul className="mt-2 text-sm text-[#1b2559] list-disc list-inside space-y-1 text-left p-3">
            <li>
              Make sure youhave an OpenAI account and a valid API key to use
              ChatGPT. We do not sell API keys.
            </li>
            <li>
              Make sure you have your billing info added in{' '}
              <a
                href={
                  'https://platform.openai.com/settings/organization/billing/overview'
                }
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#603CFF] underline"
              >
                OpenAI Billing
              </a>{' '}
              page. Without billing info, your API keys will not work..
            </li>
          </ul>
        )}

        <p className="text-xs text-gray-400 mt-4 mb-4">
          *The app will connect to OpenAI API server to check if your API Key is
          working properly.
        </p>
      </div>
    </div>
  );
};

export default APIKeyForm;
