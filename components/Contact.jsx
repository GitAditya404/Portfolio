import React, { useContext, useState } from 'react'
import darkContext from '../context/darkContext'

const Contact = () => {

  const {myStyle} = useContext(darkContext)
  const isDark = myStyle.backgroundColor ==='black'

  const contactSyle = {
    backgroundColor : isDark ? '#292524' : '#f1f2f6',
    color : isDark ? 'white' : 'black'
  }

  return (
    <div id='Contact' className=' scroll-mt-20 mt-20' style={myStyle}> 
        <div className='ml-6 sm:ml-[25vw]  mr-5  sm:mr-80 flex flex-col  '>
          <h1 className='text-3xl sm:text-4xl underline'>Based in India</h1>

          <div className=' rounded-2xl  overflow-hidden p-4  mt-7' style={contactSyle}>
              
              <div className='TEXTDIV text-xs rounded-2xl gap-6 flex flex-col '>
                  <div className='text-center'>
                   <p className ='font-bold text-2xl' style={contactSyle}>Let's Connect</p>
                  </div>
                  
                  <div className='sm:flex justify-between border-b border-gray-400 py-4' style={contactSyle}>
                    <p className='text-xl font-semibold'>Email</p>
                    <p className='text-xl'>aditya.work404@gmail.com</p>
                  </div>

                  <div className='sm:flex  border-b border-gray-400 py-4' style={contactSyle}>
                    <p className='text-xl font-semibold' >LinkedIn</p>
                    <div className='flex sm:flex-none sm:ml-auto'>
                      <a className='text-xl ml-auto' href="https://www.linkedin.com/in/aditya-kumar-412877292" target='_blank'>www.linkedin.com/in/aditya-kumar-412877292</a>
                      <img className='size-7' src="/arrow.png" alt="" />
                    </div>

                  </div>

                  <div className='sm:flex border-b border-gray-400 py-5' style={contactSyle}>
                    <p className='text-xl font-semibold'>Github</p>
                    <div className='flex sm:flex-none sm:ml-auto'>
                      <a className='text-xl ml-auto' href="https://github.com/GitAditya404">https://github.com/GitAditya404</a>
                      <img className='size-7' src="/arrow.png" alt="" />
                    </div>

                  </div>
              </div>
          </div>
          {/* <div className=' overflow-hidden  border-amber-500 mt-7'>
            <p className='text-8xl translate-y-6 sm:text-[230px] sm:translate-y-16 leading-none ml-3 '>ADITYA</p>
          </div> */}
          <div className=' overflow-hidden mt-7 relative'>
          <p
            className='text-8xl translate-y-6 sm:text-[230px] sm:translate-y-16 leading-none ml-3 relative inline-block'
            style={{
              color: '#c4b5fd',
              textShadow: `
                0 0 80px #7c3aed,
                0 0 160px #4f29cd88,
                0 0 40px #a78bfa
              `
            }}
          >
            ADITYA
          </p>
        </div>
        </div>
    </div>
  )
}

export default Contact
