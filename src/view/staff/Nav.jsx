
import { NavLink } from 'react-router-dom';
import {  FiHelpCircle, FiHome,  FiSettings,  FiUser } from 'react-icons/fi';
import {  FaBookReader } from 'react-icons/fa';
import {RiNotification3Line} from "react-icons/ri"
import { useContext } from 'react';
import { OrderContext } from './HomeStaff';
const Nav = () => {
   const {orders} = useContext(OrderContext)


  return (
    <nav className='flex items-center justify-around py-4 px-4 sticky bg-blue-400 shadow-inner'>
         <div className='Brand hidden sm:block'>
           <h3 className='text-slate-100 text-2xl poppins-semibold'>STARDEV </h3>
         </div>
         <div className='links flex justify-center gap-6 flex-1'>
         <NavLink to="/staff" className='flex gap-1 items-center '><FiHome style={{fontSize:20}}/></NavLink>
          <NavLink to="/" className='flex gap-1 items-center hover:bg-slate-200 p-2 rounded-full 
          text-slate-50 hover:text-slate-500'><FiUser style={{fontSize:20}}/></NavLink>
          <NavLink to="notification" className='flex gap-1 items-center hover:bg-slate-200 p-2
           rounded-full text-slate-50 hover:text-slate-500 relative'>

          <RiNotification3Line style={{fontSize:20}}/>
           {
            orders > 0 &&  <small className='absolute top-0 -right-3 -z-1 bg-slate-700 p-[2px] px-1 text-xs 
            rounded text-slate-50'>+{orders}</small>
           }
          </NavLink>
          
          <NavLink to="/" className='flex gap-1 items-center hover:bg-slate-200 p-2 
          rounded-full text-slate-50 hover:text-slate-500'><FiHelpCircle style={{fontSize:20}}/></NavLink>
          <NavLink to="qrgen" className='flex gap-1 items-center hover:bg-slate-200
           p-2 rounded-full text-slate-50 hover:text-slate-500'>
           <FaBookReader style={{fontSize:20}}/>
           </NavLink>
     
         </div>
         <div className='actions flex gap-2 justify-around'>
         {/* <button>
            <FiSearch/>
         </button> */}
         <button className='hover:drop-shadow'>
            <FiSettings style={{fontSize:22}} className='text-blue-900 ' />
         </button>
         </div>
      </nav>
  )
}

export default Nav