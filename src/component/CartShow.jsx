import axios from 'axios'
import React from 'react'
import { useEffect,useState } from 'react'
import "./CartShow.css"
export const CartShow = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        cartItem()
    },[])

    const cartItem=()=>{
        axios.get(`http://localhost:8080/cart`)
        .then((res)=>setData(res.data))
        .catch((err)=>console.log(err))
    }
 
    const handleDelete=(id)=>{
        axios.delete(`http://localhost:8080/cart/${id}`)
        cartItem()
    }

  return (
   <div>
   {data.map((e)=>{
    return(
        <div className='classShow' key={e.id}>
    <div className='show' >
        <img src={e.image} alt="" />
        <p>{e.title}</p>
        <p>₹ {e.price}</p>
       
        <button onClick={()=>handleDelete(e.id)} class="btn btn-danger" >Delete</button>
        </div>
        </div>
    )
   })}
    </div>
    
  )
}
