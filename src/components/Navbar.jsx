import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex justify-between px-10 items-center h-16 border-b-[1px]'>
        <div className="logo font-bold text-lg text-blue-800">
            JobSearch
        </div>
      <ul className='flex justify-center items-center space-x-12 font-semibold'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to='/login'>Log In</NavLink>
      </ul>
    </nav>
  )
}

export default Navbar
