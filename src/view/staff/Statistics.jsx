import React from 'react'
import { FiClipboard, FiMessageSquare, FiUsers } from 'react-icons/fi'
import { RiClipboardFill } from 'react-icons/ri'

const Statistics = () => {
  return (
    <div>
    <div className='mb-5'>
          <h1 className='text-2xl  text-slate-500'>DASHBOARD</h1>      
    </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-center'>
             
            <div className=' border-l-4 rounded border-teal-400   p-4 flex items-center gap-2 justify-between shadow'>
                  <div>
                      <h2 className='text-teal-400 text-xl uppercase'>Orders</h2>
                      <p className='text-slate-500 text-xl'>50%</p>
                  </div>
                  <div className='relative'>
                    <div className='p-1 rounded-3xl bg-gray-100 border w-20 self-end'></div>
                    <div className='p-1 rounded-3xl bg-teal-500 border w-10 self-end absolute top-0'></div>

                  </div>
                  <div className='text-slate-300'>
                       <FiClipboard style={{fontSize:30}}/>
                  </div>
            </div>

            {/* table */}
            <div className=' border-l-4 rounded border-blue-400 p-4 flex items-center gap-2 justify-between shadow'>
                  <div>
                      <h2 className='text-blue-400 text-md uppercase'>Tableau</h2>
                      <p className='text-slate-500 font-bold text-xl'>6</p>
                  </div>
            
                  <div className='text-slate-300'>
                       <FiClipboard style={{fontSize:30}}/>
                  </div>
            </div>

            <div className=' border-l-4 rounded border-indigo-400 p-4 flex items-center gap-2 justify-between shadow'>
                  <div>
                      <h2 className='text-indigo-400 text-md uppercase'>Live Cusomers</h2>
                      <p className='text-slate-500 font-bold text-xl'>2</p>
                  </div>
            
                  <div className='text-slate-300'>
                       <FiUsers style={{fontSize:30}}/>
                  </div>
            </div>

            <div className=' border-l-4 rounded border-purple-400 p-4 flex items-center gap-2 justify-between shadow'>
                  <div>
                      <h2 className='text-purple-400 text-md uppercase'>Pending Orders</h2>
                      <p className='text-slate-500 font-bold text-xl'>2</p>
                  </div>
            
                  <div className='text-slate-300'>
                       <FiMessageSquare style={{fontSize:30}}/>
                  </div>
            </div>




        </div>
    </div>
  )
}

export default Statistics