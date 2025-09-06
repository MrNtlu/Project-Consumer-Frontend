'use client'

import React from 'react'
import Image from 'next/image'
import { BsCalendar2Check, BsGraphUp, BsDownload, BsBell } from 'react-icons/bs'
import { FaRobot, FaGamepad, FaList, FaPlay, FaShareAlt } from 'react-icons/fa'
import { MdMovieFilter, MdTv, MdImportExport, MdAnimation, MdPlayArrow } from 'react-icons/md'
import { SiSteam, SiMyanimelist, SiNetflix } from 'react-icons/si'

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
                    {/* Everything in One Place */}
                    <div className="p-4 md:w-1/2 lg:w-1/3 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                        <div className="h-full bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-green-100 text-green-600 mb-5 group-hover:animate-bounce">
                                <MdMovieFilter size={24} />
                            </div>
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Everything in One Place</h2>
                            <p className="leading-relaxed text-base text-gray-600 dark:text-gray-300 mb-4">
                                Movies, TV Shows, Anime, Games in one app. No more juggling multiple platforms to track your entertainment.
                            </p>
                            <div className="flex space-x-3">
                                <MdMovieFilter className="text-[#2196F3]" size={20} />
                                <MdTv className="text-[#2196F3]" size={20} />
                                <MdAnimation className="text-[#2196F3]" size={20} />
                                <FaGamepad className="text-[#2196F3]" size={20} />
                            </div>
                        </div>
                    </div>

                    {/* Track & Log */}
                    <div className="p-4 md:w-1/2 lg:w-1/3 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <div className="h-full bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-600 mb-5 group-hover:animate-bounce">
                                <BsCalendar2Check size={24} />
                            </div>
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Track & Log</h2>
                            <p className="leading-relaxed text-base text-gray-600 dark:text-gray-300 mb-4">
                                Track & log episodes and seasons, keep organized, track how many times you finished something.
                            </p>
                            <div className="text-sm text-orange-600 font-medium">
                                Track • Log • Organize
                            </div>
                        </div>
                    </div>

                    {/* Streaming Guide */}
                    <div className="p-4 md:w-1/2 lg:w-1/3 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                        <div className="h-full bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-red-100 text-red-600 mb-5 group-hover:animate-bounce">
                                <MdPlayArrow size={24} />
                            </div>
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Streaming Guide</h2>
                            <p className="leading-relaxed text-base text-gray-600 dark:text-gray-300 mb-4">
                                Find where to stream, buy or rent movies, TV shows, anime and games like Netflix, Apple TV+, Hulu, Disney+, Steam, Crunchyroll and more.
                            </p>
                            <div className="flex space-x-3">
                                <SiNetflix className="text-[#2196F3]" size={20} />
                                <FaPlay className="text-[#2196F3]" size={20} />
                                <MdTv className="text-[#2196F3]" size={20} />
                                <SiSteam className="text-[#2196F3]" size={20} />
                            </div>
                        </div>
                    </div>

                    {/* AI Suggestions */}
                    <div className="p-4 md:w-1/2 lg:w-1/3 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        <div className="h-full bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-[#2196F3] mb-5 group-hover:animate-bounce">
                                <FaRobot size={24} />
                            </div>
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">AI Suggestions</h2>
                            <p className="leading-relaxed text-base text-gray-600 dark:text-gray-300 mb-4">
                                Get recommendations based on your history. Our AI will suggest you what to watch/play next.
                            </p>
                            <div className="text-sm text-[#2196F3] font-medium">
                                Smart • Personal • Accurate
                            </div>
                        </div>
                    </div>

                    {/* Your Lists */}
                    <div className="p-4 md:w-1/2 lg:w-1/3 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                        <div className="h-full bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-600 mb-5 group-hover:animate-bounce">
                                <FaList size={24} />
                            </div>
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Your Lists</h2>
                            <p className="leading-relaxed text-base text-gray-600 dark:text-gray-300 mb-4">
                                Create your own curated and todo lists to watch with your friends later.
                            </p>
                            <div className="text-sm text-purple-600 font-medium">
                                Curate • Share • Collaborate
                            </div>
                        </div>
                    </div>

                    {/* Reminders */}
                    <div className="p-4 md:w-1/2 lg:w-1/3 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                        <div className="h-full bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-600 mb-5 group-hover:animate-bounce">
                                <BsBell size={24} />
                            </div>
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Reminders</h2>
                            <p className="leading-relaxed text-base text-gray-600 dark:text-gray-300 mb-4">
                                Set reminders so you don&apos;t miss when it&apos;s released!
                            </p>
                            <div className="text-sm text-yellow-600 font-medium">
                                Never Miss • Stay Updated
                            </div>
                        </div>
                    </div>

                    {/* Insights & Stats */}
                    <div className="p-4 md:w-1/2 lg:w-1/3 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
                        <div className="h-full bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-teal-100 text-teal-600 mb-5 group-hover:animate-bounce">
                                <BsGraphUp size={24} />
                            </div>
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Insights & Stats</h2>
                            <p className="leading-relaxed text-base text-gray-600 dark:text-gray-300 mb-4">
                                Visualize your entertainment habits, see how many hours you&apos;ve spend and share with your friends!
                            </p>
                            <div className="text-sm text-teal-600 font-medium">
                                Analyze • Visualize • Share
                            </div>
                        </div>
                    </div>

                    {/* Easy Imports */}
                    <div className="p-4 md:w-1/2 lg:w-1/3 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                        <div className="h-full bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 mb-5 group-hover:animate-bounce">
                                <MdImportExport size={24} />
                            </div>
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Easy Imports</h2>
                            <p className="leading-relaxed text-base text-gray-600 dark:text-gray-300 mb-4">
                                Instantly migrate lists from MyAnimeList, AniList, TMDB, Steam, Trakt.tv and more—complete with your history and scores.
                            </p>
                            <div className="flex space-x-3">
                                <SiMyanimelist className="text-[#2196F3]" size={20} />
                                <SiSteam className="text-[#2196F3]" size={20} />
                                <BsDownload className="text-[#2196F3]" size={20} />
                            </div>
                        </div>
                    </div>

                    {/* Share Your Stats */}
                    <div className="p-4 md:w-1/2 lg:w-1/3 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
                        <div className="h-full bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-600 mb-5 group-hover:animate-bounce">
                                <FaShareAlt size={24} />
                            </div>
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Share Your Stats</h2>
                            <p className="leading-relaxed text-base text-gray-600 dark:text-gray-300 mb-4">
                                Generate beautiful screenshots of your stats and achievements to share on social media with your friends.
                            </p>
                            <div className="text-sm text-pink-600 font-medium">
                                Generate • Screenshot • Share
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}