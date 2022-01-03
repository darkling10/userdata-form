import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import classes from "./UserForm.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const UserForm = (props) => {
  const userref = useRef();
  const ageref = useRef();

  const [error, seterror] = useState();

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const usernameEnteredValue = userref.current.value;
    const ageEnteredValue = ageref.current.value;
    if (
      usernameEnteredValue.trim().length === 0 ||
      ageEnteredValue.trim().length === 0
    ) {
      seterror({
        title: "Invalid Input",
        message: "Please enter a valid input and age (non-zero values)",
      });
      return;
    }
    if (+ageEnteredValue < 1) {
      seterror({
        title: "Invalid Age",
        message: "Please enter a valid age (>0)",
      });
      return;
    }
    props.onAdddata(usernameEnteredValue, ageEnteredValue);
    userref.current.value=''
    ageref.current.value=''
  };

  const errorHandler = () => {
    seterror(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        ></ErrorModal>
      )}
      <Card className={classes.input}>
        <form onSubmit={formSubmitHandler}>
          <label htmlFor="userName">Username</label>
          <input type="text" name="userName" ref={userref}></input>
          <label htmlFor="age">Age</label>
          <input type="number" name="age" ref={ageref}></input>
          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </div>
  );
};

export default UserForm;
