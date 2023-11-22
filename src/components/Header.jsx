import React from 'react'
import MenuItem from './MenuItem'
import { AiFillHome, AiOutlineDownload  } from "react-icons/ai"
import Link from 'next/link'
import Image from 'next/image'
import DarkModeSwitch from './DarkModeSwitch'
import LogoImg from 'public/static/images/logo.png'
import { FaLightbulb } from "react-icons/fa";
import { MdOutlineUpdate } from "react-icons/md";

export default function Header() {
  return (
    <div className='flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6'>
        <div className="flex mx-2">
            <MenuItem title="Home" address="/" Icon={AiFillHome} />
            <MenuItem title="Download" address="/apps" Icon={AiOutlineDownload } />
            <MenuItem title="Feature Request" address="https://watchlistfy.canny.io/feature-requests" Icon={FaLightbulb} />
            <MenuItem title="Changelog" address="https://watchlistfy.canny.io/changelog" Icon={MdOutlineUpdate} />
        </div>
        <div className="flex items-center space-x-6">
            <DarkModeSwitch />
            <Link href="/">
                <Image height={54} width={54} src={LogoImg} className='mx-6' alt='Watchlistfy'/>
            </Link>
        </div>
    </div>
  )
}
