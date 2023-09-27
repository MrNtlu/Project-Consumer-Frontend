import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
  <header className="bg-white text-black body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center md:mb-0 mb-8">
      <Image className='rounded-full' src="/static/images/logo_bg.png" alt='logo' width="75" height="75" />
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a href="https://watchlistfy.com/#home" className="mr-5 hover:text-[#2196F3]">Home</a>
      <a href="https://watchlistfy.com/#features" className="mr-5 hover:text-[#2196F3]">Features</a>
      <a href="https://watchlistfy.com/#pricing" className="mr-5 hover:text-[#2196F3]">Pricing</a>
      <a href="https://watchlistfy.canny.io/feature-requests" className="mr-5 hover:text-[#2196F3]">Feature Request</a>
      <a href="https://watchlistfy.canny.io/changelog" className="mr-5 hover:text-[#2196F3]">Changelog</a>
    </nav>
  </div>
</header>
  )
}

export default Header