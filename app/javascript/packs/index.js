import React from 'react';
import ReactDOM from 'react-dom';
import JamOn from '../react/src/JamOn';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import UserHomePage from '../react/src/containers/UserHomePage'
import ConcertFormContainer from '../react/src/containers/ConcertFormContainer'


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render((
    <BrowserRouter>
      <JamOn />
    </BrowserRouter> ), document.getElementById('app'));
})
