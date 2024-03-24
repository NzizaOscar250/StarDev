
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import profile from "../assets/stardev.png"
export default function Whatsapp() {

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(e)

  }
  return (
      <FloatingWhatsApp  notificationLoop={2} chatMessage=" Welcome to StarDev Technology!  Let's chat and turn your ideas into reality"  statusMessage="Innovate. Illuminate. Elevate." phoneNumber='+25 0785140170' accountName='StarDev Technology' avatar={profile}  onSubmit={handleSubmit} />
  )
}