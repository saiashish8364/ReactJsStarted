import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
function Expenses(props) {
  const [filetredYear, setFilterYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((exp) => {
    return exp.date.getFullYear().toString() === filetredYear;
  });
  let expensesContent = <p>No Expenses Found</p>;
  let expensesContent1 = <p>Only single Expense here. Please add more...</p>;
  let prt = "";
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((item) => (
      <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
        location={item.location}
      ></ExpenseItem>
    ));
  }
  if (filteredExpenses.length === 1) {
    prt = expensesContent1;
  }
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filetredYear}
        onChangeFilter={filterChangeHandler}
      ></ExpenseFilter>
      {expensesContent}
      {prt}
      {/* <ExpenseItem
        id={props.items[0].id}
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
        location={props.items[0].location}
      ></ExpenseItem>
      <ExpenseItem
        id={props.items[1].id}
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
        location={props.items[1].location}
      ></ExpenseItem>
      <ExpenseItem
        id={props.items[2].id}
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
        location={props.items[2].location}
      ></ExpenseItem>
      <ExpenseItem
        id={props.items[3].id}
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
        location={props.items[3].location}
      ></ExpenseItem> */}
    </Card>
  );
}

export default Expenses;
