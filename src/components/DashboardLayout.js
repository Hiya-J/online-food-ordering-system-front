import React from 'react'
import CheckNavbar from './CheckNavbar';
import {Switch, Route} from 'react-router-dom';
import Home from './Home'
import Menu from './Menu'
import EditProfile from './EditProfile'
import CheckOut from './CheckOut';
// import DealCard from "./DealCard"

function DashboardLayout(props) {
  //console.log("dashLayout rendered");
    const matchPath = props.match.path;  
    // console.log(props)
  return (
        // <div className="dashboardLayout" >
        // <CheckNavbar/> 
        // <Switch>
        // <Route 
        // exact path={`${matchPath}`} 
        // render={(props) => (matchPath === "/menu" ? 
        // (<Menu {...props} />) : 
        // (<Home {...props} />)) } />
        // </Switch>
        // </div>
        <div className="dashboardLayout">
        <CheckNavbar/> 
        <Switch>
        <Route 
        exact path={`${matchPath}`} 
        render={(props) => (matchPath === "/" ? 
        (<Home {...props} />) : 
        (matchPath ==="/menu" ? 
        (<Menu {...props} />) : 
        (matchPath ==="/checkout" ? 
        (<CheckOut {...props} />) : 
        (<EditProfile {...props} />))))}/>
        </Switch>
        </div>
        
    )
}

export default React.memo(DashboardLayout)
