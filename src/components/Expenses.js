import React, { useState } from "react";
import Card from "./Card";
import ElementMapping from "./ElementMapping";
import "./Expenses.css";
import ExpensesFilter from "./New Expense/ExpenseFilter";

function Expenses(props) {
  
  const [filterdYear, setFilterdYear] = useState("true");
  const onDeleteActionHandler = id => props.onRemove(id);

  const YearChangeSave = (event) => {
    setFilterdYear(event);
  };

  const arrayOfAllYear = [
    ...new Set(props.items.map((item) => item.date.getFullYear())),
  ];

  const newArrayOfExpense = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filterdYear
  );

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          onYearChange={YearChangeSave}
          filter={filterdYear}
          year={arrayOfAllYear}
        />
        {
          <ElementMapping
            items={filterdYear === "true" ? props.items : newArrayOfExpense}
            onDeleteAction = {onDeleteActionHandler}
          />
        }
      </Card>
    </>
  );
}
export default Expenses;
