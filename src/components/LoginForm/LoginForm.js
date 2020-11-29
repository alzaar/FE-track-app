import React from 'react'
import './loginform.css'
import Button from '../Button'

const LoginForm = (props) => {
  return (
    <div>
      <input type='text' placeholder='Username'/>
      <input type='password' placeholder='Password'/>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
      }}>
      <Button children={(<div style={{backgroundColor: '#327DB6', padding: 5, textAlign: 'center', width: 90, color: 'white', borderRadius: 5}}>Login</div>)}/>
      <Button children={(<div style={{backgroundColor: '#327DB6', padding: 5, textAlign: 'center', width: 90, color: 'white', borderRadius: 5}}>Signup</div>)}/>
      </div>
    </div>
  )
}

export default LoginForm