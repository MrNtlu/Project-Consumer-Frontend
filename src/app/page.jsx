'use client'

export const dynamic = "force-dynamic";

import { BsApple } from 'react-icons/bs'
import Image from 'next/image'
import { memo } from 'react'
import dynamicImport from 'next/dynamic'
import styles from './animations.module.css'

const Pricing = dynamicImport(() => import('../components/landing-page/pricing'), {
  loading: () => <div className="min-h-[400px] animate-pulse bg-gray-100" />
})
const Footer = dynamicImport(() => import('../components/landing-page/footer'))
const Screenshots = dynamicImport(() => import('../components/landing-page/screenshots'), {
  loading: () => <div className="min-h-[600px] animate-pulse bg-gray-50" />
})


const GooglePlayButton = memo(function GooglePlayButton({ href, className = "" }) {
  return (
    <a href={href} className={`${className} transform transition-all duration-300 hover:scale-105`} aria-label="Download Watchlistfy on Google Play">
      <div className="bg-[#070705] hover:bg-gray-800 text-white rounded-lg px-6 py-3 flex items-center gap-3 transition-all duration-300 w-[200px] h-[64px] shadow-lg hover:shadow-xl border border-gray-600">
        <Image
          src="/static/images/play-icon.svg"
          alt="Google Play"
          width={32}
          height={32}
          className="flex-shrink-0"
        />
        <div className="flex flex-col justify-center leading-tight">
          <span className="text-xs font-semibold opacity-95">GET IT ON</span>
          <span className="text-lg font-bold -mt-1">Google Play</span>
        </div>
      </div>
    </a>
  )
})

const AppStoreButton = memo(function AppStoreButton({ href, className = "" }) {
  return (
    <a href={href} className={`${className} transform transition-all duration-300 hover:scale-105`} aria-label="Download Watchlistfy on the App Store">
      <div className="bg-[#070705] hover:bg-gray-800 text-white rounded-lg px-6 py-3 flex items-center gap-3 transition-all duration-300 w-[200px] h-[64px] shadow-lg hover:shadow-xl border border-gray-600">
        <BsApple size={28} className="text-white flex-shrink-0" />
        <div className="flex flex-col justify-center leading-tight">
          <span className="text-xs font-semibold opacity-95">Download on the</span>
          <span className="text-lg font-bold -mt-1">App Store</span>
        </div>
      </div>
    </a>
  )
})

function HeroWithFeatures() {
  return (
    <main id="home" className="container mx-auto px-6 py-12">
      <section className="text-center">
        <h1 className="text-5xl font-bold text-sky-500">
          <span className="text-[#2196F3] bg-gradient-to-r from-[#2196F3] to-blue-600 bg-clip-text text-transparent animate-pulse">Tired of &ldquo;What to Watch?&rdquo;</span>
        </h1>
        <p className="mt-4 text-xl text-gray-600">Watchlistfy is your ultimate guide to the world of entertainment.</p>
      </section>

      <section className="mt-8 flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-8">
        {/* Left Features - Desktop only */}
        <div className="hidden lg:flex w-1/4 flex-col justify-center items-center gap-6">
          <div className={`bg-gray-200/40 border border-black/10 p-4 rounded-lg w-full flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-lg ${styles.fadeInDelayed1} ${styles.featureCard}`}>
            <h3 className="font-bold text-lg text-[#2196F3]">Everything in One Place</h3>
            <p className="mt-2 text-sm text-black">Movies, TV Shows, Anime, Games in one app. Single app to track your entertainment.</p>
          </div>
          <div className={`bg-gray-200/40 border border-black/10 p-4 rounded-lg w-full flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-lg ${styles.fadeInDelayed2} ${styles.featureCard}`}>
            <h3 className="font-bold text-lg text-[#2196F3]">Track & Log</h3>
            <p className="mt-2 text-sm text-black">Track & log episodes and seasons, keep organized, track how many times you finished.</p>
          </div>
          <div className={`bg-gray-200/40 border border-black/10 p-4 rounded-lg w-full flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-lg ${styles.fadeInDelayed3} ${styles.featureCard}`}>
            <h3 className="font-bold text-lg text-[#2196F3]">Streaming Guide</h3>
            <p className="mt-2 text-sm text-black">Find where to stream, buy or rent like Netflix, Disney+, Steam, Crunchyroll and more.</p>
          </div>
        </div>

        {/* Center Image */}
        <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/2 flex justify-center items-center">
          <Image
            alt="Mobile app interface screenshots"
            className="w-full max-w-xs md:max-w-md lg:max-w-lg"
            src="/static/images/combination.png"
            width={500}
            height={600}
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 66vw, (max-width: 1024px) 50vw, 50vw"
          />
        </div>

        {/* Right Features - Desktop only */}
        <div className="hidden lg:flex w-1/4 flex-col justify-center items-center gap-6">
          <div className={`bg-gray-200/40 border border-black/10 p-4 rounded-lg w-full flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-lg ${styles.fadeInDelayed1} ${styles.featureCard}`}>
            <h3 className="font-bold text-lg text-[#2196F3]">AI Suggestions</h3>
            <p className="mt-2 text-sm text-gray-600">Get suggestions based on your history. Our AI will suggest you what to watch/play next.</p>
          </div>
          <div className={`bg-gray-200/40 border border-black/10 p-4 rounded-lg w-full flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-lg ${styles.fadeInDelayed2} ${styles.featureCard}`}>
            <h3 className="font-bold text-lg text-[#2196F3]">Your Lists</h3>
            <p className="mt-2 text-sm text-gray-600">Create your own curated and todo lists to watch with your friends later.</p>
          </div>
          <div className={`bg-gray-200/40 border border-black/10 p-4 rounded-lg w-full flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-lg ${styles.fadeInDelayed3} ${styles.featureCard}`}>
            <h3 className="font-bold text-lg text-[#2196F3]">Reminders</h3>
            <p className="mt-2 text-sm text-gray-600">Set reminders so you don&apos;t miss when it&apos;s released!</p>
          </div>
        </div>

        {/* All Features Grid - Mobile/Tablet only */}
        <div className="lg:hidden w-full grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
          <div className={`bg-gray-200/40 border border-black/10 p-4 rounded-lg flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-lg ${styles.fadeInDelayed1} ${styles.featureCard}`}>
            <h3 className="font-bold text-lg text-[#2196F3]">Everything in One Place</h3>
            <p className="mt-2 text-sm text-gray-600">Movies, TV Shows, Anime, Games in one app. Single app to track your entertainment.</p>
          </div>
          <div className={`bg-gray-200/40 border border-black/10 p-4 rounded-lg flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-lg ${styles.fadeInDelayed2} ${styles.featureCard}`}>
            <h3 className="font-bold text-lg text-[#2196F3]">Track & Log</h3>
            <p className="mt-2 text-sm text-gray-600">Track & log episodes and seasons, keep organized, track how many times you finished.</p>
          </div>
          <div className={`bg-gray-200/40 border border-black/10 p-4 rounded-lg flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-lg ${styles.fadeInDelayed3} ${styles.featureCard}`}>
            <h3 className="font-bold text-lg text-[#2196F3]">Streaming Guide</h3>
            <p className="mt-2 text-sm text-gray-600">Find where to stream, buy or rent like Netflix, Disney+, Steam, Crunchyroll and more.</p>
          </div>
          <div className={`bg-gray-200/40 border border-black/10 p-4 rounded-lg flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-lg ${styles.fadeInDelayed1} ${styles.featureCard}`}>
            <h3 className="font-bold text-lg text-[#2196F3]">AI Suggestions</h3>
            <p className="mt-2 text-sm text-gray-600">Get suggestions based on your history. Our AI will suggest you what to watch/play next.</p>
          </div>
          <div className={`bg-gray-200/40 border border-black/10 p-4 rounded-lg flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-lg ${styles.fadeInDelayed2} ${styles.featureCard}`}>
            <h3 className="font-bold text-lg text-[#2196F3]">Your Lists</h3>
            <p className="mt-2 text-sm text-gray-600">Create your own curated and todo lists to watch with your friends later.</p>
          </div>
          <div className={`bg-gray-200/40 border border-black/10 p-4 rounded-lg flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-lg ${styles.fadeInDelayed3} ${styles.featureCard}`}>
            <h3 className="font-bold text-lg text-[#2196F3]">Reminders</h3>
            <p className="mt-2 text-sm text-gray-600">Set reminders so you don&apos;t miss when it&apos;s released!</p>
          </div>
        </div>
      </section>


      <section className="mt-6 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 relative">
        <GooglePlayButton
          href="https://play.google.com/store/apps/details?id=com.mrntlu.projectconsumer"
        />
        <AppStoreButton
          href="https://apps.apple.com/us/app/watchlistfy-ai-tracker/id6476311748"
        />
      </section>

      <footer className="text-center mt-8">
        <p className="text-xs text-gray-500">*Not a streaming service - We&apos;re your personal entertainment tracker.</p>
      </footer>

    </main>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800" style={{ scrollBehavior: 'smooth' }}>
      <HeroWithFeatures />
      <Screenshots />
      <Pricing />
      <Footer />
    </div>
  );
}