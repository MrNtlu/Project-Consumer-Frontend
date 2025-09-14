'use client'

import React from 'react'
import { BsCheck2Circle } from 'react-icons/bs'

export default function Pricing() {
    return (
        <section id="pricing" className="text-gray-600 body-font py-24 bg-gray-50">
            <div className="container px-8 mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800 ">
                        Choose Your <span className="text-blue-500">Watchlistfy</span> Experience
                    </h1>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Start free and upgrade when you&apos;re ready for more AI power and unlimited tracking.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Starter Plan */}
                    <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col">
                        <h3 className="text-sm font-semibold text-gray-500 uppercase">STARTER</h3>
                        <p className="text-5xl font-bold text-gray-900 mt-2">Free</p>
                        <ul className="mt-8 space-y-4 text-gray-600 flex-grow">
                            <li className="flex items-center">
                                <BsCheck2Circle className="text-green-500 mr-3 w-5 h-5 flex-shrink-0" />
                                AI Suggestions every week
                            </li>
                            <li className="flex items-center">
                                <BsCheck2Circle className="text-green-500 mr-3 w-5 h-5 flex-shrink-0" />
                                Track up to 175 items
                            </li>
                            <li className="flex items-center">
                                <BsCheck2Circle className="text-green-500 mr-3 w-5 h-5 flex-shrink-0" />
                                Watch Later list (50 items)
                            </li>
                            <li className="flex items-center">
                                <BsCheck2Circle className="text-green-500 mr-3 w-5 h-5 flex-shrink-0" />
                                Basic import features
                            </li>
                            <li className="flex items-center">
                                <BsCheck2Circle className="text-green-500 mr-3 w-5 h-5 flex-shrink-0" />
                                Banner Ads
                            </li>
                        </ul>
                        <div className="mt-auto pt-8">
                            <button className="w-full bg-gray-200 text-gray-800 font-semibold py-3 rounded-lg hover:bg-gray-300 transition-colors">
                                Get Started Free
                            </button>
                            <p className="text-center text-xs text-gray-500 mt-3">Perfect for trying out Watchlistfy</p>
                        </div>
                    </div>

                    {/* Premium Plan */}
                    <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col border-2 border-blue-500 relative">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs font-bold px-4 py-1 rounded-full">MOST POPULAR</div>
                        <h3 className="text-sm font-semibold text-blue-500 uppercase">PREMIUM</h3>
                        <p className="text-5xl font-bold text-gray-900 mt-2">$0.99<span className="text-lg font-medium text-gray-500">/mo</span></p>
                        <ul className="mt-8 space-y-4 text-gray-600 flex-grow">
                            <li className="flex items-center">
                                <BsCheck2Circle className="text-blue-500 mr-3 w-5 h-5 flex-shrink-0" />
                                AI Suggestions every day
                            </li>
                            <li className="flex items-center">
                                <BsCheck2Circle className="text-blue-500 mr-3 w-5 h-5 flex-shrink-0" />
                                Full Access to AI Hub
                            </li>
                            <li className="flex items-center">
                                <BsCheck2Circle className="text-blue-500 mr-3 w-5 h-5 flex-shrink-0" />
                                Curated Collections
                            </li>
                            <li className="flex items-center">
                                <BsCheck2Circle className="text-blue-500 mr-3 w-5 h-5 flex-shrink-0" />
                                One-Click Suggestions
                            </li>
                            <li className="flex items-center">
                                <BsCheck2Circle className="text-blue-500 mr-3 w-5 h-5 flex-shrink-0" />
                                Unlimited tracking &amp; lists
                            </li>
                            <li className="flex items-center">
                                <BsCheck2Circle className="text-blue-500 mr-3 w-5 h-5 flex-shrink-0" />
                                Ad free experience
                            </li>
                        </ul>
                        <div className="mt-auto pt-8">
                            <button className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition-colors">Upgrade to Premium</button>
                            <p className="text-center text-xs text-gray-500 mt-3">Best value for most users</p>
                        </div>
                    </div>

                    {/* Annual Plan */}
                    <div className="bg-green-50 rounded-xl shadow-lg p-8 flex flex-col border-2 border-green-500 relative">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs font-bold px-4 py-1 rounded-full">BEST VALUE</div>
                        <h3 className="text-sm font-semibold text-green-600 uppercase">ANNUAL</h3>
                        <p className="text-5xl font-bold text-gray-900 ">$9.99<span className="text-lg font-medium text-gray-500">/year</span></p>
                        <ul className="mt-8 space-y-4 text-gray-600 flex-grow">
                            <li className="flex items-center">
                                <BsCheck2Circle className="text-green-500 mr-3 w-5 h-5 flex-shrink-0" />
                                Everything in Premium
                            </li>
                            <li className="flex items-center">
                                <BsCheck2Circle className="text-green-500 mr-3 w-5 h-5 flex-shrink-0" />
                                Save over 15% compared to monthly
                            </li>
                            <li className="flex items-center">
                                <BsCheck2Circle className="text-green-500 mr-3 w-5 h-5 flex-shrink-0" />
                                12 months of premium features
                            </li>
                        </ul>
                        <div className="mt-auto pt-8">
                            <button className="w-full bg-green-500 text-white font-semibold py-3 rounded-lg hover:bg-green-600 transition-colors">Save with Annual</button>
                            <p className="text-center text-xs text-gray-500 mt-3">$0.83/month • 15%+ savings</p>
                        </div>
                    </div>
                </div>


                <p className="text-center text-xs text-gray-500 mt-12">All prices may vary by region. Cancel anytime. Start your free trial today!</p>
            </div>
        </section>
    )
}