import React from 'react'
import {NavLink} from "react-router-dom"
export const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg bg-dark">
    <div className="container-fluid">
      < NavLink to="/" className="navbar-brand" style={{color:"yellowgreen",fontSize:"30px",fontStyle:"italic",fontWeight:"bold"}} >FZK-BAZAAR</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink to="/books" className="nav-link active" aria-current="page"  style={{color:"white"}}>Books</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/electronics" className="nav-link"  style={{color:"white"}} >Electronics</NavLink>
          </li> 
          <li className="nav-item">
            <NavLink to="/mobile" className="nav-link"  style={{color:"white"}} >Mobiles</NavLink>
          </li> 
          <li className="nav-item">
            <NavLink to="/compete" className="nav-link"  style={{color:"white"}} >Compete</NavLink>
          </li> 
         
         
         </ul>
         
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit"  style={{color:"white"}}>Search</button>
        </form>  */}
      </div>
    </div>
  </nav>
  )
}
