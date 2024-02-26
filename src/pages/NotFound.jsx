import React from 'react';
import { TbError404 } from 'react-icons/tb'
import { Link } from 'react-router-dom';
import { HiOutlineArrowLeftCircle } from 'react-icons/hi2';

function NotFound() {
  return (
    <div className='w-full py-52'>
      <div className="container mx-auto text-center flex flex-col justify-center items-center">
        <TbError404 className='text-slate-500 text-[70px]' />
        <h1 className="text-center text-[60px] text-slate-800 uppercase">
          page not found
        </h1>
        <Link to={'/'} className='flex justify-center items-center text-slate-500 '>
          <HiOutlineArrowLeftCircle className='mx-1 text-[25px] '/>
          <span className="  text-[18px]">back to Home</span>
        </Link>
      </div>
    </div>
  )
}

export default NotFound