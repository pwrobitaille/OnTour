import React, { Component } from 'react'
import ConcertTile from './ConcertTile'
import List from 'list.js'

class UserConcertInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      concerts:[],
      search_value: ''
    }
    this.handleChange = this.handleChange.bind(this);

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
       this.setState({concerts: body.sort((a, b) => a.created_at < b.created_at)})
    })
  }

  postFetch(formPayload) {
    fetch('/api/v1/concerts', {
     method: 'POST',
     headers: {"Content-Type": 'application/json'},
     body: JSON.stringify(formPayload)
   })
   .then(response => response.json())
   .then(body => {
     this.setState({ concerts: body })
   })
  }

  handleChange(event) {
    let value = event.target.value
    this.setState( { search_value: value })
    if (this.state.search_value.length > 1) {
      let formPayload = { search_value: this.state.search_value }
      this.postFetch(formPayload)
    }
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
        <div>

        {/* <div className='search-bar'>
            <input onChange={this.handleChange} value={this.state.search_value} type='search' placeholder='Search All Concerts' />
          </div>
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
         </div> */}
      </div>
      )
    }
}
export default UserConcertInfo
