import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  let prt = "";
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses Found</h2>;
  }
  if (props.items.length === 1) {
    prt = (
      <h2 className="expenses-list__fallback">
        Only single Expense here. Please add more...
      </h2>
    );
  }
  return (
    <ul className="expenses-list">
      {props.items.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
          location={item.location}
        ></ExpenseItem>
      ))}
      {prt}
    </ul>
  );
};
export default ExpensesList;
