import React from 'react'
import { NavLink } from 'react-router-dom';
import {  FiHelpCircle, FiHome, FiPhone, FiSearch, FiSettings, FiShoppingBag, FiUser } from 'react-icons/fi';
import { FaBookOpen, FaBookReader, FaFile, FaFileArchive, FaFileExport } from 'react-icons/fa';
import {RiNotification3Line} from "react-icons/ri"
const Nav = () => {
  return (
    <nav className='flex items-center justify-around py-4 px-4 sticky -bottom-3 bg-white shadow-inner'>
         <div className='Brand hidden sm:block'>
           <h3 className='text-purple-500 text-2xl poppins-semibold'>STARDEV Tech</h3>
         </div>
         <div className='links flex justify-center gap-6 flex-1'>
         <NavLink to="/staff" className='flex gap-1 items-center '><FiHome style={{fontSize:20}}/></NavLink>
          <NavLink to="/" className='flex gap-1 items-center hover:bg-slate-200 p-2 rounded-full 
          text-slate-500 hover:text-slate-500'><FiUser style={{fontSize:20}}/></NavLink>
          <NavLink to="/" className='flex gap-1 items-center hover:bg-slate-200 p-2
           rounded-full text-slate-500 hover:text-slate-500 relative'>

          <RiNotification3Line style={{fontSize:20}}/>
            <small className='absolute top-0 -right-3 -z-1 bg-slate-700 p-[2px] px-1 text-xs 
            rounded text-slate-50'>+3</small>
          </NavLink>
          
          <NavLink to="/" className='flex gap-1 items-center hover:bg-slate-200 p-2 
          rounded-full text-slate-500 hover:text-slate-500'><FiHelpCircle style={{fontSize:20}}/></NavLink>
          <NavLink to="qrgen" className='flex gap-1 items-center hover:bg-slate-200
           p-2 rounded-full text-slate-500 hover:text-slate-500'>
           <FaBookReader style={{fontSize:20}}/>
           </NavLink>
     
         </div>
         <div className='actions flex gap-2 justify-around'>
         {/* <button>
            <FiSearch/>
         </button> */}
         <button className='hover:drop-shadow'>
            <FiSettings style={{fontSize:22}} className='text-purple-500 ' />
         </button>
         </div>
      </nav>
  )
}

export default Nav