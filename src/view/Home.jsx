import React from 'react'
import hero from "../assets/hero-img.png"
import { Button , Card} from 'flowbite-react'
import abt from "../assets/abt.jpg"
import code from "../assets/code.jpg"
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <div className="bg-violet-600 min-h-[10vh]">
         <div className='container py-5'>
             <div className='grid grid-cols-3 sm:grid-cols-6 gap-3 justify-items-center items-center  '>
             <div className='col-span-3 lg:hidden flex flex-col justify-center items-center'>
               <h1 className='text-gray-100 uppercase font-semibold text-3xl leading-snug py-2 text-center'>We make it happen</h1>
                  <img src={hero} alt='star dev' className="drop-shadow h-[140px]"/>
              </div>
              <div className='col-span-3 px-2'>
                 <h1 className='text-gray-100 uppercase font-semibold text-4xl leading-snug hidden lg:block'>We'll make it happen</h1>
                 <h2 className="text-gray-100 uppercase font-semibold text-xl">Make Your Business BOLD</h2>
                 <p className='text-gray-50  py-3 leading-6 font-light'>Welcome to StarDev Technology – where innovation meets excellence, and success knows no bounds.
                  <br/><br/>
                 Whether you're looking to develop a custom web application, optimize your existing systems, or embark on a new digital venture,
                  we're here to help. Explore our website to learn more about our services, meet our team, and discover how we can help you achieve your goals.
                 </p>
                <Button>Get started</Button>
              </div>

              <div className='col-span-3 hidden lg:block'>
                  <img src={hero} alt='star dev' className='drop-shadow  h-[350px]'/>
              </div>

             </div>
         </div>
    </div>



       
    <div className='container my-3  py-3 px-2 md:px-0'>

      <div>
         <h2 className='text-slate-500 uppercase font-semibold text-2xl'>Our Services  </h2>
          <p className='font-light  text-sm my-2'>At StarDev Technology, we specialize in providing comprehensive web application software solutions tailored to meet the unique needs and goals of our clients. Our services include:</p>
        
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 cards py-3   mb-2'>

          
           <Card href="#" className=" p-0" theme={{root:{children:'flex h-full flex-col justify-center gap-4 p-4',href:''},
           img:{base:'hidden lg:block'}}} imgSrc={abt} horizontal>
              <h5 className="text-md  tracking-tight uppercase text-slate-500 font-semibold dark:text-white">
                E-Commerce Solutions
              </h5>
              <p className="font-normal text-sm text-gray-700 dark:text-gray-400">
              Our e-commerce solutions empower businesses to establish a robust online presence, streamline operations, and drive sales. From online storefronts to payment gateways and inventory management systems, we have you covered.

              </p>
              <Button className='bg-purple-500' as={Link} to="/">
               Get Started
            <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
             </Button>
           </Card>

           <Card href="#" className=" p-0"  theme={{root:{children:'flex h-full flex-col justify-center gap-4 p-4',href:''},
           img:{base:'hidden lg:block'}}}  imgSrc={abt} horizontal >
              <h5 className="text-md  tracking-tight uppercase text-slate-500 font-semibold dark:text-white">
                Enterprise Resource Planning (ERP) Systems
              </h5>
              <p className="font-normal text-sm text-gray-700 dark:text-gray-400">
              Our ERP systems integrate key business processes and functions into a unified platform, enabling better decision-making, resource optimization, 
              and operational efficiency across your organization
              </p>
              <Button className='bg-purple-500' as={Link} to="/">
               Get Started
            <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
             </Button>
           </Card>

          <Card href="#" className=" p-0"  theme={{root:{children:'flex h-full flex-col justify-center gap-4 p-4',href:''},
           img:{base:'hidden lg:block'}}}  imgSrc={abt} horizontal>
              <h5 className="text-md  tracking-tight uppercase text-slate-500 font-semibold dark:text-white">
                Web Application Development
              </h5>
              <p className="font-normal text-sm text-gray-700 dark:text-gray-400">
              We design and develop custom web applications tailored to your specific requirements, providing scalable, secure, and user-friendly solutions that drive business growth and efficiency.

              </p>
              <Button className='bg-purple-500' as={Link} to="/">
               Get Started
            <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
             </Button>
           </Card>
           <Card href="#" className=" p-0"  theme={{root:{children:'flex h-full flex-col justify-center gap-4 p-4',href:''},
           img:{base:'hidden lg:block'}}}  imgSrc={code}  horizontal >
              <h5 className="text-md  tracking-tight uppercase text-slate-500 font-semibold dark:text-white">
                API Integration
              </h5>
              <p className="font-normal text-sm text-gray-700 dark:text-gray-400">
              We integrate third-party APIs and services into your web applications to enhance functionality, improve efficiency, and unlock new capabilities, ensuring seamless interoperability and data exchange

              </p>
              <Button className='bg-purple-500' as={Link} to="/">
               Get Started
            <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
             </Button>
           </Card>

         



           

          </div>
      
      </div>
    <div id='about'>
        <h2 className=''>ABOUT US</h2>
        <p>
          At StarDev Technology, 
          we are driven by a passion for innovation and a commitment to excellence in web application software solutions. 
          With a team of seasoned professionals and creative minds,
          we specialize in crafting tailored solutions that empower businesses to thrive in the digital age.
        </p>
        </div>
    </div>
        
    </div>
  )
}

export default Home
