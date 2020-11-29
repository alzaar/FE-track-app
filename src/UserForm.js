import React from 'react'
import PropTypes from 'prop-types'
import { Input } from '@material-ui/core'
import API from './config/api'

const api = new API()

export default function CustomForm(props) {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [email, setEmail] = React.useState('')

  return (
    <div>
        <div style={props.inputFieldStyle1}>
          <Input value={username} placeholder='Username' onChange={(e) => setUsername(e.target.value)} style={props.inputFieldInnerStyle}/>
          <br/>
        </div>
        <div style={props.inputFieldStyle2}>
          <Input value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)} style={props.inputFieldInnerStyle}/>
          <br/>
        </div>
        {props.signUp && 
          <div style={props.inputFieldStyle2}>
            <Input value={email} placeholder='Email' type='email' onChange={(e) => setEmail(e.target.value)} style={props.inputFieldInnerStyle}/>
            <br/>
          </div>
        }
        <div style={props.submitButtonStyle}>
          <Input type='submit'  onClick={() => api.userSignIn(username, password)}/>
          <br/>
        </div>
    </div>
  )
}

CustomForm.defaultProps = {
  signUp: false,
  inputFieldStyle1: {display: 'flex', flexDirection: 'row'},
  inputFieldStyle2: {display: 'flex', flexDirection: 'row',  marginTop: 20},
  inputFieldInnerStyle: {width: '100%'},
  submitButtonStyle: {display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 20}
}

CustomForm.propTypes = {
  signUp: PropTypes.bool.isRequired,
  inputFieldInnerStyle: PropTypes.object,
  inputFieldStyle1: PropTypes.object,
  inputFieldStyle2: PropTypes.object,
  submitButtonStyle: PropTypes.object
}