import React, { Component } from 'react'
import ConcertTile from './ConcertTile'


class UserConcertInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      concerts:[],
      search_value: ""
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
//
//     (function(document) {
//     'use strict';
//
//     var LightTableFilter = (function(Arr) {
//
//         var _input;
//
//         function _onInputEvent(e) {
//             _input = e.target;
//             var tables = document.getElementsByClassName(_input.getAttribute('data-table'));
//             Arr.forEach.call(tables, function(table) {
//                 Arr.forEach.call(table.tBodies, function(tbody) {
//                     Arr.forEach.call(tbody.rows, _filter);
//                 });
//             });
//         }
//
//         function _filter(row) {
//             var text = row.textContent.toLowerCase(), val = _input.value.toLowerCase();
//             row.style.display = text.indexOf(val) === -1 ? 'none' : 'table-row';
//         }
//
//         return {
//             init: function() {
//                 var inputs = document.getElementsByClassName('light-table-filter');
//                 Arr.forEach.call(inputs, function(input) {
//                     input.oninput = _onInputEvent;
//                 });
//             }
//         };
//     })(Array.prototype);
//
//     document.addEventListener('readystatechange', function() {
//         if (document.readyState === 'complete') {
//             LightTableFilter.init();
//         }
//     });
//
// })(document);

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

          {/* <input type="search" className="light-table-filter" data-table="order-table" placeholder="Search" />

          <div className="concert-table-div">
            <table className="order-table table">
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
      </div> */}

{/* // </section> */}



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
