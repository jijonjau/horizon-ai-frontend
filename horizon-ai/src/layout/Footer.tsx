import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full p-4 bg-white text-[#718096] text-center flex items-center justify-between">
      <div>&copy; 2023 Horizon AI. All rights reserved.</div>

      <div className="flex items-center space-x-4">
        <Link href="/" className="p-2 rounded-lg hover:bg-gray-200">
          Home Page
        </Link>

        <Link href="/license" className="p-2 rounded-lg hover:bg-gray-200">
          License
        </Link>

        <Link href="/terms" className="p-2 rounded-lg hover:bg-gray-200">
          Terms of Use
        </Link>

        <Link href="/privacy" className="p-2 rounded-lg hover:bg-gray-200">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
