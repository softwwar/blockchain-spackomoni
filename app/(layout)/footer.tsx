import Link from 'next/link';

export default function Footer() {
  return (
    <section className='flex items-center justify-between py-8 text-white font-mont box'>
      <p>Copyright © 2024 Blockchain Spackomoni . All rights reserved.</p>
      <div>
        <Link href={'/'}>Privacy Policy</Link> •{' '}
        <Link href={'/'}>Terms of Service</Link>
      </div>
    </section>
  );
}
