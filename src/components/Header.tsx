import { navLinks } from "@/libs/data";
import Link from "next/link";

export default function Header() {
  return (
    <header className="z-50 pt-10">
      <div className="flex items-end justify-between px-6">
        <div className="">
          <Link href="/" className="" aria-label="home">
            <div className="h-[1.5rem] w-[9.5rem] bg-[url(/images/logo.svg)] bg-contain bg-no-repeat" />
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
          className="h-[1.4rem] w-[1.5rem] bg-[url(/images/icon-hamburger.svg)] bg-contain bg-no-repeat"
          aria-label="Open menu"
        ></button>
      </div>
    </header>
  );
}
