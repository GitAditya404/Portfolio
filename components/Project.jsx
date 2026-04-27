import React, { useContext } from 'react'
import darkContext from '../context/darkContext'


const Project = () => {

  const {myStyle} = useContext(darkContext)
  const isDark = myStyle.backgroundColor  === 'black';
  
return (
    <div id='Project' style={myStyle} className='scroll-mt-20 mt-24'>
      <div className='ml-9 mr-7 sm:ml-[25vw] mt-4 sm:mr-40 ' style={myStyle}>

        {/* Heading */}
        <div className='text-center py-4'>
          <h1 className='underline decoration-wavy text-4xl font-semibold'>
            Projects
          </h1>
        </div>

        {/* Project 1 */}
        <div className='sm:flex items-center mt-8 border-b pb-8'>

          {/* Image */}
          <div className='IMAGE sm:w-[26vw] h-80'>
            <img
              className='w-full h-full object-cover rounded-md shadow-lg'
              src="/live_app2.png"
              alt=""
            />
          </div>

          {/* Description */}
          <div className='PROJECTDESCRIPTION flex flex-col justify-center px-10 sm:w-[32vw] h-80'>

            <h1 className='text-3xl font-bold mb-4 text-center'>Connect</h1>

            <p className={`text-base sm:text-lg leading-8  ${isDark ? "text-gray-300 " : "text-gray-800" }`}>
              A real-time persistent chat application with secure authentication
              using JWT, WebSocket-based instant messaging, and room
              creation/joining using the MERN stack.
            </p>

            {/* Tech stack */}
            <div className='flex gap-5 mt-5 text-base font-semibold text-gray-400'>
              <span>React</span>
              <span>ExpressJs</span>
              <span>MongoDB</span>
              <span>WebSocket</span>
            </div>

            {/* Links */}
            <div className='flex gap-10 mt-8 items-center text-lg'>

              <a href="https://github.com/GitAditya404/chat" className='flex items-center gap-2 hover:underline'>
                <i className="devicon-github-original invert brightness-200 colored text-3xl"></i>
                Code
              </a>

              <a href="https://chat-frontend-ivory-eta.vercel.app/" className='flex items-center gap-2 hover:underline'>
                Live Demo
                <img className='w-5 h-5 invert' src="../src/arrow.png" alt="" />
              </a>

            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className='sm:flex items-center mt-8  pb-8'>

          {/* Image */}
          <div className='IMAGE sm:w-[26vw] h-80'>
            <img
              className='w-full h-full object-cover rounded-md shadow-lg'
              src="/code_learn2.png"
              alt=""
            />
          </div>

          {/* Description */}
          <div className='PROJECTDESCRIPTION flex flex-col justify-center px-10 sm:w-[32vw] h-80'>

            <h1 className='text-3xl font-bold mb-4 text-center'>Code Learn</h1>

            <p className={`text-base sm:text-lg leading-8  ${isDark ? "text-gray-300 " : "text-gray-800" }`}>
              A code to flowchart generator that transforms source code into visual flowcharts for easier understanding and debugging.
            </p>

            {/* Tech stack */}
            <div className='flex gap-5 mt-5 text-base font-semibold text-gray-400'>
              <span>React</span>
              <span>ExpressJs</span>
              <span>Mermaid Library</span>
              <span>Chakra UI</span>
            </div>

            {/* Links */}
            <div className='flex gap-10 mt-8 items-center text-lg'>

              <a href="https://github.com/GitAditya404/Hackathon" className='flex items-center gap-2 hover:underline'>
                <i className="devicon-github-original invert brightness-200 colored text-3xl"></i>
                Code
              </a>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Project