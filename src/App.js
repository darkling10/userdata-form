import UserForm from './Components/UserForm/UserForm';
import UserList from './Components/UserList/UserList';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [userData, setuserData] = useState([
    {username:"Abbas",age:"20",id:'g1'}
  ])

  const addDataHandler = (usernamedata,agedata) =>{
    setuserData(prevData =>{
      const updateData =[...prevData]
      updateData.unshift({username:usernamedata ,age:agedata,id:Math.random().toString()})
      return updateData;
    })
  }
  
  return (
    <div className="App">
      <UserForm onAdddata={addDataHandler}/>
      <UserList data={userData}/>
    </div>
  );
}

export default App;
