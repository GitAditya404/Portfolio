import React from 'react'

const Contact = () => {
  return (
    <div className='w-full h-96 border mt-7 bg-emerald-300'> 
        <div className='ml-[25vw] h-96 mr-[15vw] flex flex-col  border border-blue-500 '>
          <h1 className='text-xl'>Based in India</h1>
          <div className='IMGDIV  rounded bg-rose-400  border-black   '>
              
              <div className='TEXTDIV text-xs rounded bg-white border gap-2.5 flex flex-col border-blue-50.0 mt-3'>
                  <p className='underline text-sm'>Let's Connect</p>
                  
                  <div className='flex justify-between border-b border-gray-400 py-2'>
                    <p className=''>Email</p>
                    <p>aditya.work404@gmail.com</p>
                  </div>

                  <div className='flex justify-between border-b border-gray-400 py-2'>
                    <p className='' >LinkedIn</p>
                    <a href="www.linkedin.com/in/aditya-kumar-412877292">www.linkedin.com/in/aditya-kumar-412877292</a>
                  </div>

                  <div className='flex justify-between border-b border-gray-400 py-2'>
                    <p className=''>Github</p>
                    <a href="https://github.com/GitAditya404">https://github.com/GitAditya404</a>
                  </div>
              </div>
          </div>
          <div className='border overflow-hidden   border-amber-500 mt-auto  '>

            <p className='text-9xl leading-none ml-8 translate-y-8'>ADITYA</p>
          </div>
        </div>
    </div>
  )
}

export default Contact
