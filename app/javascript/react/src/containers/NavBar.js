import React from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom'


const NavBar = props => {
  return(
          <div className="top-bar">
            <NavLink className="jam-on-logo" to='/'>OnTour</NavLink>
            <a className="sign-in" href="/auth/google">Sign In</a>
          </div>




  )
}

export default NavBar
