import { useState,useContext, useEffect } from 'react';
import {FaCheck} from "react-icons/fa"
import { MenuContext } from './Home';
const MenuItem = ({ person, handleClick, updateTotal }) => {

  const [isSelected, setIsSelected] = useState(false);
  const  {selected,setSelected} = useContext(MenuContext)

  const toggleSelected = (data) => {
    
    if(!selected.find(menu=>menu.id == data.id)){
      setIsSelected(true);
        setSelected([...selected,data])
    }
    else{
      
      setIsSelected(false)
    }
      
    handleClick();
  };

 useEffect(()=>{
      console.log(selected)
 },[selected])

  return (
    <li
      key={person.email}
      className={`flex justify-between gap-x-6 py-2 my-2 border px-2 cursor-pointer rounded shadow-sm ${isSelected ? 'border-blue-400 border-2' : ''}`}
      
    >
      <div className="flex min-w-0 gap-x-4 items-center relative" onClick={() => toggleSelected(person)}>
          <input type='checkbox' className='absolute -top-2 -left-2 
          appearance-none h-6 w-6 rounded-md bg-white border-none    
          ' checked={isSelected} onChange={(e) => setIsSelected(Boolean(e.target.checked))}/>
          {isSelected && (
                    <FaCheck className='absolute -top-2 -left-2 h-6 w-6 text-blue-400 text-sm p-1'/>
                  )}
            <img className="h-20 w-20 flex-none bg-gray-50 rounded-md object-fill" src={person.image} alt="" />
            <div className="min-w-0 flex-auto">
              <p className="text-md font-semibold leading-6 text-gray-900">{person.name}</p>
              <small className="wrap text-xs">{person.description}</small>
         
              {/* *************price & quantity *************** */}
              
              <div className='flex items-center justify-between'>
                                
                            <p className="mt-1 truncate text-xs leading-5 text-gray-800 font-bold ">
                        {person.price} <strong>Frw</strong>

                        </p>
                        {
                      isSelected && <div className="hidden">
                        <p className="text-xs leading-6 text-gray-900">Quantity: </p>
                          <input
                            type="number"
                            placeholder="Enter Quantity"
                            className="border outline-none p-1 rounded text-xs text-slate-500"
                           
                          />
                      </div>
                    }
              </div>


            </div>
      </div>
    
    
      
    </li>
  );
};

export default MenuItem;
