"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/lots", label: "Lot Directory" },
  { href: "/committee", label: "Committee" },
  { href: "/meetings", label: "Meetings" },
  { href: "/documents", label: "Documents" },
  { href: "/maintenance", label: "Maintenance" },
  { href: "/noticeboard", label: "Noticeboard" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative flex items-center justify-end sm:justify-start h-14">
          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="sm:hidden inline-flex items-center justify-center p-2 rounded-md text-blue-800 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {/* Hamburger icon */}
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>

          {/* Desktop navigation */}
          <ul className="hidden sm:flex items-center space-x-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-blue-800 hover:text-blue-600 font-medium px-3 py-2 transition inline-flex items-center min-h-[44px]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile menu dropdown */}
          {isOpen && (
            <div className="absolute top-full right-0 w-56 mt-2 origin-top-right bg-white rounded-lg shadow-lg border border-slate-200 sm:hidden z-50">
              <ul className="py-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className="block px-4 py-3 text-sm text-blue-800 hover:text-blue-600 hover:bg-slate-50 font-medium transition"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
