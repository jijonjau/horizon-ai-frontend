import React from 'react';

const ChatMessage: React.FC<{ message: string; isUser: boolean }> = ({
  message,
  isUser,
}) => {
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`p-3 rounded-lg max-w-xs ${
          isUser ? 'bg-blue-500 text-black' : 'bg-gray-200 text-black'
        }`}
      >
        {message}
      </div>
    </div>
  );
};

export default ChatMessage;
