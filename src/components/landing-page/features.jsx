import React from 'react'
import { BsStars } from 'react-icons/bs'
import { FaFilter, FaRobot } from 'react-icons/fa'
import { AiFillStar } from 'react-icons/ai'
import { MdMovieFilter } from 'react-icons/md'

export default function Features() {
  return (
    <section id="features" className="text-gray-600 dark:text-gray-300 body-font h-full w-full">
        <div className="container px-5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg">
                <img className="object-contain mx-auto h-full w-3/5" src="/static/images/promotion.png" alt='logo' />
            </div>
            <div className="flex flex-col flex-wrap lg:w-1/2 lg:pl-12 pt-6 lg:text-left text-center my-auto">
                <div className="flex flex-col xl:mb-10 mb-5 lg:items-start items-center">
                    <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-[#2196F3] mb-5">
                        <MdMovieFilter size={24} />
                    </div>
                    <div className="flex-grow">
                    <h2 className="text-lg title-font font-medium mb-3">All in One Place</h2>
                    <p className="leading-relaxed text-base">Track your fun in single application. Movies, TV Series, Anime and Games. Discover and track your fun.</p>
                    </div>
                </div>
                <div className="flex flex-col xl:mb-10 mb-5 lg:items-start items-center">
                    <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-[#2196F3] mb-5">
                        <FaRobot size={24} />
                    </div>
                    <div className="flex-grow">
                        <div className="flex"><h2 className="text-lg title-font font-medium mb-3">AI Suggestions</h2>  <BsStars size={24} color={"#FFEB3B"}/> </div>
                    <p className="leading-relaxed text-base">AI will analyze the content on your list, taking into account the scores you&apos;ve given, and suggest you new content accurately!</p>
                    </div>
                </div>
                <div className="flex flex-col xl:mb-10 mb-5 lg:items-start items-center">
                    <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-[#2196F3] mb-5">
                        <FaRobot size={24} />
                    </div>
                    <div className="flex-grow">
                        <div className="flex"><h2 className="text-lg title-font font-medium mb-3">AI Assistant</h2>  <BsStars size={24} color={"#FFEB3B"}/> </div>
                    <p className="leading-relaxed text-base">AI assistant will help you summarize the content that you are looking for and gather user reviews from the web and give you the summary of it.</p>
                    </div>
                </div>
                <div className="flex flex-col xl:mb-10 mb-5 lg:items-start items-center">
                    <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-[#2196F3] mb-5">
                        <AiFillStar size={24} />
                    </div>
                    <div className="flex-grow">
                        <h2 className="text-lg title-font font-medium mb-3">User List</h2>
                        <p className="leading-relaxed text-base">Add content to your list and mark them as Active, Finished or Dropped. Give them a score as you like. Enter your progress and never forget which episode you were at!</p>
                    </div>
                </div>
                <div className="flex flex-col xl:mb-10 mb-5 lg:items-start items-center">
                    <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-[#2196F3] mb-5">
                        <FaFilter size={24} />
                    </div>
                    <div className="flex-grow">
                    <h2 className="text-lg title-font font-medium mb-3">Discover</h2>
                    <p className="leading-relaxed text-base">Discover new movies, tv shows, anime and games with filters. Find what you are looking for without any trouble and enjoy your remaining time!</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}