import { lazy,Suspense, } from 'react';
import "./index.css"

import { createBrowserRouter,createRoutesFromElements,RouterProvider,Route } from 'react-router-dom';

const Home = lazy(()=>import("./view/Home"));
const RootLayout = lazy(()=>import("./layout/RootLayout"));

const NotFoundPage = lazy(()=>import('./view/NotFoundPage'));

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
            <Route index element={<Home/>}/>
               

                <Route path='*' element={<NotFoundPage/>}/>
            </Route>
        )
     )
  return (
  
         <RouterProvider  router={router}/>
  
   
  )
}

export default App
