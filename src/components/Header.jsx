import React from 'react'
import MenuItem from './MenuItem'
import { AiFillHome } from "react-icons/ai"
import Link from 'next/link'
import Image from 'next/image'
import DarkModeSwitch from './DarkModeSwitch'
import LogoImg from 'public/static/images/logo.png'
import { cookies } from 'next/headers'
import { getUserInfo } from '../utility/auth'

export default async function Header() {
  const cookie = cookies().get("token");
  var userInfo = null;
  if (cookie) {
    userInfo = await getUserInfo(cookie.value);
  }

  return (
    <div className='bg-[#2196F3]'>
      <div className='flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6'>
        <div className="flex mx-2">
          <MenuItem title="Home" address="/" Icon={AiFillHome} />
          {/* <MenuItem title="Download" address="/promo" Icon={AiOutlineDownload} /> */}
          <MenuItem title="Feature Request" address="https://watchlistfy.canny.io/feature-requests" Icon={null} />
          <MenuItem title="Changelog" address="https://watchlistfy.canny.io/changelog" Icon={null} />
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
