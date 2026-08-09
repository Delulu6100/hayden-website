"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Experience", href: "/experience" },
  { name: "Education", href: "/education" },
  { name: "Achievements", href: "/achievements" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* Menu Button */}

      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="text-2xl leading-none text-gray-300 transition-colors hover:text-white"
      >
        {open ? "×" : "☰"}
      </button>

      {/* Mobile Menu */}

      {open && (
        <div className="absolute right-0 top-12 z-50 w-56 overflow-hidden rounded-2xl border border-gray-700 bg-[#15191F] shadow-xl">
          <div className="flex flex-col p-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm text-gray-300 transition-colors hover:bg-gray-800 hover:text-white"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}