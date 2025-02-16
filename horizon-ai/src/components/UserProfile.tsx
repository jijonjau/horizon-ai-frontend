import React from 'react';
import Image from 'next/image';

const UserProfile = () => {
  return (
    <div className="flex items-center justify-between p-3 mt-4 bg-white rounded-xl mb-4 dark:bg-gray-800 dark:text-gray-200">
      <div className="flex items-center">
        <Image
          src="/Icons/user-avatar.png"
          alt="User Avatar"
          width={32}
          height={32}
          className="rounded-full"
        />
        <span className="ml-3 font-medium text-gray-800 dark:text-gray-200">
          Adela Parkson
        </span>
      </div>
      <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition">
        <img src="/Icons/log-out.png" alt="Settings Icon" className="w-4 h-4" />
      </button>
    </div>
  );
};

export default UserProfile;
