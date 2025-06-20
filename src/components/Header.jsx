import React from 'react'
import MenuItem from './MenuItem'
import { AiFillHome, AiOutlineDownload } from 'react-icons/ai'
import { MdWeb } from 'react-icons/md'
import Link from 'next/link'
import Image from 'next/image'
import DarkModeSwitch from './DarkModeSwitch'
import LogoImg from '../../public/static/images/logo.png'

export default function Header() {

  return (
    <div className='bg-[#2196F3]'>
      <div className='flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6'>
        <div className="flex mx-2">
          <MenuItem title="Home" address="/" Icon={AiFillHome} />
          <MenuItem title="Web App" address="/app" Icon={MdWeb} />
          {/* <MenuItem title="Download" address="/promo" Icon={AiOutlineDownload} /> */}
        </div>
        <div className="flex items-center space-x-6">
          <DarkModeSwitch />
          <Link href="/">
            <Image height={54} width={54} src={LogoImg} className='mx-6' alt='Watchlistfy' />
          </Link>
        </div>
      </div>
    </div>
  )
}
