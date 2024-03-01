
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
    Datatable,
    initTE,
  } from "tw-elements";
  


const MenuList = () => {
  const list = useSelector((state)=>state.Menu)

  console.log(list)


    useEffect(()=>{
        initTE({ Datatable });
    },[list])

  return (
  <>
      
<div data-te-datatable-init>


  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Image</th>
        <th>Description</th>
        <th>Price</th>
        <th>Date Created</th>
        <th>Created By</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    {
        list.length && list.map((data)=>(
            <React.Fragment key={data._id}>
            <tr>
                <td>Tiger Nixon</td>
                <td>System Architect</td>
                <td>image</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/04/25</td>
                <td>$320,800</td>
            </tr>
            </React.Fragment>
        ))
    }
    
    </tbody>
  </table>
</div>
  </>
  )
}

export default MenuList