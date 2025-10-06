import '../../App.css'
import logoImage from '../../assets/fdd-high-resolution-logo-transparent.png'

function Hero() {
  return (
    <>
      <div className='' id='Hero'>
        <a href="#home">
          <img src={logoImage} alt="Logo FDD" className=' object-contain h-10 m-3 ml-5' />
        </a>
      </div>
    </>
  ) 
}

export default Hero