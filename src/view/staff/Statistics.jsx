import {useContext, useEffect, useState} from 'react'
import { FiClipboard, FiMessageSquare, FiUsers } from 'react-icons/fi'

import { Tooltip,Select, initTE } from "tw-elements";
import DailyOrders from '../charts/DailyOrders';

import Socket from '../../sockets';
import { OrderContext } from './HomeStaff';

const Statistics = () => {

  const [notification,setNotification] = useState(0)
  const {orders,setOrders} = useContext(OrderContext)
  useEffect(() => {
    initTE({ Tooltip,Select });
  }, []);


  
  useEffect(()=>{
    Socket.on("new_order",(data)=>{
      
      // alert(data)
     
      setNotification((prev)=>prev + 1)
      setOrders((prev)=>prev + 1)
    })
    
  },[])

  useEffect(()=>{

  },[notification])



  return (
    <div>

    <div className='mb-5'>
          <h1 className='text-2xl  text-slate-500'>DASHBOARD</h1>  
          {/* <a
          href="#"
          className="text-primary pl-1 transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
          data-te-toggle="tooltip"
          title="Hi! I'm tooltip"
        >
          tooltip
        </a>     */}
    </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-center'>
             
            <div className=' border-l-4 rounded  border-teal-400 bg-white  p-4 flex items-center gap-2 justify-between shadow'>
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
            <div className=' border-l-4 rounded border-blue-400 p-4 flex bg-white items-center gap-2 justify-between shadow'>
                  <div>
                      <h2 className='text-blue-400 text-md uppercase'>Tableau</h2>
                      <p className='text-slate-500 font-bold text-xl'>6</p>
                  </div>
            
                  <div className='text-slate-300'>
                       <FiClipboard style={{fontSize:30}}/>
                  </div>
            </div>

            <div className=' border-l-4 rounded border-indigo-400 p-4 flex bg-white items-center gap-2 justify-between shadow'>
                  <div>
                      <h2 className='text-indigo-400 text-md uppercase'>Live Cusomers</h2>
                      <p className='text-slate-500 font-bold text-xl'>2</p>
                  </div>
            
                  <div className='text-slate-300'>
                       <FiUsers style={{fontSize:30}}/>
                  </div>
            </div>

            <div className=' border-l-4 rounded border-purple-400 bg-white p-4 flex items-center gap-2 justify-between shadow'>
                  <div>
                      <h2 className='text-purple-400 text-md uppercase'>Pending Orders</h2>
                      <p className='text-slate-500 font-bold text-xl'>{notification}</p>
                  </div>
            
                  <div className='text-slate-300'>
                       <FiMessageSquare style={{fontSize:30}}/>
                  </div>
            </div>


            <div className='col-span-2 bg-white p-2 rounded'>
               
              <div className='flex items-center justify-between outline-none mb-3 px-2'>
              <h2>Daily Orders</h2>
              <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                    <input
                      className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                      type="radio"
                      name="flexRadioDefault"
                      id="radioDefault01" />
                    <label
                      className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                      htmlFor="radioDefault01">
                       This Week
                    </label>
                  </div>
              </div>
              <DailyOrders/>
            </div>



        </div>
    </div>
  )
}

export default Statistics