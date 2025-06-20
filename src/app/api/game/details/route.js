export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');

        if (!id) {
            return Response.json(
                { error: 'Game ID is required' },
                { status: 400 }
            );
        }

        const response = await fetch(`https://watchlistfy-01e517696b58.herokuapp.com/api/v1/game/details?id=${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`API responded with status: ${response.status}`);
        }

        const data = await response.json();

        return Response.json(data);
    } catch (error) {
        console.error('Error fetching game details:', error);
        return Response.json(
            { error: 'Failed to fetch game details' },
            { status: 500 }
        );
    }
} 