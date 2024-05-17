import React from 'react'

function Banner() {
  return (
    <div className='container mx-auto my-0 h-96 relative'>
      <div className='text-[#091133] text-4xl font-semibold'>
        <h1>Light, Fast & Powerful</h1>
      </div>
      <div className='w-1/2 text-[#6F7CB2] my-3 text-lg'>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
        <p className='mt-3'>mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim</p>
      </div>
        <div className="flex mt-20">
        <div className='container w-1/4 grid mr-10'>
          <div className='flex items-center'>
            <img className='w-2/3' src="/img/banner/Left.png" alt="" />
          </div>
          <h2 className='my-3 text-xl font-semibold'>Title Goes Herer</h2>
          <p className='text-[#5D6970] pb-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex pariatur id consequatur sequi excepturi reiciendis dolorem accusamus enim fugit consectetur.</p>
        </div>
        <div className='container w-1/4 grid'>
          <div className='flex items-center'>
            <img className='w-2/3' src="/img/banner/Left.png" alt="" />
          </div>
          <h2 className='my-3 text-xl font-semibold'>Title Goes Herer</h2>
          <p className='text-[#5D6970] pb-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex pariatur id consequatur sequi excepturi reiciendis dolorem accusamus enim fugit consectetur.</p>
        </div>
        </div>
        <div className='absolute top-0 right-0'>
          <img src="/img/banner/Right.png" alt="" />
        </div>
    </div>
  )
}

export default Banner
