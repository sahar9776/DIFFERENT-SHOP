import React, { useContext, useState } from 'react';
import { SidebarContext } from '../context/SidebarContext';
import { HiArrowSmallRight } from 'react-icons/hi2';
import { GoTrash } from 'react-icons/go';
import { CartContext } from '../context/CartContext';
import CartItem from './CartItem';

function Sidebar() {
  const { isOpen , handleClose } = useContext(SidebarContext);
  const { clearCart,cart,itemAmount,total } = useContext(CartContext);
  return (
    <div className={`${isOpen? 'right-0': '-right-full' }  w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-2 lg:px-4 py-3 `}>
        {/* header cart  */}
        <div className="w-full flex justify-between items-center py-2 px-3 rounded bg-slate-700">
          <button onClick={handleClose} className="rounded-full w-[30px] h-[30px] text-[20px] flex justify-center items-center bg-slate-200"> <HiArrowSmallRight /> </button>
          <h3 className="text-white uppercase font-semibold">Your shopping cart ({itemAmount}) </h3>
        </div>

        {/* main cart & amount's products for user  */}
        <div className="w-full h-[400px] py-4 px-3 my-2 overflow-y-scroll border-b ">
         {
          cart.map(item=>(
            <CartItem item={item} key={item.id} />
          ))
         }
        </div>

        {/* total price & trash */}
        <div className="py-4 px-3 flex justify-between items-center ">
          <h4 className="uppercase text-slate-700 font-semibold "> total price : {total} </h4>
          <button onClick={clearCart} className="">
            <GoTrash className='text-[20px] text-slate-700 hover:text-red-500 ' />
          </button>
        </div>

      </div>
  )
}

export default Sidebar