import React from 'react'
import { Link } from 'react-router-dom'
import "./HomeProduct.css"
export const HomeProducts = () => {
  return (
    <div>
        <div className='Main'>
        <div>
        <Link to="/Electronics"><img src='https://m.media-amazon.com/images/I/61l+14s5QVL._AC_UY218_.jpg'/></Link>
        <h2 className='name'>Earphone</h2>
        </div>
        <div>
            <Link to="/mobile"><img src="https://m.media-amazon.com/images/I/71k86pEH5LS._SX679_.jpg" alt="mobile" /></Link>
            <h2 className='name'>Mobiles</h2>
        </div>
        <div>
            <Link to="/compete"><img src="https://m.media-amazon.com/images/I/71UwSHSZRnS._AC_UY218_.jpg" alt="" /></Link>
            <h2 className='name'>Books</h2>
        </div>
        </div>
    </div>
  )
}
