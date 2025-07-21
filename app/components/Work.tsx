import { assets, workData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

const Work = () => {
  return (
    <div id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-ovo'>My portfolio</h4>
      <h2 className='text-center text-5xl font-ovo'>My latest work</h2>
      <p className='text-center max-w-2xl mx-auto font-ovo'>
        Wlecome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in front-end development.
      </p>
      <div className='grid auto-grid gap-6 my-10'>
        {workData.map(({ bgImage, title, description }, index: number) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${bgImage})` }}
            className='aspect-square bg-cover bg-center rounded-lg relative cursor-pointer group'
          >
            <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex justify-between items-center duration-500 group-hover:bottom-7'>
              <div>
                <h2 className='font-semibold text-lg'>{title}</h2>
                <p className='text-sm text-gray-700'>{description}</p>
              </div>
              <div className='border rounded-full border-black p-2 w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0px_0px_#000] group-hover:bg-lime-300 transition'>
                <Image src={assets.send_icon} alt={title} className='w-5' />
              </div>
            </div>
          </div>
        ))}
      </div>
      <a
        href='https://github.com/thurendous'
        target='_blank'
        rel='noopener noreferrer'
        className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto hover:bg-lighthover duration-500 hover:text-black'
      >
        Show more{' '}
        <Image
          src={assets.right_arrow_bold}
          alt='arrow-right'
          className='w-5'
        />
      </a>
    </div>
  );
};

export default Work;
