import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { Montserrat } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--Playfair-Display",
});
const montse = Montserrat({
  subsets: ["latin"],
  variable: "--Montserrat",
});

export const metadata: Metadata = {
  title: "Tandem Advocacy Group",
  description: "We Need Your Powerful Hands To Change The World.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} ${montse.variable} font-body  bg-white`}
      >
        {children}

        <Footer />
      </body>
    </html>
  );
}
