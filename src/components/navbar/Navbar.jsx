import '../../App.css'
import Hero from './Hero'
import Categories from './Categories'

function Navbar() {
  return (
    <>
        <div className=' flex flex-row items-center bg-[#1E2A38]'>
            <Hero />
            <Categories />
        </div>
    </>
  )
}

export default Navbar