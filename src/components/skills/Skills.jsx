import { useEffect, useState } from 'react'

import SkillCategory from './SkillCategory'
import SkillList from './SkillList'
import SkillCard from './SkillCard'

import python from '../../assets/python.png'
import react from '../../assets/react.png'
import c from '../../assets/c.png'
import backend from '../../assets/backend_developpement.png'
import c_dev from'../../assets/psu_dev.jpg'
import react_dev from'../../assets/front_dev.jpg'

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
            "MATHEMATICS PROJECTS ⚙️ - Completed several Epitech mathematics projects, implementing algorithms and solving computational problems with a focus on performance and clarity"},
        { name: 'C', image: c, card_image: c_dev, description: 
            "SYSTEM PROGRAMMING 🧠 - Completed multiple Epitech projects focused on Unix system programming, including process management, file handling, and memory control\n\n" +
            "GRAPHICAL PROGRAMMING 🎨 - Developed 2D & 3D games and visual projects using the CSFML library, applying event handling, rendering, and performance optimization\n\n" +
            "ALGORITHMIC FOUNDATIONS 🔧 - Strengthened understanding of core programming concepts through low-level C projects emphasizing logic, efficiency, and clean code"
        }
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
            <SkillCategory category='Tools' end={true} />
            {selectedSkills && (
                <SkillCard skill={selectedSkills} onClick={() => setSelectedSkills(null)}/>
            )}
        </div>
    )
}

export default Skills