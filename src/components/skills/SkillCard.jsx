import '../../App.css'

function SkillCard({skill, onClick}){

    return (
        <>
            <div className='fixed inset-0 flex justify-center items-center z-40'>
                <div className='blur absolute z-40 w-full h-full bg-black/20' onClick={onClick}></div>
                <div className='card flex flex-col relative h-200 w-200 bg-[#1E2A38] rounded-xl z-50 overflow-y-auto'>
                    <div className='flex justify-end m-5'>
                        <div className='flex bg-black/20 w-10 h-10 rounded-full items-center justify-center hover:scale-120 duration-200' >
                            <button onClick={onClick} className='text-white font-bold text-2xl'>X</button>
                        </div>
                    </div>
                    <div className='flex flex-col items-center ml-20 mr-20'>
                        <img src={skill.card_image} alt={skill.name} className=' object-cover h-90 w-full rounded-xl' />
                        <div>
                            <p className=' text-white text-lg font-bold text-justify whitespace-pre-line mt-10 mb-10'>{skill.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SkillCard