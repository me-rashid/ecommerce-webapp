import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex items-center justify-between py-5 font-medium'> 
      
      <img src={assets.logo} alt="logo" className='w-36' />

      <ul className='hidden sm:flex gap-5 text-sm text-gray-700' >
       
        <NavLink to="/" className='flex flex-col items-center gap-1 '>
          <p>HOME</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700' />
        </NavLink>

        <NavLink to="/collection" className='flex flex-col items-center gap-1'>
          <p>COLLECTION</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700' />
        </NavLink>

        <NavLink to="/about" className='flex flex-col items-center gap-1'>
          <p>ABOUT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700' />
        </NavLink>

        <NavLink to="/contact" className='flex flex-col items-center gap-1'>
          <p>CONTACT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700' />
        </NavLink>

      </ul>


      <div className='flex items-center gap-6'>
        <img src={assets.search_icon} alt="search" className='w-5 cursor-pointer' />
  

  <div className='group relative'>
    <img src={assets.profile_icon} alt="profile" className='w-5 cursor-pointer' />
 
  {/* on hover it will show the dropdown of profile , login etc */}

  <div className=' group-hover:block hidden absolute dropdown-menu right-0 pt-4'>

    
  </div>
    </div>

        <div className='relative'>
          <img src={assets.cart_icon} alt="cart" className='w-5' />
          <div className='absolute -top-2 -right-3 bg-orange-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center'>3</div>
        </div>

      </div>

    </div>
  )
}

export default Navbar