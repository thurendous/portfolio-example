'use client';

import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { useTheme } from "next-themes";

const Header = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <div className="flex justify-center">
        <Image
          src={assets.profile_img}
          alt="header-image"
          className="w-32 h-32 rounded-full object-cover"
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo">
          Hello! I'm <span className="text-rose-500">Willian Mark</span>
          <Image src={assets.hand_icon} alt="hand-icon" className="w-6" />
        </h3>
        <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-ovo mb-3">Backend developer based in Tokyo.</h1>
        <p className="text-gray-500 text-center text-sm sm:text-base lg:text-lg">
          I'm a backend developer comes from California, USA with 10 years of experience in multiple companies like Microsoft, Google, and Facebook.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-4 mt-10">
            <a href="#contact" className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2">Contact me<Image src={assets.right_arrow_white} alt="arrow-icon" className="w-4" /></a>
            <a href="/sample-resume.pdf" download className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2">Download CV<Image src={assets.download_icon} alt="download" className="w-4" /></a>
        </div>
      </div>
    </div>
  );
};

export default Header;
