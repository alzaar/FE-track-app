import React from 'react'
import PropTypes from 'prop-types'
import { Input } from '@material-ui/core'
import API from './config/api'
import { useMutation } from '@apollo/react-hooks'

const api = new API()

const IssueForm = (props) => {
  const [title, setTitle] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [photos, setPhotos] = React.useState('')
  const [phoneNumber, setPhoneNumber] = React.useState('')
  const [address, setAddress] = React.useState('')
  const [priority, setPriority] = React.useState('')

  const [addIssue, { addedIssue }] = useMutation(api.getQueryForAddIssue())
  const [updateIssue, { updatedIssue }] = useMutation(api.getQueryForUpdateIssue())
  return (
      <div>
        <div style={props.inputFieldStyle1}>
          <Input value={title} placeholder='Title' name='title' onChange={(e) => setTitle(e.target.value)} disabled={!props.canEdit}/>
          <br/>
        </div>
        <div style={props.inputFieldStyle2}>
          <Input value={description} placeholder='Description' name='description' onChange={(e) => setDescription(e.target.value)} disabled={!props.canEdit}/>
          <br/>
        </div>
        <div style={props.inputFieldStyle2}>
          <Input value={phoneNumber} placeholder='Phone Number - Optional' name='phoneNumber' onChange={(e) => setPhoneNumber(e.target.value)} disabled={!props.canEdit}/>
          <br/>
        </div>
        <div style={props.inputFieldStyle2}>
          <Input value={address} placeholder='Address' name='address' onChange={(e) => setAddress(e.target.value)} disabled={!props.canEdit}/>
          <br/>
        </div>
        <div style={props.inputFieldStyle2}>
          <Input value={priority} placeholder='Priority' name='priority' onChange={(e) => setPriority(e.target.value)} disabled={!props.canEdit}/>
          <br/>
        </div>
        <div style={props.inputFieldStyle2}>
          <input type='file' multiple placeholder='Photo Upload' name='photos' onChange={(e) => setPhotos(e.target.files)} disabled={!props.canEdit}/>
          <br/>
        </div>
        {props.canEdit &&
          <div style={props.submitButtonStyle}>
            <Input type='submit'  onClick={() => props.addIssue ? 
            addIssue({
              variables: {
                title: title || 'NA',
                photos: photos || 'NA',
                description: description || 'NA',
                phoneNumber: phoneNumber || 'NA',
                address: address || 'NA',
                status: 'to do',
                priority: priority || 'NA'
              }
            })
            :
            updateIssue({
              variables: {
                title: title || 'NA',
                photos: photos || 'NA',
                description: description || 'NA',
                phoneNumber: phoneNumber || 'NA',
                address: address || 'NA',
                status: 'to do',
                priority: priority || 'NA'
              }
            })
          }/>
            <br/>
          </div>
        }
      </div>
    )
}

export default IssueForm

IssueForm.defaultProps = {
  signUp: false,
  inputFieldStyle1: {display: 'flex', flexDirection: 'row'},
  inputFieldStyle2: {display: 'flex', flexDirection: 'row',  marginTop: 20},
  inputFieldInnerStyle: {width: '100%'},
  submitButtonStyle: {display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 20},
  canEdit: true
}

IssueForm.propTypes = {
  signUp: PropTypes.bool.isRequired,
  inputFieldInnerStyle: PropTypes.object,
  inputFieldStyle1: PropTypes.object,
  inputFieldStyle2: PropTypes.object,
  submitButtonStyle: PropTypes.object,
  canEdit: PropTypes.bool.isRequired
}