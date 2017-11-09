import React from 'react'

const RecentConcert = (props) => {
  return (
    <tr className="recent-concert-row">
      <td width="50">{props.year}</td>
      <td>{props.band}</td>
      <td>{props.venue}</td>
      <td className="setlist"><a id="setlist" target='_blank' href={`${props.setlist}`}>Setlist</a></td>
    </tr>
  )
}




export default RecentConcert
