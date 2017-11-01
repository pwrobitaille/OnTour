import React, { Component } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom';
import ConcertFormContainer from './ConcertFormContainer'
import UserConcertInfo from '../components/UserConcertInfo'




class UserHomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: [],
      concerts:[]
    }

  }

  componentDidMount(){
    fetch(`/api/v1/users/`, {
      credentials: "same-origin",
      headers: {"Content-Type": "application/json"}
    })
    .then(response => {
      return response.json()
    })
    .then(body => {
      this.setState({user: body})
    })
    fetch(`/api/v1/concerts`, {
      credentials: "same-origin",
      headers: {"Content-Type": "application/json"}
    })
    .then(response => {
      return response.json()
    })
    .then(body => {
      this.setState({concerts: body})
    })
  }


  render(){
    return(
      <div>
        <div className="user-info-div">
        <div className="user-concert-block">
          <div className="left-block">
            <img src={this.state.user.image} alt="pic" className="user-image"/>
            <div className="user-info">
              <span className="user-details"> {this.state.user.first_name} {this.state.user.last_name} </span>
            </div>
          </div>
              <div className="center-block recent-concerts">Recent Concerts
                <table className="table-expand">
                  <thead>
                    <tr className="table-expand-row">
                      <th width="200">Date</th>
                      <th width="200">Concert</th>
                      <th width="200">Venue</th>
                      <th width="200">Setlist</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="table-expand-row" data-open-details>
                      <td>August 15</td>
                      <td>Phish</td>
                      <td>Madison Square Garden</td>
                      <td>setlist</td>
                    </tr>

                    <tr className="table-expand-row" data-open-details>
                      <td>July 15</td>
                      <td>Bruce Springsteen</td>
                      <td>Gillette Stadium</td>
                      <td>setlis</td>
                    </tr>

                    {/* <tr className="table-expand-row" data-open-details>
                      <td>June 15</td>
                      <td>Tedeschi Trucks Band</td>
                      <td>Red Rocks Amphatheater</td>
                      <td>setlist</td>
                    </tr>

                    <tr className="table-expand-row" data-open-details>
                      <td>June 15</td>
                      <td>Tedeschi Trucks Band</td>
                      <td>Red Rocks Amphatheater</td>
                      <td>setlist</td>
                    </tr>

                    <tr className="table-expand-row" data-open-details>
                      <td>June 15</td>
                      <td>Tedeschi Trucks Band</td>
                      <td>Red Rocks Amphatheater</td>
                      <td>setlist</td>
                    </tr> */}
                  </tbody>
                </table>
              </div>
          </div>
        </div>
          <div className="horizontal-line"></div>




            <div className="grid-x">
              <div className="small-3 small-centered text-center columns">
                <NavLink to={`/users/1/new-concert`} className="add-new-concert-button button">Add New Concert </NavLink>
              </div>
              <div className="small-3 small-centered text-center columns">
                <NavLink to={`/users/1/concerts`} className="add-new-concert-button button">See All Concerts</NavLink>
              </div>
            </div>
        </div>
      )

  }

}

export default UserHomePage
