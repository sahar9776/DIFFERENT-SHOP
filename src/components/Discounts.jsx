import React, { useContext } from 'react';
import { ProductsContext } from '../context/ProductsContext';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { FaEye } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa6';
import { MdDiscount } from 'react-icons/md';

function Discounts() {
    const { products } = useContext(ProductsContext);
    const { increaseAmount } = useContext(CartContext);
    const filteredProducts = products.filter(item => (item.id % 5 === 0));
    return (
        <div className="w-full mx-auto text-center hidden md:block ">
            <h2 className=" inline-block uppercase border-b-2 py-2 font-semibold text-xl text-[#64748b] border-slate-500 ">discounts</h2>
            <div className="w-full flex justify-center md:h-[720px] lg:h-[300px] mt-10 mb-32 pt-16 mx-auto bg-slate-800">
                <div className="container text-center flex justify-center ">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-[20px] max-w-sm mx-auto md:max-w-none lg:[&>*:nth-child(even)]:mt-4 ">
                        {
                            filteredProducts.map(product => (
                                <div className='group relative md:w-[270px] lg:w-[230px] xl:w-[280px] h-[300px] bg-white  border-2 p-5 border-slate-200 rounded-md hover:translate-y-1 flex justify-center items-center ' key={product.id}>
                                    <div className="absolute top-1 left-1 w-[30px] h-[30px] rounded-full flex justify-center items-center">
                                        <MdDiscount className='text-[20px] text-red-500 ' />
                                    </div>
                                    <img src={product.image} alt="" className="w-full h-full" />
                                    {/* title & price  */}
                                    <div className="absolute top-0 right-0 w-full h-full bg-slate-600 p-3 rounded text-white opacity-[0] group-hover:opacity-80 transition-all duration-300 ">
                                        <h5 className="mb-3 text-[14px] "> {product.title} </h5>
                                        <h6 className="font-semibold">$ {product.price} </h6>
                                        {/* plus & overview button  */}
                                        <div className="absolute bottom-1 left-[50%] translate-x-[-50%] w-[50%] h-[30px] mt-3 rounded-sm flex justify-around items-center bg-white text-slate-950">
                                            <Link to={`/product/${product.id}`} >
                                                <FaEye className='text-[25px] text-slate-950 hover:text-amber-500 ' />
                                            </Link>
                                            <Link onClick={() => increaseAmount(product, product.id)} >
                                                <FaPlus className='text-[25px] text-slate-950 hover:text-cyan-500 ' />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Discounts