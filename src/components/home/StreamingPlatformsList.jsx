'use client'

import Image from 'next/image'
import { MovieStreamingPlatformList, TVStreamingPlatformList, AnimeStreamingPlatformList } from '../../constants/homeConstants'
import { optimizeImageUrl } from '../../utils/imageOptimizer'

export default function StreamingPlatformsList({ contentType = 'movie', selectedCountryCode = 'US' }) {
    const getPlatformList = () => {
        switch (contentType) {
            case 'tv':
                return TVStreamingPlatformList
            case 'anime':
                return AnimeStreamingPlatformList
            default:
                return MovieStreamingPlatformList
        }
    }

    const platforms = getPlatformList()

    return (
        <div className="overflow-x-auto">
            <div className="flex space-x-4 px-4 py-2">
                {platforms.map((platform, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 w-16 h-16 bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                    >
                        <Image
                            src={optimizeImageUrl(platform.image, 'w154')}
                            alt={platform.name}
                            width={64}
                            height={64}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
} 