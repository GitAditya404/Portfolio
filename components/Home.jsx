import { useContext } from 'react'
import Navbar from './Navbar'
import darkContext from '../context/darkContext'

const  Home = () => {

    const {myStyle} = useContext(darkContext)
    
    const scrollHandler = (id) => {
        document.getElementById(id).scrollIntoView({
            behavior:'smooth'
        })

    }
    return <div id='Home' className="w-full flex flex-col min-h-screen " style={myStyle}>
                <Navbar/>
                <div className='flex h-96 bg-olive-400' style={myStyle}>
                    <div className='sidebar ml-[15vw] fixed top-12 w-[7vw] z-20 text-sm border border-blue-600'>
                        <div className='mt-30 '>
                            <p onClick={() => scrollHandler('Home')}  className='cursor-pointer'>Home</p>
                            <p onClick={() => scrollHandler('About')} className='cursor-pointer'>About</p>
                            <p onClick={() => scrollHandler('Project')} className='cursor-pointer'>Project</p>
                            <p onClick={() => scrollHandler('Contact')} className='cursor-pointer'>Contact</p>                     
                        </div>
                    </div>
                    

                    <div className='DETAIL ml-[25vw] border w-[45vw] border-red-600'>
                        <div className='mt-25'>
                        <p className='text-sm'>Aditya Kumar </p>
                        <p className='text-xs'>Tech Nerd </p>
                        <br/>
                        <p className='text-xs'> I like being the person who turns ideas into outcomes.
                        <br/>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet aut consectetur fuga ipsum esse quam, cumque, porro hic iure, ut fugit? Sequi totam consequatur aliquam dolores temporibus
                         similique optio corrupti dolorum architecto aspernatur, nihil velit fuga eius perspiciatis at dolorem quia laudantium cumque qui possimus omnis sapiente saepe? Inventore, facere!
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, corporis.
                        </p>

                        </div>
                        <div className='flex mt-4 gap-3 '>
                            <img className='size-4 cursor-pointer' src="../src/linkedin-square.png" alt="" />
                            <img className='size-4 cursor-pointer' src="../src/github.png" alt="" />
                        </div>

                    </div>

                    {/*Blob and image*/}
                    <div className='border w-[30vw] border-red-600'>
                        
                                {/* Blob SVG */}
                                <svg
                                    viewBox="0 0 200 200"
                                    className="absolute -z-10 w-56 h-56 blob-animate"
                                >
                                    <path
                                    fill="#6F8591"
                                    d="M50.4,-42.6C66.9,-33.8,83.1,-16.9,85.1,2C87.2,21,75,41.9,58.5,57.9C41.9,74,21,85.1,3.9,81.2C-13.2,77.3,-26.4,58.4,-34.1,42.4C-41.8,26.4,-44.1,13.2,-48.6,-4.6C-53.2,-22.4,-60.2,-44.7,-52.4,-53.5C-44.7,-62.3,-22.4,-57.6,-2.7,-54.9C16.9,-52.1,33.8,-51.4,50.4,-42.6Z"
                                    transform="translate(60 110)"
                                    />
                                </svg>

                                {/* Your image */}
                                <img
                                    src="../src/yourimage.png"
                                    className="w-25 z-10 mt-14 ml-10 "
                                />                         
                    
                    </div>
                </div>

                {/* pacman */}
                    <div className="pac-scene h-screen  z-0" style={myStyle}>

                        <div className="pac-body ml-[22vw]">
                            <div className="half half-top"></div>
                            <div className="half half-bottom"></div>
                        </div>

                        <div className="track-outer">
                        <div className="belt">
                            <span className="tag text-xs">HTML</span>
                            <span className="tag">CSS</span>
                            <span className="tag">JavaScript</span>
                            <span className="tag">React</span>
                            <span className="tag">TypeScript</span>
                            <span className="tag">Node.js</span>
                            <span className="tag">Figma</span>
                            <span className="tag">Git</span>

                            {/* duplicate for infinite loop */}
                            <span className="tag text-xs">HTML</span>
                            <span className="tag">CSS</span>
                            <span className="tag">JavaScript</span>
                            <span className="tag">React</span>
                            <span className="tag">TypeScript</span>
                            <span className="tag">Node.js</span>
                            <span className="tag">Figma</span>
                            <span className="tag">Git</span>
                        </div>
                        </div>               
                    </div> 
        </div>
   
    
}
export default Home