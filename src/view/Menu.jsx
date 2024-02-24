import React, { useEffect, useState } from 'react';

import MenuItem from './MenuItem'; // Import the MenuItem component
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import {  FiHelpCircle, FiHome, FiPhone, FiShoppingBag, FiUser } from 'react-icons/fi';

const Menu = ({ items }) => {
  // const [newItems,setNewItems] = useState()
  const handleClick = ()=>{
    alert("ok")
  }

  const handleSelect = (event)=>(index)=>{
    event.preventDefault()
    // setNewItems(index)      
  }
  // useEffect(()=>{
  //   items.map((d,i)=>i == newItems?{...d,selected:true} : d)
  // },[newItems])
  return (
    <>
      <div  className="bg-white sm:w-1/2 container   mx-auto px-3 my-5 py-3 rounded max-h-[550px] 
      overflow-x-auto scrollbar- scrollbar-thumb-gray-300 scrollbar-track-gray-100
      " style={{ scrollbarWidth: 'thin', scrollbarColor: 'darkgray', scrollbarTrackColor: 'red' }}>
      <header className='flex items-center justify-between py-3 sticky -top-3 bg-white'>

      <div className='flex flex-col  flex-1'>
          <h2 className=" text-3xl text-blue-400 ">Menu </h2>
          <small>Hi,Welcome back choose your favorite food</small>
      </div>
      <Button name="Send" actions={handleClick} bgcolor="
       outline outline-2 outline-offset-0 flex items-center gap-2 rounded bg-blue-400 text-white">Order</Button>
      </header>

      <div>
      <ul role="list" className="">
        {items.map(item => (
          <React.Fragment key={item.id}>
            <MenuItem person={item} handleClick={handleSelect}/> {/* Render MenuItem component */}
          </React.Fragment>
        ))}
        </ul>
  
      </div>
      
      <footer className='flex items-center justify-around py-2 sticky -bottom-3 bg-white'>
          <Link to="/" className='flex gap-1 items-center bg-slate-200 p-2 rounded-full text-slate-500 font-bold'><FiHome/></Link>
          <Link to="/" className='flex gap-1 items-center hover:bg-slate-200 p-2 rounded-full hover:text-slate-500'><FiUser/></Link>
          <Link to="/" className='flex gap-1 items-center hover:bg-slate-200 p-2 rounded-full hover:text-slate-500 relative'>

          <FiShoppingBag/>
            <small className='absolute top-0 -right-3 -z-1 bg-slate-700 p-[2px] px-1 text-xs rounded-full text-slate-50'>20</small>
          </Link>
          
          <Link to="/" className='flex gap-1 items-center hover:bg-slate-200 p-2 rounded-full hover:text-slate-500'><FiHelpCircle/></Link>
          <Link to="/" className='flex gap-1 items-center hover:bg-slate-200 p-2 rounded-full hover:text-slate-500'><FiPhone/></Link>
      </footer>
    </div>
    <p className='text-center text-sm text-slate-500'>Powered By StarDev Tech &copy;{new Date().getFullYear()}</p>
    </>
  );
};

export default Menu;
