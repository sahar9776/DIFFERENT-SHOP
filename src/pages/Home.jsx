import React, { useContext, useState } from 'react';
import Banner from '../components/Banner';
import { ProductsContext } from '../context/ProductsContext';
import Product from '../components/Product';
import Loading from '../components/Loading';
import Discounts from '../components/Discounts';


function Home() {
  const { products, isLoading } = useContext(ProductsContext);
  return (
    <div className="">
      {/* Banner  */}
      <Banner />
      <div className='w-full py-16 mx-auto'>
        <div className="container text-center mx-auto">
          <h2 className=" inline-block uppercase border-b-2 py-2 font-semibold text-xl text-[#64748b] border-slate-500 ">products</h2>
          <div className='p-5 md:p-10'>
            <div className="columns-1 gap-3 lg:gap-5 sm:columns-2 lg:columns-4 xl:columns-5 
            [&>img:not(:first-child)]:mt-3 lg:[&>img:not(:first-child)]:mt-5 ">
              {
                isLoading ? (<Loading />) : (products.map(product => {
                  return (<Product product={product} key={product.id} />)
                }))

              }
            </div>
          </div>
        </div>

        <Discounts />
      </div>
    </div>
  )
}

export default Home