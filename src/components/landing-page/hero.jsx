'use client'

import React from 'react'
import Image from 'next/image'
import { BsGooglePlay, BsApple, BsChevronDown } from 'react-icons/bs'
import { FaRobot } from 'react-icons/fa'
import { MdMovieFilter, MdTv, MdGames, MdStar, MdDashboard, MdAnimation, MdWeb } from 'react-icons/md'
import Link from 'next/link'

export default function Hero() {
    const scrollToFeatures = () => {
        document.getElementById('features')?.scrollIntoView({
            behavior: 'smooth'
        });
    };

    return (
        <section id="home" className="text-gray-600 dark:text-gray-300 body-font min-h-screen w-full relative">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center min-h-screen">
                <div className="h-full w-full flex justify-center items-center animate-fade-in-up">
                    <Image className="object-contain mx-auto h-full max-h-[38rem] w-4/5 hover:scale-105 transition-transform duration-500 ease-in-out" alt="Watchlistfy App Screenshots" src="/static/images/combination.png" width={703} height={450} />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-12 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center animate-fade-in-right">
                    <div className="mb-6">
                        <h1 className="title-font xl:text-6xl lg:text-5xl sm:text-4xl text-3xl mb-4 font-bold text-gray-900 dark:text-white animate-fade-in-down">
                            <span className="text-[#2196F3] bg-gradient-to-r from-[#2196F3] to-blue-600 bg-clip-text text-transparent animate-pulse">Watchlistfy</span>
                        </h1>
                        <p className="text-xl font-medium text-gray-700 dark:text-gray-200 mb-4">
                            All Your Entertainment in One Place
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                            Movies • TV Series • Anime • Games
                        </p>
                    </div>

                    {/* Key Features Pills */}
                    <div className="flex flex-wrap gap-3 mb-8 justify-center md:justify-start">
                        <div className="flex items-center bg-blue-50 dark:bg-blue-900/30 text-[#2196F3] px-3 py-2 rounded-full text-sm font-medium hover:scale-110 transition-all duration-300 animate-bounce-in" style={{ animationDelay: '0.1s' }}>
                            <FaRobot className="mr-2" />
                            AI Powered
                        </div>
                        <div className="flex items-center bg-green-50 dark:bg-green-900/30 text-green-600 px-3 py-2 rounded-full text-sm font-medium hover:scale-110 transition-all duration-300 animate-bounce-in" style={{ animationDelay: '0.2s' }}>
                            <MdDashboard className="mr-2" />
                            All-in-One
                        </div>
                        <div className="flex items-center bg-purple-50 dark:bg-purple-900/30 text-purple-600 px-3 py-2 rounded-full text-sm font-medium hover:scale-110 transition-all duration-300 animate-bounce-in" style={{ animationDelay: '0.3s' }}>
                            <MdStar className="mr-2" />
                            Free to Download
                        </div>
                    </div>

                    <p className="mb-8 leading-relaxed xl:text-lg text-base text-gray-600 dark:text-gray-300">
                        Track your entertainment journey and get AI-powered suggestions.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row lg:flex-row md:flex-col gap-4 text-gray-600">

                        <a href="https://play.google.com/store/apps/details?id=com.mrntlu.projectconsumer" className="transform transition-transform hover:scale-105">
                            <button className="bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-800 dark:text-gray-100 inline-flex py-4 px-6 rounded-xl items-center focus:outline-none hover:bg-gray-200 dark:hover:bg-gray-600 hover:text-[#2196F3] dark:hover:text-[#2196F3] shadow-lg hover:shadow-xl transition-all duration-300 min-w-0 w-full sm:w-auto">
                                <BsGooglePlay size={28} className="flex-shrink-0" />
                                <span className="ml-3 flex items-start flex-col leading-none min-w-0">
                                    <span className="text-xs mb-1 text-gray-500 dark:text-gray-400 whitespace-nowrap">GET IT ON</span>
                                    <span className="title-font font-medium text-base whitespace-nowrap">Google Play</span>
                                </span>
                            </button>
                        </a>

                        <a href="https://apps.apple.com/us/app/watchlistfy-ai-tracker/id6476311748" className="transform transition-transform hover:scale-105">
                            <button className="bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-800 dark:text-gray-100 inline-flex py-4 px-6 rounded-xl items-center focus:outline-none hover:bg-gray-200 dark:hover:bg-gray-600 hover:text-[#2196F3] dark:hover:text-[#2196F3] shadow-lg hover:shadow-xl transition-all duration-300 min-w-0 w-full sm:w-auto">
                                <BsApple size={28} className="flex-shrink-0" />
                                <span className="ml-3 flex items-start flex-col leading-none min-w-0">
                                    <span className="text-xs mb-1 text-gray-500 dark:text-gray-400 whitespace-nowrap">DOWNLOAD ON</span>
                                    <span className="title-font font-medium text-base whitespace-nowrap">App Store</span>
                                </span>
                            </button>
                        </a>
                    </div>

                    {/* Disclaimer */}
                    <p className="text-sm text-gray-500 mt-6 italic">
                        *Not a streaming service - We&apos;re your personal entertainment tracker
                    </p>
                </div>
            </div>

            {/* Scroll Down Indicator - Positioned below all content */}
            <div className="w-full flex justify-center pb-8 pt-4">
                <button
                    onClick={scrollToFeatures}
                    className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-[#2196F3] dark:hover:text-[#2196F3] transition-colors duration-300 group cursor-pointer animate-fade-in-up"
                    aria-label="Scroll to features"
                    style={{ animationDelay: '1s' }}
                >
                    <span className="text-sm font-medium mb-2 opacity-80 group-hover:opacity-100 text-center">
                        Explore Features
                    </span>
                    <BsChevronDown
                        size={24}
                        className="animate-bounce group-hover:animate-pulse"
                    />
                </button>
            </div>
        </section>
    )
}