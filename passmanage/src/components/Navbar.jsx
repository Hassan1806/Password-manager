import React from 'react';

const Navbar = () => {
return (
<div className='p-5'>        <nav className='text-white bg-gradient-to-r from-[#0d1b2a] to-[#1b263b] container mx-auto mb-10 rounded-2xl p-5 '>
            <div className=' h-14 flex justify-between items-center py-5 px-4 '>
            <div className="logo font-medium text-2xl transition duration-500 delay-75 ease-in-out hover:text-green-600 hover:font-bold whitespace-nowrap ">
                <span className='text-green-600'>
                &lt;
                </span>

                Pass
                <span className='text-green-600 transition duration-500 delay-75 ease-in-out hover:text-white hover:font-bold cursor-pointer'>
                    OP/
                &gt;
                </span>
                
                </div>

            <button className='bg-slate-200 justify-center items-center flex flex-row gap-2 px-5 py-2 border rounded-2xl cursor-pointer text-sm md:text-base'>
                <img className="w-5 md:w-6" src="/icons/github-brands.svg" alt="Github Logo"  />
                <span className='font-semibold text-gray-800  '> <a href="https://github.com/Hassan1806/Password-manager" target='_blank' > Github</a></span>
            </button>
            
            </div>
        </nav>
        </div>

);     
};

export default Navbar;


