
import {QrScanner} from '@yudiel/react-qr-scanner';
import { useNavigate } from 'react-router-dom';


const ScanQrcode = ()=>{
     const navigate = useNavigate()
    const handleResult = (res)=>{
   navigate('/')

    }


  return (
    <QrScanner
    onDecode={(result) => handleResult(result)}
    onError={(error) => {console.log(error?.message); alert("Please Download Latest Browser Version")}}
/>
  )
}


export default ScanQrcode

// class ScanQrcode extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       delay: 100,
//       result: 'No result',
//     }

//     this.handleScan = this.handleScan.bind(this)
//   }
//   handleScan(data){
//     this.setState({
//       result: data,
//     })
//   }
//   handleError(err){
//     console.error(err)
//   }
//   render(){
//     const previewStyle = {
//       height: 240,
//       width: 320,
//     }

//     return(
//       <div className='min-h-screen flex items-center'>
//          <div className='w-full md:w-1/2 bg-white mx-auto p-2 rounded drop-shadow-sm'>
//         <QrReader
//           delay={this.state.delay}
//           style={previewStyle}
//           onError={this.handleError}
//           onScan={this.handleScan}
//           />
//         <p>{this.state.result}</p>
//       </div>
//       </div>
//     )
//   }
// }


// export default ScanQrcode;