import React from 'react';
import { PiTelegramLogoBold } from 'react-icons/pi';
import { FaInstagram } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Logo from '../assetes/image/logo.png';

function Footer() {
  return (
    <div className='w-full h-650] lg:h-[300px] p-5 md:p-10 mx-auto text-center text-slate-800 bg-[#e2e8f0]'>
      <div className="container">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] mb-2">
          {/* contact me  */}
          <div className="max-h-[150px] text-start">
            <h3 className="uppercase font-semibold mb-2 underline">contact me</h3>
            <ul className="">
              <li className="font[14px]"> <span className="font-semibold uppercase">address :</span> United States, Texas, Dallas, W. Carpenter Fwy</li>
              <li className="font[14px]"><span className="font-semibold uppercase">number :</span> 347824911321003</li>
              <li className="font[14px]"><span className="font-semibold uppercase">email :</span> sahar1376@gmail.com</li>
            </ul>
          </div>
          {/* categories  */}
          <div className="max-h-[150px] text-start">
            <h3 className="uppercase font-semibold mb-2 underline">categories</h3>
            <ul className="">
              <li className="">
                <Link to={'/men-clothing'} className="uppercase font-[14px] hover:text-slate-600">men's clothing</Link>
              </li>
              <li className="">
                <Link to={'/women-clothing'} className="uppercase font-[14px] hover:text-slate-600">women's clothing</Link>
              </li>
              <li className="">
                <Link to={'/jewelery'} className="uppercase font-[14px] hover:text-slate-600">jewelery</Link>
              </li>
              <li className="">
                <Link to={'/electronics'} className="uppercase font-[14px] hover:text-slate-600">electronics</Link>
              </li>
            </ul>
          </div>
          {/* other stores  */}
          <div className="max-h-[150px] text-start hidden lg:block ">
            <h3 className="uppercase font-semibold mb-2 underline">Other stores</h3>
            <ul className="">
              <li className="">
                <Link to={'/'} className="uppercase font-[14px] hover:text-slate-600">uniqe store</Link>
              </li>
              <li className="">
                <Link to={'/'} className="uppercase font-[14px] hover:text-slate-600">dream store</Link>
              </li>
              <li className="">
                <Link to={'/'} className="uppercase font-[14px] hover:text-slate-600">sea store</Link>
              </li>
            </ul>
          </div>
          {/* search box & logo  */}
          <div className="w-full max-h-[150px] text-center flex flex-col justify-center mx-auto">
            <div className="w-full mt-12 hidden lg:block">
              <input type="search" className=" py-1 px-2  " placeholder='search here' />
              <button className="py-1 px-2 bg-slate-700 text-white ">search</button>
            </div>
            {/* <h5 className="mt-2">search here</h5> */}
            <Link to={'/'} className='flex justify-center' >
              <img src={Logo} alt="Logo" className="w-[120px]" />
            </Link>
            <div className="w-full h-[50px] rounded-md mx-auto  flex justify-center items-center py-0 md-py-2 ">
              <Link className='flex justify-center items-center w-[50px] h-[50px] rounded-full  transition-all duration-1000 hover:rotate-[360deg] '>
                <FaInstagram className='text-3xl text-red-500' />
              </Link>
              <Link className='flex justify-center items-center w-[50px] h-[50px] rounded-full  transition-all duration-1000 hover:rotate-[360deg] '>
                <PiTelegramLogoBold className='text-3xl text-blue-500' />
              </Link>
              <Link className='flex justify-center items-center w-[50px] h-[50px] rounded-full transition-all duration-1000 hover:rotate-[360deg] '>
                <BsWhatsapp className='text-3xl text-green-500' />
              </Link>
            </div>
          </div>
        </div>

      </div>


    </div>
  )
}

export default Footer