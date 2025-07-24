import React from 'react'

const Footer = () => {
  return (
    <div className=" mt-30 outline-none shadow-none p-5"> 
      <div className='text-white bg-gradient-to-r from-[#0d1b2a] to-[#1b263b] rounded-2xl p-2 md:p-4 flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 text-center md:text-left'>
        <div className="logo font-medium text-xl md:text-2xl transition duration-500 delay-75 ease-in-out hover:text-green-600 hover:font-bold flex-shrink-0">
          <span className='text-green-600'>&lt;</span>
          Pass
          <span className='text-green-600 transition duration-500 delay-75 ease-in-out hover:text-white hover:font-bold cursor-pointer'>
            OP/ &gt;
          </span>
        </div> 
        
        <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-sm md:text-base">
          <span>Created With ❤️ By Muhammad Hassan</span>
          <span className="hidden sm:inline">|</span>
          <span>&copy; 2025</span>
          <span className="hidden sm:inline">|</span>
          <span>All Rights Reserved</span>
        </div>
      </div>
    </div>
  )
}

export default Footer