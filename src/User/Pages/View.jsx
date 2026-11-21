import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../../Components/Footer'
import { FaBackward, FaCamera, FaEye } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function View() {
  const [modal,SetModal] = useState(false)
  return (
    <>
    <Header/>
      <div className='md:m-10 m-5'>
        <div className='border shadow rounded border-gray-200 p-5'>
          {/* Grid */}
          <div className='md:grid grid-cols-4 gap-x-10'>
            {/* image */}
            <div className='col-span-1'>
              <img src="https://tse2.mm.bing.net/th/id/OIP.hH_4GOsGCoCqQBwCc-5J7wHaLS?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="view book" />
            </div>
            <div className='col-span-3'>
              <div className='flex justify-between'>
                <h3 className='font-bold text-2xl'>Title</h3>
                <button onClick={()=>SetModal(true)} className='text-gray-400'><FaEye/></button>
              </div>
              <h4 className='text-blue-700 font-bold mt-2'>Author</h4>
              <div className='md:grid grid-cols-3 gap-10 my-5'>
                <p className='font-bold'>Publisher :</p>
                <p className='font-bold'>Language :</p>
                <p className='font-bold'>No. of Pages :</p>
                <p className='font-bold'>Category :</p>
                <p className='font-bold'>ISBN :</p>
                <p className='font-bold'>Original Price :</p>
                <p className='font-bold'>Seller :</p>
              </div>
              <div className='my-4 md:my-10'>
                <h4 className='font-bold text-2xl'>Abstract :</h4>
              </div>
              <div className='flex justify-end'>
                <Link to={'/books'} className='bg-blue-900 text-white p-2 font-bold flex items-center rounded'><FaBackward className='me-2'/>Back</Link>
                <button className='bg-green-900 text-white p-2 font-bold ms-3 rounded'>Buy $ 45</button>
              </div>
            </div>
          </div>
        </div>
        {/* Modal */}
        { modal &&
          <div onClick={()=>SetModal(false)} className='relative z-10 overflow-y-auto'>
          <div className='bg-gray-500/75 fixed inset-0'>
          <div className='flex justify-center items-center min-h-screen'>
          <div className='bg-white rounded-2xl w-100 md:w-250'>
          {/* Modal title */}
          <div className='bg-black text-white p-3'>
            <h2>Book Images</h2>
          </div>
          {/* Modal Body */}
          <div className='relative p-5'>
            <p className='flex items-center text-blue-500'><FaCamera className='me-3'/>Camera clicks of the books</p>
            <div className='flex flex-wrap my-5'>
            {/* Duplicate image */}
            <img className='md:w-75 w-25 md:me-2 mb-3 md:mt-0' src="https://tse2.mm.bing.net/th/id/OIP.hH_4GOsGCoCqQBwCc-5J7wHaLS?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="book" />
            </div>
          </div>
          
          </div>
          </div>
          </div>
        </div>
        }
      </div>
      <Footer/>
    </>
  )
}

export default View
