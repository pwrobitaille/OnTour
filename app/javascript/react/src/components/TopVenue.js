import React from 'react'

const topVenue = (props) => {
  return(
    <div className="top-venue">
      Top Venue
      <h2>{props.name}</h2>
      <p className="number">{props.shows}</p>
    </div>
  )
}

export default topVenue
