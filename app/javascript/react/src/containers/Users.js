import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';

import UserHomePage from './UserHomePage'
import ConcertFormContainer from './ConcertFormContainer'

const Users = props => {
  // <Route path='/users/:id/new-concert' component={ConcertFormContainer} />
  return(
    <Switch>
      <Route path='/users/:id' component={UserHomePage} />
    </Switch>
  )
}

export default Users;
