import { navLinks } from "@/libs/data";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex bg-purple-300">
      <div className="w-full">
        <Link href="/" className="" aria-label="home">
          <div className="h-10 w-[15rem] bg-[url(/images/logo.svg)] bg-cover" />
        </Link>
      </div>
      <nav className="">
        <ul className="">
          {navLinks.map((link) => (
            <li className="hidden sm:flex" key={link.label}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <button
        className="size-10 bg-[url(/images/icon-hamburger.svg)] bg-contain bg-no-repeat"
        aria-label="Open menu"
      ></button>
    </header>
  );
}
