import './Pres.css'
import Button from './Button'

function Pres () {

    return (
        <div id='pres' className='flex flex-col-reverse items-center pt-20 xl:pt-40 xl:pb-40 xl:justify-around xl:flex-row'>
            <div className='xl:w-175 flex justify-center flex-col lg:mt-10 xl:mt-0'>
                <p className=' text-white font-bold duration-800 text-3xl sm:text-5xl xl:text-6xl leading-10 xl:leading-20 text-center xl:text-start'>
                    HI ! I'M FLORENT 👋<br/>AN EPITECH'S STUDENT
                </p>
                <p className=' text-white font-bold duration-800 mt-10 text-center xl:text-justify sm:text-2xl mr-5 lg:mr-10 xl:mr-0 ml-5 lg:ml-10 xl:ml-0'>
                    I'm a first-year IT student passionate about technology.
                    I quickly adapt and love learning new tools. This portfolio showcases my work, mindset, and creativity.
                    Let's turn ideas into impactful projects !
                </p>
                <div className=' flex justify-center mr-8 mt-10'>
                    <a href="src/assets/CV.pdf">
                        <Button><p className=' font-bold duration-800'>DOWNLOAD CV</p></Button>
                    </a>
                </div>
            </div>
            <div className='photo flex items-center justify-center '>
                <img id='photo' src="src/assets/babouin.jpg" alt="" className='rounded-3xl scale-75 lg:scale-150 lg:mb-40 lg:mt-40'/>
            </div>
        </div>
    )
}

export default Pres