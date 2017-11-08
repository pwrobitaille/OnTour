import React from 'react'
import CountTo from 'react-count-to';


const TopBandShow = (props) => {
  return(
    <div className="top-artist">
      Top Artist
      <div className="top-band-name">{props.name}</div>
      <p className="number"><CountTo to={props.shows} speed={1000} /></p>
    </div>
  )
}

export default TopBandShow
