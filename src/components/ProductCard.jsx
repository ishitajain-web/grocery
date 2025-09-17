import React from 'react'

const ProductCard = () => {
  return (
    <div>
        <div className='bg-slate-100 rounded-lg p-[12px] grid justify-center gap-[8px]' >
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk5qWZhyXbmMipb9WZ9oL1wKUujgJsGNuzUw&s"
              alt='' 
              className='rounded-md'/>
            <div>
              <span className='text-sm  text-gray-700 w-fit px-1 py-0.5 rounded-md block bg-indigo-100 mb-[8px] ' >
                8 mins
              </span>
              <span className='text-md my-1em font-semi-bold mb-[4px'>
                Watermelon
              </span>
              <p className='text-sm text-gray-500 '>
                500 g
              </p>  
              <div className='flex justify-between text-sm text-green-900 mt-[18px]' >
                <p> ₹60 </p>
                <button className='border-2 border-green-700 rounded px-[12px] py-[4px] text-black cursor-pointer' > Add </button>
              </div>

            </div>
          </div>
    </div>
  )
}

export default ProductCard