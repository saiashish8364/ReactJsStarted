import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
function Expenses(props) {
  let l = props.items.length;
  console.log(l);
  return (
    <Card className="expenses">
      {props.items.map((item) => (
        <ExpenseItem
          id={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
          location={item.location}
        ></ExpenseItem>
      ))}

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
