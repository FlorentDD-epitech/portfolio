import '../../App.css'
import logoImage from '../../assets/fdd-high-resolution-logo-transparent.png'

function Hero() {
  return (
    <>
      <div className='' id='Hero'>
        <a href="#">
          <img src={logoImage} alt="Logo FDD" className=' object-contain h-15 m-3 ml-5' />
        </a>
      </div>
    </>
  ) 
}

export default Hero