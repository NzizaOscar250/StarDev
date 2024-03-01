import { lazy,Suspense, } from 'react';
import "./index.css"

import { createBrowserRouter,createRoutesFromElements,RouterProvider,Route } from 'react-router-dom';
import Statistics from './view/staff/Statistics';
import Notifications from './view/staff/Notifications';
import Orders from './view/staff/Orders';
import AdminLayout from './layout/AdminLayout';
import ProtectedRoutes from './hooks/ProtectedRoutes';
import Login from './Admin/Login';
import MenuList from './Admin/MenuList';

const Home = lazy(()=>import("./view/Home"));
const RootLayout = lazy(()=>import("./layout/RootLayout"));

const NotFoundPage = lazy(()=>import('./view/NotFoundPage'));
// const ActiveStaffMember = lazy(()=>import("./view/ActiveStaffMember"))
const HomeStaff = lazy(()=>import("./view/staff/HomeStaff"))
const ScanQrcode = lazy(()=>import("./view/ScanQrcode"))
const QRCodeGenerator = lazy(()=>import("./view/staff/QrcodeGenerator"))
const AdminHome = lazy(()=>import("./Admin/Home"))
const AdminCreateMenu = lazy(()=>import("./Admin/CreateMenu"))


function App() {

  const Loader = ()=>{
    return (
      <div className="container min-vh-100  d-flex justify-content-center align-items-center ">
        <div className='text-center'>
        <div
    className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
    role="status">
    <span
      className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
    >Loading...</span>
  </div>
        <p className="text-sm fw-bold text-secondary">Powered By StarDev Technology &copy; {new Date().getFullYear()}</p>
      </div>
      </div>
    )
  }

     const router = createBrowserRouter(
      createRoutesFromElements(
            <Route path='/' element={
            <Suspense fallback={<Loader/>}>
                <RootLayout/>
            </Suspense>
            }>
               <Route path="menu" element={<Home/>} />
             
                <Route index element={<Suspense fallback={<Loader/>}><ScanQrcode/></Suspense>}/>
                <Route path='staff' element={
                <Suspense fallback={<Loader/>}>
                  <HomeStaff/>
                 </Suspense>}>
                 <Route index element={<Statistics/>}/>
                 <Route path='notification' element={<Notifications/>}/>

                  <Route path='qrgen' element={ <Suspense fallback={<Loader/>}><QRCodeGenerator/></Suspense> }/>
                  <Route path='orders' element={<Home/>}/>
                      <Route path='orders/:orderId' element={<Orders/>}/>
                      <Route path='orders/completed' element={<Home/>}/>
                      <Route path='orders/history' element={<Home/>}/>


                      <Route path='*' element={<NotFoundPage/>}/>
                  </Route>

                   <Route path='signin' element = {<Login/>} />

                    <Route path='admin' element={<ProtectedRoutes><AdminLayout/></ProtectedRoutes>}>
                        <Route index element={<AdminHome/>}/>
                        <Route path='createmenu' element={<AdminCreateMenu/>}/>
                        <Route path="menulist" element={<MenuList/>}/>
                    </Route>


                <Route path='*' element={<NotFoundPage/>}/>
            </Route>
        )
     )
  return (
    <RouterProvider  router={router}></RouterProvider>
  )
}

export default App
