import Header from '../components/Header';
import './globals.css'
import Providers from "./Providers";
import Footer from "../components/landing-page/footer";

export const metadata = {
  title: 'Watchlistfy',
  description: "Discover Anime, Movies, TV Shows, Games - all in one app! Track & list your fun. Introducing Watchlistfy, the all-in-one watchlist tracker app that revolutionizes how you keep track of your entertainment journey. From movies and TV shows to anime and games, it is your one-stop movie log destination for all things fun.",
  keywords: ["Watchlistfy", "tracker", "Movie Tracker", "Anime", "Game", "TV Series", "Shows"],
  appLinks: {
    android: {
      package: 'com.mrntlu.projectconsumer',
      app_name: 'Watchlistfy: Watchlist Tracker',
    },
  },
  openGraph: {
    type: 'website',
    url: `https://watchlistfy.com/`,
    title: "Watchlistfy",
    description: "Discover Anime, Movies, TV Shows, Games - all in one app! Track & list your fun. Introducing Watchlistfy, the all-in-one watchlist tracker app that revolutionizes how you keep track of your entertainment journey. From movies and TV shows to anime and games, it is your one-stop movie log destination for all things fun.",
    images: [{ url: "/static/images/twitter_banner.png", alt: 'Movie Poster' }],
  },
  twitter: {
    cardType: 'summary_large_image',
    title: "Watchlistfy",
    description: "Discover Anime, Movies, TV Shows, Games - all in one app! Track & list your fun. Introducing Watchlistfy, the all-in-one watchlist tracker app that revolutionizes how you keep track of your entertainment journey. From movies and TV shows to anime and games, it is your one-stop movie log destination for all things fun.",
    images: ["/static/images/twitter_banner.png"],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
