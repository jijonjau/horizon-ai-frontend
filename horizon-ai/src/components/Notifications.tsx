'use client';

import { useEffect, useRef, useState } from 'react';

const Notifications = ({
  notifications,
}: {
  notifications: Array<{
    id: number;
    icon: string;
    message: string;
    time: string;
  }>;
}) => {
  //+
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !(modalRef.current as Node).contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative">
      <div
        className="relative flex items-center cursor-pointer p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="relative">
          <img
            src="/Icons/notifications.png"
            alt="notifications icon"
            className="w-6 h-6"
          />
          {notifications.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-md">
              {notifications.length}
            </span>
          )}
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-full right-0 mt-1  z-50 w-[250px] sm:w-[300px] md:w-[350px]">
          <div
            ref={modalRef}
            className="bg-white dark:bg-[#1a1c23] p-2 sm:p-3 md:p-4 rounded-lg shadow-lg border border-gray-300 dark:border-gray-700"
          >
            <div className="flex justify-between items-center pb-1 sm:pb-2 border-b border-gray-200 dark:border-gray-600">
              <h3 className="text-base sm:text-lg font-semibold text-[#1b2559] dark:text-gray-200">
                Notifications
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                ✖
              </button>
            </div>

            <div className="mt-1 sm:mt-2 space-y-1 max-h-48 sm:max-h-60 overflow-y-auto">
              {notifications.length > 0 ? (
                notifications.map((notif) => (
                  <div
                    key={notif.id}
                    className="flex items-center p-1 sm:p-2 rounded-lg border border-transparent hover:border-[#4A25E1] 
                         hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300"
                  >
                    <span className="text-sm sm:text-base">{notif.icon}</span>
                    <div className="ml-2 sm:ml-3 flex-1">
                      <p className="text-xs sm:text-sm text-[#1b2559] dark:text-gray-200">
                        {notif.message}
                      </p>
                      <span className="text-xs text-gray-400">
                        {notif.time}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-xs sm:text-sm text-gray-400 dark:text-gray-500 text-center py-2">
                  No new notifications
                </p>
              )}
            </div>

            <div className="mt-2 sm:mt-3 text-center">
              <a
                href="/notifications"
                className="block w-full p-1 sm:p-2 text-[#1b2559] dark:text-gray-200 font-medium 
                     hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition duration-300 text-xs sm:text-sm"
              >
                View All Notifications
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notifications;
