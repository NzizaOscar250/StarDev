import React from 'react'
import { Link } from 'react-router-dom'

const Notifications = () => {
  return (
    <div>
        <h1 className='uppercase text-2xl text-purple-500 font-bold'>Notifications</h1>
        <hr/>

        <div className='my-5'>
                <div className=' border-l-2  px-4  py-2 shadow rounded border-purple-500'>
                    <header className='flex items-center justify-between'>
                    <h1 className='text-slate-500 text-lg'>Customer #1</h1>
                    <time className='text-xs' dateTime={`2023-01-23T13:23Z`}>1 min ago</time>
                    </header>
                    <p className='py-2 text-slate-500 capitalize'> makes extensive use of Bootstrap 4 utility classes in order to reduce CSS bloat and poor page performance.
                     Custom CSS classes are used to create custom components and custom utility classes.</p>
                    <div className='actions'>
                       <Link to="/staff/orders/2334" 
                       className='text-white  bg-purple-500 px-3 py-1 rounded'>view</Link>

                    </div>
                </div>
        </div>

    </div>
  )
}

export default Notifications