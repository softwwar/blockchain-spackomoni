import CoinLib from './coinlib';
import {Suspense} from 'react';
import Footer from './footer';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Suspense>
        <CoinLib />
      </Suspense>
      {children}
      <Footer />
    </>
  );
}
