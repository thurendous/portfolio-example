'use client';

import React from 'react'
import Image from 'next/image'
import { assets, serviceData } from '@/assets/assets'
import { useTheme } from 'next-themes';

const Services = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
        <h4 className="text-center mb-2 text-lg font-ovo">
            What I offer
        </h4>
        <h2 className="text-center text-5xl font-ovo">
            My Services
        </h2>
        <p className="text-center max-w-2xl mx-auto font-ovo">I am a frontend developer from California, USA with 10 years of experience with multiple companies like Microsoft, Tesla, and Facebook.</p>
        <div className="grid auto-grid gap-6 my-10">
            {serviceData.map(({icon, title, description, link}, index: number) => (
                // <div key={index} className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lighthover hover:-translate-y-1 duration-500 hover:shadow-black">
                <div key={index} className="border border-gray-400 rounded-lg px-8 py-12 hover:bg-lighthover hover:shadow-black duration-500 cursor-pointer hover:-translate-y-1 dark:border-white/50 dark:hover:bg-darkhover dark:hover:shadow-none">
                    <Image src={icon} alt={title} className="w-7 mt-3" />
                    <h3 className="text-lg text-gray-700 my-3 dark:text-white">{title}</h3>
                    <p className="text-sm text-gray-600 leading-5 mt-3 dark:text-white">{description}</p>
                    <a href={link} className="flex items-center justify-end text-sm text-gray-600 leading-5 mt-3  gap-2 dark:text-white">Read more
                    <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="arrow-right" className="w-4" />
                    </a>
                </div>
            ))}

        </div>
    </div>
  )
}

export default Services
