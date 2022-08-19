import React from 'react'
import { useEffect,useState } from 'react'
import axios from "axios"
import "./Engineering.css"
import { useNavigate } from 'react-router-dom'

export const Compete = () => {
    const [data,setData]=useState([])
    const [totalData,setTotal]=useState([])
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState(false)
    const [sort,setSort]=useState("asc")
    const [page,setPage]=useState(1)
    const [limit,setLimit]=useState(8)
    const [cart, setCart] = useState({})
    
    
    const navigate=useNavigate()
    const handleSort=(e)=>{
        setSort(e.target.value)
        }
        {sort==="asc" ? data.sort((a,b)=>a.price-b.price) :data.sort((a,b)=>b.price-a.price) }
  
        let getData=(page,limit)=>{
            setLoading(true)
            console.log("hello")
            axios({
                url:`https://fzk-bazaar1.herokuapp.com/compete`,
                method:"GET",
                params:{
                    _page:page,
                    _limit:limit
                }
            })
            .then((res)=>{
                setData(res.data)
                setLoading(false)
                
            })
            .catch((err)=>{
          setError(true)
    
            })
        }
        const getTotal=()=>{
            axios.get(` https://fzk-bazaar1.herokuapp.com/compete`)
            .then((res)=>setTotal(res.data))
        }


        useEffect(()=>{
            getData(page,limit)
            getTotal()
          
            },[page,limit])
      
            
            let cartData = (data) => {
                console.log("data", data)
                const obj = { image: data.image, title: data.title, author: data.author, price: data.price }
                // console.log(obj.title)
        
                axios.post(` https://fzk-bazaar1.herokuapp.com/cart`, obj)
                    .then((res) => {
                        setCart(res.cart)
                    })
                    .catch((err) => {
                        console.log(err)
                    })
        
            }
       
  return (<div className='high'>
   <h6 style={{color:"white"}}>Sort By Price</h6>
     <select w={"150px"} pl={"8px"} value={sort} onChange={handleSort}>

<option value='asc'>Low to High</option>
<option value='desc'>High to Low</option>
</select>

  
    <div className='containers'>
        {loading && <div>...loading</div>}
        {error && <div>something went wrong</div>}
        {data.map((e,id)=>{
            return(
                <div key={id} className='subContains' >
               
                    <img className='image' src={e.image} alt="" />
                    <div className='btn'>
                    <p>{e.title}</p>
                    <p>₹ {e.price}</p>
                    </div>
                    <div className='buttonClas'>
                    <button onClick={()=>navigate(`/compete/${e.id}`)} type="button" class="btn btn-primary">View</button>
                    <button onClick={()=>cartData(data)} type="button" class="btn btn-success">Add Cart</button>
                    </div>
                  </div>
                 
            )
        })}

    </div>
    <div className='paginates'>
    <button  type="button" class="btn btn-secondary"disabled={(page==1)}  onClick={()=>setPage(page-1)}>Previous</button>
    <button type="button" class="btn btn-secondary" disabled={(page==Math.ceil(totalData.length/limit))} onClick={()=>setPage(page+1)}>Next</button>
    </div>
    </div>
  )
}
