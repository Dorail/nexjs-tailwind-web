import React from 'react'
import Nav from '../component/Nav'

function Contactpage() {
  return (  
    <div className='container mx-auto my-0 grid grid-cols-2 '>
            <div className="grid1">
                    <img className='absolute top-0 left-15' src="/img/contact/Left.png" width={630} alt="" />
            </div>
            <div className="grid2">
            <div className='container mx-auto my-0'>
                    <div className='left pt-40'>
                        <div className='grouptext'>
                            <div className='text-[#091133] font-semibold text-5xl'>
                                <h1 className='leading-snug'>Light, Fast & Powerful</h1>
                            </div>
                            <div className='text-[#6F7CB2] text-lg'>
                                <p className='py-4'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus</p>
                                <p>mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                            </div>
                                <div className='grid grid-cols-2 mt-10 gap-7'>

                                    <div>
                                        <img src="/img/about/Left.png" width={300} alt="" />
                                        <div className="grouptext">
                                        <h1 className='text-[#091133] text-xl font-semibold my-3'>Title Goes Here</h1>
                                        <p className='text-[#5D6970]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                                    </div>
                                    </div>

                                    <div>
                                        <img src="/img/about/Left.png" width={300} alt="" />
                                        <div className="grouptext">
                                        <h1 className='text-[#091133] text-xl font-semibold my-3'>Title Goes Here</h1>
                                        <p className='text-[#5D6970]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                                    </div>
                                    </div>

                                    <div>
                                        <img src="/img/about/Left.png" width={300} alt="" />
                                        <div className="grouptext">
                                        <h1 className='text-[#091133] text-xl font-semibold my-3'>Title Goes Here</h1>
                                        <p className='text-[#5D6970]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                                    </div>
                                    </div>

                                    <div>
                                        <img src="/img/about/Left.png" width={300} alt="" />
                                        <div className="grouptext">
                                        <h1 className='text-[#091133] text-xl font-semibold my-3'>Title Goes Here</h1>
                                        <p className='text-[#5D6970]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                                    </div>
                                    </div>



                                </div>
                        </div>
                    </div>
    </div>
            </div>
    </div>
    
  )
}

export default Contactpage
