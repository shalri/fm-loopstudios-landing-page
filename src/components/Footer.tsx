import { navLinks, socialLinks } from "@/libs/data";
import Link from "next/link";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="grid grid-cols-1 place-items-center bg-black pb-[5.5rem] text-white">
      {/* <div className="w-full"> */}
      <div className="mt-[6.375rem]">
        <Link href="/" className="" aria-label="home">
          <div className="h-[1.5rem] w-[9rem] bg-[url(/images/logo.svg)] bg-contain bg-no-repeat" />
        </Link>
        {/* </div> */}
      </div>
      <nav className="mt-9">
        <ul className="space-y-[18px] text-center">
          {navLinks.map((link) => (
            <li className="" key={link.label}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <ul className="mt-[3rem] flex gap-x-[0.625rem]">
        <SocialLinks links={socialLinks} className="text-3xl" />
      </ul>
      <div className="mt-3">
        <p className="text-ls-very-dark-gray">
          &copy; 2021 Loopstudios. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
