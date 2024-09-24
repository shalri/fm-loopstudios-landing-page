import type { Metadata } from "next";
import { Alata } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const alata = Alata({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Loopstudios Landing Page | FScode",
  description:
    "Solution for Loopstudios Landing Page challenge from Frontend Mentor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${alata.className} scroll-smooth antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
