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
      debugger
      this.setState({user: body.user, concerts: body.concert, topBandShows: body.topBandShows, showsPerYear: body.showsPerYear, topVenue: body.topVenue})
    })
  }


  render(){

    let concertNumber = this.state.concerts.length


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

      let topBandShows = this.state.topBandShows.map(topBandShow => {
        return(
          <TopBandShow
            id={topBandShow.band.id}
            name={topBandShow.band.name}
            shows={topBandShow.shows}
          />
        )
      })

      let topVenue = this.state.topVenue.map(topVenue => {
        return(
          <TopVenue
            name={topVenue.venue}
            shows={topVenue.shows}
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
              <div className="show-total"><CountTo to={concertNumber} speed={1000} /></div>
            </div>
          </div>
        <div className="small-7 cell">
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
        </div>
        <div className="grid-x">
          <div className="small-3 cells">
            <NavLink to={`/users/${this.state.user.id}/new-concert`} className="add-new-concert-button button">Add New Concert </NavLink>
          </div>
          <div className="small-3 cells">
            <NavLink to={`/users/${this.state.user.id}/concerts`} className="see-all-concert-button button">See All Concerts</NavLink>
          </div>
        </div>

      <div className="data-points">
        <div className="grid-y">
          <div className="grid-x grid-padding-x">
              <div className="cell medium-3 medium-offset-1">
                <div className="show-table">
                  <div>
                    Shows Each Year
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
            </div>
            <div className="cell medium-3 medium-offset-1">
              {topBandShows}
            </div>
            <div className="cell medium-4">
              {topVenue}
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default UserHomePage


//
// <div className="data-points">
//   <div className="grid-y">
//     <div className="grid-x grid-padding-x">
//       <div className="cell medium-3 small-offset-1">
//         {topBandShows}
//       </div>
//       <div className="cell medium-4 medium-cell-block">
//         {topVenue}
//       </div>
//         <div className="cell medium-3">
//           <div className="show-table">
//             <div>
//               Shows Each Year
//             </div>
//             <div className="shows-table">
//             <table>
//               <thead className="thead">
//                 <tr>
//                   <th width="50">Date</th>
//                   <th width="50">Count</th>
//                 </tr>
//               </thead>
//               <tbody className="shows-by-year-table">
//                 {showsPerYear}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>;
//   </div>
// </div>
