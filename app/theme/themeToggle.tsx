"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // 防止 hydration 错误
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // 在客户端挂载之前，显示默认图标
  if (!mounted) {
    return (
      <button className="cursor-pointer" aria-label="Toggle theme">
        <Image 
          src={assets.moon_icon} 
          alt="theme-icon" 
          className="w-6" 
        />
      </button>
    );
  }

  return (
    <button 
      className="cursor-pointer" 
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <Image 
        src={theme === "dark" ? assets.sun_icon : assets.moon_icon} 
        alt="theme-icon" 
        className="w-6" 
      />
    </button>
  );
}
