import React from 'react'
import { NavLink } from 'react-router-dom'

function CategoryBar() {
  //console.log("CategoryBar rendered");
    return (
        <div className="catContainer" id="categoryBar">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="#Break Your Fast" >Break Your Fast</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="#Time for Lunch">Time for Lunch</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="#Can I Have Snacks">Can I Have Snacks</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="#Dinner">Dinner</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="#Burgers and Beverages">Burgers and Beverages</NavLink>
        </li>
        <li className="nav-item dropdown">
          <div className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" role="button">
            More..
          </div>
          <ul className="dropdown-menu">
            <li><NavLink className="dropdown-item" to="#Pizzanians">Pizzanians</NavLink></li>
            <li><NavLink className="dropdown-item" to="#Desserts">Desserts</NavLink></li>
            <li><NavLink className="dropdown-item" to="#Chick and Chicken">Chick and Chicken</NavLink></li>
            {/* <li><a className="dropdown-item" href="#Bread and Salad">Bread and Salad</a></li> */}
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
    )
}

export default React.memo(CategoryBar)
