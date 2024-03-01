import { createContext, useState } from "react";
import "../index.css"
import Menu from './Menu'; // Import the Menu component

export const MenuContext = createContext();

const {Provider} = MenuContext;



const Home = () => {
  const [total,setTotal] = useState(0)
  const [selected,setSelected] = useState([])

  // const calculateTotal = ()=>{
  //   const total = selected.reduce(())
  // }
  const values = {
    selected,
    setSelected
  }
  return (

    <Provider value={values}>
         <Menu />
    </Provider>
  )
}

export default Home