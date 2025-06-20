import './globals.css'
import { Inter } from 'next/font/google'
import ConditionalHeader from '../components/ConditionalHeader'
import MobileAppBanner from '../components/MobileAppBanner'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
  title: {
    default: 'Watchlistfy - AI-Powered Entertainment Tracker',
    template: '%s | Watchlistfy'
  },
  description: 'Track movies, TV shows, anime, and games with AI-powered recommendations. Get personalized suggestions and never miss your next favorite entertainment.',
  keywords: [
    'watchlist',
    'movie tracker',
    'tv show tracker',
    'anime tracker',
    'game tracker',
    'entertainment tracker',
    'AI recommendations',
    'movie recommendations',
    'tv show recommendations',
    'anime recommendations',
    'game recommendations',
    'TMDB',
    'MyAnimeList',
    'RAWG',
    'streaming guide',
    'what to watch'
  ],
  authors: [{ name: 'Watchlistfy Team' }],
  creator: 'Watchlistfy',
  publisher: 'Watchlistfy',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://watchlistfy.vercel.app',
    siteName: 'Watchlistfy',
    title: 'Watchlistfy - AI-Powered Entertainment Tracker',
    description: 'Track movies, TV shows, anime, and games with AI-powered recommendations',
    images: [
      {
        url: '/static/images/twitter_banner.png',
        width: 1200,
        height: 630,
        alt: 'Watchlistfy - Track Your Entertainment',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Watchlistfy - AI-Powered Entertainment Tracker',
    description: 'Track movies, TV shows, anime, and games with AI-powered recommendations',
    images: ['/static/images/twitter_banner.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

import Providers from './Providers'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <MobileAppBanner />
          <div className="mobile-banner-offset">
            <ConditionalHeader />
            {children}
          </div>
          <Analytics />
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  )
}
