import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../pages/Navigation'
import Footers from '../pages/Footers'

const RootLayout = () => {
  return (
     <div className="">
        <Navigation/>

           <div className="">
           <Outlet/>
           </div>
        <Footers/>
     </div>
  )
}

export default RootLayout