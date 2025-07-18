import type { Metadata } from "next";
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const outfit = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"],
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400",],
});

export const metadata: Metadata = {
  title: "Portfolio - GreatStack",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
