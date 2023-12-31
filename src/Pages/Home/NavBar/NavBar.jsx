import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {

  const navLinks = <div className='lg:flex gap-10 text-lg text-black font-semibold'>
      <p className='text-white'>
          <NavLink className={({ isActive }) =>
              isActive ? " underline text-[#EEFF25]" : ""} to="/">Home</NavLink>
      </p>
      <p className='text-white'>
          <NavLink className={({ isActive }) =>
              isActive ? " underline text-[#EEFF25]" : ""} to="/contact">Contact Us</NavLink>
      </p>
      <p className='text-white'>
          <NavLink className={({ isActive }) =>
              isActive ? " underline text-[#EEFF25]" : ""} to="/dashBoard">Dashboard</NavLink>
      </p>
      <p className='text-white'>
          <NavLink className={({ isActive }) =>
              isActive ? " underline text-[#EEFF25]" : ""} to="/ourMenu">Our Menu</NavLink>
      </p>
      <p className='text-white'>
          <NavLink className={({ isActive }) =>
              isActive ? " underline text-[#EEFF25]" : ""} to="/ourShop">Our Shop</NavLink>
      </p>

  </div>

  return (
      <div className='navbar max-w-screen-xl fixed z-10 bg-black bg-opacity-20 text-white pt-4'>
          <div className="navbar flex gap-10">
              <div className="navbar-start">
                  <div className="dropdown">
                      <label tabIndex={0} className="btn btn-ghost lg:hidden">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                      </label>
                      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black bg-opacity-60 rounded-box w-52">
                          {navLinks}
                      </ul>
                  </div>
                  <div className='ml-5'>
                    <h2 className='text-2xl font-medium'>BISTRO BOSS</h2>
                    <p className='text-xl'>Restaurant</p>
                  </div>
              </div>
              <div className="navbar-center hidden  lg:flex ">
                  <ul className="menu menu-horizontal px-1">
                      {navLinks}
                  </ul>
              </div>
              <div >
              <button className='btn mr-5'>Sign in</button>
              </div>
          </div>
      </div>
  )
}

export default NavBar