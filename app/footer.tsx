import Link from 'next/link';

export default function Footer() {
  return (
    <section className='flex items-center justify-between pb-8 text-white font-mont box'>
      <p>Copyright © 2022 Blockchain Rectification . All rights reserved.</p>
      <div>
        <Link href={'/'}>Privacy Policy</Link> •{' '}
        <Link href={'/'}>Terms of Service</Link>
      </div>
    </section>
  );
}
