'use client'

import Image from 'next/image'
import { useState } from 'react'
import { MdStar, MdGamepad, MdMovie, MdTv } from 'react-icons/md'
import { GiSwordman } from 'react-icons/gi'
import { optimizeImageUrl } from '../utils/imageOptimizer'

export default function ContentCard({ item, type, index }) {
    const [imageError, setImageError] = useState(false)
    const [imageLoading, setImageLoading] = useState(true)

    // Get title based on content type
    const getTitle = () => {
        if (type === 'anime') {
            return item.title_en || item.title_original || 'Unknown Title'
        }
        return item.title_en || item.title_original || item.title || item.name || 'Unknown Title'
    }

    // Get optimized image URL
    const getImageUrl = () => {
        if (imageError) return null
        return optimizeImageUrl(item.image_url, 'w400')
    }

    // Get rating based on type
    // Note: Preview API doesn't include ratings for performance reasons
    // Ratings are available in details API (tmdb_vote, mal_score, etc.)
    const getRating = () => {
        if (type === 'anime') {
            return item.score || item.mal_score || null
        }
        return item.vote_average || item.rating || item.tmdb_vote || null
    }

    const title = getTitle()
    const imageUrl = getImageUrl()
    const rating = getRating()

    const handleClick = () => {
        // Get the actual ID from the item
        const id = item._id || item.id || index
        // Navigate to details page using Next.js router to preserve history
        window.history.pushState(null, '', `/app/details/${type}/${id}`)
        window.location.href = `/app/details/${type}/${id}`
    }

    return (
        <div
            className="flex-shrink-0 w-32 sm:w-36 md:w-40 cursor-pointer transform transition-all duration-200 hover:scale-105 group"
            onClick={handleClick}
        >
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden group-hover:shadow-lg transition-shadow duration-200">
                {/* Image Container */}
                <div className="relative h-44 sm:h-48 md:h-56 bg-gray-200 dark:bg-gray-700">
                    {imageUrl && !imageError ? (
                        <Image
                            src={imageUrl}
                            alt={title}
                            fill
                            className={`object-cover transition-opacity duration-300 ${imageLoading ? 'opacity-0' : 'opacity-100'}`}
                            sizes="(max-width: 640px) 128px, (max-width: 768px) 144px, 160px"
                            onLoad={() => setImageLoading(false)}
                            onError={() => {
                                setImageError(true)
                                setImageLoading(false)
                            }}
                        />
                    ) : (
                        <div className="flex items-center justify-center h-full">
                            <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-400 dark:text-gray-500">
                                {title.charAt(0).toUpperCase()}
                            </span>
                        </div>
                    )}

                    {/* Loading overlay */}
                    {imageLoading && imageUrl && !imageError && (
                        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse" />
                    )}


                </div>


                {/* Content */}
                <div className="p-2 sm:p-3 h-12 sm:h-14 md:h-16 flex flex-col justify-center">
                    <h3 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white line-clamp-2">
                        {title}
                    </h3>
                </div>
            </div>
        </div>
    )
} 