import React from 'react'
import { useContext } from 'react'
import darkContext from '../context/darkContext'

const About = () => {
    const {myStyle} = useContext(darkContext)

  return (
    <div id='About' className='sm:h-screen ml-6 mt-24 sm:mt-0 sm:ml-[25vw] scroll-mt-20 sm:mr-76 ' style={myStyle}>
        <h1 className='underline decoration-wavy text-4xl'>About Me</h1>
        <div className=' text-center '>
        <p className='text-2xl mt-9 underline'>Skills</p>
        </div>
        <div className='grid grid-cols-1  mt-8 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[150px] '>
              <div className="border border-[#320273] rounded-2xl flex flex-col items-center justify-center">    
                <i class="devicon-react-original text-6xl colored"></i>
                <p>ReactJs</p>
              </div>
              <div className="border border-[#320273] rounded-2xl flex flex-col items-center justify-center">       
                <i class="devicon-mongodb-plain text-6xl colored"></i>
                <p>MongoDb</p>
              </div>
              <div className="border border-[#320273] rounded-2xl flex flex-col items-center justify-center">      
              <i class="devicon-express-original text-6xl colored"></i>
                <p>Express</p>
              </div>
              <div className="border border-[#320273] rounded-2xl flex flex-col items-center justify-center">    
                <i class="devicon-css3-plain colored text-6xl"></i>
                <p>CSS</p>
              </div>
              <div className="border border-[#320273] rounded-2xl flex flex-col items-center justify-center">    
                <i class="devicon-html5-plain colored text-6xl"></i>
                <p>HTML</p>
              </div>
              <div className="border border-[#320273] rounded-2xl flex flex-col items-center justify-center">    
                <i class="devicon-tailwindcss-original colored text-6xl"></i>
                <p>Tailwind Css</p>
              </div>
              <div className="border border-[#320273] rounded-2xl flex flex-col items-center justify-center">    
                <i class="devicon-github-original invert brightness-200 colored text-6xl"></i>
                <p>Github</p>
              </div>
              <div className="border border-[#320273] rounded-2xl flex flex-col items-center justify-center">    
                <i class="devicon-javascript-plain colored text-6xl"></i>
                <p>JavaScript</p>
              </div>
              <div className="border border-[#320273] rounded-2xl flex flex-col items-center justify-center">    
                <i class="devicon-nodejs-plain-wordmark colored text-7xl"></i>
                <p>NodeJs</p>
              </div>

        </div>
    </div>
  )
}

export default About
