export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const query = searchParams.get('query');
        const type = searchParams.get('type') || 'movie';
        const page = searchParams.get('page') || '1';

        if (!query) {
            return Response.json(
                { error: 'Search query is required' },
                { status: 400 }
            );
        }

        const searchData = {
            search: query,
            page: parseInt(page)
        };

        // Search specific type only (no "all" option available)
        if (!['movie', 'tv', 'anime', 'game'].includes(type)) {
            return Response.json(
                { error: 'Invalid search type. Must be one of: movie, tv, anime, game' },
                { status: 400 }
            );
        }

        const results = await searchContentType(type, searchData);
        return Response.json({ [type]: results });
    } catch (error) {
        console.error('Error searching:', error);
        return Response.json(
            { error: 'Failed to search content' },
            { status: 500 }
        );
    }
}

async function searchContentType(type, searchData) {
    try {
        const searchUrl = `https://watchlistfy-01e517696b58.herokuapp.com/api/v1/${type}/search?search=${encodeURIComponent(searchData.search)}&page=${searchData.page}`;
        console.log(`Searching ${type} with URL:`, searchUrl);
        const response = await fetch(searchUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        console.log(`${type} search response status:`, response.status);

        if (!response.ok) {
            const errorText = await response.text();
            console.error(`Search API error for ${type}:`, errorText);
            throw new Error(`Search API responded with status: ${response.status}`);
        }

        const data = await response.json();
        console.log(`${type} search results:`, data);

        // Extract only essential data for search results
        if (data.data && Array.isArray(data.data)) {
            return data.data.map(item => ({
                _id: item._id,
                id: item.id,
                tmdb_id: item.tmdb_id,
                mal_id: item.mal_id,
                title_en: item.title_en,
                title_original: item.title_original,
                title_jp: item.title_jp,
                title: item.title,
                name: item.name,
                image_url: item.image_url,
                description: item.description,
                release_date: item.release_date,
                first_air_date: item.first_air_date,
                year: item.year,
                tmdb_vote: item.tmdb_vote,
                vote_average: item.vote_average,
                mal_score: item.mal_score,
                rating: item.rating,
                status: item.status,
                type: type
            }));
        }

        return [];
    } catch (error) {
        console.error(`Error searching ${type}:`, error);
        return [];
    }
} 