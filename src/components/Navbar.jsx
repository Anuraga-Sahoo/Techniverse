import React, { useState } from 'react'
import {Link} from "react-router-dom"
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const navItems = [
    {name: 'Home', link: '/'},
    {name: 'About', link: '/about'},
    {name: 'Contact', link: '/contact'},
    {name: 'Softwair', link: '/softwaire'},
    {name: 'E commerce', link: '/ecommerce'}
  ]

  const [click, setClick] = useState(false)
  const showItems = () => {
    setClick(!click)
  }
  return (
    <nav className='p-4 sm:p-4 sm:pl-10 sm:pr-10 shadow-md bg-white sticky top-0 w-[100%] flex items-center justify-between'>
      <div className="left flex justify-start sm:justify-around sm:items-center w-[11rem]">
        <img src="https://i.giphy.com/nVliit5etkoz4HU9fK.webp" alt="logo" 
        className='bg-purple-500 h-11 w-11 rounded-md  '/>
        <h2 className='hidden sm:block lg:block text-2xl font-medium ml-2'>Techniverse</h2>
      </div>
      <FaBars onClick={showItems} className={` ${click ? "hidden" :'lg:hidden font-2xl text-[2rem]'}`}/>
        <RxCross2 onClick={showItems} className={` ${click ? 'lg:hidden font-2xl text-[2rem]': "hidden" }`}/>
        {
          click && (
            <div className="middle absolute flex flex-col justify-around w-[93%] bg-white top-[5rem] p-[2rem] lg:flex gap-6 ">
        {
          navItems.map((items, index) => {
            return (
          <Link to={items.link} key={index} className='hover:text-[#6b3feb] font-medium'>{items.name}</Link>
        )
          })
        }
       <div className="right flex mt-[2rem] gap-4">
        <button className='bg-[#6b3feb] p-2 rounded-md w-[5rem] text-white font-semibold'>Login</button>
        <button className='bg-[#99bc30] p-2 rounded-md w-[5rem] text-white font-semibold'>Sign up</button>
      </div>
      </div>
      
          )
        }
      <div className="hidden middle lg:flex gap-6 ">
        {
          navItems.map((items, index) => {
            return (
          <Link to={items.link} key={index} className='hover:text-[#6b3feb] font-medium'>{items.name}</Link>
        )
          })
        }
       
      </div>
      <div className="right hidden lg:flex gap-4">
        <button className='bg-[#6b3feb] p-2 rounded-md w-[5rem] text-white font-semibold'>Login</button>
        <button className='bg-green-600 p-2 rounded-md w-[5rem] text-white font-semibold'>Sign up</button>
      </div>
        
    </nav>
  )
}

export default Navbar
