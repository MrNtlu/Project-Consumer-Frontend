'use client'

import ContentCard from '../ContentCard'
import LoadingSpinner from '../LoadingSpinner'

export default function PreviewList({ data, contentType, category, title }) {
    if (!data || !data[contentType] || !data[contentType][category]) {
        return <LoadingSpinner />
    }

    const items = data[contentType][category]

    if (!items || items.length === 0) {
        return (
            <div className="flex items-center justify-center h-48 text-gray-400">
                <p>No {title} available</p>
            </div>
        )
    }

    return (
        <div className="overflow-x-auto">
            <div className="flex space-x-4 px-4 py-2 pb-4">
                {items.map((item, index) => (
                    <ContentCard
                        key={`${contentType}-${category}-${index}`}
                        item={item}
                        type={contentType}
                        index={index}
                    />
                ))}
            </div>
        </div>
    )
} 