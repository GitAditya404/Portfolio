import React, { useContext } from 'react'
import darkContext from '../context/darkContext'

const Project = () => {

  const {myStyle} = useContext(darkContext)
  
  return (
    <div id='Project' style={myStyle} className='scroll-mt-16'>
        <div className=' min-h-screen ml-[25vw]  mt-4 mr-[15vw] bg-blue-500' style={myStyle}>
            <h1 className='underline text-xl'>Projects</h1>
            <div className='border flex border-black h-44 w-[50vw] mt-6'>
              <div className='IMAGE w-[25vw] h-44 border border-amber-500'>
                <img src="#" alt="" />
              </div>
              <div className='PROJECTDESCRIPTION w-[25vw] h-44 border border-b-fuchsia-400'></div>
            </div>

            <div className='border flex border-black h-45 w-[50vw] mt-6'>
              <div className='IMAGE w-[25vw] h-44 border border-amber-500'>

              </div>
              <div className='PROJECTDESCRIPTION w-[25vw] h-44 border border-b-fuchsia-400'>
                <img src="#" alt="" />
              </div>
            </div>
        </div>
    </div>
  )
}

export default Project
