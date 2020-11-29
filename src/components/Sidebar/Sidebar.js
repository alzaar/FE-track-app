import React, {useState} from 'react'
import './sidebar.css'
import IssueCard from '../IssueCard'
import DetailCard from '../DetailCard'

const Sidebar = (props) => {
  return (
    <div className='sidebar'>
      <div className='header'>
      <i className='fas fa-ticket-alt' style={{marginRight: 5,}}/> Issues Recorded <span className='number'>3/900</span>
      </div>
      <div className={props.showDetailCard ? 'hide-issue-cards' : 'issue-cards'}>
        <IssueCard onClick={props.onClick}/>      
        <IssueCard/>      
        <IssueCard/>      
        <IssueCard/>      
        <IssueCard/>      
      </div>
      {/* : */}
      <div className={props.showDetailCard ? 'detail-card' : 'hide-detail-cards'}>
        <DetailCard cancel={props.onClick}/>
      </div>
      {/* } */}
    </div>
  )
}

export default Sidebar