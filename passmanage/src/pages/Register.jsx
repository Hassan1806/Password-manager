import React from 'react'

const Register = () => {
  return (
    <div className='min-h-[60vh] flex items-center justify-center mx-100 rounded-xl bg-gray-100 text-black' >
      
      <div className='flex flex-col gap-4 p-15 w-full max-w-md rounded-xl'>
        <h2 className='text-2xl font-bold text-center'>Register</h2>

        <label className='font-semibold mx-1' name="username" htmlFor="username">Username</label>
        <input className='border border-gray-300 p-2 rounded-md' type="text" id="username" placeholder='Username' value={''}/>

        <label className='font-semibold mx-1' name="email" htmlFor="email">Email</label>
        <input className='border border-gray-300 p-2 rounded-md' type="email" id="email" placeholder='Email' value={''}/>

        <label className='font-semibold mx-1' name="password" htmlFor="password">Password</label>
        <input className='border border-gray-300 p-2 rounded-md' type="password" id="password" placeholder='Password' value={''}/>

        <button className='bg-blue-500 text-white p-2 rounded-md'>Register</button>
      </div>
</div>   
  )
}

export default Register 
