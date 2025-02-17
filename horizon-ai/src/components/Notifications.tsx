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
            className="w-7 h-7"
          />
          {notifications.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-md">
              {notifications.length}
            </span>
          )}
        </div>
      </div>

      {isOpen && (
        <div
          ref={modalRef}
          className="absolute top-12 right-0 w-72 bg-white dark:bg-[#1a1c23] shadow-lg rounded-xl p-3 border border-gray-300 dark:border-gray-700 z-50"
        >
          <div className="flex justify-between items-center pb-2 border-b border-gray-200 dark:border-gray-600">
            <h3 className="text-lg font-semibold text-[#1b2559] dark:text-gray-200">
              Notifications
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              ✖
            </button>
          </div>

          <div className="mt-2 space-y-2 max-h-60 overflow-y-auto">
            {notifications.length > 0 ? (
              notifications.map((notif) => (
                <div
                  key={notif.id}
                  className="flex items-center p-3 rounded-lg border border-transparent hover:border-[#4A25E1] hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300"
                >
                  <span className="text-xl">{notif.icon}</span>
                  <div className="ml-3 flex-1">
                    <p className="text-sm text-[#1b2559] dark:text-gray-200">
                      {notif.message}
                    </p>
                    <span className="text-xs text-gray-400">{notif.time}</span>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-400 dark:text-gray-500 text-center py-3">
                No new notifications
              </p>
            )}
          </div>

          <div className="mt-3 text-center">
            <a
              href="/notifications"
              className="block w-full p-2 text-[#1b2559] dark:text-gray-200 font-medium hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition duration-300"
            >
              View All Notifications
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notifications;

// const Notifications = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const modalRef = useRef(null);

//   // Close modal when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//         if (modalRef.current && !(modalRef.current as Node).contains(event.target as Node)) {
//         setIsOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // Sample notifications
//   const notifications = [
//     {
//       id: 1,
//       icon: "📢",
//       message: "System update available. Click to update.",
//       time: "15m ago",
//     },
//     {
//       id: 2,
//       icon: "✅",
//       message: "Your task ‘Finish UI Design’ was completed!",
//       time: "1h ago",
//     },
//   ];

//   return (
//     <div
//   className="relative flex items-center cursor-pointer p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-300"
//   onClick={() => setIsOpen(!isOpen)}
// >
//   {/* Notification Icon */}
//   <div className="relative">
//     <img
//       src="/Icons/notifications.png"
//       alt="notifications icon"
//       className="w-7 h-7"
//     />

//     {/* Notification Badge */}
//     {notifications.length > 0 && (
//       <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-md">
//         {notifications.length}
//       </span>
//     )}
//   </div>

//       {/* Modal (Dropdown) */}
//       {isOpen && (
//         <div
//           ref={modalRef}
//           className="absolute right-0 mt-2 w-72 bg-white dark:bg-[#1a1c23] shadow-lg rounded-xl p-3 border border-gray-300 dark:border-gray-700"
//         >
//           {/* Header */}
//           <div className="flex justify-between items-center pb-2 border-b border-gray-200 dark:border-gray-600">
//             <h3 className="text-lg font-semibold text-[#1b2559] dark:text-gray-200">
//               Notifications
//             </h3>
//             <button
//               onClick={() => setIsOpen(false)}
//               className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
//             >
//               ✖
//             </button>
//           </div>

//           {/* Notifications List */}
//           <div className="mt-2 space-y-2">
//             {notifications.map((notif) => (
//               <div
//                 key={notif.id}
//                 className="flex items-center p-3 rounded-lg border border-transparent hover:border-[#4A25E1] hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300"
//               >
//                 <span className="text-xl">{notif.icon}</span>
//                 <div className="ml-3 flex-1">
//                   <p className="text-sm text-[#1b2559] dark:text-gray-200">{notif.message}</p>
//                   <span className="text-xs text-gray-400">{notif.time}</span>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* View All Button */}
//           <div className="mt-3 text-center">
//             <a
//               href="/notifications"
//               className="block w-full p-2 text-[#1b2559] dark:text-gray-200 font-medium hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition duration-300"
//             >
//               View All Notifications
//             </a>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Notifications;
