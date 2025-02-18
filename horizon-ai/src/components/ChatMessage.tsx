'use client';

import React, { useState } from 'react';
import { HiUser, HiSparkles } from 'react-icons/hi';

const ChatMessage: React.FC<{
  message: string;
  isUser: boolean;
  onUpdate: (updatedMessage: string) => void;
  sendMessage: (message: string) => void;
}> = ({ message, isUser, onUpdate, sendMessage }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedMessage, setEditedMessage] = useState(message);

  const handleEdit = () => {
    if (isEditing && editedMessage.trim()) {
      onUpdate(editedMessage);
      sendMessage(editedMessage);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="flex items-center gap-3 w-full sm:w-3/4 lg:w-2/3 xl:w-1/2">
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 flex-shrink-0">
        {isUser ? (
          <HiUser className="text-gray-600 dark:text-gray-300" size={22} />
        ) : (
          <img
            src="/Icons/AI-avatar.png"
            alt="AI Avatar"
            className="w-8 h-8 rounded-full"
          />
        )}
      </div>

      <div className="flex w-full">
        <div
          className="p-3 rounded-lg border border-[#E2E8F0] bg-gray-50 
          dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200 w-full max-w-[600px] flex justify-between items-center"
        >
          {isEditing ? (
            <input
              type="text"
              className="flex-1 bg-transparent outline-none border-none text-gray-700 dark:text-gray-200"
              value={editedMessage}
              onChange={(e) => setEditedMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleEdit()}
              style={{ width: '100%' }}
            />
          ) : (
            <p className="text-gray-700 dark:text-gray-300 flex-1">{message}</p>
          )}

          {isEditing ? (
            <button
              onClick={handleEdit}
              style={{
                background:
                  'linear-gradient(15.46deg, #4A25E1 26.3%, #7B5AFF 86.4%)',
              }}
              className="ml-2 text-white p-2 rounded-full w-24 flex-shrink-0 text-sm
                hover:scale-105 hover:brightness-110 active:brightness-90"
            >
              Re-Send
            </button>
          ) : (
            <button onClick={() => setIsEditing(true)} className="ml-2">
              <img src="/Icons/edit.png" alt="edit icon" className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
