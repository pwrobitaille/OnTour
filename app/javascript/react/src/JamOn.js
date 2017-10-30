import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import NavBar from './containers/NavBar'
import Home from './containers/Home'
import UserHomePage from './containers/UserHomePage'


class JamOn extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render(){
    return(
      <div>
        <NavBar />
        <div>
        <main>
          <Switch>
            <Route path='/users/:id' component={UserHomePage} />
            <Route path='/' component={Home} key={1}/>
          </Switch>
        </main>
      </div>
      </div>

    )
  }

}

export default JamOn
