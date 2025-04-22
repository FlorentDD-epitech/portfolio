import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Nav from './Nav.jsx'
import Pres from './Pres.jsx'
import Project from './Project.jsx'
import Competecences from './Competences.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav/>
    <Pres/>
    <div className='justify-center mt-20 flex flex-wrap'>
      <Project image={'src/assets/web-development.jpg'} title={"Portfolio"}>This project allowed me to learn a lot about web development.
       Using frameworks like Vite JS, React, and Tailwind, I was able to create a website from scratch.</Project>
      <Project image={'src/assets/epitech.jpg'} title={"Epitech's projects"}>My first year at Epitech taught me a lot about computer development
       and allowed me to gain a lot of experience in this field. Particularly focused on the C language, I was also able to improve my skills
       in Python and cybersecurity.</Project>
      <Project image={'src/assets/pygame.png'} title={"Frenzy runner"}>Frenzy Runner is a game I made during my last year of high school
       using the pygame library in Python. The goal is to dodge obstacles and get the highest score possible.</Project>
      <Project image={'src/assets/python.jpg'} title={"Chess game"}>Just like Frenzy Runner, this game was made in Python during my junior year.
       We used the Tkinter library to create the user interface and make the game more interactive.</Project>
      <Project image={'src/assets/flappy_phoenix.png'} title={"Flappy phoenix"}>Flappy Phoenix is ​​a game created in Python during a JAM organized by Epitech.
       It uses the principle of the game flappy bird. This project was completed by 5 people and demonstrates my teamwork skills.</Project>
      <Project image={'src/assets/godot.jpg'} title={"Jazon's Projects"}>Being curious and with the desire to learn, Jazon's projects is a game
       still in development using Godot engine and Blender for the creation of our 3D models</Project>
    </div>
    <Competecences></Competecences>
  </StrictMode>
)
