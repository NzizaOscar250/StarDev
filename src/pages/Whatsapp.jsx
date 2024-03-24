
import { FloatingWhatsApp } from 'react-floating-whatsapp'

export default function Whatsapp() {

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(e)
  }
  return (
      <FloatingWhatsApp phoneNumber='0785140170'  onSubmit={handleSubmit}/>
  )
}