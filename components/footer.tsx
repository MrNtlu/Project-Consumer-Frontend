import Image from 'next/image'
import React from 'react'
import { BsGooglePlay, BsTwitter, BsFillFileEarmarkTextFill } from 'react-icons/bs'
import { MdPrivacyTip } from 'react-icons/md'

const Footer = () => {
  return (
  <footer className="text-gray-600 body-font mt-3">
    <div className="container px-3 py-3 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image className='rounded-full' src="/static/images/logo_black.png" alt='logo' width="100" height="100" />
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2023 Watchlistfy —
            <a href="https://twitter.com/BurakFNtlu" className="text-gray-600 ml-1 hover:text-[#2196F3]" rel="noopener noreferrer" target="_blank">@MrNtlu</a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start ">
        <a href="https://play.google.com/store/apps/details?id=com.mrntlu.projectconsumer" className="text-gray-500 hover:text-[#2196F3]">
            <BsGooglePlay />
        </a>
        <a href='https://twitter.com/watchlistfy' className="ml-3 text-gray-500 hover:text-[#2196F3]">
            <BsTwitter />
        </a>
        <a href='privacy-policy.html' className="sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-300 sm:mt-0 ml-3 text-gray-500 hover:text-[#2196F3]">
            <MdPrivacyTip />
        </a>
        <a href='terms-conditions.html' className="ml-3 text-gray-500 hover:text-[#2196F3]">
            <BsFillFileEarmarkTextFill />
        </a>
        </span>
    </div>
    </footer>
  )
}

export default Footer