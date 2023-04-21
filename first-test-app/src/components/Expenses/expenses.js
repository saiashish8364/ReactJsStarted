import "./expenses.css";
import Expenseitem from "./expenseitems";
function Expenses() {
  return (
    <div className="expenses">
      {expenses.map((item) => (
        <Expenseitem
          title={item.title}
          amount={item.amount}
          date={item.date}
          location={item.location}
        ></Expenseitem>
      ))}
    </div>
  );
}
export default Expenses;
