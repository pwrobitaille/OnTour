import React, { Component } from 'react'
import ConcertTile from './ConcertTile'
import UpdateConcertForm from './UpdateConcertForm'


class UserConcertInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      concerts:[],
      user: [],
      selectedConcert: ''
    }
    this.concertEditSelect = this.concertEditSelect.bind(this);

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
       this.setState({user: body.user, concerts: body.concert})

       var LightTableFilter = (function(Arr) {
           var _input;
           function _onInputEvent(e) {
               _input = e.target;
               var tables = document.getElementsByClassName(_input.getAttribute('data-table'));
               Arr.forEach.call(tables, function(table) {
                   Arr.forEach.call(table.tBodies, function(tbody) {
                       Arr.forEach.call(tbody.rows, _filter);
                   });
               });
           }
           function _filter(row) {
               var text = row.textContent.toLowerCase(), val = _input.value.toLowerCase();
               row.style.display = text.indexOf(val) === -1 ? 'none' : 'table-row';
           }
           return {
               init: function() {
                   var inputs = document.getElementsByClassName('light-table-filter');
                   Arr.forEach.call(inputs, function(input) {
                       input.oninput = _onInputEvent;
                   });
               }
           };
       })(Array.prototype);

       LightTableFilter.init();
    })
  }

  updateConcert(formPayLoad) {
    // need to pull in concer id into url?
    fetch(`/api/v1/concerts`, {
      credentials: 'same-origin',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'PATCH',
        body: JSON.stringify({ concert: formPayload })
    })
    .then(response => response.json())
    .then(body => {
      this.setState({concerts: body, selectedConcert: ''})
    })
    this.props.history.push(`/users/${this.state.user.id}/concerts`)
  }

  concertEditSelect(concert_id){
    this.setState({
      selectedConcert: concert_id,
    })
  }


  render(){

    let updateConcertForm;
    if(this.state.selectedConcert != "") {
      updateConcertForm =
      <UpdateConcertForm
        userId={this.state.user.id}
        updateConcert={this.updateConcert}
        concertId={this.state.selectedConcert}
      />
    }


    let concertCounter = 0

    let concerts = this.state.concerts.map((json) => {
      let concert = json.concert
      concertCounter ++
      let concertId = concert.id
      let concertBand = concert.bands.band.name
      let concertYear = concert.year
      let concertVenue = concert.venue

      let concertOpener
      if(concert.bands){
        concertOpener = concert.bands.opener.name
      }

      let concertAttendees = concert.attendees
      let concertNotes = concert.notes
      let concertSetlist = concert.setlist



        let handleConcertEditSelect = () => {
          this.concertEditSelect(concert.id)
        }




        return(
          <ConcertTile
            userId={this.state.user.id}
            concertCount={concertCounter}
            id={concertId}
            band={concertBand}
            year={concertYear}
            venue={concertVenue}
            opener={concertOpener}
            attendees={concertAttendees}
            notes={concertNotes}
            setlist={concertSetlist}
            handleConcertUpdateClick={handleConcertEditSelect}
          />
        )
      })
      let reverseConcerts = concerts.reverse()

      return(
        <div>
          <div>{updateConcertForm}</div>

          <input type="search" className="light-table-filter" data-table="order-table" placeholder="Search" />


          <div className="concert-table-div">
            <table className="order-table unstriped hover table">
                <thead className="thead">
                  <tr className="table-row">
                    <th width="50" className="table-header">Number</th>
                    <th width="100" className="table-header">Date</th>
                    <th width="200" className="table-header">Concert</th>
                    <th width="200" className="table-header">Venue</th>
                    <th width="150" className="table-header">Opener</th>
                    <th width="220" className="table-header">Attendees</th>
                    <th width="300" className="table-header">Notes</th>
                    <th width="100" className="table-header">Setlist</th>
                    <th width="50" className="table-header">Edit</th>
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
