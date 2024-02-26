import React, { useContext, useState } from 'react';
import { FaPlus } from 'react-icons/fa6';
import { FaMinus } from 'react-icons/fa6';
import { CartContext } from '../context/CartContext';
import { RxCross2 } from 'react-icons/rx'
import { Link } from 'react-router-dom';

function CartItem({ item }) {
  const { id, title, image, price, amount } = item;
  const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext);
  return (
    <div className="w-full max-h-[150px] flex justify-between p-3 border-b">
      {/* image  */}
      <div className="w-[20%]">
        <img src={image} alt="" className="w-full max-h-fll " />
      </div>
      {/* Title &.... */}
      <div className="w-[65%] mx-2">
        <div className=" flex justify-between items-center">
          <Link to={`/product/${id}`}>
            <h3 className='text-[14px]'>{title} </h3>
          </Link>
          <button onClick={() => removeFromCart(id)}>
            <RxCross2 className='text-[14px] hover:text-red-500' />
          </button>
        </div>
        {/* buttons Plus & minus  */}
        <div className="w-[70%] h-[25px] flex justify-around items-center shadow mt-2">
          <button onClick={() => decreaseAmount(id)} className=""><FaMinus className='text-slate-950 hover:text-orange-500' /></button>
          <span className="">{amount} </span>
          <button onClick={() => increaseAmount(item, id)} className=""><FaPlus className='text-slate-950 hover:text-cyan-500' /></button>
        </div>
      </div>

    </div>
  )
}

export default CartItem