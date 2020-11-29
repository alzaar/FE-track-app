import React from 'react'
import Card from './Card'
import CustomModal from './CustomModal'
import UserForm from './UserForm'
import { useQuery } from '@apollo/react-hooks'
import API from './config/api'
import IssueForm from './IssueForm'

const api = new API()

const List = (props) => {
  const { data, loading, error } = useQuery(api.getQueryForGetIssues())

  return (
    <div style={{height: '100px'}}>
      <CustomModal buttonText='Add Issue' children={(<IssueForm addIssue={true}/>)}/>
      {data ? data.getIssues.map(issue => <Card data={issue} key={issue.id} />) : 'error'}
      <CustomModal buttonText='Sign-in' children={(<UserForm/>)}/>
    </div>
  )
}

export default List