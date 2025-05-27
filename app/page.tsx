import React from 'react'

const page = () => {
  return (
    <div className='text-center'>
      <div className='grid sm:grid-cols-3 lg:grid-cols-2 m-4 gap-4 '>
        <div className='bg-red-300 h-[80px] rounded-lg flex items-center justify-center'> Page1</div>
        <div className='bg-green-300 h-[80px] rounded-lg flex items-center justify-center'> Page2</div>
        <div className='bg-blue-300 h-[80px] rounded-lg flex items-center justify-center'> Page3</div>
        <div className='bg-fuchsia-300 h-[80px] rounded-lg flex items-center justify-center'> Page4</div>
      </div>
      <hr />
      <div className='grid m-4 gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-2 '>
        <div className='bg-red-300 h-[80px] rounded-lg'> Box1</div>
        <div className='bg-green-300 h-[80px] rounded-lg'> Box2</div>
        <div className='bg-blue-300 h-[80px] rounded-lg'> Box3</div>
        <div className='bg-fuchsia-300 h-[80px] rounded-lg'> Box4</div>
      </div>
      <hr />
      <div className='grid m-4 gap-4 sm:grid-cols-4'>
        <div className='bg-red-300 h-[80px] rounded-lg sm:col-span-1'> Card 1</div>
        <div className='bg-green-300 h-[80px] rounded-lg sm:col-span-3'> Card 2</div>
      </div>
    </div>
  )
}

export default page
