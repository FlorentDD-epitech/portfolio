import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Nav from './Nav.jsx'
import Pres from './Pres.jsx'
import Project from './Project.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav/>
    <Pres/>
    <div className='justify-center mt-20 flex flex-wrap'>
      <Project image={'src/assets/web-development.jpg'} title={"Portfolio"}>It allows you to find the largest square in a given map.
      This project tests our ability to optimize our code and find new algorithms.</Project>
      <Project image={'src/assets/epitech.jpg'} title={"Epitech's projects"}>It allows you to find the largest square in a given map.
      This project tests our ability to optimize our code and find new algorithms.</Project>
      <Project image={'src/assets/pygame.png'} title={"Frenzy runner"}>It allows you to find the largest square in a given map.
      This project tests our ability to optimize our code and find new algorithms.</Project>
      <Project image={'src/assets/python.jpg'} title={"Chess game"}>It allows you to find the largest square in a given map.
      This project tests our ability to optimize our code and find new algorithms.</Project>
    </div>
  </StrictMode>
)
