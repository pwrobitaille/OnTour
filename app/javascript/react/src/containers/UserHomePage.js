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
    let concertNumber = this.state.concerts.length
    // let topArtist = this.state.concerts.bands

    // let recentConcerts = this.state.concerts.slice(Math.max(this.state.concerts.length - 5))
    // let recentConcerts = this.state.concerts.prototype.slice(-5)




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

      let recentConcerts = concerts.slice(-5)
    return(
    <div>
      <div className="grid-x">
          <div className="small-2 cell">
            <div className="user-info">
              <img src={this.state.user.image} alt="pic" className="user-image"/>
                <div className="user-details"> {this.state.user.first_name} {this.state.user.last_name}
              </div>
            </div>
          </div>
          <div className="small-1 cell">
            <div className="show-counter">Concerts
            <div className="number-of-shows">{concertNumber}</div>
            </div>
          </div>
        <div className="small-8 cell small-offset-1">
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
                  {recentConcerts}
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

      <div className="data-points">
        <div className="grid-y">
          <div className="grid-x grid-padding-x">
            <div className="cell medium-4 top-artist">
              Top Artist
            </div>
            <div className="cell medium-4 medium-cell-block top-venue">
              Top Venue
            </div>
            <div className="cell medium-4 shows-per-year">
              Shows Each Year
            </div>
          </div>
        </div>
        <div className="cell medium-auto medium-cell-block-container">
          <div className="grid-x grid-padding-x">
            <div className="cell medium-4 medium-cell-block-y top-artist">
              <h2>Phish</h2>
              <p>11</p>
            </div>
            <div className="cell medium-4 medium-cell-block-y top-venue">
              <h2>9:30 Club</h2>
              <p>10</p>
            </div>
            <div className="cell medium-4 medium-cell-block-y top-venue shows-per-year">
              <table className="table-expand">
                <thead>
                  <tr className="table-expand-row">
                    <th width="50">Date</th>
                    <th width="50">Count</th>
                  </tr>
                </thead>
                <tbody>
                  {/* {concerts} */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default UserHomePage
