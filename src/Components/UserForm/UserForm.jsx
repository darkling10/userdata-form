import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./UserForm.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const UserForm = (props) => {
  const [usernameEnteredValue, setusernameEnteredValue] = useState("");
  const [ageEnteredValue, setageEnteredValue] = useState("");
  const [error, seterror] = useState()

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (
      usernameEnteredValue.trim().length === 0 ||
      ageEnteredValue.trim().length === 0
    ) {
      seterror({
        title:'Invalid Input',
        message:'Please enter a valid input and age (non-zero values)'
      })
      return;
    }
    if (+ageEnteredValue < 1) {
      seterror({
        title:'Invalid Age',
        message:'Please enter a valid age (>0)'
      })
      return;
    }
    props.onAdddata(usernameEnteredValue, ageEnteredValue);
    setusernameEnteredValue("");
    setageEnteredValue("");
  };

  const usernameInputChangeHandler = (event) => {
    setusernameEnteredValue(event.target.value);
  };

  const ageInputChangeHandler = (event) => {
    setageEnteredValue(event.target.value);
  };

  const errorHandler =()=>{
    seterror(null)
  }

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}></ErrorModal>}
    <Card className={classes.input}>
      <form onSubmit={formSubmitHandler}>
        <label htmlFor="userName">Username</label>
        <input
          type="text"
          name="userName"
          onChange={usernameInputChangeHandler}
          value={usernameEnteredValue}
        ></input>
        <label htmlFor="age">Age</label>
        <input
          type="number"
          name="age"
          onChange={ageInputChangeHandler}
          value={ageEnteredValue}
        ></input>
        <Button type="submit">Submit</Button>
      </form>
    </Card>
    </div>
  );
};

export default UserForm;
