"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to toggle sidebar

  return (
    <header className="bg-blue-500 text-white">
      {/* Desktop Navbar */}
      <nav className="hidden md:flex justify-center items-center py-4">
        <div className="flex space-x-8">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/Media/Hamd" className="hover:underline">Hamd</Link>
          <Link href="/Media/Naat" className="hover:underline">Naat</Link>
          <Link href="/Media/Kalaam" className="hover:underline">Kalaam</Link>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <div className="md:hidden flex justify-between items-center p-4">
        <h1 className="text-lg font-bold">Menu</h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none"
        >
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

      {/* Sidebar */}
      {isOpen && (
        <div className="fixed inset-0 bg-blue-600 bg-opacity-90 z-50">
          <div className="flex flex-col items-start p-6 space-y-6">
            <button
              onClick={() => setIsOpen(false)}
              className="self-end text-white"
            >
              Close
            </button>
            <Link href="/" className="hover:underline text-lg">Home</Link>
            <Link href="/Media/Hamd" className="hover:underline text-lg">Hamd</Link>
            <Link href="/Media/Naat" className="hover:underline text-lg">Naat</Link>
            <Link href="/Media/Kalaam" className="hover:underline text-lg">Kalaam</Link>
          </div>
        </div>
      )}
    </header>
  );
}
