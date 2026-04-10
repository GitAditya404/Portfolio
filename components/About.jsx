import React from 'react'
import { useContext } from 'react'
import darkContext from '../context/darkContext'

const About = () => {
    const {myStyle} = useContext(darkContext)

  return (
    <div id='About' className=' ml-6 mt-24 sm:mt-0 sm:ml-[25vw] scroll-mt-20 sm:mr-76 ' style={myStyle}>
        <h1 className='underline decoration-wavy text-3xl'>About Me</h1>
        <div className=' mt-7'>
            <p className='text-xl'>I am a Computer Science undergraduate currently in my pre-final year, based in Dehradun, India.</p>
            <br/>
            <p className='text-xl'>
              Along with MERN stack I have a solid foundation in programming languages such as C and C++.
              <br/>
              I am a tech enthusiast with a strong curiosity about how things work behind the scene.
             </p>
        </div>

        <div className=' text-center mt-24 '>
        <p className='text-2xl font-bold  underline'>Skills</p>
        </div>
        <div className='grid grid-cols-1 mt-8 mr-9 ml-5 sm:ml-0 sm:mr-0 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[150px] '>
              <div className="border border-[#320273] rounded-2xl flex flex-col items-center justify-center">    
                <i class="devicon-react-original text-6xl colored"></i>
                <p className='text-lg sm:text-xl'>ReactJs</p>
              </div>
              <div className="border border-[#320273] rounded-2xl flex flex-col items-center justify-center">       
                <i class="devicon-mongodb-plain text-6xl colored"></i>
                <p className='text-lg sm:text-xl'>MongoDb</p>
              </div>
              <div className="border border-[#320273] rounded-2xl flex flex-col items-center justify-center">      
              <i class="devicon-express-original text-6xl colored"></i>
                <p className='text-lg sm:text-xl'>Express</p>
              </div>
              <div className="border border-[#320273] rounded-2xl flex flex-col items-center justify-center">    
                <i class="devicon-css3-plain colored text-6xl"></i>
                <p className='text-lg sm:text-xl'>CSS</p>
              </div>
              <div className="border border-[#320273] rounded-2xl flex flex-col items-center justify-center">    
                <i class="devicon-cplusplus-plain colored invert brightness-200  text-6xl"></i>
                <p className='text-lg sm:text-xl'>C++</p>
              </div>
              <div className="border border-[#320273] rounded-2xl flex flex-col items-center justify-center">    
                <i class="devicon-tailwindcss-original colored text-6xl"></i>
                <p className='text-lg sm:text-xl'>Tailwind Css</p>
              </div>
              <div className="border border-[#320273] rounded-2xl flex flex-col items-center justify-center">    
                <i class="devicon-github-original invert brightness-200 colored text-6xl"></i>
                <p className='text-lg sm:text-xl'>Github</p>
              </div>
              <div className="border border-[#320273] rounded-2xl flex flex-col items-center justify-center">    
                <i class="devicon-javascript-plain colored text-6xl"></i>
                <p className='text-lg sm:text-xl'>JavaScript</p>
              </div>
              <div className="border border-[#320273] rounded-2xl flex flex-col items-center justify-center">    
                <i class="devicon-nodejs-plain-wordmark colored text-7xl"></i>
                <p className='text-lg sm:text-xl'>NodeJs</p>
              </div>

        </div>
    </div>
  )
}

export default About
