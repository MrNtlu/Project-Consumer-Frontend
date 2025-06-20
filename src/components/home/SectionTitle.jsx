'use client'

export default function SectionTitle({ title, showSeeAll = false, onSeeAll }) {
    return (
        <div className="flex items-center justify-between px-4 py-3">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                {title}
            </h2>
            {showSeeAll && (
                <button
                    onClick={onSeeAll}
                    className="text-sm font-medium text-[#2196F3] hover:text-blue-600 transition-colors duration-200"
                >
                    See All →
                </button>
            )}
        </div>
    )
} 