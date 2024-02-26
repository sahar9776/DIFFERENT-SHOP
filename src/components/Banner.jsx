import React from 'react';
import banner from '../assetes/image/man2.png';
import { Link } from 'react-router-dom';

function Banner() {
    return (
        <section className="h-[700px] bg-[#e2e8f0] bg-no-repeat bg-cover bg-center py-24 px-3 lg:px-0 ">
            <div className="container mx-auto flex justify-around h-full">
                {/* image  */}
                <div className="hidden lg:block">
                    <img src={banner} alt="" className="w-full" />
                </div>
                {/* text  */}
                <div className="flex flex-col justify-center">
                    {/* preTitle  */}
                    <div className="font-semibold flex items-center uppercase">
                        <div className="w-10 h-[2px] bg-red-500 mr-3 "></div>New brand
                    </div>
                    {/* title  */}
                    <h1 className="text-[70px] leadig-[1.1] font-light mb-4 uppercase">The latest fashion clothes <br />
                        <span className='font-semibold'>Mens</span>
                    </h1>
                    <Link to={'/'} className='self-start uppercase font-semibold border-b-2 border-blue-800'>
                        Discover More
                    </Link>
                </div>

            </div>
        </section>
    )
}

export default Banner