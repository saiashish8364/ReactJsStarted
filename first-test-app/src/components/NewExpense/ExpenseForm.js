import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredLoction, setEnteredLocation] = useState("");
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });
  const callTitle = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput((preState) => {
    //   return { ...preState, enteredTitle: event.target.value };
    // });
  };
  const callAmount = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput((preState) => {
    //   return { ...preState, enteredAmount: event.target.value };
    // });
  };
  const callDate = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput((preState) => {
    //   return { ...preState, enteredDate: event.target.value };
    // });
  };
  const callLoction = (event) => {
    setEnteredLocation(event.target.value);
    // setUserInput((preState) => {
    //   return { ...preState, enterdLocation: event.target.value };
    // });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      location: enteredLoction,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredLocation("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={callTitle} value={enteredTitle}></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={callAmount}
            value={enteredAmount}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Location</label>
          <input
            type="text"
            onChange={callLoction}
            value={enteredLoction}
          ></input>
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            onChange={callDate}
            value={enteredDate}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
