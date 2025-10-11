import { useEffect, useState } from 'react'

import SkillCategory from './skill_category'
import SkillList from './skill_list'
import SkillCard from './skill_card'

import python from '../../assets/python.png'
import react from '../../assets/react.png'
import c from '../../assets/c.png'

function Skills({showNav}) {

    const [selectedSkills, setSelectedSkills] = useState(null)

    const skills_languages = [
        { name: 'React', image: react },
        { name: 'Python', image: python },
        { name: 'C', image: c }
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
        <div id='Skills' className='flex flex-col items-center h-screen mr-50 ml-50 gap-30'>
            <h1 className='text-6xl font-bold text-[#1E2A38]'>My Toolbox 🧰</h1>
            <SkillCategory category='Programming Languages' end={false}>
                <SkillList skills={skills_languages} onSelectSkill={setSelectedSkills}/>
            </SkillCategory>
            <SkillCategory category='Tools' end={true} />
            {selectedSkills && (
                <SkillCard onClick={() => setSelectedSkills(null)}/>
            )}
        </div>
    )
}

export default Skills