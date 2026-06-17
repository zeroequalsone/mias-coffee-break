"use client";

import Link from "next/link";
import Logo from "../branding/Logo";
import { useState } from "react";
import { XIcon } from "@phosphor-icons/react";
import HamburgerMenuOpen from "@/public/HamburgerMenuOpen.svg";

const navLinks = [
  { name: "Meet Mia's", href: "/meet-mias" },
  { name: "Snacks", href: "/drinks-snacks" },
  { name: "Coffee Moments", href: "/coffee-moments" },
  { name: "Wo sind wir?", href: "/wo-sind-wir" },
  { name: "Kontakt", href: "/kontakt" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className={`sticky top-4 lg:top-8 p-4 text-brown-dark bg-cream/85 z-50 ${mobileMenuOpen ? "rounded-t-2xl" : "rounded-2xl"}`}
    >
      <nav className="flex justify-between items-center">
        <Link
          href={"/"}
          className="flex items-center gap-4 hover:text-brown-light"
          onClick={() => setMobileMenuOpen(false)}
        >
          <Logo className="size-12 lg:size-16" />
          <span className="font-grifa text-lg lg:text-2xl">
            <span className="font-bold">Mia&apos;s</span>&nbsp;Coffee&nbsp;Break
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-6 text-lg font-nunito font-bold">
          {navLinks.map((navLink) => (
            <li key={navLink.href} className="hover:text-brown-light">
              <Link href={navLink.href}>{navLink.name}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-brown-dark"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          {mobileMenuOpen ? (
            <XIcon className="size-9" weight="bold" />
          ) : (
            <HamburgerMenuOpen className="size-9" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <ul
          className={`absolute bg-cream/85 top-full left-0 w-full p-4 items-center flex flex-col gap-6 text-lg font-nunito font-bold ${mobileMenuOpen ? "rounded-b-2xl" : "rounded-2xl"}`}
        >
          {navLinks.map((navLink) => (
            <li key={navLink.href}>
              <Link
                href={navLink.href}
                onClick={() => setMobileMenuOpen(false)}
              >
                {navLink.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
