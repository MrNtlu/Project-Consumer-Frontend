import React from 'react'

export default function Pricing() {
  return (
    <section id="pricing" className="text-gray-600 dark:text-gray-300 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2">Pricing</h1>
            </div>
            <div className="flex flex-wrap -m-4">
                <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                    <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                    <h2 className="text-sm tracking-widest title-font mb-1 font-medium">Basic</h2>
                    <h1 className="text-5xl pb-4 mb-4 border-b border-gray-200 leading-none">Free</h1>
                    <p className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        </span>AI Suggestions once every month
                    </p>
                    <p className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        </span>User List limited to 175
                    </p>
                    <p className="flex items-center text-gray-600 dark:text-gray-300 mb-6">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        </span>Watch Later limited to 50
                    </p>
                    <a href="https://play.google.com/store/apps/details?id=com.mrntlu.projectconsumer">
                        <button className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Download
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </a>
                    </div>
                </div>
                <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                    <div className="h-full p-6 rounded-lg border-2 border-[#2196F3] flex flex-col relative overflow-hidden">
                    <span className="bg-[#2196F3] text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">RECOMMENDED</span>
                    <h2 className="text-sm tracking-widest title-font mb-1 font-medium">Premium</h2>
                    <h1 className="text-5xl leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                        <span>$4.99</span>
                        <span className="text-lg ml-1 font-normal text-gray-500">/mo</span>
                    </h1>
                    <p className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-[#2196F3] text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        </span>AI Suggestions once every week
                    </p>
                    <p className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-[#2196F3] text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        </span>Unlimited User List
                    </p>
                    <p className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-[#2196F3] text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        </span>Unlimited Watch Later
                    </p>
                    <p className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-[#2196F3] text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        </span>AI Assistant that will help you decide your future fun
                    </p>
                    <p className="flex items-center text-gray-600 dark:text-gray-300 mb-6">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-[#2196F3] text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        </span>More soon...
                    </p>
                    <a href="https://play.google.com/store/apps/details?id=com.mrntlu.projectconsumer">
                        <button className="flex items-center mt-auto text-white bg-[#2196F3] border-0 py-2 px-4 w-full focus:outline-none hover:bg-blue-600 rounded">Download & Subscribe
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </a>
                    <p className="text-xs text-gray-500 mt-3">Prices might vary from region to region.</p>
                    </div>
                </div>
                <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                    <div className="h-full p-6 rounded-lg border-2 border-grey-300 flex flex-col relative overflow-hidden">
                    <h2 className="text-sm tracking-widest title-font mb-1 font-medium">Premium Supporter</h2>
                    <h1 className="text-5xl leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                        <span>$6.99</span>
                        <span className="text-lg ml-1 font-normal text-gray-500">/mo</span>
                    </h1>
                    <p className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        </span>AI Suggestions once every week
                    </p>
                    <p className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        </span>Unlimited User List
                    </p>
                    <p className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        </span>Unlimited Watch Later
                    </p>
                    <p className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        </span>AI Assistant that will help you decide your future fun
                    </p>
                    <p className="flex items-center text-gray-600 dark:text-gray-300 mb-6">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        </span>More soon...
                    </p>
                    <p className="flex items-center text-gray-600 dark:text-gray-300 mb-6">
                        <span className="w-4 h-4 mr-2 inline-flex items-center"/>
                    </p>
                    <a href="https://play.google.com/store/apps/details?id=com.mrntlu.projectconsumer">
                        <button className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Download & Subscribe
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </a>
                    <p className="text-xs text-gray-500 mt-3">Prices might vary from region to region.</p>
                    </div>
                </div>
                <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                    <div className="h-full p-6 rounded-lg border-2 border-grey-300 flex flex-col relative overflow-hidden">
                    <h2 className="text-sm tracking-widest title-font mb-1 font-medium">Premium Supporter Special</h2>
                    <h1 className="text-5xl leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                        <span>$69.99</span>
                        <span className="text-lg ml-1 font-normal text-gray-500">/year</span>
                    </h1>
                    <p className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        </span>AI Suggestions once every week
                    </p>
                    <p className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        </span>Unlimited User List
                    </p>
                    <p className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        </span>Unlimited Watch Later
                    </p>
                    <p className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        </span>Cheaper Price per month
                    </p>
                    <p className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        </span>AI Assistant that will help you decide your future fun
                    </p>
                    <p className="flex items-center text-gray-600 dark:text-gray-300 mb-6">
                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        </span>More soon...
                    </p>
                    <a href="https://play.google.com/store/apps/details?id=com.mrntlu.projectconsumer">
                        <button className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Download & Subscribe
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </a>
                    <p className="text-xs text-gray-500 mt-3">Prices might vary from region to region.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}