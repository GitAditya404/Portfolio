import { useContext ,useState, useEffect } from 'react'
import Navbar from './Navbar'
import darkContext from '../context/darkContext'

const  Home = () => {

    const {myStyle} = useContext(darkContext)
    const [active, setActive] = useState('Home');  

    // for scroll detection
    useEffect(() => {
        const sections = document.querySelectorAll('div[id]');

        const observer = new IntersectionObserver(
            (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                setActive(entry.target.id);
                }
            });
            },
            {
            threshold: 0.3,
            rootMargin: '0px 0px -30% 0px'
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    const scrollHandler = (id) => {
        setActive(id)
        document.getElementById(id).scrollIntoView({
            behavior:'smooth'
        })
    }

    const isDark = myStyle.backgroundColor === 'black'

    return <div id='Home' className="w-full flex flex-col min-h-screen" style={myStyle}>
                <Navbar/>
                <div className='flex flex-col sm:h-screen sm:flex-row border' style={myStyle}>
                    <div className={`sidebar hidden sm:block pt-11 pb-11 px-10 rounded-xl ml-[10vw] fixed top-59  z-20 text-2xl  ${isDark ? 'bg-[#130f40]' : 'bg-[#F1F5F9]'} `}  >
                        <div>
                            <p onClick={() => scrollHandler('Home')}  className={`nav-item ${active === 'Home' ? 'active ' : ''} ${isDark ? 'dark-line' : 'light-line'}`} >Home</p>
                            <p onClick={() => scrollHandler('Project')} className={`nav-item ${active === 'Project' ? 'active' : ''} ${isDark ? 'dark-line' : 'light-line'}`}>Project</p>
                            <p onClick={() => scrollHandler('Contact')} className={`nav-item ${active === 'Contact' ? 'active' : ''} ${isDark ? 'dark-line' : 'light-line'}`}>Contact</p>                     
                        </div>
                    </div>
                    
                    <div className='DETAIL order-2 mt-12 sm:mt-0 sm:order-1  ml-6 sm:ml-[25vw]  w-[90vw] sm:w-[45vw] border-red-600'>
                        <div className=' sm:mt-44'>
                            <p className='text-4xl sm:text-4xl ml-17 sm:ml-0'>Aditya Kumar </p>
                            <p className='text-lg sm:text-xl tracking-tighter ml-24 sm:ml-0'>Full Stack Developer </p>
                            <br/>
                            <br/>
                            <p className='text-xl'> I like being the person who turns ideas into outcomes.
                            <br/>
                            <br/>
                                I'm a full-stack developer skilled in the MERN stack, with a strong eye for clean UI. I'm comfortable working across the entire stack , from building responsive frontends to designing RESTful APIs.
                            <br/>
                            <br/>
                            I use Git and GitHub for version control and also know little bit Docker .
                            </p>
                            <br/>

                        </div>
                        <div className='flex mt-6 gap-8 ml-28 sm:ml-0 '>
                            <a href="https://www.linkedin.com/in/aditya-kumar-412877292" target='_blank'>
                                <img className={`size-8 cursor-pointer ${isDark ? 'invert brightness-200' : ''}`} src="../src/linkedin-square.png" alt="" /> 
                            </a>

                            <a href="https://github.com/GitAditya404" target='_blank'>
                                <img className={`size-8 cursor-pointer ${isDark ? 'invert brightness-200' : ''}`} src="../src/github.png" alt="" />
                            </a>

                        </div>

                    </div>

                    {/* Image container*/}
                    <div className='order-1 items-center mt-36 ml-20 sm:ml-0 sm:mt-0 sm:order-2 flex  w-[60vw] sm:w-[30vw] border-red-600'>  

                                <div className='overflow-hidden sm:ml-8 bg-red-400 border border-blue-700 mt- rounded-full size-56 sm:size-72'>
                                {/*My image */}
                                <img
                                    src="../src/yourimage.png" 
                                    className="w-40 ml-9 mt-8 sm:w-50 z-10 sm:ml-11 sm:mt-10 "
                                /> 
                                </div>
                          
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
                            <span className="tag text-xs">TailwindCss</span>
                            <span className="tag">JavaScript</span>
                            <span className="tag">React</span>
                            <span className="tag">Express</span>
                            <span className="tag">Node.js</span>
                            <span className="tag">MongoDb</span>
                            <span className="tag">Git</span>

                            {/* duplicate for infinite loop */}
                            <span className="tag text-xs">TailwindCss</span>
                            <span className="tag">JavaScript</span>
                            <span className="tag">React</span>
                            <span className="tag">Express</span>
                            <span className="tag">Node.js</span>
                            <span className="tag">MongoDb</span>
                            <span className="tag">Git</span>
                        </div>
                        </div>               
                    </div> 
        </div>
   
    
}
export default Home