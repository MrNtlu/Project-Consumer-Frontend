import React from 'react'
import { BsFillBookmarkFill } from 'react-icons/bs'
import { FaSearch } from 'react-icons/fa'
import { AiFillStar } from 'react-icons/ai'
import Image from 'next/image'
import { MdMovieFilter } from 'react-icons/md'


const Features = () => {
  return (
    <section id="features" className="text-gray-600 body-font h-full w-full">
        <div className="container px-5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg">
                <img className="object-contain mx-auto h-full w-3/4" src="/static/images/framed.png" alt='logo' />
            </div>
            <div className="flex flex-col flex-wrap lg:w-1/2 lg:pl-12 pt-6 lg:text-left text-center my-auto">
                <div className="flex flex-col xl:mb-10 mb-5 lg:items-start items-center">
                    <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5">
                        <MdMovieFilter size={24} />
                    </div>
                    <div className="flex-grow">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">All in One Place</h2>
                    <p className="leading-relaxed text-base">Track your fun in single application. Movies, TV Series, Anime and Games.</p>
                    </div>
                </div>
                <div className="flex flex-col xl:mb-10 mb-5 lg:items-start items-center">
                    <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5">
                        <AiFillStar size={24} />
                    </div>
                    <div className="flex-grow">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">User List</h2>
                    <p className="leading-relaxed text-base">Add content to your list and mark them as Active, Finished or Dropped. Give them a score as you like. Enter your progess and never forget which episode you were at!</p>
                    </div>
                </div>
                <div className="flex flex-col xl:mb-10 mb-5 lg:items-start items-center">
                    <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5">
                        <BsFillBookmarkFill size={24} />
                    </div>
                    <div className="flex-grow">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Watch & Play Later</h2>
                    <p className="leading-relaxed text-base">Mark it and don&apos;t forget it ever again. Whether you&apos;re saving content to enjoy later or creating a list for a binge-watching session, our app makes it simple and convenient.</p>
                    </div>
                </div>
                <div className="flex flex-col xl:mb-10 mb-5 lg:items-start items-center">
                    <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5">
                        <FaSearch size={24} />
                    </div>
                    <div className="flex-grow">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Discover & Search</h2>
                    <p className="leading-relaxed text-base">Discover and search new content. With powerful search features and filters, you can quickly find exactly what you&apos;re looking for. </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Features