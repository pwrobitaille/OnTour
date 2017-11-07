import React from 'react'

const ShowsPerYear = (props) => {
  return(
    <tr>
      <td>{props.year}</td>
      <td>{props.shows}</td>
    </tr>
  )
}

export default ShowsPerYear
