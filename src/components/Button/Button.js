import React from 'react'
import './button.css'
const Button = (props) => {
  return (
    <div style={props.style} className='btn btn-style' onClick={props.onClick}>
      <div>{props.children}</div>
    </div>
  )
}

export default Button

Button.defaultProps = {
  style: {
    backgroundColor: '#62BA6D',
    color: 'white',
    width: 80,
    borderRadius: 5,
    textAlign: 'center',
    height: 23,
  }
}