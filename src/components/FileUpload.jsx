import  { useRef } from 'react';
import {IoMdCloudUpload } from "react-icons/io";
const FileUpload = ({filenames,change}) => {
  const fileInputRef = useRef(null);

  const handleIconClick = () => {
    // Trigger the file input click when the icon is clicked
    fileInputRef.current.click();
  };
  // const handleFileChange = (event) => {
  //   // Handle the file change here, you can access the selected file using event.target.files
  //   const selectedFile = event.target.files[0];
  //   setFilename(selectedFile.name)
  //   console.log('Selected File:', selectedFile);
  // };

  return (

 
     <div className={` h-full cursor-pointer ${  !filenames && 'py-4 bg-white  flex items-center text-slate-300 hover:text-gray-500 justify-center  relative'} rounded `} onClick={handleIconClick}>
          {
            filenames ?  <img src={filenames} alt='Food Image' className="h-full w-full rounded object-cover"/> :<IoMdCloudUpload style={{fontSize:'10rem'}} className='cursor-pointer'/>}
    
     <input
              type="file"
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={change}
            />
     </div>
    
    


           
     
  );
};

export default FileUpload;



