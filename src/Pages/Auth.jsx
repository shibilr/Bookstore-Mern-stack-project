import React from 'react'
import { FaEye, FaUser } from 'react-icons/fa'

function Auth({insideRegister}) {
  return (
    <div style={{ backgroundColor: 'rgba(0,0,0,0.5)' }} className='w-full min-h-screen flex justify-center items-center bg-[url(/landing.png)] bg-cover bg-center text-white'>
      <div className='p-10'>
        <h1 className='font-bold text-3xl text-center'>BOOKSTORE</h1>
        <div style={{ width: '400px' }} className='bg-black text-white p-5 flex justify-center items-center flex-col my-5'>
          <div style={{ width: '80px', height: '80px', borderRadius: '50%' }} className='border mb-5 flex justify-center items-center'>
            <FaUser className='text-3xl' />
          </div>
          <h1 className='text-2xl'>{insideRegister?"Register":"Login"}</h1>
          <form className='w-full my-5'>
            {/* Username */}
            {
              insideRegister &&
              <input type="text" placeholder='Username' className='bg-white text-black p-2 my-5 w-full rounded'/>
            }
            {/* Email */}
            <input type="email" placeholder='Email' className='bg-white text-black p-2 mb-5 w-full rounded'/>
            {/* Password */}
            <div className='flex items-center'>
              <input type="password" placeholder='Password' className='bg-white text-black p-2 mb-5 w-full rounded'/>
              <FaEye className='text-gray-500 cursor-pointer' style={{marginLeft:'-25px',marginTop:'-20px'}}/>
              </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Auth
