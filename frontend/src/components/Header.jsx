import React from 'react'
import { HiMenu } from "react-icons/hi";
import { IoNotificationsSharp } from "react-icons/io5";

const Header = () => {
  return (
    <div className='flex w-screen h-16 p-3 shadow-xl rounded justify-between items-center '>
     <div>
      <h1 class="text-3xl font-extrabold mr-4 tracking-wider">TRADELiNK</h1>
     </div>

     <div className='flex gap-3'>
       <IoNotificationsSharp className="text-2xl mr-4 cursor-pointer"/>
       <HiMenu className="text-2xl mr-4 cursor-pointer" />
        <p></p>
     </div>
    </div>
  )
}

export default Header
