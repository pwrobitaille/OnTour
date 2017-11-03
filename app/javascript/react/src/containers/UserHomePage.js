import React, { Component } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom';
import ConcertFormContainer from './ConcertFormContainer'
import UserConcertInfo from '../components/UserConcertInfo'
import RecentConcert from '../components/RecentConcert'




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
      this.setState({concerts: body.sort((a, b) => a.id < b.id)})
    })
  }


  render(){
    let concerts = this.state.concerts.map(concert =>{
      let concertData = concert.concert[0]
      let bandData = concert.concert[1]
      let openerData = bandData.opener
      return(
          <RecentConcert
            id={concertData.id}
            band={bandData.bands.name}
            year={concertData.year}
            venue={concertData.venue}
            opener={openerData}
            attendees={concertData.attendees}
            notes={concertData.notes}
            setlist={concertData.setlist}
          />
        )
      })
    return(
      <div className="no-scroll">
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
                  {concerts}
                  {/* <tr className="table-expand-row" data-open-details>
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

                  <tr className="table-expand-row" data-open-details>
                    <td>June 15</td>
                    <td>Tedeschi Trucks Band</td>
                    <td>Red Rocks Amphatheater</td>
                    <td>setlist</td>
                  </tr> */}
{/*
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
        <div className="grid-x">
          <span className="small-3 small-offset-3 cells">
            <NavLink to={`/users/1/new-concert`} className="add-new-concert-button button">Add New Concert </NavLink>
          </span>
          <span className="small-3 small-offset-2 cells">
            <NavLink to={`/users/1/concerts`} className="add-new-concert-button button">See All Concerts</NavLink>
          </span>
        </div>

        <div className="grid-x">
          <div className="data-points">
            <span className="small-3 cell small-offset-2 top-artist">Top Artist</span>
            <span className="small-3 cell small-offset-3 top-venue">Top Venue</span>
            <span className="small-3 cell small-offset-3  shows-per-year">Number of shows by year</span>
          </div>
        </div>
      </div>
      )

  }

}

export default UserHomePage
