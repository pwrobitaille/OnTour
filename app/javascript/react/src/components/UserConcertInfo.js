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
      let concertData = concert.concert[0]
      let bandData = concert.concert[1]
      let openerData = bandData.opener
      return(
          <ConcertTile
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
        <div className="concert-table-div">
          <table className="table-expand">
            <thead>
              <tr className="table-expand-row">
                <th width="50">Number</th>
                <th width="100">Date</th>
                <th width="200">Concert</th>
                <th width="200">Venue</th>
                <th width="150">Opener</th>
                <th width="220">Attendees</th>
                <th width="300">Notes</th>
                <th width="100">Setlist</th>
              </tr>
            </thead>
            <tbody className="table-expand-row" data-open-details>
              {concerts}
            </tbody>
          </table>
        </div>
      )
    }
}
export default UserConcertInfo
