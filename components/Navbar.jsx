import React from 'react'

const Navbar = () => {
  return (
   
      <div className='w-full h-12 fixed top-0   bg-rose-500 p-5 border border-black '>
        <div className='flex '>
            <div className='flex  border border-blue-600 hover:italic hover:text-orange-400 cursor-pointer'>
              <p className=' ml-[15vw] font-semibold text-xs '>i am</p>
              <p className='absolute ml-[16.5vw] font-semibold text-xs mt-2.5 '>aditya</p>
            </div>

            <div className=' border'>

              <img className='ml-[55vw] size-4 cursor-pointer' src="../src/moon.png" alt="" />
           </div>
        </div>
      </div>
 
  )
}

export default Navbar
