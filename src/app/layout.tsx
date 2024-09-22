import type { Metadata } from "next";
import { Alata } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const alata = Alata({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "きそ(kiso) | FScode",
  description: "A basic NextJS template for Frontend Mentor Challenges",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${alata.className} flex min-h-screen flex-col scroll-smooth antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
