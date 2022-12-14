
import React from 'react'
import {Routes,Route} from "react-router-dom"
import { Products } from '../Products'
import { Home } from '../Home'
import { Cart } from '../Cart'
import { Navbar } from '../Navbar'
import { Electronics } from '../Electronics'
import { Mobile } from '../Mobile'
import { Compete } from '../Engineering'
import { CartShow } from '../CartShow'
import { SingleMobile } from '../Single/SingleMobile'
import { SingleElectronics } from '../Single/SingleElectronics'
import { SingleCompete } from '../Single/SingleCompete'
import { Footer } from '../Footer'

import { Login } from '../Auth/Login'
import { Signup } from '../Auth/SignUp'
import { ProtectedRoute } from '../context/ProtectedRoute'

export const AllRoutes = () => {
  return (

    <div>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>

            <Route path="/books" element={
            <ProtectedRoute>
            <Products/>
            </ProtectedRoute>}/>
            <Route path="/electronics" element={<Electronics/>}/>
            <Route path="/mobile" element={<Mobile/>}/>
            <Route path="/compete" element={<Compete/>}/>
            <Route path="/cart/:id" element={<Cart/>}/>
            <Route path='/mobile/:id' element={<SingleMobile/>}/>
            <Route path='/electronics/:id' element={<SingleElectronics/>}/>
            <Route path='/compete/:id' element={<SingleCompete/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path="/cart" element={
            <CartShow/>
          
         }/>
        </Routes>
        <Footer/>
    </div>
  )
}
