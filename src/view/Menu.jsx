import React, { useEffect, useState } from 'react';

import MenuItem from './MenuItem'; // Import the MenuItem component
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import {  FiHelpCircle, FiHome, FiPhone, FiShoppingBag, FiUser } from 'react-icons/fi';
import IMG1 from "../assets/product_22.jpeg"
import IMG from "../assets/product_21.jpeg"
import product1 from "../assets/product (1).jpg"
import product2 from "../assets/product (2).jpg"
import product3 from "../assets/product (3).jpg"
import product4 from "../assets/product (4).jpg"
import product5 from "../assets/product (5).jpg"
import product6 from "../assets/product (6).jpg"

const items = [
  {
      name: "Chief Classic Salad / Salade Du Chef Classique",
      description: "Composition of Lettuce, onion, tomato, carrots, cucumber, Ham, croutons, avocado, egg, black olive, cheese, dressed with vinaigrette",
      price: Math.floor(Math.random() * (10000 - 3000 + 1)) + 3000,
      image: IMG
  },
  {
      name: "Classic Ceasar Salad / Salade Cesar Classique",
      description: "An eye appeal Crips bacon, croutons, Lettuce, tomato, onion, parmessa cheese, Egg, Green pepper, Dressed with thousand hills dressing",
      price: Math.floor(Math.random() * (10000 - 3000 + 1)) + 3000,
      image: IMG1
  },
  {
      name: "Avocado Salad / Salade D’avocat",
      description: "A large portion of fanned avocado, tomato, bedded on crispy lettuce and splashed with French dressing sauce",
      price: Math.floor(Math.random() * (10000 - 3000 + 1)) + 3000,
      image: product1
  },
  {
      name: "Californian Salad / Salade Californienne",
      description: "Assorted timbale of fresh lettuce, carrots, onion, tomato avocado, egg, feta cheese, peanuts, tuna fish, dressed with Americano sauce",
      price: Math.floor(Math.random() * (10000 - 3000 + 1)) + 3000,
      image: product5
  },
  {
      name: "Nicoise Salad / Salade Nicoise",
      description: "Nice for Rwandan potato, tomato, lettuce, egg, green beans, tuna fish, anchovy, mayonnaise",
      price: Math.floor(Math.random() * (10000 - 3000 + 1)) + 3000,
      image: product4
  },
  // Add more items following the same format
];

const Menu = () => {
  // const [newItems,setNewItems] = useState()
  const navigate=0
  const handleClick = (total,isSelected)=>{
    console.log(total,isSelected)
  }

 
  return (
    <>
      <div  className="bg-white sm:w-1/2 container   mx-auto px-3 my-5 py-3 rounded max-h-[550px] 
      overflow-x-auto scrollbar- scrollbar-thumb-gray-300 scrollbar-track-gray-100
      " style={{ scrollbarWidth: 'thin', scrollbarColor: 'darkgray', scrollbarTrackColor: 'red' }}>
      <header className='flex items-center justify-between py-3 sticky -top-3 bg-white z-40'>

      <div className='flex flex-col  flex-1'>
          <h2 className=" text-3xl text-blue-400 ">Menu </h2>
          <small>Hi,Welcome back choose your favorite food</small>
      </div>
      <Link to="/" className='flex gap-1 items-center hover:bg-slate-200 p-2 rounded-full hover:text-slate-500'><FiHelpCircle/></Link>
        
      
      </header>

      <div>
      <ul role="list" className="">
        {items.length && items.map(item => (
          <React.Fragment key={item.id}>
            <MenuItem person={item} handleClick={handleClick}/> {/* Render MenuItem component */}
          </React.Fragment>
        ))}
        </ul>
  
      </div>
      
      <footer className='flex items-center justify-around py-2 sticky -bottom-3 bg-white'>
          <Link to="/" className='flex gap-1 items-center bg-slate-200 p-2 rounded-full text-slate-500 font-bold'><FiHome/></Link>
          
          
          
          <Link to="/" className='flex gap-1 items-center hover:bg-slate-200 p-2 rounded-full hover:text-slate-500'><FiPhone/></Link>
      <Button name="" actions={handleClick} bgcolor="
       outline outline-2 outline-offset-0 flex items-center gap-2 rounded-full bg-indigo-900 text-white"/>
      </footer>
      <p className='text-center text-sm text-slate-500'>Powered By StarDev Tech &copy;{new Date().getFullYear()}</p>
    </div>
  
    </>
  );
};

export default Menu;
