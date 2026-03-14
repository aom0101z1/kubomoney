import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const navLinks = [
  { href: "/calculators", label: "Calculators" },
  { href: "/business-guides", label: "Business Guides" },
  { href: "/personal-finance", label: "Personal Finance" },
  { href: "/about", label: "About" },
];

export default function Header() {
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
      </nav>
    </header>
  );
}
