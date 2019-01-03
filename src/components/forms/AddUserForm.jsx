import React, { useState } from 'react'

const AddUserForm = props => {
  const initialFormState = {
    id: null,
    name: '',
    username: ''
  }

  const [user, setUser] = useState(initialFormState)

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({...user, [name]: value})
  } 

  return (
    <form onSubmit={event => {
      const { name, username } = user
      event.preventDefault()
      
      if (!name || !username) return
      
      props.addUser(user)
      setUser(initialFormState)
    }}>
      <label>Name</label>
      <input type="text" name="name" value={user.name} placeholder="Put here the name" onChange={handleInputChange} />
      <label>Username</label>
      <input type="text" name="username" value={user.username} placeholder="Put here the username" onChange={handleInputChange} />
      <button>Add new user</button>
    </form>
  )
}

export default AddUserForm
