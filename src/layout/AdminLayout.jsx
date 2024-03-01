import { createContext, useEffect, useState } from "react"
import {
    Sidenav,
    Ripple,
    initTE,
  } from "tw-elements";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Toasts from "../components/Toast";
import { fetchMenu } from "../actions";

export const FeedBackContext = createContext()
const {Provider} =FeedBackContext 

const AdminLayout = () => {
   
  const feedback = useSelector((state)=>state.feedback)
  const [values,setValues] = useState({message:'',status:''})
  const dispatch = useDispatch()
    useEffect(()=>{
        initTE({ Sidenav, Ripple });
      
    },[])

    // useEffect(()=>{

    //       setValues({...values,message:feedback.message,status:feedback.status})
    // },[feedback,values])

    useEffect (()=>{
          dispatch(fetchMenu())
    },[dispatch])

  return (
    
<Provider value={values}>

  <Sidebar/>


<div className=" !pl-[240px] text-center  " id="content">
  <Navbar/>


  <div className="container text-start min-h-screen px-3 py-2">
    <Toasts message={values.message} status={values.status}/>
       <Outlet/>
  </div>
</div>

</Provider>
  )
}

export default AdminLayout