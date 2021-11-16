import React, { useState } from "react";
import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./New Expense/ExpenseFilter";

function Expenses(props) {
  const [filterdYear, setFilterdYear] = useState("");
  const YearChangeSave = (event) => {
    setFilterdYear(event);
    console.log(event);
  };

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter onYearChange={YearChangeSave} filter={filterdYear} />
        {props.items.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              date={expense.date}
              amount={expense.amount}
            />
          );
        })}
      </Card>
    </>
  );
}
export default Expenses;
