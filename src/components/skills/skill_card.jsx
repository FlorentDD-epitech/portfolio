import '../../App.css'

function SkillCard({onClick}){

    return (
        <>
            <div className='fixed inset-0 flex justify-center items-center z-40'>
                <div className='blur absolute z-40 w-full h-full bg-black/20' onClick={onClick}></div>
                <div className='card relative h-150 w-200 bg-[#1E2A38] rounded-xl z-50 overflow-y-auto'>
                    <div className=' flex justify-end m-5'>
                        <div className=' flex bg-black/20 w-10 h-10 rounded-full items-center justify-center hover:scale-120 duration-200' >
                            <button onClick={onClick} className=' text-white font-bold text-3xl'>X</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SkillCard