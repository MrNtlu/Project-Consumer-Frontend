'use client'

import { useState } from 'react'
import { MdMovieFilter, MdTv, MdGamepad, MdSearch } from 'react-icons/md'
import { GiSwordman } from 'react-icons/gi'
import { ContentTags } from '../constants/homeConstants'
import PreviewList from './home/PreviewList'
import SectionTitle from './home/SectionTitle'
import GenreList from './home/GenreList'
import StreamingPlatformsList from './home/StreamingPlatformsList'
import CompanyList from './home/CompanyList'
import CountryList from './home/CountryList'


const CONTENT_TYPES = [
    { id: 'movie', label: 'Movies', icon: MdMovieFilter },
    { id: 'tv', label: 'TV Shows', icon: MdTv },
    { id: 'anime', label: 'Anime', icon: GiSwordman },
    { id: 'game', label: 'Games', icon: MdGamepad },
]

export default function ContentGrid({ data }) {
    const [activeType, setActiveType] = useState('movie')

    if (!data) {
        return (
            <div className="flex justify-center items-center py-10 sm:py-20">
                <div className="text-center">
                    <p className="text-gray-600 dark:text-gray-400">No data available</p>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-[#2196F3] to-[#1976D2] text-white py-6 sm:py-12">
                <div className="max-w-6xl mx-auto px-3 sm:px-6 text-center">
                    <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4">
                        Discover Your Next Favorite
                    </h1>
                    <p className="text-blue-100 text-sm sm:text-lg md:text-xl mb-4 sm:mb-8 px-2">
                        Explore movies, TV shows, anime, and games with AI-powered suggestions
                    </p>
                </div>
            </div>

            {/* Content Type Selection */}
            <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                <div className="max-w-6xl mx-auto">
                    <div className="flex overflow-x-auto scrollbar-hide">
                        {CONTENT_TYPES.map((type) => (
                            <button
                                key={type.id}
                                onClick={() => setActiveType(type.id)}
                                className={`flex items-center space-x-2 px-3 sm:px-6 py-3 sm:py-4 font-medium transition-colors duration-200 whitespace-nowrap border-b-2 ${activeType === type.id
                                    ? 'text-[#2196F3] border-[#2196F3]'
                                    : 'text-gray-600 dark:text-gray-400 border-transparent hover:text-gray-900 dark:hover:text-white'
                                    }`}
                            >
                                <type.icon size={18} className="sm:w-5 sm:h-5" />
                                <span className="text-sm sm:text-base">{type.label}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Content Sections */}
            <div className="max-w-6xl mx-auto py-4 sm:py-8">
                {/* Search Bar */}
                <div className="mb-6 sm:mb-8 px-3 sm:px-6">
                    <div className="relative max-w-md mx-auto">
                        <input
                            type="text"
                            placeholder="Search movies, TV shows, anime, games..."
                            className="w-full px-4 py-3 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:outline-none focus:border-[#2196F3] focus:ring-1 focus:ring-[#2196F3]"
                            onKeyPress={(e) => {
                                if (e.key === 'Enter' && e.target.value.trim()) {
                                    window.location.href = `/search/${encodeURIComponent(e.target.value.trim())}`
                                }
                            }}
                        />
                        <MdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    </div>
                </div>

                {/* Genres */}
                <div className="mb-6 sm:mb-8">
                    <SectionTitle title="Genres" />
                    <GenreList contentType={activeType} />
                </div>

                {/* Popular Content */}
                {data[activeType]?.popular && (
                    <div className="mb-6 sm:mb-8">
                        <SectionTitle title={`Popular ${CONTENT_TYPES.find(t => t.id === activeType)?.label}`} />
                        <PreviewList
                            data={data}
                            contentType={activeType}
                            category="popular"
                            title={`Popular ${activeType}`}
                        />
                    </div>
                )}

                {/* Streaming Platforms */}
                {(activeType === 'movie' || activeType === 'tv' || activeType === 'anime') && (
                    <div className="mb-6 sm:mb-8">
                        <SectionTitle title="Streaming Platforms" />
                        <StreamingPlatformsList contentType={activeType} />
                    </div>
                )}

                {/* Upcoming Content */}
                {data[activeType]?.upcoming && (
                    <div className="mb-6 sm:mb-8">
                        <SectionTitle title={`Upcoming ${CONTENT_TYPES.find(t => t.id === activeType)?.label}`} />
                        <PreviewList
                            data={data}
                            contentType={activeType}
                            category="upcoming"
                            title={`Upcoming ${activeType}`}
                        />
                    </div>
                )}

                {/* Countries */}
                {(activeType === 'movie' || activeType === 'tv') && (
                    <div className="mb-6 sm:mb-8">
                        <SectionTitle title="Popular Countries" />
                        <CountryList contentType={activeType} />
                    </div>
                )}

                {/* Top Rated Content */}
                {data[activeType]?.top && (
                    <div className="mb-6 sm:mb-8">
                        <SectionTitle title={`Top Rated ${CONTENT_TYPES.find(t => t.id === activeType)?.label}`} />
                        <PreviewList
                            data={data}
                            contentType={activeType}
                            category="top"
                            title={`Top ${activeType}`}
                        />
                    </div>
                )}

                {/* Studios/Publishers */}
                <div className="mb-6 sm:mb-8">
                    <SectionTitle title={activeType === 'game' ? 'Popular Publishers' : 'Popular Studios'} />
                    <CompanyList contentType={activeType} />
                </div>

                {/* Extra Content */}
                {data[activeType]?.extra && (
                    <div className="mb-6 sm:mb-8">
                        <SectionTitle title={`More ${CONTENT_TYPES.find(t => t.id === activeType)?.label}`} />
                        <PreviewList
                            data={data}
                            contentType={activeType}
                            category="extra"
                            title={`Extra ${activeType}`}
                        />
                    </div>
                )}
            </div>
        </div>
    )
} 