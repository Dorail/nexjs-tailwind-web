import React from 'react'
import Link from 'next/link'

function Nav() {
  return (
    <div>
              <div id='bgNav' className='text-[#000] mx-auto my-0 flex justify-between items-center p-4 bg-[cyan]'>
                <ul className='flex items-center justify-center text-[#505F98] text-lg w-1/3'>
                  <li><Link className='pb-3 mr-14 border-2 border-solid border-transparent hover:border-b-[#505F98]' href="/">Home</Link></li>
                  <li><Link className='pb-3 mr-14 border-2 bordersolid border-transparent hover:border-b-[#505F98]' href="/about">About</Link></li>
                  <li><Link className='pb-3 border-2 bordersolid border-transparent hover:border-b-[#505F98]' href="/contact">Contact</Link></li>
                </ul>
                <div className='containter flex items-center justify-center mr-40 w-1/3'>
                  <h1 className='text-[#37447E] text-3xl font-black tracking-wider'>Lading</h1>
                </div>
                <div className='w-1/3 flex items-center justify-center'>
                  <button className='text-[#fff] px-10 py-1 bg-[#111B47] rounded text-base'>Buy Now</button>
                </div>
              </div>
    </div>
    
    
  )
}

export default Nav
