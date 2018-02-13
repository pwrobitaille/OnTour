import React, { Component } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom';
import CountTo from 'react-count-to';
import ConcertFormContainer from './ConcertFormContainer'
import UserConcertInfo from '../components/UserConcertInfo'
import RecentConcert from '../components/RecentConcert'
import TopBandShow from '../components/TopBandShow'
import TopVenue from '../components/TopVenue'
import ShowsPerYear from '../components/ShowsPerYear'




class UserHomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: [],
      concerts:[],
      topBandShows: [],
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
      this.setState({user: body.user, concerts: body.concert, topBandShows: body.topBandShows, showsPerYear: body.showsPerYear, topVenue: body.topVenue})
    })
  }


  render(){

    let concertNumber = this.state.concerts.length

    let topVenue = this.state.topVenue.map(venue => {
      return(
        <TopVenue
          venue={venue.venue}
          count={venue.count}
        />
      )
    })

    let topBand = this.state.topBandShows.map(band => {
      return(
        <TopBandShow
          band={band.band}
          count={band.count}
        />
      )
    })

    let showsPerYear = this.state.showsPerYear.map(showPerYear => {
      return(
        <ShowsPerYear
          year={showPerYear.year}
          shows={showPerYear.show_count}
        />
      )
    })

    let concerts = this.state.concerts.map(json =>{
      let concert = json.concert
      let concertData = concert
      let bandData = concert.bands.band
      let openerData = concert.opener
      return(
          <RecentConcert
            id={concertData.id}
            band={bandData.name}
            year={concertData.year}
            venue={concertData.venue}
            opener={openerData}
            attendees={concertData.attendees}
            notes={concertData.notes}
            setlist={concertData.setlist}
          />
        )
      })


      let showsPerYearReverse = showsPerYear.reverse()

      let reverseConcerts = concerts.reverse()
      let recentConcerts = reverseConcerts.slice(0, 5)

    return(
      <div>
        <div className="user-info-container">
          <div className="user-info">
            <img src={this.state.user.image} alt="pic" className="user-image"/>
              <div className="user-details"> {this.state.user.first_name} {this.state.user.last_name}
            </div>
          </div>
          <div className="number-of-shows">
            <div className="show-counter">
              <div>Concerts</div>
              <div className="show-total"><CountTo to={concertNumber} speed={1000} /></div>
            </div>
          </div>
          <div className="recent-concerts">Recent Concerts
            <table className="table-expand unstriped hover ">
              <thead className="thead">
                <tr className="table-expand-row">
                  <th width="50">Date</th>
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

        <div className="button-container">
          <div className="concert-button">
            <NavLink to={`/users/${this.state.user.id}/new-concert`} className="add-new-concert-button button">Add New Concert </NavLink>
          </div>
          <div className="concert-button">
            <NavLink to={`/users/${this.state.user.id}/concerts`} className="see-all-concert-button button">See All Concerts</NavLink>
          </div>
        </div>

        <div className="data-container">
          <div className="show-table">
            <div>
              Concerts Each Year
            </div>
            <div className="shows-table">
              <table className="unstriped">
                <thead className="thead">
                  <tr>
                    <th width="50">Date</th>
                    <th width="50">Count</th>
                  </tr>
                </thead>
                <tbody className="shows-by-year-table hover">
                  {showsPerYear}
                </tbody>
              </table>
            </div>
          </div>
          <div className="top-artist">
            <div className="top-title">Top Artist</div>
            <div className="top-band-name">{this.state.topBandShows[0]}</div>
            <p className="number"><CountTo to={this.state.topBandShows[1]} speed={1000} /></p>
          </div>
          <div className="top-artist">
            <div className="top-title">Top Venue</div>
            <div className="top-band-name">{this.state.topVenue[0]}</div>
            <p className="number"><CountTo to={this.state.topVenue[1]} speed={1000} /></p>
          </div>
        </div>
    </div>
    )
  }
}

export default UserHomePage
