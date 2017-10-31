import React, { Component } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom';
import ConcertFormContainer from './ConcertFormContainer'


class UserHomePage extends Component {
  constructor(props) {
    super(props)
    this.state = { user: []
      // user_first_name: "",
      // user_last_name: "",
      // id: "",
    }
    // this.addNewConcert = this.addNewConcert.bind(this)

  }

  componentDidMount(){
    fetch(`/api/v1/users/${this.state.id}`, {
      credentials: "same-origin",
      headers: {"Content-Type": "application/json"}
    })
    .then(response => {
      return response.json()
    })
    .then(body => {
      this.setState({
        user_first_name: body.first_name,
        user_last_name: body.last_name,
        id: body.id,
        image: body.image
      })
      debugger
    })
  }

  // addNewConcert(formPayLoad) {
  //   fetch(`/api/v1/users/${this.props.match.params.id}/concerts.json`, {
  //     method: "POST",
  //     body: JSON.stringify(formPayLoad),
  //     credentials: "same-origin",
  //     headers: {"Content-Type": "application/json"}
  //   })
  //   .then(response => {
  //     return response.json()
  //   })
  //   .then(body => {
  //     let updateConcerts = this.state.concerts
  //     updateConcerts.push(body)
  //     this.setState({concerts: updateConcerts})
  //   })
  // }

  render(){

    //   let beers = this.state.concerts.map(concert =>{
    //     return(
    //     <UserConcertInfo
    //       band={concert.band}
    //       year={concert.year}
    //       venue={concert.venue}
    //       opener={concert.opener}
    //       attendees={concert.attendees}
    //       notes={concert.notes}
    //       setlist={concert.setlist}
    //     />
    //   )
    // })
    return(
      <div>
      <div className="user-info-div">
      <div className="user-concert-block">
        <div className="left-block">
        {/* <div className="small-4 cell"> */}
          <div className="user-info">
            <span>User Avatar, {this.state.user_first_name} {this.state.user_last_name} </span>
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

                  <tr className="table-expand-row" data-open-details>
                    <td>June 15</td>
                    <td>Tedeschi Trucks Band</td>
                    <td>Red Rocks Amphatheater</td>
                    <td>setlist</td>
                  </tr>
                </tbody>
              </table>
            </div>
        </div>
      </div>
        <div className="horizontal-line"></div>


          <div className="grid-x">
            <div className="small-3 small-centered text-center columns">
              <NavLink to={`/users/1/new-concert`} className="add-new-concert-button button">New Concert</NavLink>
            </div>
            <div className="small-3 small-centered text-center columns">
              <NavLink to={`/users/1/concerts`} className="add-new-concert-button button">See All Concerts</NavLink>
            </div>
          </div>
      </div>
    )
  }

}



{/* <Route path={`/users/${this.state.id}/new-concert`} render = {props => (<ConcertFormContainer
  addNewConcert={this.addNewConcert}
  userId={this.state.id}
  {...props}
/>)}
/> */}

export default UserHomePage
