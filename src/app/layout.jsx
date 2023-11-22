import Header from '../components/Header';
import './globals.css'
import Providers from "./Providers";
import Footer from "../components/landing-page/footer";
import Head from 'next/head';
import { Logo } from "../../public/static/images/logo_w_bg.png"
import { Banner } from "../../public/static/images/twitter_banner.png"

export const metadata = {
  title: 'Watchlistfy',
  twitter_title: "Watchlistfy - All in One Place",
  description: "Discover Anime, Movies, TV Shows, Games - all in one app! Track & list your fun. Introducing Watchlistfy, the all-in-one watchlist tracker app that revolutionizes how you keep track of your entertainment journey. From movies and TV shows to anime and games, it is your one-stop movie log destination for all things fun.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />

        <meta name="twitter:card" content={Banner} />
        <meta name="twitter:title" content={metadata.twitter_title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={Logo} />
      </Head>
      <body>
        <Providers>
          <Header />

          {children}

          <Footer />
        </Providers>
      </body>
    </html>
  )
}
