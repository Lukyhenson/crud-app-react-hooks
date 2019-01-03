import React, { useState } from 'react'

const EditUserForm = props => {
  const [user, setUser] = useState(props.currentUser)

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({...user, [name]: value})
  } 

  return (
    <div>
      <h2>Editing user: #{user.id}</h2>
      <hr/>
      <form onSubmit={event => {
        event.preventDefault()

        props.updateUser(user.id, user)
      }}>
        <label>Name</label>
        <input type="text" name="name" value={user.name} placeholder="Put here the name" onChange={handleInputChange} />
        <label>Username</label>
        <input type="text" name="username" value={user.username} placeholder="Put here the username" onChange={handleInputChange} />
        <div>
          <button>Update user</button>
          <button onClick={() => props.setEditing(false)} className="button muted-button">Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default EditUserForm
