"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import ThemeToggle from "@/app/theme/themeToggle";
import { useTheme } from "next-themes";


const Navbar = () => {
    const sideMenuRef = useRef<HTMLUListElement>(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const { theme } = useTheme();
    const isDarkMode = theme === "dark";

    const openMenu = () => {
        sideMenuRef.current?.classList.remove("translate-x-full");
        sideMenuRef.current?.classList.add("translate-x-0");
    }

    const closeMenu = () => {
        sideMenuRef.current?.classList.remove("translate-x-0");
        sideMenuRef.current?.classList.add("translate-x-full");
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        });
    }, []);

  return (
    <>
        <div className="fixed top-0 left-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
            <Image src={assets.header_bg_color} alt="header-image" className="w-full h-full object-cover" />
        </div>
      <nav className={`flex items-center justify-between px-5 w-full fixed lg:px-8 xl:px-[8%] z-50 py-4 ${isScrolled ? "bg-white bg-opacity-10 backdrop-blur-lg shadow-sm" : ""}`}>
        <a href="/">
          <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt="logo" className="w-28 cursor-pointer mr-14" />
        </a>
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white opacity-50 ${isScrolled ? "" : "bg-white shadow-sm bg-opacity-50 dark:border-white/50 dark:border-2 dark:bg-transparent dark:text-white"}`}>
            <li>
                <a href="/" className="font-ovo">Home</a>
            </li>
            <li>
                <a href="#about" className="font-ovo">About me</a>
            </li>
            <li>
                <a href="#services" className="font-ovo">Services</a>
            </li>
            <li>
                <a href="#work" className="font-ovo">My Work</a>
            </li>
            <li>
                <a href="#contact" className="font-ovo">Contact Me</a>
            </li>
        </ul>

        <div className="flex items-center gap-4">
            <ThemeToggle />
            <a href="#contact" className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-ovo dark:border-white/50 dark:text-white">Contact <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} className="w-3" alt="arrow" /></a>

            <button className="block md:hidden cursor-pointer ml-4" onClick={openMenu}>
                <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt="moon-icon" className="w-6" />
            </button>
        </div>
        
        {/* --------- mobile menu --------- */}
        <ul ref={sideMenuRef} className="flex md:hidden flex-col gap-4 py-20 px-10 fixed right-0 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 translate-x-full dark:bg-darkhover dark:text-white">
            <div className="absolute right-6 top-6 cursor-pointer" onClick={closeMenu}>
                <Image src={isDarkMode ? assets.close_white : assets.close_black} alt="close-icon" className="w-5" />
            </div>
            <li>
                <a href="/" className="font-ovo">Home</a>
            </li>
            <li>
                <a href="/" className="font-ovo">About me</a>
            </li>
            <li>
                <a href="/" className="font-ovo">Services</a>
            </li>
            <li>
                <a href="/" className="font-ovo">My Work</a>
            </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
