import { lazy,Suspense, } from 'react';
import "./index.css"

import { createBrowserRouter,createRoutesFromElements,RouterProvider,Route } from 'react-router-dom';
import Statistics from './view/staff/Statistics';
import Notifications from './view/staff/Notifications';
import Orders from './view/staff/Orders';

const Home = lazy(()=>import("./view/Home"));
const RootLayout = lazy(()=>import("./layout/RootLayout"));

const NotFoundPage = lazy(()=>import('./view/NotFoundPage'));
const ActiveStaffMember = lazy(()=>import("./view/ActiveStaffMember"))
const HomeStaff = lazy(()=>import("./view/staff/HomeStaff"))
const ScanQrcode = lazy(()=>import("./view/ScanQrcode"))
const QRCodeGenerator = lazy(()=>import("./view/staff/QrcodeGenerator"))



function App() {

  const Loader = ()=>{
    return (
      <div className="container min-vh-100  d-flex justify-content-center align-items-center ">
        <div className='text-center'>
        
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
               <Route index element={<Home/>} />
                <Route path='scanqr' element={<Suspense fallback={<Loader/>}><ScanQrcode/></Suspense>}/>
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

                <Route path='*' element={<NotFoundPage/>}/>
            </Route>
        )
     )
  return (
    <RouterProvider  router={router}></RouterProvider>
  )
}

export default App
