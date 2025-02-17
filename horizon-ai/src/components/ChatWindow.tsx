'use client';

import React, { useState } from 'react';
import ChatMessage from './ChatMessage';

const ChatWindow: React.FC<{ isDisabled: boolean }> = ({ isDisabled }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<
    { message: string; isUser: boolean }[]
  >([]);
  const [latestUserPrompt, setLatestUserPrompt] = useState<string | null>(null);

  const sendMessage = () => {
    if (isDisabled || !input.trim()) return;

    const userMessage = { message: input, isUser: true };

    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setLatestUserPrompt(input);

    setInput('');

    setTimeout(() => {
      const aiReply = { message: `AI Response for: ${input}`, isUser: false };
      setMessages((prevMessages) => [...prevMessages, aiReply]);
    }, 1000);
  };

  const updateMessage = (index: number, newMessage: string) => {
    setMessages((prev) =>
      prev.map((msg, i) =>
        i === index ? { ...msg, message: newMessage } : msg
      )
    );
  };

  const regenerateResponse = () => {
    if (!latestUserPrompt) return;

    setMessages((prevMessages) => [
      ...prevMessages,
      { message: 'Generating new response...', isUser: false },
    ]);

    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages.slice(0, -1),
        {
          message: `Regenerated AI response for: ${latestUserPrompt}`,
          isUser: false,
        },
      ]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-full items-center w-full">
      <div className="w-full max-w-2xl flex-1 overflow-y-auto space-y-4 p-4">
        {messages.map((msg, index) => (
          <ChatMessage
            key={index}
            message={msg.message}
            isUser={msg.isUser}
            onUpdate={(newMessage) => updateMessage(index, newMessage)}
            sendMessage={sendMessage}
          />
        ))}

        {messages.some((msg) => !msg.isUser) && (
          <button
            onClick={regenerateResponse}
            className="bg-gray-200 text-[#1B2559] border border-[#E2E8F0] px-4 py-2 rounded-lg font-medium hover:bg-gray-300 transition ml-40"
          >
            <img
              src="/Icons/regenerate.png"
              alt="Regenerate Icon"
              className="w-4 h-4 mr-2 inline-block"
            />
            <span className="inline-block">Regenerate Response</span>
          </button>
        )}
      </div>

      <div className="w-full max-w-2xl p-4 dark:border-gray-700 bottom-2">
        <div className="flex w-full">
          <input
            type="text"
            className={`border border-[#E2E8F0] p-2 flex-grow rounded-lg text-black 
            focus:border-[#A0AEC0] focus:ring-1 focus:ring-[#A0AEC0] 
            hover:border-[#A0AEC0] active:border-[#A0AEC0] transition-all duration-200 outline-none 
            ${isDisabled ? 'bg-gray-200 cursor-not-allowed' : 'bg-white'}`}
            placeholder="Send message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
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

      <p className="text-[#718096] text-xs mt-2 dark:text-gray-300 mb-4">
        Free Research Preview. ChatGPT may produce inaccurate information about
        people, places, or facts.
        <a
          href="https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#1B2559] font-semibold underline dark:text-white"
        >
          ChatGPT May 12 Version
        </a>
      </p>
    </div>
  );
};

export default ChatWindow;
