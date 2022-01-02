import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./UserForm.module.css";
import Button from "../UI/Button";

const UserForm = (props) => {
  const [isValid, setisValid] = useState(true);
  const [usernameEnteredValue, setusernameEnteredValue] = useState("");
  const [ageEnteredValue, setageEnteredValue] = useState(0);
  const formSubmitHandler = (event) => {
    event.preventDefault();
    props.onAdddata(usernameEnteredValue, ageEnteredValue);
  };

  const usernameInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setisValid(true);
    }
    console.log(event.target.value);
    setusernameEnteredValue(event.target.value);
  };

  const ageInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setisValid(true);
    }
    console.log(event.target.value);
    setageEnteredValue(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={formSubmitHandler}>
        <label htmlFor="userName">Username</label>
        <input
          type="text"
          name="userName"
          onChange={usernameInputChangeHandler}
        ></input>
        <label htmlFor="age">Age</label>
        <input
          type="number"
          name="age"
          onChange={ageInputChangeHandler}
        ></input>
        <Button type="submit">Submit</Button>
      </form>
    </Card>
  );
};

export default UserForm;
