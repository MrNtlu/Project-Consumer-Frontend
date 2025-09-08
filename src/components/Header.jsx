import React from 'react'
import MenuItem from './MenuItem'
import { AiFillHome, AiOutlineDownload } from 'react-icons/ai'
import { MdWeb, MdContactSupport, MdCamera } from 'react-icons/md'
import { BiDollar } from 'react-icons/bi'
import Link from 'next/link'
import Image from 'next/image'
import LogoImg from '../../public/static/images/logo.png'

export default function Header() {

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='bg-[#2196F3]'>
      <div className='flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-1'>
        <div className="flex mx-2">
          <button onClick={() => scrollToSection('home')} className="mx-4 lg:mx-6 hover:text-gray-300 font-bold text-white">
            <AiFillHome className="text-2xl sm:hidden mx-4" />
            <p className="hidden sm:inline my-2 text-sm">Home</p>
          </button>
          <button onClick={() => scrollToSection('screenshots')} className="mx-4 lg:mx-6 hover:text-gray-300 font-bold text-white">
            <MdCamera className="text-2xl sm:hidden mx-4" />
            <p className="hidden sm:inline my-2 text-sm">Screenshots</p>
          </button>
          <button onClick={() => scrollToSection('pricing')} className="mx-4 lg:mx-6 hover:text-gray-300 font-bold text-white">
            <BiDollar className="text-2xl sm:hidden mx-4" />
            <p className="hidden sm:inline my-2 text-sm">Pricing</p>
          </button>
          <MenuItem title="Contact" address="/contact" Icon={MdContactSupport} />
        </div>
        <div className="flex items-center space-x-6">
          {/* <DarkModeSwitch /> */}
          <Link href="/">
            <Image height={54} width={54} src={LogoImg} className='mx-6' alt='Watchlistfy' />
          </Link>
        </div>
      </div>
    </div>
  )
}
