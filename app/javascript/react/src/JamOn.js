import React, { Component } from 'react'
import { browserHistory, Route, Switch } from 'react-router-dom';
import Home from './containers/Home'
import UserHomePage from './containers/UserHomePage'
import ConcertFormContainer from './containers/ConcertFormContainer'
import UserConcertInfo from './components/UserConcertInfo'


class JamOn extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render(){
    let rootDiv = document.getElementById("app")
    let currentUserId = rootDiv.dataset.currentUserId
    return(
      <div>
        <Switch>
          <Route exact path='/users/:id' component={UserHomePage} />
          <Route exact path='/users/:id/concerts' component={UserConcertInfo} />
          <Route exact path='/users/:id/new-concert' component={ConcertFormContainer} />
          <Route path='/' component={Home}/>
        </Switch>
      </div>

    )
  }

}

export default JamOn;
