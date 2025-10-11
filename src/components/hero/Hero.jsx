import '../../App.css'
import hero_image from '../../assets/hero_image.png'

function Hero() {
  return (
    <>
      <div id='Hero' className='flex flex-row items-center justify-center h-screen gap-40'>
        <div className='flex justify-center items-center size-140'>
            <div className='flex flex-col justify-center'>
                <h3 className='text-5xl font-bold text-[#1E2A38] text-justify'>Hello 👋,</h3>
                <h1 className='text-7xl font-bold text-[#1E2A38]'>I'm <span className=' text-[#64B5F6]'>Florent</span></h1>
                <p className='text-5xl font-bold text-[#1E2A38] mb-8'>an Epitech student</p>
                <p className='text-xl font-bold text-[#1E2A38]'>
                    Passionate about software development <br />
                    Clean and scalable code isn't optional - it's the foundation
                </p>
            </div>
        </div>
        <span className='w-1 h-150 bg-[#1E2A38] rounded-full'/>
        <img src={hero_image} alt='profile' className='size-140 rounded-4xl' />
      </div>
    </>
  )
}

export default Hero