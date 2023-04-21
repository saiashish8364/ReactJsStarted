import "./expenseitem.css";
import ExpenseDetails from "./ExpenseDetails";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/card";
function Expenseitem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <ExpenseDetails
        amount={props.amount}
        location={props.location}
        title={props.title}
      ></ExpenseDetails>
    </Card>
  );
}
export default Expenseitem;
/*return (

<div className='expense-item'>

<ExpenseDate date ={props.date} />

<ExpenseDetails amount={props.amount}  location={props.location}   title={props.title} />

<div>

)*/
