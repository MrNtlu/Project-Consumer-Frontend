export const dynamic = "force-dynamic";

import Hero from '../components/landing-page/hero'
import Pricing from '../components/landing-page/pricing'
import Features from '../components/landing-page/features'
import { FaRobot } from 'react-icons/fa6'

export const metadata = {
  title: 'Watchlistfy - Home',
}

export default function Home() {
  return (
    <div>
    <main>
        <Hero />
        <Features />
        <Pricing />
        <div className="fixed bottom-5 right-5 z-50">
          <a href="https://www.smartbio.me/cluv8s9xx0000ydw1i8uhjv7j">
          <div className="w-16 h-16 inline-flex items-center justify-center rounded-full bg-[#2196F3] text-white mb-5 dark:hover:bg-gray-200 dark:hover:text-[#2196F3] hover:bg-[#212121] hover:text-[#2196F3]">
            <FaRobot size={28}/>
          </div>
          </a>
        </div>
    </main>
    </div>
  );
}