// Content Tags for different sections
export const ContentTags = [
    'popular',   // 0
    'upcoming',  // 1
    'top',       // 2
    'extra'      // 3
];

// Streaming Platforms
export const MovieStreamingPlatformList = [
    {
        name: "Netflix",
        request: "Netflix",
        image: "https://image.tmdb.org/t/p/w154/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg"
    },
    {
        name: "Amazon Prime Video",
        request: "Amazon Prime Video",
        image: "https://image.tmdb.org/t/p/w154/dQeAar5H991VYporEjUspolDarG.jpg"
    },
    {
        name: "Disney Plus",
        request: "Disney Plus",
        image: "https://image.tmdb.org/t/p/w154/7YPdUs60C9qQQQfOFCgxpnF07D9.jpg"
    },
    {
        name: "HBO Max",
        request: "HBO Max",
        image: "https://image.tmdb.org/t/p/w154/b8edpTaLCHFrUnhpGQIZJUpFX7T.jpg"
    },
    {
        name: "Hulu",
        request: "Hulu",
        image: "https://image.tmdb.org/t/p/w154/bxBlRPEPpMVDc4jMhSrTf2339DW.jpg"
    },
    {
        name: "Apple TV Plus",
        request: "Apple TV Plus",
        image: "https://image.tmdb.org/t/p/original/2E03IAZsX4ZaUqM7tXlctEPMGWS.jpg"
    },
    {
        name: "Paramount Plus",
        request: "Paramount Plus",
        image: "https://image.tmdb.org/t/p/w154/h5DcR0J2EESLitnhR8xLG1QymTE.jpg"
    }
];

export const TVStreamingPlatformList = [
    ...MovieStreamingPlatformList,
    {
        name: "Peacock Premium",
        request: "Peacock Premium",
        image: "https://image.tmdb.org/t/p/w154/drPlq5beqXtBaP7MNs8W616YRhm.jpg"
    }
];

export const AnimeStreamingPlatformList = [
    {
        name: "Crunchyroll",
        request: "Crunchyroll",
        image: "https://image.tmdb.org/t/p/w154/mXeC4TrcgdU6ltE9bCBCEORwSQR.jpg"
    },
    {
        name: "Netflix",
        request: "Netflix",
        image: "https://image.tmdb.org/t/p/w154/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg"
    },
    {
        name: "Disney+",
        request: "Disney+",
        image: "https://image.tmdb.org/t/p/w154/7YPdUs60C9qQQQfOFCgxpnF07D9.jpg"
    }
];

// Popular Studios/Publishers
export const MoviePopularStudiosList = [
    {
        name: "Warner Bros. Pictures",
        request: "Warner Bros. Pictures",
        image: "https://image.tmdb.org/t/p/w342/zhD3hhtKB5qyv7ZeL4uLpNxgMVU.png"
    },
    {
        name: "Universal Pictures",
        request: "Universal Pictures",
        image: "https://image.tmdb.org/t/p/w342/8lvHyhjr8oUKOOy2dKXoALWKdp0.png"
    },
    {
        name: "Marvel Studios",
        request: "Marvel Studios",
        image: "https://image.tmdb.org/t/p/w342/hUzeosd33nzE5MCNsZxCGEKTXaQ.png"
    },
    {
        name: "Paramount",
        request: "Paramount",
        image: "https://image.tmdb.org/t/p/w342/gz66EfNoYPqHTYI4q9UEN4CbHRc.png"
    },
    {
        name: "Columbia Pictures",
        request: "Columbia Pictures",
        image: "https://image.tmdb.org/t/p/w342/71BqEFAF4V3qjjMPCpLuyJFB9A.png"
    }
];

export const TVPopularStudiosList = [
    {
        name: "HBO",
        request: "HBO",
        image: "https://image.tmdb.org/t/p/w342/tuomPhY2UtuPTqqFnKMVHvSb724.png"
    },
    {
        name: "Netflix",
        request: "Netflix",
        image: "https://image.tmdb.org/t/p/w342/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg"
    },
    {
        name: "BBC",
        request: "BBC",
        image: "https://image.tmdb.org/t/p/w342/dqT3yOTlfJRmtvk52Ccd1O6dZ0A.png"
    }
];

export const AnimePopularStudiosList = [
    {
        name: "Studio Ghibli",
        request: "Studio Ghibli",
        image: "https://cdn.myanimelist.net/s/common/company_logos/e6d02dfe-71e9-49d2-bef1-68e585c2605e_600x600_i?s=f8bba4a0f7ae97f80c95e463c7529bd6"
    },
    {
        name: "MAPPA",
        request: "MAPPA",
        image: "https://cdn.myanimelist.net/s/common/company_logos/e3a5163d-3b09-4e98-922b-79180a75539f_600x600_i?s=3289c478fd611569ebccd7ff076151df"
    },
    {
        name: "ufotable",
        request: "ufotable",
        image: "https://cdn.myanimelist.net/s/common/company_logos/03171393-4a85-451d-a025-4a3f05d1aede_600x600_i?s=48ebfd25c277dd148d41f88568f60aa6"
    }
];

export const GamePopularPublishersList = [
    {
        name: "Electronic Arts",
        request: "Electronic Arts",
        image: "https://img.logo.dev/ea.com?token=pk_C1fcC0OuSJS-HB9jCN0LIg"
    },
    {
        name: "Nintendo",
        request: "Nintendo",
        image: "https://img.logo.dev/nintendo.com?token=pk_C1fcC0OuSJS-HB9jCN0LIg"
    },
    {
        name: "Sony Interactive Entertainment",
        request: "Sony Interactive Entertainment",
        image: "https://img.logo.dev/sonyinteractive.com?token=pk_C1fcC0OuSJS-HB9jCN0LIg"
    }
];

// Countries
export const MoviePopularCountries = [
    { name: "USA", request: "US" },
    { name: "Japan", request: "JP" },
    { name: "France", request: "FR" },
    { name: "Great Britain", request: "GB" },
    { name: "Korea", request: "KR" },
    { name: "Canada", request: "CA" },
    { name: "Germany", request: "DE" },
    { name: "Italy", request: "IT" },
    { name: "Spain", request: "ES" },
    { name: "India", request: "IN" }
];

export const TVPopularCountries = [
    { name: "USA", request: "US" },
    { name: "Korea", request: "KR" },
    { name: "Great Britain", request: "GB" },
    { name: "Japan", request: "JP" },
    { name: "Canada", request: "CA" },
    { name: "Hong Kong", request: "HK" },
    { name: "France", request: "FR" },
    { name: "Germany", request: "DE" },
    { name: "China", request: "CN" },
    { name: "Brazil", request: "BR" }
];

// Genres
export const MovieGenreList = [
    { name: 'Discover', icon: '🧭' },
    { name: 'Action', icon: '🏃' },
    { name: 'Adventure', icon: '🗺️' },
    { name: 'Animation', icon: '✨' },
    { name: 'Comedy', icon: '😂' },
    { name: 'Crime', icon: '⚖️' },
    { name: 'Documentary', icon: '📖' },
    { name: 'Drama', icon: '🎭' },
    { name: 'Family', icon: '👨‍👩‍👧‍👦' },
    { name: 'Fantasy', icon: '🧙' },
    { name: 'History', icon: '🏛️' },
    { name: 'Horror', icon: '👻' },
    { name: 'Mystery', icon: '🔍' },
    { name: 'Romance', icon: '💖' },
    { name: 'Science Fiction', icon: '🤖' },
    { name: 'Thriller', icon: '🎬' },
    { name: 'War', icon: '⛑️' },
    { name: 'Western', icon: '🤠' }
];

export const TVGenreList = [
    { name: 'Discover', icon: '🧭' },
    { name: 'Action & Adventure', icon: '🥾' },
    { name: 'Animation', icon: '✨' },
    { name: 'Comedy', icon: '😂' },
    { name: 'Crime', icon: '⚖️' },
    { name: 'Documentary', icon: '📖' },
    { name: 'Drama', icon: '🎭' },
    { name: 'Family', icon: '👨‍👩‍👧‍👦' },
    { name: 'Kids', icon: '🧒' },
    { name: 'Mystery', icon: '🔍' },
    { name: 'Reality', icon: '📹' },
    { name: 'Sci-Fi & Fantasy', icon: '🚀' },
    { name: 'War & Politics', icon: '🏁' },
    { name: 'Western', icon: '🤠' }
];

export const AnimeGenreList = [
    { name: 'Discover', icon: '🧭' },
    { name: 'Action', icon: '🏃' },
    { name: 'Adventure', icon: '🗺️' },
    { name: 'Comedy', icon: '😂' },
    { name: 'Drama', icon: '🎭' },
    { name: 'Fantasy', icon: '🧙' },
    { name: 'Horror', icon: '👻' },
    { name: 'Mystery', icon: '🔍' },
    { name: 'Romance', icon: '💖' },
    { name: 'Sci-Fi', icon: '🤖' },
    { name: 'Slice of Life', icon: '🍃' },
    { name: 'Sports', icon: '🏋️' },
    { name: 'Supernatural', icon: '☪️' },
    { name: 'Suspense', icon: '❗' }
];

export const GameGenreList = [
    { name: 'Discover', icon: '🧭' },
    { name: 'Action', icon: '💥' },
    { name: 'Adventure', icon: '🗺️' },
    { name: 'Arcade', icon: '🎮' },
    { name: 'Board Games', icon: '♟️' },
    { name: 'Card', icon: '🃏' },
    { name: 'Casual', icon: '🛋️' },
    { name: 'Family', icon: '👨‍👩‍👧‍👦' },
    { name: 'Fighting', icon: '👊' },
    { name: 'Indie', icon: '💡' },
    { name: 'Puzzle', icon: '🧩' },
    { name: 'Racing', icon: '🏁' },
    { name: 'RPG', icon: '🎲' },
    { name: 'Shooter', icon: '🎯' },
    { name: 'Simulation', icon: '⚙️' },
    { name: 'Sports', icon: '🏀' },
    { name: 'Strategy', icon: '♔' }
]; 