'use client'

import { Suspense, useEffect, useState } from 'react'
import ContentGrid from '../../components/ContentGrid'
import LoadingSpinner from '../../components/LoadingSpinner'
import { MdHome, MdSearch, MdBookmark, MdPerson, MdArrowBack, MdLightMode, MdDarkMode } from 'react-icons/md'
import { SiGoogleplay, SiAppstore } from 'react-icons/si'
import Image from 'next/image'

const CACHE_KEY = 'watchlistfy_preview_data'
const CACHE_EXPIRY = 5 * 60 * 1000 // 5 minutes

export default function AppPage() {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Check for cached data first
                const cached = sessionStorage.getItem(CACHE_KEY)
                if (cached) {
                    const { data: cachedData, timestamp } = JSON.parse(cached)
                    // Check if cache is still valid (not expired)
                    if (Date.now() - timestamp < CACHE_EXPIRY) {
                        console.log('Using cached data')
                        setData(cachedData)
                        setLoading(false)
                        return
                    }
                }

                console.log('Fetching fresh data')
                const response = await fetch('/api/preview?region=US')
                if (!response.ok) {
                    throw new Error('Failed to fetch data')
                }

                const result = await response.json()

                // Cache the data
                sessionStorage.setItem(CACHE_KEY, JSON.stringify({
                    data: result,
                    timestamp: Date.now()
                }))

                setData(result)
            } catch (err) {
                console.error('Error fetching data:', err)
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    console.log('Render state - loading:', loading, 'data exists:', !!data, 'error:', error)

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900" data-app-page="true">
            {/* App Navigation Bar - Only header for app pages */}
            <header className="sticky top-0 z-20 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="flex items-center justify-between px-3 sm:px-4 py-3">
                    {/* Left side - Back to landing */}
                    <a
                        href="/"
                        className="flex items-center space-x-1 sm:space-x-2 text-gray-600 dark:text-gray-300 hover:text-[#2196F3] transition-colors duration-200"
                    >
                        <MdArrowBack size={20} />
                        <span className="text-xs sm:text-sm font-medium hidden xs:inline">Landing</span>
                        <span className="text-xs sm:text-sm font-medium xs:hidden">Back</span>
                    </a>

                    {/* Center - Logo and title */}
                    <div className="flex items-center space-x-2 sm:space-x-3">
                        <Image
                            src="/static/images/logo.png"
                            alt="Watchlistfy Logo"
                            width={28}
                            height={28}
                            className="rounded-lg sm:w-8 sm:h-8"
                        />
                        <h1 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">Watchlistfy</h1>
                    </div>

                    {/* Right side - Theme toggle and search */}
                    <div className="flex items-center space-x-1 sm:space-x-2">
                        <button
                            className="p-1.5 sm:p-2 text-gray-600 dark:text-gray-300 hover:text-[#2196F3] transition-colors duration-200"
                            onClick={() => {
                                if (document.documentElement.classList.contains('dark')) {
                                    document.documentElement.classList.remove('dark');
                                    localStorage.setItem('theme', 'light');
                                } else {
                                    document.documentElement.classList.add('dark');
                                    localStorage.setItem('theme', 'dark');
                                }
                            }}
                        >
                            <MdLightMode size={18} className="block dark:hidden sm:w-5 sm:h-5" />
                            <MdDarkMode size={18} className="hidden dark:block sm:w-5 sm:h-5" />
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            {loading ? (
                <div className="flex justify-center items-center py-10 sm:py-20">
                    <LoadingSpinner text="Loading amazing content" />
                </div>
            ) : error ? (
                <div className="flex justify-center items-center py-10 sm:py-20">
                    <div className="text-center px-4">
                        <p className="text-red-600 dark:text-red-400 mb-2 font-semibold">Error Loading Content</p>
                        <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">{error}</p>
                        <button
                            onClick={() => {
                                sessionStorage.removeItem(CACHE_KEY)
                                window.location.reload()
                            }}
                            className="px-4 py-2 bg-[#2196F3] text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
                        >
                            Retry
                        </button>
                    </div>
                </div>
            ) : data ? (
                <div>
                    <ContentGrid data={data} />
                </div>
            ) : (
                <div className="flex justify-center items-center py-10 sm:py-20">
                    <div className="text-center px-4">
                        <p className="text-gray-600 dark:text-gray-400 mb-4">No data available</p>
                        <button
                            onClick={() => {
                                sessionStorage.removeItem(CACHE_KEY)
                                window.location.reload()
                            }}
                            className="px-4 py-2 bg-[#2196F3] text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
                        >
                            Retry
                        </button>
                    </div>
                </div>
            )}

            {/* Mobile App Promotion Banner */}
            <div className="bg-gradient-to-r from-[#2196F3] to-[#1976D2] text-white py-4 sm:py-6 px-3 sm:px-4 mt-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-base sm:text-lg font-bold mb-2">Get the Full Experience</h3>
                    <p className="text-blue-100 mb-3 sm:mb-4 text-xs sm:text-sm px-2">
                        Download our mobile app for personalized lists, offline access, and AI recommendations
                    </p>
                    <div className="flex flex-col gap-2 sm:flex-row sm:gap-3 justify-center items-center">
                        <a
                            href="https://play.google.com/store/apps/details?id=com.mrntlu.localstorage"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center space-x-2 sm:space-x-3 bg-black bg-opacity-20 hover:bg-opacity-30 px-3 sm:px-4 py-2 rounded-lg transition-all duration-200 w-full sm:w-auto"
                        >
                            <SiGoogleplay size={16} className="sm:w-5 sm:h-5" />
                            <span className="text-xs sm:text-sm font-medium">Get on Google Play</span>
                        </a>
                        <a
                            href="https://apps.apple.com/app/watchlistfy/id6446774935"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center space-x-2 sm:space-x-3 bg-black bg-opacity-20 hover:bg-opacity-30 px-3 sm:px-4 py-2 rounded-lg transition-all duration-200 w-full sm:w-auto"
                        >
                            <SiAppstore size={16} className="sm:w-5 sm:h-5" />
                            <span className="text-xs sm:text-sm font-medium">Get on App Store</span>
                        </a>
                    </div>
                </div>
            </div>


        </div>
    )
} 