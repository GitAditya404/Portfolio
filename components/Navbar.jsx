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
      <div className='w-full h-12 fixed top-0 z-30 p-5 border border-blue ' style={myStyle}>
        <div className='flex '>
            <div className='flex  border border-blue-600 hover:italic hover:text-orange-400 cursor-pointer'>
              <p className=' ml-[15vw] font-semibold text-xs '>i am</p>
              <p className='absolute ml-[16.5vw] font-semibold text-xs mt-2.5 '>aditya</p>
            </div>

            <div className=' border'>

              <img onClick={toggleHandler} className={`ml-[55vw] size-4 cursor-pointer ${isDark ? 'invert brightness-200' : ''}`} src={`${isDark ? '../src/day.png' : '../src/moon.png' }`} alt="" />
           </div>
        </div>
      </div>
 
  )
}

export default Navbar
