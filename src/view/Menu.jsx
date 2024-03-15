import React, {  useEffect, useState } from 'react';

import MenuItem from './MenuItem'; // Import the MenuItem component
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import {  FiHelpCircle, FiHome, FiPhone} from 'react-icons/fi';
import { useSelector } from 'react-redux';
import {io} from "socket.io-client"

const socket = io("http://localhost:7000")

const Menu = () => {
  const menu = useSelector((state)=>state.Menu)
  const [items,setItems] = useState([])
  const [order, setOrder] = useState({
    items: []
  });
  const [amountpaid,setAmountPaid] = useState(0)
  
  const handleClick = (data) => {
    const selected = {_id:data._id,name:data.name,price:data.price}

    // find selected item 
    const index = order.items.findIndex(item => item._id === selected._id);
    // If the item exists (index is not -1), remove it; otherwise, add it
    if (index !== -1) {
      const updatedItems = order.items.filter(item => item._id !== selected._id);
      setOrder(prevOrder => ({
        ...prevOrder,
        items: updatedItems,
        
      }));
    }
    else{
      setOrder(prevOrder => ({
        ...prevOrder,
        items: [...prevOrder.items, selected],
        
      }));
    }
   
    
  };


  useEffect(()=>{
    socket.on("chat message",(data)=>{
      
      alert(data)
    })
    
  },[])

  // const btnClick = ()=>{
 
// }

useEffect(()=>{
  const newTotalAmount = order.items.reduce((total, item) => total + item.price, 0);
  setAmountPaid(newTotalAmount )

},[order])

const handleOrder = (e)=>{
  e.preventDefault()
 
  const newOrder = {
   items:[...order.items],
   tableu: 10,
   sit: 1,
   time: new Date().getTime(),
   amountpaid:amountpaid
  }

// Serialize the data to send over Socket.IO
const serializedData = JSON.stringify(newOrder);
console.log(serializedData)
// Send the serialized data over Socket.IO
socket.emit('order', serializedData);

}


 useEffect(()=>{
  
 setItems(menu)
},[menu])

  return (
    <>
      <div  className="bg-white sm:w-1/2 container   mx-auto px-3 my-5 py-3 rounded max-h-[550px] 
      overflow-x-auto scrollbar- scrollbar-thumb-gray-300 scrollbar-track-gray-100
      " style={{ scrollbarWidth: 'thin', scrollbarColor: 'darkgray', scrollbarTrackColor: 'red' }}>
      <header className='flex items-center justify-between py-3 px-3 sticky -top-3 bg-white z-40'>

      <div className='flex flex-col  flex-1'>
          <h2 className=" text-3xl text-blue-400 ">Menu </h2>
          <small>Hi,Welcome back choose your favorite food</small>
          <p className='text-slate-500 py-2 font-bold'> Frw</p>
      </div>
      <Link to="/" className='flex gap-1 items-center hover:bg-slate-200 p-2 rounded-full hover:text-slate-500'><FiHelpCircle/></Link>
        
      
      </header>

      <div>
      <ul role="list" className="">
        {items.length == 0 ? <p className='flex items-center justify-center p-3 rounded mb-4 text-center bg-gray-500 w-28 mx-auto'><span className='text-gray-200 text-sm'> Processing....</span></p> : items.map(item => (
          <React.Fragment key={item._id}>
            <MenuItem person={item} handleClick={handleClick}/> {/* Render MenuItem component */}
          </React.Fragment>
        ))}
        </ul>
  
      </div>
      
      <footer className='flex items-center justify-around py-2 sticky -bottom-3 bg-white'>
          <Link to="/" className='flex gap-1 items-center bg-slate-200 p-2 rounded-full text-slate-500 font-bold'><FiHome/></Link>
          
          
          
          <Link to="/" className='flex gap-1 items-center hover:bg-slate-200 p-2 rounded-full hover:text-slate-500'><FiPhone/></Link>
      <Button name="" actions={handleOrder} bgcolor="
       outline outline-2 outline-offset-0 flex items-center gap-2 rounded-full bg-indigo-900 text-white"/>
      </footer>
      <p className='text-center text-sm text-slate-500'>Powered By StarDev Tech &copy;{new Date().getFullYear()}</p>
    </div>
  
    </>
  );
};

export default Menu;
