import React, { useState } from 'react'
import './navbar.css'
import Button from '../Button'
import LoginForm from '../LoginForm'
import { MapContainer, Tooltip } from 'react-leaflet'


const Navbar = (props) => {
  const [show, setShow] = useState(false)
  return (
    <div>
      {
        show && 
        <div style={{
          position: 'absolute',
          top: '54px',
          left: '72.4vw',
          zIndex: '3',
          backgroundColor: '#222121',
          height: 88,
          borderRadius: 5,
          padding: 5
        }}>
          <LoginForm/>
        </div>
      }
      <div className='nav'>
        <Button style={{
          backgroundColor: '#62BA6D',
          color: 'white',
          width: 120,
          borderRadius: 5,
          textAlign: 'center',
          height: 23,
          marginTop: 3
        }}onClick={props.handleFormDisplay}>Record Issue</Button>

        <div className='title-1'>Tracker App</div>
        <Button
          onClick={() => setShow(!show)}
        >
          <i className='far fa-user-circle' style={{marginTop: 2, marginRight: 5}}></i>
            Log-in
        </Button>
      </div>
        
    </div>
  )
}

export default Navbar