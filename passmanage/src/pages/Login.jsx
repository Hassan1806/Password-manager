import React from 'react'
import { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
const Login = () => {
  const [captchaValue, setCaptchaValue] = useState(null)
  
    const [ username, setusername] = useState('')
    const [ email, setemail] = useState('')
    const [ password, setpassword] = useState('')
    return (
      <div className='min-h-[60vh] flex items-center justify-center mx-100 rounded-xl bg-gray-100 text-black' >
        
        <div className='flex flex-col gap-4 p-15 w-full max-w-md rounded-xl'>
          <h2 className='text-2xl font-bold text-center'>Login</h2>
  
  
          <label className='font-semibold mx-1' name="email" htmlFor="email">Email</label>
          <input className='border border-gray-300 p-2 rounded-md' type="email" id="email" placeholder='Email' value={email} onChange={e => setemail(e.target.value)}/>
  
          <label className='font-semibold mx-1' name="password" htmlFor="password">Password</label>
          <input className='border border-gray-300 p-2 rounded-md' type="password" id="password" placeholder='Password' value={password} onChange={e => setpassword(e.target.value)}/>
          <ReCAPTCHA
            sitekey={"6LcRb5MrAAAAALRKAj1m20GNvlkR3-MxT8bZu0Pc"}
            onChange={(value) => setCaptchaValue(value)}
          />
          <button disabled={!captchaValue} className='bg-[#00a63e] text-white p-2 rounded-lg cursor-pointer transition-all duration-300 delay-150 ease-in hover:border-[#00a63de9] border-3 hover:bg-[#00a63de9]'>Login</button>
        </div>
  </div>   
    )
}

export default Login
