import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";

function ExpenseItem(props) {
  return (
    <Card className="expense-item" id={props.id}>
      <ExpenseDate date={props.date}></ExpenseDate>
      <ExpenseDetails
        title={props.title}
        location={props.location}
        amount={props.amount}
      ></ExpenseDetails>
      <button
        onClick={() => {
          console.log("Delete Button Clicked");
        }}
      >
        Delete Expense
      </button>
    </Card>
  );
}
export default ExpenseItem;
