import '../../App.css'
import Category from './Category'

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
              <Category category={category} />         
            ))}
        </ul>
    </>
  )
}

export default Categories