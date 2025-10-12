import { createPortal } from "react-dom";

import '../../App.css'

function SkillCard({skill, onClick}){

    return createPortal(
        <div className='modal fixed inset-0 flex justify-center items-center z-10 bg-black/40' onClick={onClick}>
            <div className='card flex flex-col h-200 w-200 bg-[#1E2A38] rounded-xl overflow-y-auto shadow-xl z-20 overflow-hidden ' onClick={(e) => e.stopPropagation()}>
                <div className='flex justify-end m-5 z-40'>
                    <div onClick={onClick} className='flex bg-black/20 w-10 h-10 rounded-full items-center justify-center hover:scale-120 duration-200' >
                        <button className='text-white font-bold text-2xl'>X</button>
                    </div>
                </div>
                <div className='absolute flex flex-col items-center w-full gap-10'>
                    <img src={skill.card_image} alt={skill.name} className=' object-cover h-90 w-full rounded-t-xl' />
                    <h1 className="text-white text-4xl font-bold">{skill.name}</h1>
                    <div className=" mb-10">
                        <p className=' text-white text-lg font-bold text-justify whitespace-pre-line ml-10 mr-10'>{skill.description}</p>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    )
}

export default SkillCard