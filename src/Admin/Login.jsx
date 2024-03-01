
import { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signinAction } from '../actions'
const Login = () => {
  

    const [formData,setFormData] = useState({username:'',password:''})
    const  dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChange = (event)=>{
        const {name, value} = event.target
        console.log(name)

        setFormData({...formData,[name]:value})

    }

    const handleSubmit = (event)=>{
        event.preventDefault()
        formData.email = formData.username
                     
         dispatch(signinAction(formData,navigate))
        console.log(formData)
    }
 


  return (
    <div className='min-h-screen flex items-center'>
        <div className='bg-white  max-w-xl mx-auto rounded p-[2rem] shadow-sm'>
         <div>
             <Link to="/" className='text-purple-400 text-2xl text-center block pb-5'>SIGN IN</Link>
         </div>
             <form autoComplete='off' onSubmit={handleSubmit}>
             <p className='text-sm leading-3'>Hi, Welcome Please  Signin to continue to application!</p>
                <div className='input my-2 '>
                      <label className='block text-slate-500 text-sm pb-3'>Username: </label>
                      <div className='flex items-center'>
                        {/* <div className='p-2 bg-slate-400 text-slate-100'><FiUser style={{fontSize:20}}/></div> */}
                        <input type='text' placeholder='Enter username or email' name='username'
                         value={formData.username} onChange={handleChange}  className='py-2 w-full ring-slate-400  ring-2 focus:border-0 outline-none rounded px-1 focus:ring-2 focus:ring-purple-400'  />
                      </div>
                </div>
                <div className='input my-4 '>
                      <label className='block text-slate-500 text-sm pb-3'>Password: </label>
                      <div className='flex items-center'>
                        {/* <div className='p-2 bg-slate-400 text-slate-100'><FiUser style={{fontSize:20}}/></div> */}
                        <input type='password' placeholder='Enter Password...' value={formData.password} name='password' 
                        onChange={handleChange} className='py-2 w-full bg-transparent ring-slate-400  ring-2 focus:border-0 outline-none rounded px-1 focus:ring-2 focus:ring-purple-400'  />
                      </div>
                </div>

                <button type='submit' className='bg-purple-400 text-white px-3 py-2 w-full shadow-sm rounded' >Signin</button>
                
             </form>
             <p className='mt-3 text-xs text-slate-500 text-center'>Powered by StarDev &copy; { new Date().getFullYear()}</p>
        </div>
        
    </div>
  )
}

export default Login