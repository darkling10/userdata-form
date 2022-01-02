import React from 'react'
import UserListItem from '../UserListItem/UserListItem';
const UserList = (props) => {
    return (
        <div>
            <ul className='data-Container'>
                {props.data.map(item =>(
                    <UserListItem key={item.id}
                        username={item.username}
                        age={item.age}                    
                    />
                ))}
            </ul>
        </div>
    )
}

export default UserList;
