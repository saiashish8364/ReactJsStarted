import "./expenseitem.css";
import ExpenseDetails from "./ExpenseDetails";
import ExpenseDate from "./ExpenseDate";
function Expenseitem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <ExpenseDetails
        amount={props.amount}
        location={props.location}
        title={props.title}
      ></ExpenseDetails>
    </div>
  );
}
export default Expenseitem;
/*return (

<div className='expense-item'>

<ExpenseDate date ={props.date} />

<ExpenseDetails amount={props.amount}  location={props.location}   title={props.title} />

<div>

)*/
