import '../../App.css'
import Hero from './Hero'

function Categories() {

    const categories = [
        ["About me","#about-me"],
        ["Skills","#skills"],
        ["Projects","#projects"],
        ["Contact","#contact"]
    ]

  return (
    <>
        <ul className=' flex flex-row w-full justify-end'>
            {categories.map((category) => (
              <a href={category[1]}>
                <li key={category[0]} className=' text-white mr-5 font-bold'>
                  {category[0]}
                </li>
              </a>
            ))}
        </ul>
    </>
  )
}

export default Categories