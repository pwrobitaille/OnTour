import React from 'react'
import CountTo from 'react-count-to';


const topVenue = (props) => {
  return(
    <div className="top-venue">
      Top Venue
      <div className="top-venue-name">{props.name}</div>
      <p className="number"><CountTo to={props.shows} speed={1000} /></p>
    </div>
  )
}

export default topVenue
