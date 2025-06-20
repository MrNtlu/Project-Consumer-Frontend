'use client'

export const dynamic = "force-dynamic";

import Hero from '../components/landing-page/hero'
import Pricing from '../components/landing-page/pricing'
import Features from '../components/landing-page/features'
import Footer from '../components/landing-page/footer'
import { FaRobot } from 'react-icons/fa6'

// Metadata moved to layout.jsx since this is now a Client Component

// Getting Started Component
function GettingStarted() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-5">
        <div className="text-center mb-16">
          <h2 className="sm:text-4xl text-3xl font-bold title-font text-gray-900 dark:text-white mb-4">
            Get Started in <span className="text-[#2196F3]">3 Simple Steps</span>
          </h2>
          <p className="text-lg leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-600 dark:text-gray-300">
            Transform your entertainment tracking experience in minutes
          </p>
        </div>

        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3">
            <div className="h-full bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 inline-flex items-center justify-center rounded-full bg-[#2196F3] text-white text-2xl font-bold mb-6 mx-auto">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Download & Sign Up
              </h3>
              <p className="leading-relaxed text-gray-600 dark:text-gray-300 mb-6">
                Get Watchlistfy free from Google Play or App Store. Create your account in seconds.
              </p>
              <div className="text-sm text-[#2196F3] font-medium">
                Free to download
              </div>
            </div>
          </div>

          <div className="p-4 md:w-1/3">
            <div className="h-full bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 inline-flex items-center justify-center rounded-full bg-green-500 text-white text-2xl font-bold mb-6 mx-auto">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Import Your Collections
              </h3>
              <p className="leading-relaxed text-gray-600 dark:text-gray-300 mb-6">
                Import from MyAnimeList, Steam, TMDB, AniList and Trakt.tv to instantly import your existing lists.
              </p>
              <div className="text-sm text-green-500 font-medium">
                Keep Your History
              </div>
            </div>
          </div>

          <div className="p-4 md:w-1/3">
            <div className="h-full bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 inline-flex items-center justify-center rounded-full bg-purple-500 text-white text-2xl font-bold mb-6 mx-auto">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Rate & Discover
              </h3>
              <p className="leading-relaxed text-gray-600 dark:text-gray-300 mb-6">
                Rate and add your content and let our AI discover your next favorite movie, show, anime, or game.
              </p>
              <div className="text-sm text-purple-500 font-medium">
                AI-Powered Discovery
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <Features />
        <GettingStarted />
        <Pricing />
        <Footer />
      </main>
    </div>
  );
}