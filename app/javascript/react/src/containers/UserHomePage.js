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
      concerts:[],
      topBand: [],
      topBandNumber: "",
      topVenue: [],
      showsPerYear: []
    }

  }

  componentDidMount(){
    fetch(`/api/v1/users`, {
      credentials: "same-origin",
      headers: {"Content-Type": "application/json"}
    })
    .then(response => {
      return response.json()
    })
    .then(body => {
      this.setState({user: body.user, concerts: body.concert, showsPerYear: body.showsPerYear, topVenue: body.topVenue})
    })
    fetch(`/api/v1/top_band`, {
      credentials: "same-origin",
      headers: {"Content-Type": "application/json"}
    })
    .then(response => {
      return response.json()
    })
    .then(body => {
      debugger
      this.setState({topBand: body.band.name, topBandNumber: body.number_of_shows})
    })
    fetch(`/api/v1/top_venue`, {
      credentials: "same-origin",
      headers: {"Content-Type": "application/json"}
    })
    .then(response => {
      return response.json()
    })
    .then(body => {
      this.setState({topVenue: body.venue, topVenueNumber: body.number_of_shows})
    })
  }


  render(){

    let concertNumber = this.state.concerts.length

    // for (const [key, value] of Object.entries(this.state.showsPerYear)) {
    //   let year = key
    //   let number = value
    //   debugger
    // }

    // let showsEachYear = this.state.showsPerYear.map(show => {
    //   debugger
    // })

    // let venueName = Object.keys(this.state.topVenue);
    // debugger


    // let topVenue = this.state.topVenue.map(venue => {
    //   debugger
    //   let topVenueName = venue.venue[0]
    //   // let topVenueNumber = venue.venue[0].
    // })

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

      let reverseConcerts = concerts.reverse()
      let recentConcerts = reverseConcerts.slice(0, 5)

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
          <div className="small-3 cell number-of-shows">
            <div className="show-counter">
              <div>Concerts</div>
              <div className="show-total">{concertNumber}</div>
            </div>
          </div>
        <div className="small-7 cell">
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
            <div className="cell medium-3 small-offset-1">
              <div className="top-artist">
                Top Artist
                <h2>{this.state.topBand}</h2>
                <p className="number">{this.state.topBandNumber}</p>
              </div>
            </div>
            <div className="cell medium-4 medium-cell-block">
              <div className="top-venue">
                Top Venue
                <h2>{this.state.topVenue.toString()}</h2>
                <p className="number">{this.venueNumber}</p>
              </div>
            </div>
              <div className="cell medium-3">
                <div className="show-table">
                <div>
                  Shows Each Year
                </div>
                <table >
                  <thead>
                    <tr>
                      <th width="50">Date</th>
                      <th width="50">Count</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Test</td><td>23</td>
                    </tr>
                    <tr>
                      <td>Test</td><td>23</td>
                    </tr>
                    <tr>
                      <td>Test</td><td>23</td>
                    </tr>
                    {/* {concerts} */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>;
        </div>
      </div>
    </div>
    )
  }
}

export default UserHomePage
