import React from 'react'
import List from 'list.js'


const ConcertTile = (props) => {
  let options = {valueNames: [ 'band', 'year', 'venue', 'id' ]};

  let userList = new List('users', options);

  return (
    <tr>
      <td className="id">{props.id}</td>
      <td className="year">{props.year}</td>
      <td className="band">{props.band}</td>
      <td className="venue">{props.venue}</td>
      <td>{props.opener}</td>
      <td>{props.attendees}</td>
      <td>{props.notes}</td>
      <td><a id="setlist" target='_blank' href={`${props.setlist}`}>Setlist</a></td>
    </tr>
  )
}




export default ConcertTile
