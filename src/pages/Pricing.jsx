


import { Blockquote, Card } from "flowbite-react";

export default function Pricing() {

  
// 
//  
  return (

    <div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        <Card href="#" className=" p-0" 
        theme={{root:{children:'flex h-full flex-col justify-start gap-4 p-4',href:''}}}
            >
              <h5 className="text-md  tracking-tight uppercase text-slate-500 font-semibold dark:text-white">
              Hourly Rates
              </h5>
              <p className="font-normal text-sm text-gray-700 dark:text-gray-400">
              For projects where the scope is not fully defined or requires ongoing development and support, 
              we offer hourly rates.
        
              </p>
              
             
           </Card>

           <Card href="#" className=" p-0" 
        theme={{root:{children:'flex h-full flex-col justify-start gap-4 p-4',href:''}}}
            >
              <h5 className="text-md  tracking-tight uppercase text-slate-500 font-semibold dark:text-white">
              Fixed-Price Projects
              </h5>
              <p className="font-normal text-sm text-gray-700 dark:text-gray-400">
              For well-defined projects with clear requirements,
              we provide fixed-price quotes to ensure transparency and budget predictability.
         
              </p>
              
             
           </Card>


           <Card href="#" className=" p-0" 
        theme={{root:{children:'flex h-full flex-col justify-start gap-4 p-4',href:''}}}
            >
              <h5 className="text-md  tracking-tight uppercase text-slate-500 font-semibold dark:text-white">
              Custom Packages
              </h5>
              <p className="font-normal text-sm text-gray-700 dark:text-gray-400">
              We also offer customized packages tailored to suit the specific needs and goals of your business. 
          Whether you're a startup looking to launch a new web application or an established enterprise seeking to optimize your existing systems, we can create a package that aligns with your objectives and budget.
        
              </p>
              
             
           </Card>
           
    </div>
    {/* <Blockquote className="my-4 border-l-4 border-gray-300 bg-purple-300 p-4 dark:border-gray-500
     dark:bg-gray-800 font-semibold  text-sm text-slate-500">
    To receive a personalized quote for your project or to learn more about our pricing options, 
    please contact us. Our team will be happy to discuss your project requirements, provide an estimate, and answer any questions you may have.


      </Blockquote> */}
    </div>
   
  );
}
