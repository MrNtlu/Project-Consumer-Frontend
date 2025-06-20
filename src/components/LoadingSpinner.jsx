'use client'

export default function LoadingSpinner({ text = "Loading" }) {
    return (
        <div className="flex flex-col items-center justify-center p-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2196F3] mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                {text}...
            </p>
        </div>
    )
} 