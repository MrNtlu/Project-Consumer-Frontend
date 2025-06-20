'use client'

import { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'next/navigation'
import Image from 'next/image'
import { MdSearch, MdFilterList, MdArrowBack } from 'react-icons/md'
import LoadingSpinner from '../../../components/LoadingSpinner'
import ContentCard from '../../../components/ContentCard'

const CONTENT_TYPES = [
    { id: 'movie', label: 'Movies' },
    { id: 'tv', label: 'TV Shows' },
    { id: 'anime', label: 'Anime' },
    { id: 'game', label: 'Games' },
]

export default function SearchPage() {
    const params = useParams()
    const searchParams = useSearchParams()
    const { searchTerm } = params
    const typeParam = searchParams.get('type') || 'movie'

    const [searchResults, setSearchResults] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [activeType, setActiveType] = useState(typeParam)
    const [searchQuery, setSearchQuery] = useState(decodeURIComponent(searchTerm))

    useEffect(() => {
        const fetchSearchResults = async () => {
            try {
                setLoading(true)
                setError(null)

                const response = await fetch(`/api/search?query=${encodeURIComponent(searchQuery)}&type=${activeType}&page=1`)

                if (!response.ok) {
                    throw new Error('Failed to search')
                }

                const data = await response.json()
                setSearchResults(data)
            } catch (err) {
                console.error('Search error:', err)
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        if (searchQuery) {
            fetchSearchResults()
        }
    }, [searchQuery, activeType])

    const handleSearch = (e) => {
        e.preventDefault()
        if (searchQuery.trim()) {
            window.history.pushState(null, '', `/search/${encodeURIComponent(searchQuery)}?type=${activeType}`)
        }
    }

    const getTotalResults = () => {
        if (!searchResults) return 0
        return searchResults[activeType]?.length || 0
    }

    const renderResults = () => {
        if (!searchResults) return null

        const results = searchResults[activeType] || []
        return (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {results.map((item, index) => (
                    <ContentCard
                        key={index}
                        item={item}
                        type={activeType}
                        index={index}
                    />
                ))}
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            {/* Header */}
            <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="max-w-6xl mx-auto px-4 py-4">
                    <div className="flex items-center justify-between mb-4">
                        <button
                            onClick={() => window.history.back()}
                            className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-[#2196F3] transition-colors duration-200"
                        >
                            <MdArrowBack size={20} />
                            <span className="text-sm font-medium">Back</span>
                        </button>

                        <div className="flex items-center space-x-3">
                            <Image
                                src="/static/images/logo.png"
                                alt="Watchlistfy Logo"
                                width={32}
                                height={32}
                                className="rounded-lg"
                            />
                            <h1 className="text-xl font-bold text-gray-900 dark:text-white">Search</h1>
                        </div>

                        <div className="w-16"></div>
                    </div>

                    {/* Search Form */}
                    <form onSubmit={handleSearch} className="flex items-center space-x-3 mb-4">
                        <div className="flex-1 relative">
                            <MdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search movies, TV shows, anime, games..."
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-[#2196F3] focus:border-transparent outline-none"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={!searchQuery.trim()}
                            className="px-6 py-3 bg-[#2196F3] text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200"
                        >
                            Search
                        </button>
                    </form>

                    {/* Content Type Filter */}
                    <div className="flex overflow-x-auto space-x-2 pb-2">
                        {CONTENT_TYPES.map((type) => (
                            <button
                                key={type.id}
                                onClick={() => setActiveType(type.id)}
                                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors duration-200 whitespace-nowrap ${activeType === type.id
                                    ? 'bg-[#2196F3] text-white'
                                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                                    }`}
                            >
                                <span>{type.label}</span>
                                {searchResults && searchResults[type.id] && (
                                    <span className="text-xs bg-white bg-opacity-20 px-2 py-1 rounded-full">
                                        {searchResults[type.id].length}
                                    </span>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </header>

            {/* Results */}
            <main className="max-w-6xl mx-auto px-4 py-6">
                {loading && (
                    <div className="flex justify-center items-center py-20">
                        <LoadingSpinner text="Searching..." />
                    </div>
                )}

                {error && (
                    <div className="text-center py-20">
                        <p className="text-red-600 dark:text-red-400 mb-2 font-semibold">Search Error</p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">{error}</p>
                    </div>
                )}

                {!loading && !error && searchResults && (
                    <>
                        <div className="mb-6">
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                Search Results for &quot;{searchQuery}&quot;
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                                {getTotalResults()} results found
                            </p>
                        </div>

                        {getTotalResults() === 0 ? (
                            <div className="text-center py-20">
                                <MdSearch size={64} className="mx-auto text-gray-400 mb-4" />
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                    No results found
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Try adjusting your search terms or browse our content
                                </p>
                            </div>
                        ) : (
                            renderResults()
                        )}
                    </>
                )}
            </main>
        </div>
    )
}