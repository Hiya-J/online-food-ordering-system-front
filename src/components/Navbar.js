import React from 'react'
import '../css/navbar.css'
import {Link} from 'react-router-dom';

function Navbar() {
  //console.log("navbar rendered");
    return (
      <>
        <div className="loginBar container-fluid d-flex flex-wrap align-items-center">
        {/* <Sdiv> */}

            <nav className="navbar-dark d-inline-flex align-items-center flex-grow-1">
      
    <Link to="/" className="navbar-brand">
      <img id="nav-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPDwrdCgGKwEmWgQlqEbS4OwtTZ5-HO90-Dg&usqp=CAU" alt="nav-logo" className="img-fluid d-inline-block align-baseline me-2" />
      <span className="nav-title">Food</span><span className="nav-title-to">Palace</span>
    </Link>
    
    </nav>
    <div className="d-inline-flex m-2 logincategory">
      <div className="">
      <Link to="/login"><button type="button" className="btn btn-outline-light btn-lg text-white loginbtn me-2">Login</button></Link></div>
      <div className="">
      <Link to="/register"><button type="button" className="btn btn-outline-light btn-lg text-white loginbtn me-2">Sign up</button></Link>
        </div>
        </div>
        </div>
        
      </>
    )
}

export default React.memo(Navbar)
