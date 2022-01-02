import React, { useState } from 'react'

const UserForm = (props) => {
    const [isValid, setisValid] = useState(true)
    const [usernameEnteredValue, setusernameEnteredValue] = useState("")
    const [ageEnteredValue, setageEnteredValue] = useState(0)
    const formSubmitHandler = (event) => {
        event.preventDefault();
        props.onAdddata(usernameEnteredValue,ageEnteredValue)
    };

    const usernameInputChangeHandler = (event) => {
        if (event.target.value.trim().length > 0) {
          setisValid(true);
        }
        console.log(event.target.value)
        setusernameEnteredValue(event.target.value);
      };

    const ageInputChangeHandler = (event) => {
        if (event.target.value.trim().length > 0) {
          setisValid(true);
        }
        console.log(event.target.value)
        setageEnteredValue(event.target.value);
      };

    return (
        
            <form onSubmit={formSubmitHandler}>
                <label htmlFor="userName">Username</label><br></br>
                <input type="text" name="userName" onChange={usernameInputChangeHandler} />
                <br></br>
                <label htmlFor="age">Age</label><br></br>
                <input type="number" name="age" onChange={ageInputChangeHandler} />

                <button type="submit">Submit</button>
            </form>
        
    )
}

export default UserForm;
