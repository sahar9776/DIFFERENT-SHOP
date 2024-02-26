import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../assetes/image/logo.png';
import { BsCart3 } from 'react-icons/bs';
import {SidebarContext} from '../context/SidebarContext';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function Navbar() {
  const { isOpen, setIsOpen } = useContext(SidebarContext) ;
  const [isActive, setIsActive] = useState(false);
  const { itemAmount } = useContext(CartContext);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    })
  })
  return (
    <div className={`${isActive ? 'bg-slate-100 shadow opacity-80' : 'bg-white shadow-md'} fixed w-full z-10 transition-all lg:px-2 xl:px-0`}>
      <div className="container mx-auto px-5 lg:px-0 flex items-center justify-between h-full">
        <div className="flex items-center ">
          <Link to={'/'}>
            <img src={Logo} alt="" className="max-w-[120px] max-h-[120px] " />
          </Link>
          <ul className="hidden md:flex justify-start items-center">
            <li className="me-4">
              <NavLink to={'/men-clothing'} className="text-slate-700 font-semibold py-2 uppercase hover:text-slate-950 hover:border-b hover:border-slate-950 ">men's clothing</NavLink>
            </li>
            <li className="me-4">
              <NavLink to={'/women-clothing'} className="text-slate-700 font-semibold py-2 uppercase hover:text-slate-950 hover:border-b hover:border-slate-950 ">women's clothing</NavLink>
            </li>
            <li className="me-4">
              <NavLink to={'/jewelery'} className="text-slate-700 font-semibold py-2 uppercase hover:text-slate-950 hover:border-b hover:border-slate-950 ">jewelery</NavLink>
            </li>
            <li className="me-4">
              <NavLink to={'/electronics'} className="text-slate-700 font-semibold py-2 uppercase hover:text-slate-950 hover:border-b hover:border-slate-950 ">electronics</NavLink>
            </li>
          </ul>
        </div>

        <div className="flex items-center">
          <div onClick={() => { setIsOpen(!isOpen) }} className="relative cursor-pointer ">
            <BsCart3 className='text-3xl' />
            <div className="absolute top-4 left-4 w-[20px] h-[20px] bg-red-500 text-white flex justify-center items-center rounded-full ">{itemAmount} </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;