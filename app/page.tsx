import Footer from './footer';
import Hero from './hero';
import Marquee from './marquee';
import Selection from './selection';

export default function Home() {
  return (
    <main>
      <Marquee />
      <Hero />
      <Selection />
      <Footer />
    </main>
  );
}
