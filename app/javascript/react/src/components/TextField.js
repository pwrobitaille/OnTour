import React from 'react'

const TextField = (props) => {
  return(
    <div className="grid-x">
        <label>{props.label}
          <textarea
            name={props.name}
            type='text'
            value={props.content}
            onChange={props.handleChange}
          />
        </label>
    </div>
  )
}
export default TextField
