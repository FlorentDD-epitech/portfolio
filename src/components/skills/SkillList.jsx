import { useState, useEffect } from 'react'

import '../../App.css'
import SkillItem from './SkillItem'

function SkillList({skills, onSelectSkill}) {

    return (
        <ul className='flex flex-row w-full gap-10'>
            {skills.map((skill) => (
                <SkillItem skill={skill} onClick={() => onSelectSkill(skill)} key={skill.name}/>
            ))}
        </ul>
    )
}

export default SkillList