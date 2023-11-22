import Results from "../../../components/Results";
import NoSearchResult from "../../../components/NoSearchResult";
import SearchBox from "../../../components/SearchBox";

const API_URL = process.env.BASE_URL;

export default async function SearchPage({ params, searchParams }) {
    const res = await fetch(
        `${API_URL}/${searchParams.type}/search?search=${params.searchTerm}&page=1`
    );

    if (!res.ok) {
        throw new Error("Error fetching data");
    }

    const data = await res.json();
    const results = data.data;

    return (
        <div>
            <SearchBox type={searchParams.type} />

            {(results == null || (results && results.length === 0)) && (
                <NoSearchResult search={params.searchTerm} />
            )}

            {results && <Results type={searchParams.type} results={results} />}
        </div>
    );
}