import React from 'react'
import './UserListItem.css'
const UserListItem = (props) => {
    return (
        <div>
            <li>{props.username} is {props.age} years old</li>
        </div>
    )
}

export default UserListItem
