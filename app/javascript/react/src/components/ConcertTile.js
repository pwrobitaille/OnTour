import React from 'react'

const ConcertTile = (props) => {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.year}</td>
      <td>{props.band}</td>
      <td>{props.venue}</td>
      <td>{props.opener}</td>
      <td>{props.attendees}</td>
      <td>{props.notes}</td>
      <td><a target='_blank' href='${props.setlist}'>Setlist</a></td>
    </tr>
  )
}




export default ConcertTile
