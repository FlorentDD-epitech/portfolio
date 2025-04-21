import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Nav from './Nav.jsx'
import Pres from './Pres.jsx'
import Project from './Projetcs.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav/>
    <Pres/>
    <Project image={'src/assets/babouin.jpg'} title={'Setting up'}>It allows you to find the largest square in a given map.
      This project tests our ability to optimize our code and find new algorithms.</Project>
  </StrictMode>,
)
