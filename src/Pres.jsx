import './Pres.css'

function Pres () {

    return (
        <div>
            <div id='pres' className='flex columns-2 pt-50 pl-60 pr-60 justify-center'>
                <div className=' w-200 flex items-center justify-center mr-5'>
                    <p className=' text-white font-bold duration-800 text-5xl'>
                        HI ! I'M FLORENT<br/>AN EPITECH'S STUDENT
                    </p>
                </div>
                <div className=' w-200 flex items-center justify-center ml-5'>
                    <img src="src/assets/babouin.jpg" alt="" className='rounded-3xl'/>
                </div>
            </div>
            <div className=' pb-20'>
                <p className=' text-white font-bold duration-800 flex justify-center mt-50 mr-30 ml-30 text-3xl text-justify leading-13'>
                    Actually in tek1, I'm IT passionnate and I want to be a future actor in this domain.
                    With 2 years of studies in python during my final year, I am able to adapt to the work required and quickly learn new technologies.
                    Through this portfolio, you will discover my world, my achievements and my approach to work. 
                    My goal ? Transform ideas into unique and impactful experiences. Enjoy your visit and don’t 
                    hesitate to contact me for any collaboration!
                </p>
            </div>
        </div>
    )
}

export default Pres