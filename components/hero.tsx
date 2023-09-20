import React from 'react'
import { BsGooglePlay, BsApple } from 'react-icons/bs'

const Hero = () => {
  return (
    <section id="home" className="text-gray-600 body-font h-screen w-full">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center h-full">
            <div className="h-full w-full">
                <img className="object-contain mx-auto h-full w-3/4" alt="hero" src="/static/images/combination_low.png" />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-12 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 className="title-font xl:text-5xl sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Watchlistfy - Track Your Fun!</h1>
                <p className="mb-16 leading-relaxed xl:text-lg text-base">Discover Anime, Movies, TV Shows, Games - all in one app! Track & list your fun.</p>
                <div className="flex lg:flex-row md:flex-col hover:text-[#2196F3]">
                    <a href="https://play.google.com/store/apps/details?id=com.mrntlu.projectconsumer">
                        <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center focus:outline-none">
                            <BsGooglePlay size={25} />
                            <span className="ml-4 flex items-start flex-col leading-none">
                                <span className="text-xs mb-1">GET IT ON</span>
                                <span className="title-font font-medium">Google Play</span>
                            </span>
                        </button>
                    </a>
                    {/* <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0 hover:bg-gray-200 focus:outline-none">
                        <BsApple size={25} />
                        <span className="ml-4 flex items-start flex-col leading-none">
                            <span className="text-xs text-gray-600 mb-1">Download on the</span>
                            <span className="title-font font-medium">App Store</span>
                        </span>
                    </button> */}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero