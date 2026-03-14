"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const navLinks = [
  { href: "/calculators", label: "Calculators" },
  { href: "/business-guides", label: "Business Guides" },
  { href: "/personal-finance", label: "Personal Finance" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-600 text-lg font-black text-white">
            K
          </span>
          <span className="text-xl font-bold text-gray-900">
            {siteConfig.name}
          </span>
        </Link>
        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-gray-600 transition-colors hover:text-teal-600"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-600 hover:bg-gray-100 md:hidden"
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>
      {open && (
        <div className="border-t border-gray-200 bg-white px-4 py-3 md:hidden">
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm font-medium text-gray-600 transition-colors hover:text-teal-600"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
