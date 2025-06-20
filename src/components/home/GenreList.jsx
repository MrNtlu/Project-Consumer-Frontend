'use client'

import { MovieGenreList, TVGenreList, AnimeGenreList, GameGenreList } from '../../constants/homeConstants'

export default function GenreList({ contentType = 'movie' }) {
    const getGenreList = () => {
        switch (contentType) {
            case 'tv':
                return TVGenreList
            case 'anime':
                return AnimeGenreList
            case 'game':
                return GameGenreList
            default:
                return MovieGenreList
        }
    }

    const genres = getGenreList()

    return (
        <div className="px-4 py-2">
            <div className="flex flex-wrap gap-2">
                {genres.map((genre, index) => (
                    <button
                        key={index}
                        className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors duration-200"
                    >
                        <span>{genre.icon}</span>
                        <span>{genre.name}</span>
                    </button>
                ))}
            </div>
        </div>
    )
} 