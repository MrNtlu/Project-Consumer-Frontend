import Features from '@/components/features'
import Hero from '@/components/hero'
import Pricing from '@/components/pricing'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Pricing />
    </main>
  )
}
