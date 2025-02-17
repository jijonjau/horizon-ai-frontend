import React from 'react';
import Image from 'next/image';
import { HiOutlineLogout } from 'react-icons/hi';

const UserProfile = () => {
  return (
    <div className="flex items-center justify-between p-3 mt-4 bg-white rounded-xl dark:bg-gray-800 dark:text-gray-200">
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
      <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-300 transition dark:bg-gray-700 dark:hover:bg-gray-600">
        <HiOutlineLogout className="w-5 h-5 text-gray-700 dark:text-gray-300 p-2s" />
      </button>
    </div>
  );
};

export default UserProfile;
