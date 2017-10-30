import React from 'react'

const UserConcertInfo = (props) => {
  return(
    <div>
      {props.band}
      {props.year}
      {props.venue}
      {props.opener}
      {props.attendees}
      {props.notes}
      {props.setlist}
    </div>

  )
}
export default UserConcertInfo
