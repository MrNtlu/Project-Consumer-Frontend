export const dynamic = "force-dynamic";

import Head from "next/head";
import NavBar from "../components/NavBar";
import Results from "../components/Results";
import SearchBox from "../components/SearchBox";
import { Logo } from "../../public/static/images/logo_w_bg.png"
import { Banner } from "../../public/static/images/twitter_banner.png"

const API_URL = process.env.BASE_URL;

export const metadata = {
  title: 'Watchlistfy - Home',
  twitter_title: "Watchlistfy - All in One Place",
  description: "Discover Anime, Movies, TV Shows, Games - all in one app! Track & list your fun. Introducing Watchlistfy, the all-in-one watchlist tracker app that revolutionizes how you keep track of your entertainment journey. From movies and TV shows to anime and games, it is your one-stop movie log destination for all things fun.",
}

export default async function Home({ searchParams }) {
  const type = searchParams.type || "movie";

  const res = await fetch(
    `${API_URL}/${type}?sort=popularity&page=1`,
    { next: { revalidate: 10000 } }
  )

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  const results = data.data;
  const pagination = data.pagination;

  return (
    <div>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />

        <meta name="twitter:card" content={Banner} />
        <meta name="twitter:title" content={metadata.twitter_title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={Logo} />
      </Head>

      <NavBar />
      <SearchBox type={type} />
      <Results results={results} type={type} />
    </div>
  );
}