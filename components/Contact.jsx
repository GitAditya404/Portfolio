import React from 'react'

const Contact = () => {
  return (
    <div className='w-full h-96 bg-emerald-300'> 
        <div className='ml-[25vw] h-96 mr-[15vw] p-4 border border-blue-500 '>
          <h1 className='text-xl'>Based in India</h1>
          <div className=' relative rounded overflow-hidden  bg-rose-400  border-black h-44 border-4 '>
            <img src="../src/wallpaper.jpg" className='z-10 ' alt="" />

            <div className='text-xs absolute  z-20 border gap-2.5 flex flex-col border-blue-500 mt-3'>
            <p className='underline text-sm'>Let's Connect</p>
              
              <div className='flex justify-between border-b border-gray-400 py-2'>
                <p className='text-gray-500'>Email</p>
                <p>aditya.work404@gmail.com</p>
              </div>

              <div className='flex justify-between border-b border-gray-400 py-2'>
                <p className='text-gray-500' >LinkedIn</p>
                <a href="www.linkedin.com/in/aditya-kumar-412877292">www.linkedin.com/in/aditya-kumar-412877292</a>
              </div>

              <div className='flex justify-between border-b border-gray-400 py-2'>
                <p className='text-gray-500'>Github</p>
                <a href="https://github.com/GitAditya404">https://github.com/GitAditya404</a>
              </div>

            </div>


          </div>
        </div>
    </div>
  )
}

export default Contact
