import React, { useContext } from 'react'
import darkContext from '../context/darkContext'

const Project = () => {

  const {myStyle} = useContext(darkContext)
  
  return (
    <div id='Project' style={myStyle} className='scroll-mt-20 border-2 mt-24'>
        <div className='ml-9 mr-7 sm:ml-[25vw] border-4 border-red-500 mt-4 sm:mr-72 bg-blue-500' style={myStyle}>
            <div className='text-center'>
              <h1 className='underline decoration-wavy text-3xl'>Projects</h1>
            </div>
            <div className='sm:flex sm:w-[50vw] mt-6'>
                <div className='IMAGE sm:w-[25vw] h-72 border border-amber-500'>
                  <img src="#" alt="" />
                </div>
                <div className='PROJECTDESCRIPTION sm:w-[25vw] h-72 border-2'>descript1</div>
            </div>

            <div className='sm:flex sm:w-[50vw] mt-6'>
                <div className='IMAGE sm:w-[25vw] h-72 border border-amber-500'>
                  <img src="#" alt="" />
                </div>
                <div className='PROJECTDESCRIPTION sm:w-[25vw] h-72 border '>descript2</div>
            </div>
        </div>
    </div>
  )
}

export default Project
