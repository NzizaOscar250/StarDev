


import { Card, Dropdown } from "flowbite-react";
import Image from "../assets/code.jpg";
import Gatsinzi from "../assets/abt.jpg"
import Terah from "../assets/skills.png"

export default function OurTeam() {

  return (
    <div className="container my-4 ">
            <h2 className='text-slate-900 uppercase font-semibold text-2xl text-center py-2 my-4'>Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 px-3">
            <Card className="w-auto">
     
     <div className="flex flex-col items-center pb-10">
       <img
         alt="Bonnie image"
         
         src={Image}
         
         className="mb-3 h-24 w-24 rounded-full shadow-lg"
       />
       <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Nziza Oscar</h5>
       <span className="text-sm text-gray-500 dark:text-gray-400">Fullstack Developer</span>
       <p className="text-sm text-gray-500 dark:text-gray-400 pt-3">
           I'm a fullstack Developer With Experience in MERN stack application development. I strive for excellence in every line of code that I write
       </p>
       
     </div>
           </Card>
           <Card className="w-auto">
    
                   <div className="flex flex-col items-center pb-10">
                       <img
                       alt="Bonnie image"
                       
                       src={Gatsinzi}
                       
                       className="mb-3 h-24 w-24 rounded-full shadow-lg"
                       />
                       <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Gatsinzi Ernest</h5>
                       <span className="text-sm text-gray-500 dark:text-gray-400">System Analyst / Software Developer</span>
                       <p className="text-sm text-gray-500 dark:text-gray-400 pt-3">
                           I'm a fullstack Developer With Experience in MERN stack application development. I strive for excellence in every line of code that I write
                       </p>
                       
                   </div>
           </Card>
           <Card className="w-auto">
    
               <div className="flex flex-col items-center pb-10">
                   <img alt="Bonnie image" src={Terah} className="mb-3 h-24 w-24 rounded-full shadow-lg" />
                   <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Uwawe Terah</h5>
                   <span className="text-sm text-gray-500 dark:text-gray-400">Software Engineer</span>
                   <p className="text-sm text-gray-500 dark:text-gray-400 pt-3">
                       I'm a fullstack Developer With Experience in MERN stack application development. I strive for excellence in every line of code that I write
                   </p>
                   
               </div>
           </Card>
         
            </div>
            
         </div>
    
  );
}
