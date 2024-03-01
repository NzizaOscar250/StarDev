import {  useEffect, useState } from "react";
import {
  Input,
  initTE,
} from "tw-elements";
import { IoMdSend} from "react-icons/io";
// import { FeedBackContext } from "../layout/AdminLayout";
import FileUpload from "../components/FileUpload";
import Toasts from "../components/Toast";
import { useDispatch } from "react-redux";
import { createMenu } from "../actions";


const CreateMenu = () => {
   const [formData,setFormData] = useState({name:'',description:'',price:'',image:'',imageName:''})
   const dispatch = useDispatch()
   const handleFileChange = (event) => {
    // Handle the file change here, you can access the selected file using event.target.files
    const selectedFile = event.target.files[0];
    
    if (selectedFile) {
        setFormData({...formData,imageName:selectedFile.name})
        const reader = new FileReader();
        reader.onloadend = () => {
          // `reader.result` contains the base64-encoded file data
          setFormData({...formData,image:reader.result})
        };
  
        reader.readAsDataURL(selectedFile);
      }
  };

    useEffect(()=>{
        initTE({ Input })
    },[])

  
    const handleChange = (e)=>{
        const {name,value} = e.target
        setFormData({...formData,[name]:value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault()

        dispatch(createMenu(formData))


    }
  return (
    <div className=" min-h-screen ">
        <Toasts />
       <div className="w-10/12 mx-auto">
       <h1 className='text-2xl  text-slate-500 my-2'>CREATE MENU</h1> 
       <form className="block sm:grid grid-cols-2 mt-5 gap-2" onSubmit={handleSubmit}>
          
          <div className=" rounded block">
                  <label className="block text-gray-500  text-sm py-3">Food Name: </label>
                  <input type="text"
                  name="name"
                  value={formData.name} 
                  onChange={handleChange}
                  className="block outline-none border-0 py-3 text-slate-500 focus:ring-2 focus:ring-purple-400  px-2 w-full rounded shadow-sm" placeholder=" Enter Food Name..." />
          </div>
          <div className=" rounded block">
                  <label className="block text-gray-500  text-sm py-3"> Price: </label>
                  <input type="number"
                    name="price"
                  value={formData.price} 
                  onChange={handleChange}
                   className="block outline-none border-0 py-3 text-slate-500 focus:ring-2
                   focus:ring-purple-400  px-2 w-full rounded shadow-sm" placeholder=" Enter Price..." />
          </div>
          <div className=" rounded block">

                  <label className="block text-gray-500  text-sm py-2">Description: </label>
                  <textarea rows={10} 
                  name="description"
                  value={formData.description} 
                  onChange={handleChange}
                  
                  placeholder="Enter description" className="block resize-none outline-none border-0 py-3 text-slate-500 focus:ring-2 focus:ring-purple-400  px-2 w-full rounded shadow-sm">

                  </textarea>
          </div>
          <div className="my-2">
          <label className="block text-gray-500  text-sm pb-2"> Image: </label>
                <div className="h-[16.5rem] p-2 bg-white rounded">
                   
                   <FileUpload change={handleFileChange} filenames={formData.image}/>
                   <p>{formData.imageName}</p>
                </div>
   
    
          </div>
          <div className="col-span-2">
            <button className="bg-purple-500 text-white  px-3 py-2 rounded flex items-center gap-2">Create <IoMdSend/></button>
          </div>
  
          
  
      
          
  
          </form> 
       </div>
    </div>
  )
}

export default CreateMenu