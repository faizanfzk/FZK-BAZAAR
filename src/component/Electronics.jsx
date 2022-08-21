import React from 'react'
import { useEffect,useState } from 'react'
import axios from "axios"
import "./Electronics.css"
import { useNavigate } from 'react-router-dom'

import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Button
  } from '@chakra-ui/react';


export const Electronics = () => {
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState(false)
    const [sort,setSort]=useState("asc")
    const [page,setPage]=useState(1)
    const [cart,setCart]=useState({})
    
    const navigate=useNavigate()
    const handleSort=(e)=>{
        setSort(e.target.value)
        }
        {sort==="asc" ? data.sort((a,b)=>a.price-b.price) :data.sort((a,b)=>b.price-a.price) }
    useEffect(()=>{
        getData({page})
        },[page])
        let getData=()=>{
            setLoading(true)
            console.log("hello")
            axios({
                url:`  https://fzk-bazaar1.herokuapp.com/productelctronics`,
                method:"GET",
                params:{
                    _limit:8,
                    _page:page
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

        let cartData = (data) => {
            console.log("data", data[0].image)
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

  return (<div className='highest'>
   <h6>Sort By Price</h6>
     <select w={"150px"} pl={"8px"} value={sort} onChange={handleSort}>

<option value='asc'>Low to High</option>
<option value='desc'>High to Low</option>
</select>

  
    <div className='containers'>
        {loading && <div>...loading</div>}
        {error && <div>something went wrong</div>}
        {data.map((e,id)=>{
            return(
                <Center py={12}>
                <Box h={"450px"}
                  role={'group'}
                  p={6}
                  maxW={'330px'}
                  w={'full'}
                  bg={useColorModeValue('white', 'gray.800')}
                  boxShadow={'sm'}
                  rounded={'lg'}
                  pos={'relative'}
                  zIndex={1}>
                  <Box
                    rounded={'lg'}
                    mt={-12}
                    pos={'relative'}
                    height={'200px'}
                    _after={{
                      transition: 'all .3s ease',
                      content: '""',
                      w: 'full',
                      h: 'full',
                      pos: 'absolute',
                      top: 5,
                      left: 0,
                      
                      filter: 'blur(15px)',
                      zIndex: -1,
                    }}
                    _groupHover={{
                      _after: {
                        filter: 'blur(20px)',
                      },
                    }}>
                    <Image
                      rounded={'lg'}
                      height={200}
                      pt={8}
                      width={202}
                      objectFit={'cover'}
                      src={e.image}
                    />
                  </Box>
                  
                  <Stack pt={10} align={'center'}>
                    <Box height={"100px"} >
                    <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                      
                     {e.title}
                    </Text>
                    </Box>
                    <Stack direction={'row'} align={'center'}>
                      <Box display={"flex"} justifyContent={"space-around"}>
                        <Text fontWeight={800} fontSize={'xl'}>Price : </Text>
                      <Text fontWeight={800} fontSize={'xl'}>
                        ${e.price}
                      </Text>
                      </Box>
                    </Stack>
                  </Stack>
              
             <Box display={"flex"} justifyContent={"space-around"} flexWrap={"wrap"} mt={"15px"}>
                <Button onClick={()=>navigate(`/electronics/${e.id}`)} bg={"teal"}  >View</Button>
              
                   <Button onClick={()=>cartData(data)} bg={"black"} color={"yellowgreen"}>Add Cart</Button>
                
                   </Box> 
               
                </Box>
                
              </Center>
                 
                 
            )
        })}

    </div>
   
    <div className='paginate'>
    <button  type="button" class="btn btn-secondary"disabled={(page==1)} onClick={()=>setPage(page-1)}>Previous</button>
    <button type="button" class="btn btn-secondary" onClick={()=>setPage(page+1)}>Next</button>
    </div>
    </div>
  )
}
