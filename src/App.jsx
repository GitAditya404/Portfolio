import { createContext, useContext, useState } from 'react'
import Home from '../components/Home'
import Contact from '../components/Contact'
import About from '../components/About'
import Project from '../components/Project'
import darkContext from '../context/darkContext'


function App() {

  const [myStyle, setMyStyle] = useState({
    color: 'white',
    backgroundColor : 'black'
  })

  return (
    <darkContext.Provider value = {{
      myStyle:myStyle,
      setMyStyle : setMyStyle
    }}>
      <div className='w-full h-full'>
          <Home/>
          <About/>
          <Project/>
          <Contact/>
      </div>

    </darkContext.Provider>
  )
}

export default App
