import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../../Components/Footer'
import { FaCircleCheck } from 'react-icons/fa6'
import Edit from '../Components/Edit'

function Profile() {
  const [currentTab,SetCurrentTab] = useState(1)
  return (
    <>
    <Header/>
      <div style={{height:'200px'}} className='bg-black'></div>
        <div style={{height:'230px',width:'230px',marginLeft:'75px',marginTop:'-130px',borderRadius:'50%'}} className='bg-white p-3'>
         <img style={{height:'200px',width:'200px',borderRadius:'50%'}} src="https://static.vecteezy.com/system/resources/thumbnails/036/594/092/small_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg" alt="user" /> 
        </div>
        <div className='flex justify-between px-30 mt-5'>
          <div className='flex items-center'>
            <h1 className='font-bold md:text-3xl text-2xl'>USERNAME</h1>
            <FaCircleCheck className='text-blue-500 ms-3'/>
          </div>
          <Edit/>
        </div>
      <p className='text-xl font-bold px-20 mt-5'>Bio</p>
      <p className='text-justify md:px20 px-20 my-5'>This is your personal space where you can manage your account , explore your reading activity,track your orders, and save books you love. Whether you're building a wishlist, discovering new arrivals,or reviewing your recent purchases , this page keeps everything organized and easy to access.Your reading journey continues here - enjoy exploring , discovering, and collecting stories that inspire you.</p>
      <div className='flex justify-center items-center my-8 font-bold text-lg'>
        <p onClick={()=>SetCurrentTab(1)} className={currentTab==1?'p-4 border-gray-200 border-l border-t border-r rounded cursor-pointer':'p-4 border-gray-200 border-b rounded cursor-pointer'}>Upload book</p>
        <p onClick={()=>SetCurrentTab(2)} className={currentTab==2?'p-4 border-gray-200 border-l border-t border-r rounded cursor-pointer':'p-4 border-gray-200 border-b rounded cursor-pointer'}>Upload Book Status</p>
        <p onClick={()=>SetCurrentTab(3)} className={currentTab==3?'p-4 border-gray-200 border-l border-t border-r rounded cursor-pointer':'p-4 border-gray-200 border-b rounded cursor-pointer'}>Purchase History</p>
      </div>
      {currentTab==1 && <div>Upload books</div>}
      {currentTab==2 && <div>Upload book status</div>}
      {currentTab==3 && <div>Purchase history</div>}
      <Footer/>
    </>
  )
}

export default Profile
