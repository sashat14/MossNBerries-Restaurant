import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = ()=>{
    return(
        <div className='container nav-container'>
            <h3>The V-Spot</h3>
            <div className='nav-buttons'>
                <NavLink to="#">Login</NavLink>
                <NavLink to="#">Signup</NavLink>   
            </div>
        </div>
    )
}

export default NavBar;