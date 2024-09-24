"use client";
import { useMobileNav } from "@/hooks/useMobileNavigation";
import { useSmallScreen } from "@/hooks/useSmallScreen";
import { navLinks } from "@/libs/data";
import { cn } from "@/libs/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React, { useCallback, useRef } from "react";

const NavContent = React.memo(function Navcontent({
  handleLinkClink,
}: {
  handleLinkClink: (e: React.MouseEvent) => void;
}) {
  return (
    <ul className="space-y-[1.125rem] pb-[2.125rem] sm:flex sm:content-center sm:gap-x-[2.0579rem] sm:space-y-0 sm:pb-0">
      {navLinks.map((link) => (
        <li
          className="underline-hover white-underline font-heading text-2xl uppercase text-ls-dark-gray transition-all duration-300 hover:text-white sm:text-base sm:capitalize sm:text-white"
          key={link.label}
        >
          <Link href={link.href} onClick={handleLinkClink}>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
});

export default function Header() {
  const isSmallScreen = useSmallScreen();
  const navRef = useRef<HTMLDivElement>(null);
  const { isMobileNavActive, toggleMobileNav, closeMobileNav } = useMobileNav(
    navRef,
    isSmallScreen,
  );

  const mobileNavAnimatonWrapper = useCallback(
    (children: React.ReactNode) => {
      return (
        <AnimatePresence>
          {isMobileNavActive && (
            <motion.div
              key="mobileNav"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 content-center bg-black pl-6"
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      );
    },
    [isMobileNavActive],
  );

  const handleLinkClink = () => {
    if (isSmallScreen) {
      closeMobileNav();
    }
  };
  return (
    <header className="z-50 w-full pt-10 sm:pt-16">
      <div className="flex max-w-[72.375rem] items-end justify-between px-6 sm:mx-auto">
        <div className="z-50">
          <Link href="/" aria-label="home">
            <div className="h-[1.5rem] w-[9.5rem] bg-[url(/images/logo.svg)] bg-contain bg-no-repeat sm:h-[2rem] sm:w-[12rem]" />
          </Link>
        </div>
        <nav ref={navRef} className="flex">
          {isSmallScreen ? (
            mobileNavAnimatonWrapper(
              <NavContent handleLinkClink={handleLinkClink} />,
            )
          ) : (
            <NavContent handleLinkClink={handleLinkClink} />
          )}
        </nav>
        <button
          className={cn(
            "h-[1.4rem] w-[1.5rem] bg-[url(/images/icon-hamburger.svg)] bg-contain bg-no-repeat sm:hidden",
            isMobileNavActive && "z-50 bg-[url(/images/icon-close.svg)]",
          )}
          onClick={toggleMobileNav}
          aria-label={isMobileNavActive ? "close" : "open"}
        ></button>
      </div>
    </header>
  );
}
