import './Pres.css'
import Button from './Button'

function Pres () {

    return (
        <div id='pres' className='flex flex-row pt-40 pb-40 justify-center flex-wrap-reverse'>
            <div className=' w-175 flex justify-center mr-5 flex-col'>
                <p className=' text-white font-bold duration-800 text-6xl leading-20'>
                    HI ! I'M FLORENT 👋<br/>AN EPITECH'S STUDENT
                </p>
                <p className=' text-white font-bold duration-800 mt-10 text-justify text-2xl'>
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
            <div className=' w-200 flex items-center justify-center ml-5'>
                <img src="src/assets/babouin.jpg" alt="" className='rounded-3xl scale-120 mb-40 mt-40'/>
            </div>
        </div>
    )
}

export default Pres