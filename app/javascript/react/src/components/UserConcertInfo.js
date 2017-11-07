import React, { Component } from 'react'
import ConcertTile from './ConcertTile'


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
       this.setState({concerts: body})
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

      let reverseConcerts = concerts.reverse()

      return(
        <div>
          <div className='search-bar'>
            <input onChange={this.handleChange} value={this.state.search_value} type='search' placeholder='Search All Concerts' />
          </div>
         <div className="concert-table-div">
           <table>
             <thead>
               <tr className="table-row">
                 <th width="50" className="table-header">Number</th>
                 <th width="100" className="table-header">Date</th>
                 <th width="200" className="table-header">Concert</th>
                 <th width="200" className="table-header">Venue</th>
                 <th width="150" className="table-header">Opener</th>
                 <th width="220" className="table-header">Attendees</th>
                 <th width="300" className="table-header">Notes</th>
                 <th width="100" className="table-header">Setlist</th>
               </tr>
             </thead>
             <tbody className="concert-table">
               {reverseConcerts}
             </tbody>
           </table>
         </div>
      </div>
    )
  }
}
export default UserConcertInfo
