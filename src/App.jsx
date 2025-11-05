import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroSection from './Components/Home/Hero'
import Personal from './Components/Personal/Personal'
import Skill from './Components/Skiils/Skill'
import Education from './Components/Experience/Education'
import Contact from './Components/Contact/Contact'
import Portfolio from './Components/Portfolio/Portfolio'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <HeroSection/>
     <Personal/>
     <Skill/>
     <Education/>
     <Portfolio/>
     <Contact/>
    </>
  )
}

export default App
