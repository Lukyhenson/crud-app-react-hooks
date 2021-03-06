import React, { useState } from 'react'

import AddUserForm from './components/forms/AddUserForm'
import EditUserForm from './components/forms/EditUserForm';
import UserTable from './components/tables/UserTable'
import isEmpty from 'lodash/isEmpty';

const App = () => {
  const usersData = [
    { id: 1, name: 'Tauan Tathiell', username: 'lukyhenson' },
    { id: 2, name: 'Jonatas Rancan', username: 'jonatas.rancan' },
    { id: 3, name: 'Jonathan Bruno', username: 'jonathan.bruno' }
  ]

  const initialFormState = { id: null, name: '', username: '' }
  
  const [users, setUsers] = useState(usersData)
  
  const [isEdtiMode, setEditing] = useState(false)

  const [currentUser, setCurrentUser] = useState(initialFormState)

  const addUser = user => {
    user.id = users.length + 1
    let isUserUnregisterd = usersData.filter(users => user.username === users.username);

    if(isEmpty(isUserUnregisterd)) {
      setUsers([...users, user])
    } else {
      alert("You can't save that user!")
    }
  }

  const editUser = user => {
    const { id, name, username } = user 

    setEditing(true)
    setCurrentUser({ id, name, username })
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false)
    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }

  const deleteUser = userId => {
    setEditing(false)
    setUsers(users.filter(({id}) => id !== userId))
  }

  return (
    <div className="container">
      <h1>CRUD app using hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {
            isEdtiMode && (
              <div>
                <EditUserForm editing={isEdtiMode} setEditing={setEditing} currentUser={currentUser} updateUser={updateUser}/>
              </div>
            )
          }
            
          {
            !isEdtiMode && (
              <div>
                <h2>Add user</h2>
                <hr/>
                <AddUserForm addUser={addUser}/>
              </div>
            )
          }
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <hr/>
          <UserTable users={users} editUser={editUser} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  )
}

export default App
