import hero from "../assets/hero-img.png"
import { Button , Card, Label, TextInput, Textarea} from 'flowbite-react'
// import abt from "../assets/abt.jpg"
// import code from "../assets/code.jpg"
import { Link } from 'react-router-dom'
import Pricing from '../pages/Pricing'
import Whatsapp from '../pages/Whatsapp'
import { List } from "flowbite-react"
import { HiCheckCircle } from "react-icons/hi";
import OurTeam from "../pages/OurTeam"

const Home = () => {

  
  return (
    <div>
    <Whatsapp/>
      <div className="bg-violet-600 min-h-[10vh]">
         <div className='container py-5'>
             <div className='grid grid-cols-3 sm:grid-cols-6 gap-3 justify-items-center items-center  '>
             <div className='col-span-3 lg:hidden flex flex-col justify-center items-center'>
               {/* <h1 className='text-gray-100 uppercase font-semibold text-3xl leading-snug py-2 text-center'>We make it happen</h1> */}
                  <img src={hero} alt='star dev' className="drop-shadow p-2 w-10/12 "/>
              </div>
              <div className='col-span-3 px-2'>
                 <h1 className='text-gray-100 uppercase font-semibold text-4xl leading-snug '>We'll make it happen</h1>
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

      <div className='my-[3rem] '>
         <h2 className='text-slate-500 uppercase font-semibold text-2xl'>Our Services  </h2>
          <p className='font-light  text-sm my-2'>At StarDev Technology, we specialize in providing comprehensive web application software solutions tailored to meet the unique needs and goals of our clients. Our services include:</p>
        
          <div className='grid grid-cols-1 sm:grid-cols-4 gap-2  cards py-3   mb-2'>

          
           <Card href="#" className=" p-0" theme={{root:{children:'flex h-full flex-col justify-between gap-4 p-4',href:''},
           img:{base:'hidden lg:block'}}} >
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

           <Card href="#" className=" p-0"  theme={{root:{children:'flex h-full flex-col  justify-between  gap-4 p-4',href:''},
           img:{base:'hidden lg:block'}}}   >
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

          <Card href="#" className=" p-0"  theme={{root:{children:'flex h-full flex-col  justify-between  gap-4 p-4',href:''}}}  >
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

           <Card href="#" className=" p-0"  theme={{root:{children:'flex h-full flex-col justify-between gap-4 p-4',href:''},
           img:{base:'hidden lg:block'}}}   >
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


      <div className='pricing pb-[3rem] bg-gradient-to-tr from-purple-500 to-purple-600 p-4 rounded relative' >
        <div style={{clipPath:' polygon(50% 0%, 19% 26%, 78% 26%)'}} 
        className='bg-purple-600 left-1/2 p-4 w-10 absolute -top-1'></div>
        <h2 className='text-slate-50 uppercase font-semibold text-2xl pt-3 '>Pricing  </h2>
         <p className='font-light text-sm py-3 text-slate-50'>
          
            At StarDev Technology, we understand that every project is unique, and pricing can vary depending on factors such as project complexity, scope, and specific client requirements. 
            We offer transparent and competitive pricing tailored to meet the needs and budgets of our clients
          </p>
          
          <Pricing/>
      </div>
        <div  className='about my-3 pb-[3rem] bg-gradient-to-tr from-purple-500 to-purple-600 p-4 rounded relative'>
    <div style={{clipPath:' polygon(50% 0%, 19% 26%, 78% 26%)'}} 
        className='bg-purple-600 left-1/2 p-4 w-10 absolute -top-1'></div>
        <h2 className='text-slate-50 uppercase font-semibold text-2xl'>ABOUT US</h2>
        <p className=" text-white text-sm my-2 w-1/2">
          At StarDev Technology, 
          we are driven by a passion for innovation and a commitment to excellence in web application software solutions. 
          With a team of seasoned professionals and creative minds,
          we specialize in crafting tailored solutions that empower businesses to thrive in the digital age.
        </p>

        <div className="grid grid-cols-2 gap-2">
        <Card href="#" className=" p-0" theme={{root:{children:'flex h-full flex-col justify-between gap-4 p-4',href:''},
           img:{base:'hidden lg:block'}}} >
              <h5 className="text-md  tracking-tight uppercase text-slate-900 font-semibold dark:text-white">
                Our mission
              </h5>
              <p className="font-normal text-sm text-gray-700 dark:text-gray-400">
              Our mission at StarDev Technology is to empower businesses with cutting-edge web application software solutions that streamline processes, enhance productivity, and drive growth. We strive to be at the forefront of technological advancements,
              delivering innovative solutions that exceed our clients' expectations and propel their success.
              </p>
              
           </Card>


           <Card href="#" className=" p-0" theme={{root:{children:'flex h-full flex-col justify-between gap-4 p-4',href:''},
           img:{base:'hidden lg:block'}}} >
              <h5 className="text-md  tracking-tight uppercase text-slate-900 font-semibold dark:text-white">
                Our mission
              </h5>
              <p className="font-normal text-sm text-gray-700 dark:text-gray-400">
              Our mission at StarDev Technology is to empower businesses with cutting-edge web application software solutions that streamline processes, enhance productivity, and drive growth. We strive to be at the forefront of technological advancements,
              delivering innovative solutions that exceed our clients' expectations and propel their success.
              </p>

              <p>
                
Innovation: We believe in pushing the boundaries of technology and thinking outside the box to create innovative solutions that solve real-world problems.

Quality: Quality is at the core of everything we do. We are committed to delivering high-quality, reliable, and scalable software solutions that meet the highest standards of excellence.

Customer-Centricity: Our clients are at the heart of our business. We are dedicated to understanding their unique needs and providing personalized solutions that address their challenges and drive results.

Collaboration: We foster a culture of collaboration, teamwork, and open communication, both internally within our team and externally with our clients. By working together, we achieve greater success and deliver exceptional outcomes.

Integrity: We conduct business with the utmost integrity, honesty, and transparency. We believe in building long-lasting relationships based on trust, respect, and mutual benefit.

              </p>


              <List>
      <List.Item icon={HiCheckCircle}>At least 10 characters (and up to 100 characters)</List.Item>
      <List.Item icon={HiCheckCircle}>At least one lowercase character</List.Item>
      <List.Item icon={HiCheckCircle}>Inclusion of at least one special character, e.g., ! @ # ?</List.Item>
    </List>

              
           </Card>

           
        </div>


        </div>
    </div>

         <OurTeam/>

         <div className="container my-4 ">
            <h2 className='text-slate-900 uppercase font-semibold text-2xl text-center py-2 my-4'>Contact Us</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 px-3">
                <div className="map">
                <p>
                  Thank you for your interest in StarDev Technology.
                  We're here to assist you with any inquiries or support you may need.
                  Please feel free to reach out to us through any of the following channels
                  
                </p>

                  

                  </div>
                  <div>
                    <form className="bg-white rounded shadow-sm p-3">
                        <div className="grid grid-cols-2 gap-2">
                          <div>
                              <Label>Fullname: </Label>
                              <TextInput type="text" placeholder="Enter fullname..."/>
                          </div>
                          <div>
                            <Label>Phone/Email: </Label>
                            <TextInput type="email" placeholder="Enter phonenumber or email"/>
                          </div>
                          <div className="col-span-2">
                            <Label>Message: </Label>
                            <Textarea rows={4} className="w-full rounded"></Textarea>

                            <Button className="my-2">Send</Button>
                          </div>
                        </div>
                    </form>

                  </div>

            
            </div>

         </div>
    </div>
  )
}

export default Home
