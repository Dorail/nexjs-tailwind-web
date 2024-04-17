import React from 'react'

function Main3() {
  return (
    <div className='container mx-auto my-0'>
      <div className="congroup flex justify-between">
            <div className='left'>
                <div className='relative left-15 bottom-28'>
                    <img width={550} src="/img/main3/left.png" alt="" />
                </div>
            </div>
            <div className="right w-1/2">
                <div className='text-[#091133] font-semibold text-4xl mb-4'>
                    <h1>Light, Fast & Powerful</h1>
                </div>
                <div className='w-4/5 text-lg text-[#6F7CB2]'>
                    <p className='mb-4'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus</p>
                    <p>mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Main3
