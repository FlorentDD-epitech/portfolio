import { useState } from 'react'
import './Nav.css'
import Button from './Button'

function Nav() {

  return (
    <>
      <nav className=' pb-5 fixed  w-full'>
        <ul className='flex align-top relative'>
          <li>
            <a href="#Projects">
              <Button>
                <p className=' font-bold duration-800'>PROJECTS</p>
              </Button>
            </a>
          </li>
          <li>
            <Button>
              <p className=' font-bold duration-800'>CONTACTS</p>
            </Button>
          </li>
          <li className=' absolute right-8'><ChangeTheme/></li>
        </ul>
      </nav>
    </>
  )
}

function ChangeTheme() {

  const [isWhite, setIsWhite] = useState(true)

  const whiteTheme = {
    bg : '#c7d2fe',
    font : 'black',
  }

  const blackTheme = {
    bg : '#1e1b4b',
    font : 'white',
  }

  const putTheme = (theme) => {
    document.body.style.background = theme.bg;
    document.getElementById('svgPicture').style.stroke = theme.font
    const competences = document.getElementsByClassName('competence');
    const ps = document.getElementsByTagName('p');
    for (const p of ps) {
      p.style.color = theme.font;
    }
    for (const comp of competences) {
      comp.style.background = theme.bg;
    }
  }

  const changeColor = () => {
    setIsWhite(!isWhite);
    isWhite ? 
    putTheme(whiteTheme):
    putTheme(blackTheme);
  }

  return (
    <>
      <Button func={changeColor}>
        <svg 
          xmlns="http://www.w3.org/2000/svg"
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth="2" 
          stroke="white" 
          className="size-10 duration-800"
          id='svgPicture'>

          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="m2.25 15.75 5.159-5.159a2.25 
            2.25 0 0 1 3.182 0l5.159 
            5.159m-1.5-1.5 1.409-1.409a2.25 
            2.25 0 0 1 3.182 0l2.909 2.909m-18 
            3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 
            1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 
            2.25 6v12a1.5 1.5 0 0 0 1.5 
            1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 
            0a.375.375 0 1 1-.75 0 
            .375.375 0 0 1 .75 0Z" />
        </svg>
      </Button>
    </>
  )
}

export default Nav
