import React, { useContext } from 'react';
import { ProductsContext } from '../context/ProductsContext';
import Product from '../components/Product';

function Jewelery() {
    const { products } = useContext(ProductsContext);
    const filteredProducts = products.filter(item => ((item.category === "jewelery")));
    return (
        <div className="">
            <div className='w-full py-48 mx-auto'>
                <div className="container text-center mx-auto">
                    <h2 className=" inline-block uppercase border-b-2 py-2 font-semibold text-xl text-[#64748b] border-slate-500 ">jewelery</h2>
                    <div className='p-5 md:p-10'>
                        <div className="columns-1 gap-3 lg:gap-5 sm:columns-2 lg:columns-3 xl:columns-4 
                             [&>img:not(:first-child)]:mt-3 lg:[&>img:not(:first-child)]:mt-5 ">
                            {
                                filteredProducts.map(product => {
                                    return (<Product product={product} key={product.id} />)
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jewelery