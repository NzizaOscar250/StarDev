
import { Outlet } from 'react-router-dom'

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
const RootLayout = () => {
const dispatch = useDispatch();

  useEffect(()=>{
      
      
  },[dispatch])

  return (
    <>

        
        <div className="">
          <Outlet/>
        </div>
    </>
  )
}

export default RootLayout