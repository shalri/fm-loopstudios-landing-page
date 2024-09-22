import { navLinks, socialLinks } from "@/libs/data";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="w-full">
        <Link href="/" className="" aria-label="home">
          <div className="h-10 w-[15rem] bg-[url(/images/logo.svg)] bg-cover" />
        </Link>
      </div>
      <ul className="">
        <nav className="">
          <ul className="">
            {navLinks.map((link) => (
              <li className="hidden sm:flex" key={link.label}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="">
          {/* TODO: use react-icons */}
          <ul className="">
            {socialLinks.map((link) => (
              <li className="" key={link.label}>
                <a href={link.href} className="">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <p className="">&copy; 2021 Loopstudios. All rights reserved.</p>
        </div>
      </ul>
    </footer>
  );
}
