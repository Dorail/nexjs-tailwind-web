import React from 'react'

function Banner2() {
  return (
    <div className='bg-[#E9ECF6] pt-24 pb-24'>
        <div className='container mx-auto my-0 relative'>
            <div className='GroupText text-center'>
                <h1 className='text-[#091133] text-4xl font-semibold'>A Price To Suit Everyone</h1>
                <div className='flex justify-center'>
                <p className='w-1/2 my-4 text-[#6F7CB2] text-base tracking-wider'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
                </div>
                <div>
                    <h1 className='text-[#222F65] text-5xl font-bold mt-8 mb-4'>$40</h1>
                    <p className='text-[#37447E] font-semibold mb-20'>UI Design Kit</p>
                </div>
                <div>
                    <p className='text-[#5D6970]'>See, One price. Simple.</p>
                    <div className='mt-5'>
                        <button className='text-[#fff] py-1.5 px-12 bg-[#111B47] rounded'>Purchase Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner2
