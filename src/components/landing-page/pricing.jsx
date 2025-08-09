'use client'

import React from 'react'
import { BsStars, BsCheck2Circle } from 'react-icons/bs'
import { FaRobot, FaInfinity } from 'react-icons/fa'

export default function Pricing() {
    return (
        <section id="pricing" className="text-gray-600 dark:text-gray-300 body-font py-24 bg-white dark:bg-gray-900">
            <div className="container px-5 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h2 className="sm:text-4xl text-3xl font-bold title-font text-gray-900 dark:text-white mb-4">
                        Choose Your <span className="text-[#2196F3]">Watchlistfy</span> Experience
                    </h2>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-lg text-gray-600 dark:text-gray-300">
                        Start free and upgrade when you&apos;re ready for more AI power and unlimited tracking
                    </p>
                </div>

                <div className="flex flex-wrap justify-center -m-4">
                    {/* Free Plan */}
                    <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                        <div className="h-full p-8 rounded-2xl border-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 flex flex-col relative overflow-hidden hover:shadow-lg transition-shadow duration-300">
                            <h2 className="text-sm tracking-widest title-font mb-1 font-medium text-gray-500">STARTER</h2>
                            <h1 className="text-5xl pb-4 mb-4 border-b border-gray-200 dark:border-gray-700 leading-none font-bold text-gray-900 dark:text-white">Free</h1>

                            <div className="mb-6">
                                <p className="flex items-center text-gray-600 dark:text-gray-300 mb-3">
                                    <BsCheck2Circle className="w-5 h-5 mr-3 text-green-500 flex-shrink-0" />
                                    AI Suggestions every week
                                </p>
                                <p className="flex items-center text-gray-600 dark:text-gray-300 mb-3">
                                    <BsCheck2Circle className="w-5 h-5 mr-3 text-green-500 flex-shrink-0" />
                                    Track up to 175 items
                                </p>
                                <p className="flex items-center text-gray-600 dark:text-gray-300 mb-3">
                                    <BsCheck2Circle className="w-5 h-5 mr-3 text-green-500 flex-shrink-0" />
                                    Watch Later list (50 items)
                                </p>
                                <p className="flex items-center text-gray-600 dark:text-gray-300 mb-3">
                                    <BsCheck2Circle className="w-5 h-5 mr-3 text-green-500 flex-shrink-0" />
                                    Basic import features
                                </p>
                                <p className="flex items-center text-gray-600 dark:text-gray-300 mb-3">
                                    <BsCheck2Circle className="w-5 h-5 mr-3 text-green-500 flex-shrink-0" />
                                    Banner Ads
                                </p>
                                <p className="flex items-center text-gray-600 dark:text-gray-300 mb-3">
                                    <BsCheck2Circle className="w-5 h-5 mr-3 text-green-500 flex-shrink-0" />
                                    5 Reminders up to 3 months in advance
                                </p>
                            </div>

                            <div className="mt-auto">
                                <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-3 px-6 rounded-lg font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300">
                                    Get Started Free
                                </button>
                                <p className="text-xs text-gray-500 mt-3 text-center">Perfect for trying out Watchlistfy</p>
                            </div>
                        </div>
                    </div>

                    {/* Premium Plan */}
                    <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                        <div className="h-full p-8 rounded-2xl border-2 border-[#2196F3] bg-white dark:bg-gray-800 flex flex-col relative overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                            <span className="bg-[#2196F3] text-white px-4 py-2 tracking-widest text-xs absolute right-0 top-0 rounded-bl-lg font-medium">
                                MOST POPULAR
                            </span>
                            <h2 className="text-sm tracking-widest title-font mb-1 font-medium text-[#2196F3]">PREMIUM</h2>
                            <h1 className="text-5xl leading-none flex items-center pb-4 mb-4 border-b border-gray-200 dark:border-gray-700 font-bold text-gray-900 dark:text-white">
                                <span>$0.99</span>
                                <span className="text-lg ml-1 font-normal text-gray-500">/mo</span>
                            </h1>

                            <div className="mb-6">
                                <p className="flex items-center text-gray-600 dark:text-gray-300 mb-3">
                                    <BsCheck2Circle className="w-5 h-5 mr-3 text-[#2196F3] flex-shrink-0" />
                                    <FaRobot className="w-4 h-4 mr-2 text-[#2196F3]" />
                                    AI Suggestions every day
                                </p>
                                <p className="flex items-center text-gray-600 dark:text-gray-300 mb-3">
                                    <BsCheck2Circle className="w-5 h-5 mr-3 text-[#2196F3] flex-shrink-0" />
                                    Full Access to AI Hub
                                </p>
                                <p className="flex items-center text-gray-600 dark:text-gray-300 mb-3">
                                    <BsCheck2Circle className="w-5 h-5 mr-3 text-[#2196F3] flex-shrink-0" />
                                    Curated Collections
                                </p>
                                <p className="flex items-center text-gray-600 dark:text-gray-300 mb-3">
                                    <BsCheck2Circle className="w-5 h-5 mr-3 text-[#2196F3] flex-shrink-0" />
                                    One-Click Suggestions
                                </p>
                                <p className="flex items-center text-gray-600 dark:text-gray-300 mb-3">
                                    <BsCheck2Circle className="w-5 h-5 mr-3 text-[#2196F3] flex-shrink-0" />
                                    Mood Based Collections
                                </p>
                                <p className="flex items-center text-gray-600 dark:text-gray-300 mb-3">
                                    <BsCheck2Circle className="w-5 h-5 mr-3 text-[#2196F3] flex-shrink-0" />
                                    Unlimited tracking & lists
                                </p>
                                <p className="flex items-center text-gray-600 dark:text-gray-300 mb-3">
                                    <BsCheck2Circle className="w-5 h-5 mr-3 text-[#2196F3] flex-shrink-0" />
                                    Enhanced AI accuracy
                                </p>
                                <p className="flex items-center text-gray-600 dark:text-gray-300 mb-3">
                                    <BsCheck2Circle className="w-5 h-5 mr-3 text-[#2196F3] flex-shrink-0" />
                                    Ad free experience
                                </p>
                                <p className="flex items-center text-gray-600 dark:text-gray-300 mb-3">
                                    <BsCheck2Circle className="w-5 h-5 mr-3 text-[#2196F3] flex-shrink-0" />
                                    Advanced analytics
                                </p>
                                <p className="flex items-center text-gray-600 dark:text-gray-300 mb-3">
                                    <BsCheck2Circle className="w-5 h-5 mr-3 text-[#2196F3] flex-shrink-0" />
                                    50 Reminders up to 3 years in advance
                                </p>
                            </div>

                            <div className="mt-auto">
                                <button className="w-full bg-[#2196F3] text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-600 transition-colors duration-300 transform hover:scale-105">
                                    Upgrade to Premium
                                </button>
                                <p className="text-xs text-gray-500 mt-3 text-center">Best value for most users</p>
                            </div>
                        </div>
                    </div>

                    {/* Premium Supporter */}
                    <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                        <div className="h-full p-8 rounded-2xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 flex flex-col relative overflow-hidden hover:shadow-lg transition-shadow duration-300">
                            <h2 className="text-sm tracking-widest title-font mb-1 font-medium text-gray-500">SUPPORTER</h2>
                            <h1 className="text-5xl leading-none flex items-center pb-4 mb-4 border-b border-gray-200 dark:border-gray-700 font-bold text-gray-900 dark:text-white">
                                <span>$3.99</span>
                                <span className="text-lg ml-1 font-normal text-gray-500">/mo</span>
                            </h1>

                            <div className="mb-6">
                                <p className="flex items-center text-gray-600 dark:text-gray-300 mb-3">
                                    <BsCheck2Circle className="w-5 h-5 mr-3 text-purple-500 flex-shrink-0" />
                                    Everything in Premium
                                </p>
                                <p className="flex items-center text-gray-600 dark:text-gray-300 mb-3">
                                    <BsCheck2Circle className="w-5 h-5 mr-3 text-purple-500 flex-shrink-0" />
                                    <BsStars className="w-4 h-4 mr-2 text-yellow-400" />
                                    Support app development
                                </p>
                                <p className="flex items-center text-gray-600 dark:text-gray-300 mb-3">
                                    <BsCheck2Circle className="w-5 h-5 mr-3 text-purple-500 flex-shrink-0" />
                                    Help us grow and improve the app
                                </p>
                            </div>

                            <div className="mt-auto">
                                <button className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-purple-700 transition-colors duration-300">
                                    Become a Supporter
                                </button>
                                <p className="text-xs text-gray-500 mt-3 text-center">Help us grow & improve</p>
                            </div>
                        </div>
                    </div>

                    {/* Annual Plan */}
                    <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                        <div className="h-full p-8 rounded-2xl border-2 border-green-500 bg-green-50 dark:bg-green-900/20 flex flex-col relative overflow-hidden hover:shadow-lg transition-shadow duration-300">
                            <span className="bg-green-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl font-medium">
                                BEST VALUE
                            </span>
                            <h2 className="text-sm tracking-widest title-font mb-1 font-medium text-green-600">ANNUAL</h2>
                            <h1 className="text-5xl leading-none flex items-center pb-4 mb-4 border-b border-gray-200 dark:border-gray-700 font-bold text-gray-900 dark:text-white">
                                <span>$20.99</span>
                                <span className="text-lg ml-1 font-normal text-gray-500">/year</span>
                            </h1>

                            <div className="mb-6">
                                <p className="flex items-center text-gray-600 dark:text-gray-300 mb-3">
                                    <BsCheck2Circle className="w-5 h-5 mr-3 text-green-500 flex-shrink-0" />
                                    Everything in Premium
                                </p>
                                <p className="flex items-center text-gray-600 dark:text-gray-300 mb-3">
                                    <BsCheck2Circle className="w-5 h-5 mr-3 text-green-500 flex-shrink-0" />
                                    Save 50% compared to monthly
                                </p>
                                <p className="flex items-center text-gray-600 dark:text-gray-300 mb-3">
                                    <BsCheck2Circle className="w-5 h-5 mr-3 text-green-500 flex-shrink-0" />
                                    12 months of premium features
                                </p>
                            </div>

                            <div className="mt-auto">
                                <button className="w-full bg-green-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-green-600 transition-colors duration-300">
                                    Save with Annual
                                </button>
                                <p className="text-xs text-gray-500 mt-3 text-center">$1.75/month • 50% savings</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Note */}
                <div className="text-center mt-12">
                    <p className="text-sm text-gray-500">
                        All prices may vary by region. Cancel anytime. Start your free trial today!
                    </p>
                </div>
            </div>
        </section>
    )
}