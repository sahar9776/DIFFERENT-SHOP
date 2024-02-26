import React from 'react'
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductsContext } from '../context/ProductsContext';
import { CartContext } from '../context/CartContext';

function ProductDetails() {
    const { id } = useParams();
    const { products } = useContext(ProductsContext);
    const product = products.find(item => item.id === parseInt(id));
    const { image, price, description, category, title } = product || {};
    const { increaseAmount } = useContext(CartContext);
    return (
        <section className="pt-56 pb-12 h-[80%] flex items-center ">
            <div className="container mx-auto ">
                {/* image & text  */}
                <div className="flex flex-col lg:flex-row items-center">
                    {/* image  */}
                    <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0 ">
                        <img src={image} alt="" className="max-w-[200px] lg:max-w-sm " />
                    </div>
                    {/* text  */}
                    <div className="flex-1 text-start px-3 lg:px-0">
                        <h1 className="text-[26px] font-medium mb-2 max-w-[450px] lg:mx-0 "> {title} </h1>
                        <div className="text-xl text-red-500 font-medium mb-6"> $ {price} </div>
                        <p className="mb-8 text-slate-400"> {description} </p>
                        <p className="mb-8 text-slate-600 font-semibold "># {category} </p>
                        {/* plus & minus button  */}
                        <div className=" mx-auto mt-3 rounded-sm flex justify-around items-center ">
                            <button onClick={() => increaseAmount(product, id)} className='text-[25px] bg-white text-slate-950 shadow-md py-2 px-4 rounded hover:translate-y-0.5 hover:shadow-lg '>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductDetails