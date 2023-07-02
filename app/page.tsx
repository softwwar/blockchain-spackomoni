import Footer from './footer';
import Hero from './hero';
import MarqueeSlider from './marquee-slider';
import Selection from './selection';

export default function Home() {
  return (
    <main>
      <MarqueeSlider />
      <Hero />
      <Selection />
      <Footer />
    </main>
  );
}
