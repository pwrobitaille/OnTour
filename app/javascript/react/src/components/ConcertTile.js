import React from 'react'
import List from 'list.js'
import { NavLink } from 'react-router-dom';



const ConcertTile = (props) => {

  let Setlist;
  if (props.setlist == "") {
    Setlist = ""
  } else {
    Setlist = "Setlist"
  }

  return (
    <tr>
      <td width="75" >{props.concertCount}</td>
      <td width="100" >{props.year}</td>
      <td width="200" >{props.band}</td>
      <td width="200" >{props.venue}</td>
      <td width="150" >{props.opener}</td>
      <td width="220" >{props.attendees}</td>
      <td width="300" >{props.notes}</td>
      <td width="100" className="setlist"><a id="setlist" target='_blank' href={`${props.setlist}`}>{Setlist}</a></td>
      <td><a className="edit-text" onClick={props.handleConcertUpdateClick}>Edit</a></td>
    </tr>
  )
}




export default ConcertTile
