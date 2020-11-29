import React, { useState } from 'react'
import './issuecard.css'
import Button from '../Button'

const IssueCard = (props) => {
  const [show, setShow] = useState(false)
  return (
    <div className='card'>
      <div className='card-header'>
        This is a card
      </div>
      <div className='card-details'>
      Some details of the issue
      Some details of the issue
      Some details of the issue
      Some details of the issue
      Some details of the issue
      </div>
      <Button style={{
        backgroundColor: '#67C272', 
        color: 'white', 
        width: 'auto', 
        margin: 10, 
        textAlign: 'center',
        borderRadius: 5
      }}
      onClick={props.onClick}
      >View</Button>
      <hr/>
    </div>
  )
}

export default IssueCard