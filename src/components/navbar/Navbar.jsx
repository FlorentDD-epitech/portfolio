import { useState, useEffect } from 'react'

import '../../App.css'
import Hero from './Hero'
import Categories from './Categories'

function Navbar() {

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
        <nav className={`fixed w-full h-25  flex flex-row items-center bg-[#1E2A38] rounded-b-2xl hover:h-30
          ${isShow ? "translate-y-0" : "-translate-y-full"} duration-500`}>
            <Hero />
            <Categories />
        </nav>
    </>
  )
}

export default Navbar