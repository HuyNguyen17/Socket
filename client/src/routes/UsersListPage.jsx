import React from 'react'
import UserList from '../components/UserList'
import NavHeader from '../components/NavHeader'

const UsersListPage = () => {
  return (
    <div>
        <NavHeader />
        <p>
            This page will contain a dynamically updated list of users. Right now, it contains two hardcoded test users.
        </p>
        <UserList />
    </div>
  )
}

export default UsersListPage