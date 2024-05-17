import React from 'react'
import Image from 'next/image'

function Hero() {
  return (
    <div className='container mx-auto mt-60'>
        <div className='text-[#091133] text-5xl font-semibold tracking-wider text-focus-in'>
            <h1 className='pb-1'>Introduce You Product</h1>
            <h1>Quickly & Effectively</h1>
        </div>
        <div className='w-1/2 my-2 text-[#505F98] text-lg mt-8 text-focus-in' >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas amet at odit ex odio nulla nobis aut natus velit cupiditate quaerat eius possimus quam ipsa voluptates nam commodi excepturi sed, fuga cum qui. Libero magnam cum porro optio perspiciatis. Magnam.
        </div> 
        <div className='w-1/2 mb-2 text-[#505F98] text-lg mt-5 text-focus-in'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque adipisci nemo corporis facere voluptatem placeat asperiores magnam natus optio est?
        </div>
        <div className="mt-8">
            <div>
                <button className='mr-10 bg-[#111B47] py-1.5 px-10 text-[#fff] font-base rounded'>Purchase UI Kit</button>
                <button className='py-1 px-11 border-2 border-solid border-[#111B47] rounded'>Learn More</button>
            </div>
        </div>
        <div>
            <img className='absolute top-0 right-0 -z-10' src="/img/1.png" alt="" />
        </div>
    </div>
  )
}

export default Hero
