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
    <ul className="space-y-[18px] px-6 pb-[34px]">
      {navLinks.map((link) => (
        <li
          className="font-heading text-2xl uppercase text-ls-dark-gray sm:flex"
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
              className="fixed inset-0 content-center bg-black"
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
    <header className="z-50 pt-10">
      <div className="flex items-end justify-between px-6">
        <div className="z-50">
          <Link href="/" aria-label="home">
            <div className="h-[1.5rem] w-[9.5rem] bg-[url(/images/logo.svg)] bg-contain bg-no-repeat" />
          </Link>
        </div>
        <nav className="">
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
            "h-[1.4rem] w-[1.5rem] bg-[url(/images/icon-hamburger.svg)] bg-contain bg-no-repeat",
            isMobileNavActive && "z-50 bg-[url(/images/icon-close.svg)]",
          )}
          onClick={toggleMobileNav}
          aria-label="Open menu"
        ></button>
      </div>
    </header>
  );
}
