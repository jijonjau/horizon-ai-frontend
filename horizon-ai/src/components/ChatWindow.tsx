'use client';

import React, { useState } from 'react';
import ChatMessage from './ChatMessage';

const ChatWindow: React.FC<{ isDisabled: boolean }> = ({ isDisabled }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<
    { message: string; isUser: boolean }[]
  >([]);

  const sendMessage = () => {
    if (isDisabled || !input.trim()) return;
    setMessages([...messages, { message: input, isUser: true }]);
    setInput('');
  };

  return (
    <div className="flex flex-col flex-1 p-4 items-center w-full">
      <div className="flex-1 overflow-y-auto space-y-2 w-full max-w-lg">
        {messages.map((msg, index) => (
          <ChatMessage key={index} message={msg.message} isUser={msg.isUser} />
        ))}
      </div>

      <div className="mt-4 flex w-4/5">
        <input
          type="text"
          className={`border border-[#E2E8F0] p-2 flex-grow rounded-lg w-[80%] text-black 
    focus:border-[#A0AEC0] focus:ring-1 focus:ring-[#A0AEC0] 
    hover:border-[#A0AEC0] active:border-[#A0AEC0] transition-all duration-200 outline-none ${isDisabled ? 'bg-gray-200 cursor-not-allowed' : 'bg-white'}`}
          placeholder="Send message"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={isDisabled}
        />
        <button
          onClick={sendMessage}
          style={{
            background: isDisabled
              ? 'gray'
              : 'linear-gradient(15.46deg, #4A25E1 26.3%, #7B5AFF 86.4%)',
          }}
          className={`ml-2 text-white p-2 rounded-full w-24 flex-shrink-0 
            ${isDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 hover:brightness-110 active:brightness-90'}`}
          disabled={isDisabled}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
