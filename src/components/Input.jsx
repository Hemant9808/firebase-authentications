import React from 'react'

export default function Input(props) {
  return (
    <div>
        {props.label && <label>{props.label}</label>} 
      <input type='text' {...props} />
    </div>
  )
}
