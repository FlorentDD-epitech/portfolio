import '../../App.css'
import logoImage from '../../assets/fdd-high-resolution-logo-transparent.png'

function Logo() {
  return (
    <>
      <div className='' id='Logo'>
        <a href="#">
          <img src={logoImage} alt="Logo FDD" className=' object-contain h-20 m-3 ml-8' />
        </a>
      </div>
    </>
  ) 
}

export default Logo