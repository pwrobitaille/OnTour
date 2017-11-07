import React from 'react'

const RecentConcert = (props) => {
  return (
    <tr>
      <td>{props.year}</td>
      <td>{props.band}</td>
      <td>{props.venue}</td>
      <td><a id="setlist" target='_blank' href={`${props.setlist}`}>Setlist</a></td>
    </tr>
  )
}




export default RecentConcert
