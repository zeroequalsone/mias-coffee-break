import Link from "next/link";
import Logo from "../branding/Logo";
import HamburgerMenu from "@/public/Hamburger_Menu.svg";
import Image from "next/image";

const navLinks = [
  { name: "Meet Mia's", href: "/meet-mias" },
  { name: "Snacks", href: "/drinks-snacks" },
  { name: "Coffee Moments", href: "/coffee-moments" },
  { name: "Wo sind wir?", href: "/wo-sind-wir" },
  { name: "Kontakt", href: "/kontakt" },
];

export default function Navbar() {
  return (
    <header className="lg:my-8 text-brown-dark">
      <nav className="sticky flex justify-between">
        <Link href={"/"} className="flex items-center gap-4">
          <Logo className="size-12 lg:size-16" />
          <span className="font-grifa text-lg lg:text-2xl">
            <span className="font-bold">Mia&apos;s</span>&nbsp;Coffee&nbsp;Break
          </span>
        </Link>
        <ul className="hidden lg:flex items-center gap-6 text-lg font-nunito font-bold">
          {navLinks.map((navLink) => (
            <li key={navLink.href}>
              <Link href={navLink.href}>{navLink.name}</Link>
            </li>
          ))}
        </ul>
        <Image
          alt="Hamburger Menu"
          src={HamburgerMenu}
          className="lg:hidden text-brown-dark"
        />
      </nav>
    </header>
  );
}
