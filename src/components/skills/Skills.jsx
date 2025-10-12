import { useEffect, useState } from 'react'

import SkillCategory from './SkillCategory'
import SkillList from './SkillList'
import SkillCard from './SkillCard'

import python from '../../assets/python.png'
import react from '../../assets/react.png'
import c from '../../assets/c.png'
import js from '../../assets/javascript.png'
import docker from '../../assets/docker.png'
import postgres from '../../assets/postgres.png'
import tailwind from '../../assets/tailwind_css.png'
import godot from '../../assets/godot.png'
import django from '../../assets/django.png'
import fast_api from '../../assets/fastapi.png'
import bash from '../../assets/bash.png'

import backend from '../../assets/backend_developpement.png'
import c_dev from '../../assets/psu_dev.jpg'
import react_dev from '../../assets/front_dev.jpg'
import container from '../../assets/docker_container.png'
import ui_design from '../../assets/ui_design.jpg'
import database from '../../assets/database.jpg'
import jazon from '../../assets/jazon.jpg'
import js_card from '../../assets/js_card.jpg'
import fullstack from '../../assets/fullstack_dev.jpg'
import api_building from '../../assets/api_building.jpg'
import shell_hacker from '../../assets/shell_hollywood.jpg'

function Skills({showNav}) {

    const [selectedSkills, setSelectedSkills] = useState(null)

    const skills_languages = [
        { name: 'REACT', image: react, card_image: react_dev, description:
            "PORTFOLIO DEVELOPMENT 💼 - Designed and built my personal portfolio using React and TailwindCSS, focusing on performance, smooth animations, and responsive design\n\n" +
            "COMPONENT ARCHITECTURE ⚙️ - Implemented modular and reusable components, managing state efficiently with hooks and clean composition patterns\n\n" +
            "INTERACTIVITY & UX ✨ - Integrated animations and dynamic interfaces to create a modern, engaging user experience"
        },
        { name: 'PYTHON', image: python, card_image: backend, description:
            "API DEVELOPMENT 🖥️ - Built RESTful APIs using both Django and FastAPI, focusing on clean architecture, scalability, and efficient data handling\n\n" +
            "GAME DEVELOPMENT 🎮 - Created a game during a game jam, applying Python logic and creative design under time constraints\n\n" +
            "MATHEMATICS PROJECTS ⚙️ - Completed several Epitech mathematics projects, implementing algorithms and solving computational problems with a focus on performance and clarity"
        },
        { name: 'C', image: c, card_image: c_dev, description: 
            "SYSTEM PROGRAMMING 🧠 - Completed multiple Epitech projects focused on Unix system programming, including process management, file handling, and memory control\n\n" +
            "GRAPHICAL PROGRAMMING 🎨 - Developed 2D & 3D games and visual projects using the CSFML library, applying event handling, rendering, and performance optimization\n\n" +
            "ALGORITHMIC FOUNDATIONS 🔧 - Strengthened understanding of core programming concepts through low-level C projects"
        },
        { name: 'TAILWIND CSS', image: tailwind, card_image: ui_design, description:
            "UI DESIGN SYSTEM 🎨 - Styled and structured my portfolio using TailwindCSS, ensuring a clean, consistent, and responsive visual identity"
        },
        { name: 'JAVASCRIPT', image: js, card_image: js_card, description: 
            "PORTFOLIO DEVELOPMENT 💻 - Built the interactive logic of my portfolio using JavaScript and JSX within the React ecosystem"
        },
        { name: 'SQL', image: postgres, card_image: database, description:
            "DATABASE MANAGEMENT 🧩 - Used PostgreSQL during my internship to design and maintain structured databases for a SaaS application"
        },
        
        { name: 'DOCKER', image: docker, card_image: container, description:
            "ENVIRONMENT SETUP ⚙️ - Used Docker during my internship to build a complete environment for a SaaS application, orchestrating multiple containers (database, backend, and frontend)\n\n" +
            "CONTAINERIZATION 💡 - Packaged each service into isolated containers to ensure stability, scalability, and easy deployment\n\n" +
            "DOCKER COMPOSE 🔗 - Configured Docker Compose files to manage multi-container applications efficiently and maintain consistency across development environments"
        },
        { name: 'GODOT', image: godot, card_image: jazon, description:
            "3D GAME DEVELOPMENT 🎮 - Developed a 3D project using the Godot engine, focusing on scene composition, physics, and gameplay logic\n\n" +
            "SCRIPTING 💡 - Implemented mechanics and interactions using GDScript, integrating assets and user interfaces"
        },
        { name: 'FAST API', image: fast_api, card_image: api_building, description:
            "API DEVELOPMENT 🧠 - Built RESTful APIs using FastAPI during my internship, where I discovered how much I enjoy structuring clean, efficient backend systems that power real applications\n\n" +
            "DATA VALIDATION ✅ - Used Pydantic models for strict data validation and serialization\n\n" +
            "INTEGRATION 🔗 - Connected backend endpoints with frontend components for seamless full-stack workflows"
        },
        { name: 'DJANGO', image: django, card_image: fullstack, description:
            "FULL-STACK DEVELOPMENT 🌍 - Used Django as a backend framework for building scalable, data-driven web applications\n\n" +
            "ORM & MODELS 🧩 - Leveraged Django ORM to structure relational data and simplify database interactions"
        },
        { name: 'SHELL', image: bash, card_image: shell_hacker, description:
            "UNIX SHELL REPRODUCTION 💻 - Recreated a functional shell in C, implementing key Unix commands, I/O redirection and some others features\n\n" +
            "PROCESS MANAGEMENT ⚙️ - Handled forking, piping, and signal management to mimic real system shell behavior\n\n" +
            "LOW-LEVEL SYSTEM PROGRAMMING 🧠 - Strengthened understanding of OS-level programming through practical shell development"
        },
    ]

    const skills_tools = [
        {name: 'GIT', image: django, card_image: fullstack, description: ''},
        {name: 'GIT HUB', image: django, card_image: fullstack, description: ''},
        {name: 'GIT BASH', image: django, card_image: fullstack, description: ''},
        {name: 'BLENDER', image: django, card_image: fullstack, description: ''},
        {name: 'VITE JS', image: django, card_image: fullstack, description: ''},
        {name: 'VS CODE', image: django, card_image: fullstack, description: ''},
        {name: 'RENDER', image: django, card_image: fullstack, description: ''},
        {name: 'PSQL', image: django, card_image: fullstack, description: ''},
    ]

    useEffect(() => {
        if (selectedSkills === null){
            showNav(true)
            document.body.style.overflow = 'auto';
        } else {
            showNav(false)
            document.body.style.overflow = 'hidden';
        }
        console.log(selectedSkills)
      }, [selectedSkills]);

    return (
        <div id='skills' className='flex flex-col items-center h-screen mr-50 ml-50 gap-30'>
            <h1 className='text-6xl font-bold text-[#1E2A38]'>My Toolbox 🧰</h1>
            <SkillCategory category='Programming Languages' end={false}>
                <SkillList skills={skills_languages} onSelectSkill={setSelectedSkills}/>
            </SkillCategory>
            <SkillCategory category='Tools' end={true}>
                <SkillList skills={skills_tools} onSelectSkill={setSelectedSkills}/>
            </SkillCategory>
            {selectedSkills && (
                <SkillCard skill={selectedSkills} onClick={() => setSelectedSkills(null)}/>
            )}
        </div>
    )
}

export default Skills