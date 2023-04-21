import Expenseitem from "./components/Expenses/expenseitems";
import "./components/Expenses/expenses.css";
import React from "react";
//import Card from "./components/card";
function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location: "mart",
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
      location: "store",
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location: "online",
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
      location: "furniture shop",
    },
  ];
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

export default App;
