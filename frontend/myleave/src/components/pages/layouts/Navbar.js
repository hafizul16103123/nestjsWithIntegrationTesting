import React from 'react'
import {NavLink ,Link} from 'react-router-dom'
const Navbar =()=>{
    return (
        <nav className="container navbar navbar-expand-lg navbar-dark bg-primary">
      
        <div className="collapse navbar-collapse" >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
          </ul>
        </div>
        <Link className='btn btn-outline-light' to='users/add'>Add User</Link>
      </nav>
       
    )
}
export default Navbar