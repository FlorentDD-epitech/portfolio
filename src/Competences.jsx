import { div } from 'motion/react-client'
import './Competences.css'

function Competecence({img, delay}) {
  
    return (
      <div 
        style={{
          animationDelay: delay,
        }}
        className='h-45 w-45 rounded-full bg-gradient-to-tl from-indigo-700 to-blue-400 p-2'>
        <div className='competence h-full w-full rounded-full bg-indigo-950 duration-800 grid content-center justify-center'>
          <img className='scale-80' src={img} alt=""/>
        </div>
      </div>
    )
}

function Competecences({img}) {
  
  return (
    <div className='flex justify-center mb-120 mt-80'>
      <div className=' main grid [&>*]:col-start-1 [&>*]:row-start-1'>
        <div className='center'><Competecence img={'src/assets/skills.png'}></Competecence></div>
        <div className='item'><Competecence img={'src/assets/Python-logo.png'}></Competecence></div>
        <div className='item'
          style={{
            animationDelay: "1s",
          }}><Competecence img={'src/assets/tailwind_logo.png'} delay={"1s"}></Competecence></div>
        <div className='item'
          style={{
            animationDelay: "2s",
          }}><Competecence img={'src/assets/git_logo.png'} delay={"2s"}></Competecence></div>
        <div className='item'
          style={{
            animationDelay: "3s",
          }}><Competecence img={'src/assets/react_logo.png'} delay={"3s"}></Competecence></div>
        <div className='item'
          style={{
            animationDelay: "4s",
          }}><Competecence img={'src/assets/C_logo.png'} delay={"4s"} ></Competecence></div>
        <div className='item'
          style={{
            animationDelay: "5s",
          }}><Competecence img={'src/assets/godot_logo.png'} delay={"5s"}></Competecence></div>
      </div>
    </div>
  )
}

export default Competecences