'use client'

import React from 'react'
import Image from 'next/image'
import { BsStars, BsCalendar2Check, BsGraphUp, BsCollectionPlay, BsDownload } from 'react-icons/bs'
import { FaRobot, FaFilter, FaChartLine, FaHeart, FaGamepad } from 'react-icons/fa'
import { AiFillStar } from 'react-icons/ai'
import { MdMovieFilter, MdTv, MdImportExport, MdSecurity, MdAnimation } from 'react-icons/md'
import { SiSteam, SiMyanimelist } from 'react-icons/si'

export default function Features() {
    return (
        <section id="features" className="text-gray-600 dark:text-gray-300 body-font py-24">
            <div className="container px-5 mx-auto">
                {/* Header */}
                <div className="text-center mb-20 animate-fade-in-up">
                    <h2 className="sm:text-4xl text-3xl font-bold title-font text-gray-900 dark:text-white mb-4">
                        Why Choose <span className="text-[#2196F3] bg-gradient-to-r from-[#2196F3] to-blue-600 bg-clip-text text-transparent">Watchlistfy</span>?
                    </h2>
                    <p className="text-lg leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-600 dark:text-gray-300">
                        The ultimate entertainment tracker that brings all your favorite content together with the power of AI
                    </p>
                </div>



                {/* Feature Grid */}
                <div className="flex flex-wrap -m-4">
                    {/* AI Recommendations - First Item */}
                    <div className="p-4 md:w-1/2 lg:w-1/3 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                        <div className="h-full bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-[#2196F3] mb-5 group-hover:animate-bounce">
                                <FaRobot size={24} />
                            </div>
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">AI-Powered Suggestions</h2>
                            <p className="leading-relaxed text-base text-gray-600 dark:text-gray-300 mb-4">
                                Our AI suggestion analyzes your ratings and viewing patterns to discover hidden gems you&apos;ll absolutely love.
                            </p>
                            <div className="text-sm text-[#2196F3] font-medium">
                                Smart • Accurate • Personal
                            </div>
                        </div>
                    </div>

                    {/* All-in-One Tracking */}
                    <div className="p-4 md:w-1/2 lg:w-1/3 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <div className="h-full bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-green-100 text-green-600 mb-5 group-hover:animate-bounce">
                                <MdMovieFilter size={24} />
                            </div>
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">All Entertainment, One App</h2>
                            <p className="leading-relaxed text-base text-gray-600 dark:text-gray-300 mb-4">
                                Track movies, TV series, anime, and games all in one beautifully designed app. No more juggling multiple platforms.
                            </p>
                            <div className="flex space-x-3">
                                <MdMovieFilter className="text-[#2196F3]" size={20} />
                                <MdTv className="text-[#2196F3]" size={20} />
                                <MdAnimation className="text-[#2196F3]" size={20} />
                                <FaGamepad className="text-[#2196F3]" size={20} />
                            </div>
                        </div>
                    </div>

                    {/* Hassle-Free Imports */}
                    <div className="p-4 md:w-1/2 lg:w-1/3 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                        <div className="h-full bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-600 mb-5 group-hover:animate-bounce">
                                <MdImportExport size={24} />
                            </div>
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Instant Data Import</h2>
                            <p className="leading-relaxed text-base text-gray-600 dark:text-gray-300 mb-4">
                                Migrate your existing lists from MyAnimeList, AniList, TMDB, Steam, Trakt.tv and more with complete history and ratings.
                            </p>
                            <div className="flex space-x-3">
                                <SiMyanimelist className="text-[#2196F3]" size={20} />
                                <SiSteam className="text-[#2196F3]" size={20} />
                                <BsDownload className="text-[#2196F3]" size={20} />
                            </div>
                        </div>
                    </div>

                    {/* Daily Diary */}
                    <div className="p-4 md:w-1/2 lg:w-1/3 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        <div className="h-full bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-600 mb-5 group-hover:animate-bounce">
                                <BsCalendar2Check size={24} />
                            </div>
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Daily Watch Diary</h2>
                            <p className="leading-relaxed text-base text-gray-600 dark:text-gray-300 mb-4">
                                Log your daily sessions with notes and ratings. Visualize your binge streaks on beautiful heatmaps.
                            </p>
                            <div className="text-sm text-orange-600 font-medium">
                                Track • Rate • Remember
                            </div>
                        </div>
                    </div>

                    {/* Analytics */}
                    <div className="p-4 md:w-1/2 lg:w-1/3 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                        <div className="h-full bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-[#2196F3] mb-5 group-hover:animate-bounce">
                                <BsGraphUp size={24} />
                            </div>
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Deep Analytics</h2>
                            <p className="leading-relaxed text-base text-gray-600 dark:text-gray-300 mb-4">
                                Interactive charts showing genre trends, watch time, platform breakdowns, and binge patterns.
                            </p>
                            <div className="text-sm text-[#2196F3] font-medium">
                                Insights • Trends • Progress
                            </div>
                        </div>
                    </div>



                    {/* Progress Tracking */}
                    <div className="p-4 md:w-1/2 lg:w-1/3 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                        <div className="h-full bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-600 mb-5 group-hover:animate-bounce">
                                <AiFillStar size={24} />
                            </div>
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Never Lose Progress</h2>
                            <p className="leading-relaxed text-base text-gray-600 dark:text-gray-300 mb-4">
                                Track episodes, volumes, and game levels. Mark as Active, Paused, Finished, or Dropped with quick resume shortcuts.
                            </p>
                            <div className="text-sm text-yellow-600 font-medium">
                                Track • Resume • Complete
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}