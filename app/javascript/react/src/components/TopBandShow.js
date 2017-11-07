import React from 'react'

const TopBandField = (props) => {
  return(
    <div className="top-artist">
      Top Artist
      <h2>{props.name}</h2>
      <p className="number">{props.shows}</p>
    </div>
  )
}

export default TopBandField
