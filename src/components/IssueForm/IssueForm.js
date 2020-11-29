import React from 'react'
import './issueform.css'
import Button from '../Button'

export default function IssueForm(props) {
  const [title, setTitle] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [photos, setPhotos] = React.useState('')
  const [phoneNumber, setPhoneNumber] = React.useState('')
  const [address, setAddress] = React.useState('')
  const [priority, setPriority] = React.useState('')
  return (
    <div className='form'>
      <label className='issue-label'>Issue Form</label>
      <div>
        <div style={props.inputFieldStyle1}>
          <input style={{width: '100%'}} value={title} placeholder='Title' name='title' onChange={(e) => setTitle(e.target.value)} disabled={!props.canEdit}/>
          <br/>
        </div>
        <div style={props.inputFieldStyle2}>
          <input style={{width: '100%'}} value={description} placeholder='Description' name='description' onChange={(e) => setDescription(e.target.value)} disabled={!props.canEdit}/>
          <br/>
        </div>
        <div style={props.inputFieldStyle2}>
          <input style={{width: '100%'}} value={phoneNumber} placeholder='Phone Number - Optional' name='phoneNumber' onChange={(e) => setPhoneNumber(e.target.value)} disabled={!props.canEdit}/>
          <br/>
        </div>
        <div style={props.inputFieldStyle2}>
          <input style={{width: '100%'}} value={address} placeholder='Address' name='address' onChange={(e) => setAddress(e.target.value)} disabled={!props.canEdit}/>
          <br/>
        </div>
        <div style={props.inputFieldStyle2}>
          <input style={{width: '100%'}} value={priority} placeholder='Priority' name='priority' onChange={(e) => setPriority(e.target.value)} disabled={!props.canEdit}/>
          <br/>
        </div>
        <div style={props.inputFieldStyle2}>
          <input style={{width: '100%', paddingTop: 12}} type='file' multiple placeholder='Photo Upload' name='photos' onChange={(e) => setPhotos(e.target.files)} disabled={!props.canEdit}/>
          <br/>
        </div>
        <div style={props.inputFieldStyle2}>
          <Button style={{margin: 'auto'}} onClick={props.handleFormDisplay}>Cancel</Button>
          <br/>
        </div>
      </div>
    </div>
  )
} 

IssueForm.defaultProps = {
  signUp: false,
  inputFieldStyle1: {display: 'flex', flexDirection: 'row'},
  inputFieldStyle2: {display: 'flex', flexDirection: 'row',  marginTop: 20},
  inputFieldInnerStyle: {width: '100%'},
  submitButtonStyle: {display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 20},
  canEdit: true
}