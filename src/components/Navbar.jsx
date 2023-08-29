import React from 'react'
import image from '../assets/sangwoo-logo.png'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className='md:flex md:flex-col w-1/6 p-4 fixed h-screen top-0 left-0 bg-bgCol shadow'>
        <div className='w-44 mx-auto'>
            <img src={image} className='object-contain'/>
        </div>
        <ul className="flex flex-col items-center text-2xl text-textCol my-16 ">
            <Link to="/" className='my-5 mx-4 w-fit transition ease-out delay-90 hover:text-textColHighlight cursor-pointer'>home</Link>
            <Link to="/projects" className='my-5 mx-4 w-fit transition ease-out delay-90 hover:text-textColHighlight cursor-pointer'>projects</Link>
        </ul>
    </nav>
  )
}
