import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigateto=useNavigate();
  const [form,setForm]=useState({
    id:'',
    email:'',
    password:''
  });

  const handleChange=()=>{
//conncetiion with api needs to be written here

  }


  return (
    <div className='h-screen w-screen flex justify-center items-center bg-stone-100'>

      <div className='w-full max-w-md bg-white p-8 rounded-xl shadow-lg'>
           <h2 className='text-3xl font-bold text-center mb-6'>Log-in</h2>
           {/*error handling needs to be written */}

           <form onSubmit={handleChange}>
            <div className='mb-4'>
              <label className='text-xl mb-1 block'>E-mail : </label>
              <input
               type='text'
                className="w-full border px-3 py-2 rounded"
                />
            </div>

              <div className='mb-4'>    
                  <label className='text-xl mb-1 block'>Password : </label>
              <input
               type='password'
                className="w-full border px-3 py-2 rounded"
                />
            </div>

            <div className='mb-4'>

            <button className='w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition text-xl cursor-pointer' type='submit'>Login</button>
            </div>

            <div className='mb-4 text-center'>

              <p className='text-stone-500'>Don't have an account ? {" "} <span onClick={()=>navigateto('/register')}
               className='cursor-pointer text-blue-600 underline'
               >Register</span></p>
             
            </div>


           </form>



      </div>
      
    </div>
  )
}

export default Login
