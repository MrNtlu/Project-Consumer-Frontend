export const dynamic = "force-dynamic";

import Hero from '../components/landing-page/hero'
import Features from '../components/landing-page/pricing'
import Pricing from '../components/landing-page/features'

export const metadata = {
  title: 'Watchlistfy - Home',
}

export default function Home({ searchParams }) {
  return (
    <div>
    <main>
        <Hero />
        <Features />
        <Pricing />
    </main>
    </div>
  );
}