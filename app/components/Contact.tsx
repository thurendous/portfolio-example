'use client';

import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

const Contact = () => {
  const [result, setResult] = React.useState('');

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult('Sending the message...!');
    const formData = new FormData(event.target as HTMLFormElement);

    if (!process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY) {
      throw new Error('NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY is not set');
    }

    formData.append('access_key', process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY);

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult('Form Submitted Successfully');
      (event.target as HTMLFormElement).reset();
    } else {
      console.log('Error', data);
      setResult(data.message);
    }
  };

  return (
    <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'>
      <h4 className='text-center mb-2 text-lg font-ovo'>Connect with me</h4>
      <h2 className='text-center text-5xl font-ovo'>Get in touch</h2>
      <p className='text-center text-xl mx-auto font-ovo mt-4'>
        I'm currently looking for new opportunities, my inbox is always open.
        Whether you have a question or just want to say hi, I'll try my best to
        get back to you!
      </p>
      <form className='max-w-2xl mx-auto' onSubmit={onSubmit}>
        <div className='grid grid-cols-2 gap-6 mt-10 mb-8'>
          <input
            type='text'
            placeholder='Enter your name'
            className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkhover/30 dark:border-white/90'
            name='name'
          />
          <input
            type='email'
            placeholder='Enter your email'
            className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkhover/30 dark:border-white/90'
            name='email'
          />
        </div>
        <textarea
          rows={6}
          placeholder='Enter your message'
          className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkhover/30 dark:border-white/90'
          name='message'
        />
        <div className='flex justify-center'>
          <button
            type='submit'
            className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 cursor-pointer dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkhover'
          >
            Submit now{' '}
            <Image
              src={assets.right_arrow_white}
              alt='arrow-right'
              className='w-5'
            />
          </button>

        </div>
        <p className='mt-4 text-center text-md text-gray-500 font-ovo'>{result}</p>
      </form>
    </div>
  );
};

export default Contact;
