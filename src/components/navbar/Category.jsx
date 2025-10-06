import '../../App.css'
import { useRef, useEffect } from 'react'

function Category({ category }) {
  return (
    <a href={category[1]}>
        <div className='mr-5'>
            <div className='text-category-bg bg-[#1E2A38]'>
                <li className='text-white  font-bold text-category'>
                    {category[0]}
                </li>
            </div>
        </div>
    </a>
  )
}

export default Category