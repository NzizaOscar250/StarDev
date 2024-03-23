import React from 'react'
import hero from "../assets/hero-img.png"
import { Button } from 'flowbite-react'

const Home = () => {
  return (
    <div className='bg-violet-600 min-h-[50vh]'>
         <div className='container py-5'>
             <div className='grid grid-rows-2 sm:grid-cols-6 gap-3 justify-items-center items-center  '>
             <div className='col-span-3 lg:hidden'>
               <h1 className='text-gray-100 uppercase font-semibold text-4xl leading-snug py-2'>We make it happen</h1>
                  <img src={hero} alt='star dev' className='drop-shadow'/>
              </div>
              <div className='col-span-3 px-2'>
                 <h1 className='text-gray-100 uppercase font-semibold text-4xl leading-snug'>We make it happen</h1>
                 <h2 className="text-gray-100 uppercase font-semibold text-3xl">Make Your Business BOLD</h2>
                 <p className='text-gray-50  py-3 leading-6 font-light'>We are a team of dedicated passionate talented software developers and engineers . making software development ease</p>
                <Button>Get started</Button>
              </div>

              <div className='col-span-3 hidden lg:block'>
                  <img src={hero} alt='star dev' className='drop-shadow'/>
              </div>

             </div>
         </div>
    </div>
  )
}

export default Home
