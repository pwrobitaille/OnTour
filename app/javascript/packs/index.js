import React from 'react';
import ReactDOM from 'react-dom';
import JamOn from '../react/src/JamOn';
import { BrowserRouter, Switch } from 'react-router-dom'
import UserHomePage from '../react/src/containers/UserHomePage'
import WebpackerReact from 'webpacker-react'

// WebpackerReact.setup({UserHomePage})

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render((
    <BrowserRouter>
      {/* <Switch> */}
        <JamOn />
        {/* <UserHomePage path="/users/${current_user}"/> */}
      {/* </Switch> */}
    </BrowserRouter> ), document.getElementById('app'));
})
