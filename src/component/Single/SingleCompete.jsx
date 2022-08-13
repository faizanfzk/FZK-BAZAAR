import React from 'react'
import "../CartContainer.css"
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export const SingleCompete = () => {
    const [data, setData] = useState([])
    const [cart, setCart] = useState({})
        const { id } = useParams()
    useEffect(() => {
        getSingleData()


    }, [])
    let getSingleData = () => {
        axios.get(`http://localhost:8080/compete/${id}`)
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })

    }
    let cartData = (data) => {
        console.log("data", data)
        const obj = { image: data.image, title: data.title, author: data.author, price: data.price }
        // console.log(obj.title)

        axios.post(`http://localhost:8080/cart`, obj)
            .then((res) => {
                setCart(res.cart)
            })
            .catch((err) => {
                 console.log(err)
            })

    }
    return (
          
        <div className='big'>
        <div className='cartContainer' >


            <div>
                <img src={data.image} alt="" />
            </div>
            <div>
                <p>{data.title}</p>
                <p>{data.author}</p>
                <p>₹ {data.price}</p>
                <button class="btn btn-success" onClick={() => cartData(data)}>Add Cart</button>
            </div>
        </div>
    </div>
  )
}
