import React from 'react'

const InputField = (props) => {
  return(
    <div className="grid-x">
        <label>{props.label}
          <input
            name={props.name}
            type='text'
            value={props.content}
            onChange={props.handleChange}
          />

        </label>
    </div>
  )
}
export default InputField
