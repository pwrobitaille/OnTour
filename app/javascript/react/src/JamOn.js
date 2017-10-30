import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import NavBar from './containers/NavBar'
import Home from './containers/Home'
import UserHomePage from './containers/UserHomePage'
import ConcertFormContainer from './containers/ConcertFormContainer'
import Users from './containers/Users'


class JamOn extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render(){
    let rootDiv = document.getElementById("app")
    let currentUserId = rootDiv.dataset.currentUserId
    // <Route path='/users/:id/new-concert' component={ConcertFormContainer} />
    // <Route path='/users/:id' component={UserHomePage} />
    return(
      <div>
        <NavBar />
        <Switch>
          <Route path = '/users' component={Users} />
          <Route path='/' component={Home} key={1}/>
        </Switch>
      </div>

    )
  }

}

export default JamOn;
