import '../../App.css'

function Category({ category }) {
  return (
    <>
        <a href={category[1]}>
            <div className='mr-5'>
                <li key={category[0]} className=' text-white  font-bold text-category'>
                    {category[0]}
                </li>
            </div>
        </a>
    </>
  )
}

export default Category