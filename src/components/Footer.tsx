import { navLinks, socialLinks } from "@/libs/data";
import Link from "next/link";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="mt-10 bg-black pb-[5.5rem] text-white sm:mt-[136px] sm:py-10">
      <div className="grid grid-cols-1 place-items-center sm:mx-auto sm:max-w-[72.375rem] sm:grid-cols-2 sm:content-center sm:gap-y-6 sm:px-6">
        <div className="mt-[6.375rem] sm:mr-auto sm:mt-0">
          <Link href="/" className="" aria-label="home">
            <div className="h-[1.5rem] w-[9rem] bg-[url(/images/logo.svg)] bg-contain bg-no-repeat" />
          </Link>
        </div>
        <nav className="mt-9 sm:col-span-1 sm:row-start-2 sm:mr-auto sm:mt-0">
          <ul className="space-y-[18px] text-center sm:mt-0 sm:flex sm:space-x-[2.125rem] sm:space-y-0">
            {navLinks.map((link) => (
              <li className="underline-hover white-underline" key={link.label}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <ul className="mt-[3rem] flex gap-x-[0.625rem] sm:ml-auto sm:mt-0">
          <SocialLinks links={socialLinks} className="text-3xl" />
        </ul>
        <div className="mt-3 sm:ml-auto sm:mt-0">
          <p className="tracking-[0.015em] text-ls-very-dark-gray">
            &copy; 2021 Loopstudios. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
