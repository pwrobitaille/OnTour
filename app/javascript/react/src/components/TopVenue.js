import React from 'react'
import CountTo from 'react-count-to';


const topVenue = (props) => {
  return(
    <div className="top-artist">
      <div className="top-title">Top Venue</div>
      <div className="top-band-name">{props.venue}</div>
      <p className="number"><CountTo to={props.count} speed={1000} /></p>
    </div>
  )
}

export default topVenue
