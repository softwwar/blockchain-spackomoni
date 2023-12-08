import dynamic from 'next/dynamic';
const Hero = dynamic(async () => import('./hero'));
const Selection = dynamic(async () => import('./selection'));

export default function Home() {
  return (
    <main>
      <Hero />
      <Selection />
    </main>
  );
}
