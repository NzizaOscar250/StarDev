import  { Component } from 'react'
import QrReader from 'react-qr-scanner'

class ScanQrcode extends Component {
  constructor(props){
    super(props)
    this.state = {
      delay: 100,
      result: 'No result',
    }

    this.handleScan = this.handleScan.bind(this)
  }
  handleScan(data){
    this.setState({
      result: data,
    })
  }
  handleError(err){
    console.error(err)
  }
  render(){
    const previewStyle = {
      height: 240,
      width: 320,
    }

    return(
      <div className='min-h-screen flex items-center'>
         <div className='w-full md:w-1/2 bg-white mx-auto p-2 rounded drop-shadow-sm'>
        <QrReader
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
          />
        <p>{this.state.result}</p>
      </div>
      </div>
    )
  }
}


export default ScanQrcode;