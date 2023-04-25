import "./ExpenseItem.css";
import React, { useState } from "react";

function ExpenseDetails(props) {
  const [amount, setAmount] = useState(props.amount);

  const clickFunction = () => {
    setAmount(100);
    console.log(amount);
  };
  return (
    <div className="expense-item__description">
      <h2>{props.title}</h2>
      <div className="expense-item__description">
        <h2>{props.location}</h2>
      </div>
      <div className="expense-item__price">Rs.{amount}</div>
      <button onClick={clickFunction}>UpdateAmount</button>
    </div>
  );
}
export default ExpenseDetails;
