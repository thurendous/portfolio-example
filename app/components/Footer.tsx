'use client';

import { assets } from '@/assets/assets';
import React from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

const Footer = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <div className="mt-20">
      <div className="text-center mb-8">
        <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='logo' className='w-36 mx-auto mb-4' />
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='mail_icon' className='w-6 h-6' />
          <p className='text-sm text-gray-500 font-ovo dark:text-white'>greatstackdev@gmail.com</p>
        </div>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] py-6 dark:border-white/50">
        <p className="text-gray-500 font-ovo dark:text-white">© 2025 Greatstack. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
            <li>
                <a href="https://github.com/thurendous" target='_blank' rel='noopener noreferrer'>Github</a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/thurendous/" target='_blank' rel='noopener noreferrer'>Linkedin</a>
            </li>
            <li>
                <a href="https://www.instagram.com/thurendous/" target='_blank' rel='noopener noreferrer'>Instagram</a>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
