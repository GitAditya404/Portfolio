import { useState } from 'react'
import Home from '../components/Home'
import Contact from '../components/Contact'
import About from '../components/About'
import Project from '../components/Project'


function App() {

  return (
    <div className='w-full h-full'>
      <Home/>
      <Project/>
      <Contact/>
    </div>
  )
}

export default App
