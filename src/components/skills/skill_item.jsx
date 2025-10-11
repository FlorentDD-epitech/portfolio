import { useRef, useEffect } from 'react'
import '../../App.css'

function SkillItem({skill, onClick}) {

    return (
        <li>
            <div onClick={onClick} className='flex flex-col w-30 h-30 bg-[#1E2A38] rounded-full items-center justify-center shadow-2xl hover:scale-115 duration-500'>
                <div className='flex w-15 h-15 items-center justify-center'>
                    <img src={skill.image} alt={skill.name} className='' />
                </div>
            </div>
        </li>
    )
}

export default SkillItem