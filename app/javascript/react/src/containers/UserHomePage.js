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
    <div>
      <div className="grid-x">
        <div className="small-2 cell">
          <div className="user-info-div">
              <img src={this.state.user.image} alt="pic" className="user-image"/>
              <div className="user-info">
                <div className="user-details"> {this.state.user.first_name}</div>
                <div className="user-details"> {this.state.user.last_name} </div>
              </div>
          </div>
        </div>
        <div className="small-7 small-offset-1 cell">
            <div className="recent-concerts">Recent Concerts
              <table className="table-expand">
                <thead>
                  <tr className="table-expand-row">
                    <th width="100">Date</th>
                    <th width="200">Concert</th>
                    <th width="200">Venue</th>
                    <th width="100">Setlist</th>
                  </tr>
                </thead>
                <tbody>
                  {concerts}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="grid-x">
          <div className="small-3 small-offset-3 cells">
            <NavLink to={`/users/1/new-concert`} className="add-new-concert-button button">Add New Concert </NavLink>
          </div>
          <div className="small-3 small-offset-1 cells">
            <NavLink to={`/users/1/concerts`} className="add-new-concert-button button">See All Concerts</NavLink>
          </div>
        </div>

        <div className="grid-x">
          <div className="small-12 cell">
            <div className="data-points">
              <span className="small-3 cell small-offset-2 top-artist">Top Artist</span>
              <span className="small-3 cell small-offset-3 top-venue">Top Venue</span>
              <span className="small-3 cell small-offset-3  shows-per-year">Number of shows by year</span>
            </div>
          </div>
        </div>
      </div>
      )

  }

}

export default UserHomePage
