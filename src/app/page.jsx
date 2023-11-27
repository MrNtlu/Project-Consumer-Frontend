export const dynamic = "force-dynamic";

import NavBar from "../components/NavBar";
import Results from "../components/Results";
import SearchBox from "../components/SearchBox";

const API_URL = process.env.BASE_URL;

export const metadata = {
  title: 'Watchlistfy - Home',
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
    <main>
      <NavBar />
      <SearchBox type={type} />
      <Results results={results} type={type} />
    </main>
    </div>
  );
}