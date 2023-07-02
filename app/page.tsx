import CoinLib from './coinlib';
import Footer from './footer';
import Hero from './hero';
import Selection from './selection';

export default function Home() {
  return (
    <main>
      <CoinLib />
      <Hero />
      <Selection />
      <Footer />
    </main>
  );
}
