
import Nav from "./Nav"
import { Outlet } from 'react-router-dom'
const HomeStaff = () => {
  return (
    <div className='w-full'>
        <Nav/>
       <div className='my-4 p-3 w-full md:w-10/12 mx-auto bg-white rounded drop-shadow-sm'>
       <Outlet/>
       </div>
    </div>
  )
}

export default HomeStaff