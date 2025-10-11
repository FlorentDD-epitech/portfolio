import { useState, useEffect } from 'react'

import './App.css'
import Navbar from './components/navbar/Navbar.jsx'
import Hero from './components/hero/Hero.jsx'
import Skills from './components/skills/skills.jsx'

function App() {

  const [isShow, setIsShow] = useState(false)

  const handleScroll = () => {
    setIsShow(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar isShow={isShow}/>
      <Hero/>
      <Skills showNav={setIsShow}/>
    </>
  )
}

export default App
