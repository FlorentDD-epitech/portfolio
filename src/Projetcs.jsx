import './Projects.css'

function Project ({children, image, title}) {

    return (
        <div className='card bg-cyan-500 rounded-3xl w-100 h-140 justify-center shadow-cyan-500/50  shadow-md shad mb-100 hover:scale-115 duration-800'>
            <div className= ' mr-10 ml-10 pt-10'>
                <img src={image} alt="" className=' h-70 w-80 rounded-3xl md:object-fill'/>
                <p className=' text-white font-bold text-2xl duration-800 flex justify-center mt-3'>{title}</p>
                <p className=' text-white font-bold duration-800 mt-4 text-justify'>{children}</p>
            </div>
        </div>
    )
}

export default Project