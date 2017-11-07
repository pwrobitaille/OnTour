import React, { Component } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom';


class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }

  }

  render(){

    return(
      <div className="jam-on-title">OnTour
      <div className="grid-x">
        <div className="small-6 small-centered text-center columns">
          <a href="/auth/google" className="register-button button">
            Sign In
          </a>
        </div>
      </div>
    </div>
    )
  }
}
export default Home
