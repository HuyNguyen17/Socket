import React from 'react'
import UserList from '../components/UserList'

const UsersListPage = () => {
  return (
    <div>
        <p>
            This page will contain a dynamically updated list of users. Right now, it contains two hardcoded test users.
        </p>
        <UserList />
    </div>
  )
}

export default UsersListPage