import { useEffect, useState } from 'react'

import SkillCategory from './SkillCategory'
import SkillList from './SkillList'
import SkillCard from './SkillCard'

import python from '../../assets/python.png'
import react from '../../assets/react.png'
import c from '../../assets/c.png'
import backend from '../../assets/backend_developpement.png'

function Skills({showNav}) {

    const [selectedSkills, setSelectedSkills] = useState(null)

    const skills_languages = [
        { name: 'React', image: react, card_image: '', description: '' },
        { name: 'Python', image: python, card_image: backend, description:
            "API DEVELOPMENT 🖥️ - Built RESTful APIs using both Django and FastAPI, focusing on clean architecture, scalability, and efficient data handling\n\n"  +
            "GAME DEVELOPMENT 🎮 - Created a game during a game jam, applying Python logic and creative design under time constraints\n\n"+
            "MATHEMATICS PROJECTS ⚙️ - Completed several Epitech mathematics projects, implementing algorithms and solving computational problems with a focus on performance and clarity"},
        { name: 'C', image: c, card_image: '', description: '' }
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