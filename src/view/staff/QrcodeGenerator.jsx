import React, { useState } from 'react';
import { FiDownload } from 'react-icons/fi';
import QRCode from 'qrcode.react'; // Importing from 'qrcode.react' library

function QRCodeGenerator() {
  const [text, setText] = useState('https://example.com'); // Example URL

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const downloadQRCode = () => {
    const canvas = document.getElementById('qr-code').getElementsByTagName('canvas')[0]; // Accessing the canvas element
    const pngUrl = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
    const downloadLink = document.createElement('a');
    downloadLink.href = pngUrl;
    downloadLink.download = 'qrcode.png';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div>
      {/* <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Enter URL for QR code"
      /> */}
      
      <div className='  block md:grid grid-cols-4  gap-3'>
           <div className='col-span-4 mb-5'>
                <button className='flex gap-2 bg-purple-500 text-white px-3 py-2 rounded drop-shadow'><span>Download</span> <FiDownload/></button>
           </div>
           
           
                <div className=' f' >
                <div className='flex items-center justify-center'> <QRCode id="qr-code" value="test" size={200}/></div>
              <p className='text-lead py-2 font-bold'>#Table </p>
            </div>
            
            
      </div>
      {/* <button onClick={downloadQRCode}>
        <FiDownload /> Download QR Code
      </button> */}
    </div>
  );
}

export default QRCodeGenerator;
