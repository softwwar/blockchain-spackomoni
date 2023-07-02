import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <section>
      <div className='py-10 box'>
        <h1 className='my-10 text-5xl font-bold text-center text-white'>
          Connect Wallet
        </h1>
        <div className='grid grid-cols-3 gap-20 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'>
          {data.map((_, idx) => (
            <div key={_} className='flex flex-col items-center'>
              <Link href={'/form'}>
                <Image
                  src={`/assets/wallets/asset ${idx}.png`}
                  alt={_}
                  width={100}
                  className='rounded-full'
                  height={100}
                />
              </Link>
              <p className='mt-3 font-bold text-white'>{_}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const data = [
  'MetaMask',
  'Trust',
  'Argent',
  'Atomic',
  'Saitamask',
  'Terra',
  'Bitpay',
  'Maiar',
  'MyKey',
  'Atwallet',
  'Authereum',
  'Bitfrost',
  'Coinbase',
  'Coinomi',
  "D'Cent",
  'Easypocket',
  'Ledger',
  'Coolwallet',
  'CybavoWallet',
  'Coin98',
  'Harmony',
  'PeakDefi',
  'GridPlus',
  'VIA',
  'Imtoken',
  'Infinito',
  'Infinity',
  'kardachain',
  'keplr',
  'Midas',
  'Morixwallet',
  'Midas',
  'Nash',
  'Onto',
  'Ownbit',
  'Pillar',
  'Rainbow',
  'Safepal',
  'Sollet',
  'Spark',
  'Spatium',
  'Tokenary',
  'Tokenpocket',
  'Tomo',
  'Torus',
  'Coinbase',
  'XDC',
  'Wallet.io',
  'Walleth',
  'Zelcore',
  'Phantom',
  'Exodus',
];
