
import { createContext, useState } from "react"
import Nav from "./Nav"
import { Outlet } from 'react-router-dom'
export const OrderContext = createContext()
const {Provider} = OrderContext;

const HomeStaff = () => {
  const [orders,setOrders] = useState(0)

   
  const values ={
    orders,setOrders
  }


  return (
    <Provider value={values}>
      <div className='w-full'>
        <Nav/>
       <div className='my-4 p-3 w-full md:w-10/12 mx-auto  rounded drop-shadow-sm'>
          <Outlet/>
          </div>
        </div>
    </Provider>
  )
}

export default HomeStaff