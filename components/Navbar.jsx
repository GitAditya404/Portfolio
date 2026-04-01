import React, { useContext, useState } from 'react'
import darkContext from '../context/darkContext';

const Navbar = () => {

  const {myStyle , setMyStyle} = useContext(darkContext);

    const toggleHandler = () => {
    if(myStyle.color === 'white'){
      document.body.classList.add('dark')
      document.body.style.backgroundColor = 'white'
      setMyStyle({
        color: 'black',
        backgroundColor : 'white'
      })
    }
    else{
      document.body.classList.remove('dark')
      document.body.style.backgroundColor = 'black'
      setMyStyle({
        color: 'white',
        backgroundColor : 'black'
      })
    }
  }

  const isDark = myStyle.backgroundColor === 'black'


  return ( 
      <div className={`w-full h-17 sm:h-15 md:h-12 fixed top-0 z-30 p-5 border border-blue ${isDark ? 'bg-[#1C1917]' : 'white'}`}  >
        <div className='flex '>
            <div className='flex  font-semibold px-9 text-xl sm:text-sm md:text-xs sm:ml-12 md:ml-[10vw]  hover:-skew-x-12 hover:text-orange-400 cursor-pointer'>
              <p className='   '>i am</p>
              <p className='absolute px-3 py-4.5 sm:py-4 md:py-2.5 '>aditya</p>
            </div>

            <div>
              <img onClick={toggleHandler} className={`ml-[55vw] size-6 sm:size-5 md:size-4 cursor-pointer ${isDark ? 'invert brightness-200' : ''}`} src={`${isDark ? '../src/day.png': '../src/moon.png' }`} alt="" />
           </div>
        </div>
      </div>
  )
}

export default Navbar
