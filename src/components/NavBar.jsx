import React from 'react'
import NavBarItem from './NavBarItem'

export default function NavBar() {
  return (
    <div className='flex justify-center rounded-md p-6 mx-4'>
      <NavBarItem title="Movie" param="movie" />
      <NavBarItem title="Shows" param="tv" />
      <NavBarItem title="Anime" param="anime" />
      <NavBarItem title="Game" param="game" />
      <NavBarItem title="Home" address="/" />
      <NavBarItem title="Web App" address="/app" />
    </div>
  )
}
