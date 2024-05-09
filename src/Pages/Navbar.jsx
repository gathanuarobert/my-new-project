import React from 'react'
import { NavLink } from "react-router-dom";
const Navbar = () => {
    
    

  return (
    <header className='w-full fixed z-10 bg-black
    opacity-90'>
            <nav className='flex w-full py-3 md:py-4 px-4
         md:px-20  justify-between'>
                 
            <h1 className='text-3xl text-white'>Foodies' Place</h1>
            <div className='flex text-white gap-6 u'>
            <NavLink
        to="/"
        /* add styling to Navlink */
        className="nav-link"
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className="nav-link"
      >
        About
      </NavLink>
      <NavLink
        to="/recipes"
        className="nav-link"
      >
        Explore
        </NavLink>
            </div>
            
            </nav>
            <div>
                  
            </div>
        </header>
    
  )
}

export default Navbar