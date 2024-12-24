"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to toggle sidebar

  return (
    <div>
     

      {/* Navbar Section */}
      <header className="bg-blue-400 text-gray-600 body-font">
        {/* Top Navbar for Desktop Only */}
        <div className="hidden md:flex justify-center items-center p-4">
          <nav className="flex space-x-6 text-sm sm:text-base">
            <Link href="/" className="hover:text-gray-900 text-white">
              Home
            </Link>
            <Link href="/Media/Hamd" className="hover:text-gray-900 text-white">
              Hamd
            </Link>
            <Link href="/Media/Naat" className="hover:text-gray-900 text-white">
              Naat
            </Link>
            <Link href="/Media/Kalaam" className="hover:text-gray-900 text-white">
              Kalaam
            </Link>
            
          </nav>
        </div>

        {/* Hamburger Button for Mobile and Tablet */}
        <div className="flex justify-between items-center p-4 md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {/* Hamburger Icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Sidebar for Mobile and Tablet */}
        <div
          className={`fixed top-0 left-0 h-full bg-blue-400 p-4 transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform md:hidden`}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="text-white mb-4"
          >
            Close
          </button>
          <nav className="flex flex-col space-y-4 text-sm sm:text-base">
            <Link href="/" className="hover:text-gray-900 text-white">
              Home
            </Link>
            <Link href="/Media/Hamd" className="hover:text-gray-900 text-white">
              Hamd
            </Link>
            <Link href="/Media/Naat" className="hover:text-gray-900 text-white">
              Naat
            </Link>
            <Link href="/Media/Kalaam" className="hover:text-gray-900 text-white">
              Kalaam
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
}
