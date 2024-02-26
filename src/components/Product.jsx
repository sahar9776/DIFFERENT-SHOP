import React, { createContext, useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { FaEye } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa6';


function Product({ product }) {
  const { image, id, title, price } = product;
  const { increaseAmount } = useContext(CartContext);

  return (
    <div>
      <div className="group w-full border-2 rounded p-5 mb-3 relative">
        <img src={image} alt="" className="w-full" />
        {/* title & price  */}
        <div className="absolute top-0 right-0 w-full h-full bg-slate-600 p-3 rounded text-white
           opacity-[0] group-hover:opacity-80 transition-all duration-300 ">
          <h5 className="mb-3 text-[14px] "> {title} </h5>
          <h6 className="font-semibold">$ {price} </h6>
          {/* plus & overview button  */}
          <div className="absolute bottom-1 left-[50%] translate-x-[-50%] w-[50%] h-[30px] mt-3 rounded-sm flex justify-around items-center bg-white text-slate-950">
            <Link to={`/product/${id}`} >
              <FaEye className='text-[25px] text-slate-950 hover:text-amber-500 ' />
            </Link>
            <Link onClick={() => increaseAmount(product, id)} >
              <FaPlus className='text-[25px] text-slate-950 hover:text-cyan-500 ' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product

// موارد استفاده className={`${}`}