import React, { Component } from 'react'
import ConcertTile from './ConcertTile'

class UserConcertInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      concerts:[]
    }

  }

componentDidMount(){
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
    let concerts = this.state.concerts.map(concert =>{
      return(
          <ConcertTile
            band={concert.band}
            year={concert.year}
            venue={concert.venue}
            opener={concert.opener}
            attendees={concert.attendees}
            notes={concert.notes}
            setlist={concert.setlist}
          />
        )
      })
      return(
        <table className="table-expand">
          <thead>
            <tr className="table-expand-row">
              <th width="200">Date</th>
              <th width="200">Concert</th>
              <th width="200">Venue</th>
              <th width="200">Opener</th>
              <th width="200">Attendees</th>
              <th width="200">Notes</th>
              <th width="200">Setlist</th>
            </tr>
          </thead>
          <tbody className="table-expand-row" data-open-details>
            {concerts}
          </tbody>
        </table>
      )
    }
}
export default UserConcertInfo
