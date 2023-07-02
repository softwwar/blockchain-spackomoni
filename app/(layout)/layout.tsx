import CoinLib from './coinlib';
import Footer from './footer';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CoinLib />
      {children}
      <Footer />
    </>
  );
}
