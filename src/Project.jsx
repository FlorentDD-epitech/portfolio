import './Project.css'

function Project ({children, image, title}) {

    return (
        <div className='card 
            bg-cyan-500
            rounded-3xl
            w-120
            h-170 
            justify-center
            shadow-cyan-500/50 
            shadow-md shad
            hover:scale-115
            duration-800
            ml-15 mr-15 mb-35'>
            <div className= ' mr-10 ml-10 pt-10'>
                <img src={image} alt="" className=' h-70 w-110 rounded-3xl md:object-fill'/>
                <p className=' text-white font-bold text-3xl duration-800 flex justify-center mt-5'>{title}</p>
                <p className=' text-white duration-800 mt-4 text-justify text-2xl'>{children}</p>
            </div>
        </div>
    )
}

export default Project