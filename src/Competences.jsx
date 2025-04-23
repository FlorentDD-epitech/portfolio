import { div } from 'motion/react-client'
import './Competences.css'

function Competecence({img, delay}) {
  
    return (
      <div 
        style={{
          animationDelay: delay,
        }}
        className='h-20 sm:h-45 w-20 sm:w-45 rounded-full bg-gradient-to-tl from-indigo-700 to-blue-400 p-1 sm:p-2 m-3'>
        <div className='competence h-full w-full rounded-full bg-indigo-950 duration-800 grid content-center justify-center'>
          <img className='scale-80' src={img} alt=""/>
        </div>
      </div>
    )
}

function Competecences() {
  
  return (
    <div className='flex justify-center lg:mb-100 mb-20 lg:mt-100 mt-5 sm:mt-20'>
      <div className=' main flex justify-center flex-wrap lg:grid lg:[&>*]:col-start-1 lg:[&>*]:row-start-1'>
        <div className='center hidden lg:inline'><Competecence img={'src/assets/skills.png'}/></div>
        <div className='item lg:animate-spinAround'>
          <div className='lg:animate-inverseSpin'>
            <Competecence img={'src/assets/Python-logo.png'}/>
          </div>
        </div>
        <div className='item lg:animate-spinAround'
          style={{
            animationDelay: "-1s"
          }}>
          <div style={{animationDelay: "-1s"}} className='lg:animate-inverseSpin'>
            <Competecence img={'src/assets/tailwind_logo.png'} delay={"-1s"}/>
          </div>
        </div>
        <div className='item lg:animate-spinAround'
          style={{
            animationDelay: "-2s"
          }}>
          <div style={{animationDelay: "-2s"}} className='lg:animate-inverseSpin'>
            <Competecence img={'src/assets/git_logo.png'} delay={"-2s"}/>
          </div>
        </div>
        <div className='item lg:animate-spinAround'
          style={{
            animationDelay: "-3s"
          }}>
          <div style={{animationDelay: "-3s"}} className='lg:animate-inverseSpin'>
            <Competecence img={'src/assets/react_logo.png'} delay={"-3s"}/>
          </div>
        </div>
        <div className='item lg:animate-spinAround'
          style={{
            animationDelay: "-4s"
          }}>
          <div style={{animationDelay: "-4s"}} className='lg:animate-inverseSpin'>
            <Competecence img={'src/assets/C_logo.png'} delay={"-4s"}/>
          </div>
        </div>
        <div className='item lg:animate-spinAround'
          style={{
            animationDelay: "-5s"
          }}>
          <div style={{animationDelay: "-5s"}} className='lg:animate-inverseSpin'>
            <Competecence img={'src/assets/godot_logo.png'} delay={"-5s"}/>
          </div>
        </div>
        <div className='item lg:animate-spinAround'
          style={{
            animationDelay: "-6s"
          }}>
          <div style={{animationDelay: "-6s"}} className='lg:animate-inverseSpin'>
            <Competecence img={'src/assets/blender_logo.png'} delay={"-6s"}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Competecences