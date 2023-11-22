import React from 'react'
import NavBarItem from './NavBarItem'

export default function NavBar() {
  return (
    <div className='flex justify-center text-white bg-[#2196F3] rounded-md p-4 mx-4'>
        <NavBarItem title="Movie" param="movie" />
        <NavBarItem title="Shows" param="tv" />
        <NavBarItem title="Anime" param="anime" />
        <NavBarItem title="Game" param="game" />
    </div>
  )
}
