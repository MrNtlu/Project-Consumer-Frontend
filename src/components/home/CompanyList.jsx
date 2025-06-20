'use client'

import Image from 'next/image'
import { MoviePopularStudiosList, TVPopularStudiosList, AnimePopularStudiosList, GamePopularPublishersList } from '../../constants/homeConstants'
import { optimizeImageUrl } from '../../utils/imageOptimizer'

export default function CompanyList({ contentType = 'movie' }) {
    const getCompanyList = () => {
        switch (contentType) {
            case 'tv':
                return TVPopularStudiosList
            case 'anime':
                return AnimePopularStudiosList
            case 'game':
                return GamePopularPublishersList
            default:
                return MoviePopularStudiosList
        }
    }

    const companies = getCompanyList()

    return (
        <div className="overflow-x-auto">
            <div className="flex space-x-4 px-4 py-2">
                {companies.map((company, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 w-20 h-20 bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex items-center justify-center p-2"
                    >
                        <Image
                            src={optimizeImageUrl(company.image, 'w342')}
                            alt={company.name}
                            width={80}
                            height={80}
                            className="max-w-full max-h-full object-contain"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
} 