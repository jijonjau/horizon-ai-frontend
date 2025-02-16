'use client';

import React from 'react';
import { useState } from 'react';
import ChatMessage from './ChatMessage';

const ChatWindow = () => {
  const [messages, setMessages] = useState<
    Array<{ message: string; isUser: boolean }>
  >([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { message: input, isUser: true };
    setMessages([...messages, userMessage]);
    setInput('');

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });
      const data = await response.json();
      setMessages([
        ...messages,
        userMessage,
        { message: data.reply, isUser: false },
      ]);
    } catch (error) {
      console.error('Error fetching response:', error);
    }
  };

  return (
    <div className="flex flex-col flex-1 p-4">
      <div className="flex-1 overflow-y-auto space-y-2">
        {messages.map((msg, index) => (
          <ChatMessage key={index} message={msg.message} isUser={msg.isUser} />
        ))}
      </div>
      <div className="mt-4 flex">
        <input
          type="text"
          className="border p-2 flex-1 rounded-lg"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={sendMessage}
          className="ml-2 bg-blue-500 text-white p-2 rounded-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
