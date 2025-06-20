export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const region = searchParams.get('region') || 'US';

        const response = await fetch(`https://watchlistfy-01e517696b58.herokuapp.com/api/v1/preview?region=${region}`, {
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
        console.error('Error fetching preview data:', error);
        return Response.json(
            { error: 'Failed to fetch preview data' },
            { status: 500 }
        );
    }
} 