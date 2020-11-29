import gql from "graphql-tag"

class API {
  getQueryForGetIssues() {
    return gql`
    {
      getIssues {
        id
        title
        photoUrl 
        description
        phoneNumber
        address
        status
        priority
      }
    }
    `
  }

  getQueryForAddIssue() {
    return gql `
      mutation ADD_ISSUE($title: String! $photos: Upload! $description: String! $phoneNumber: String! $address: String! $status: String! $priority: String!) {
        addIssue(title: $title photos: $photos description: $description phoneNumber: $phoneNumber address: $address status: $status priority: $priority) {
          title
          photoUrl
          description
          phoneNumber
          address
          status
          priority
        }
      }
    `
  }

  getQueryForUpdateIssue() {
    return gql `
      mutation UPDATE_ISSUE($title: String! $photoUrl: String! $description: String! $phoneNumber: String! $address: String! $status: String! $priority: String!) {
        updateIssue(title: $title photoUrl: $photoUrl description: $description phoneNumber: $phoneNumber address: $address status: $status priority: $priority) {
          title
          photoUrl
          description
          phoneNumber
          address
          status
          priority
        }
      }
    `
  }

  getQueryForDeleteIssue() {
    return gql `
      mutation DELETE_ISSUE($id: String!) {
        deleteIssue(id: $id) 
      }
    `
  }

  getQueryForRegisterUser(data) {
    return gql `
    {
      register(username: ${data.username} password: ${data.password} email: ${data.email}) {
        token
      }
    }
    `
  }

  getQueryForLoginUser(data) {
    return gql `
    {
      register(username: ${data.username} password: ${data.password}) {
        token
      }
    }
    `
  }
}

export default API