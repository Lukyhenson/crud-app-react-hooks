import React from 'react'

const UserTable = props => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      { 
        props.users.length > 0 ? (
          props.users.map(({name, username, id}) => (
            <tr key={id}>
              <td>{name}</td>
              <td>{username}</td>
              <td>
                <button className="button muted-button" onClick={() => props.editUser({id, name, username})}>Edit</button>
                <button className="button muted-button" onClick={() => props.deleteUser(id)}>Delete</button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No users</td>
          </tr>
        )
      }
    </tbody>
  </table>
)

export default UserTable
