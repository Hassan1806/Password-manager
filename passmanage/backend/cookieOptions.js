import React from 'react'

const cookieOptions =  {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
    sameSite: process.env.NODE_ENV === 'production' ? 'Strict' : 'Lax', // Use Strict in production, Lax in development
    maxAge: 24*60*60*1000 // 1 day in seconds
 
}

export default cookieOptions
