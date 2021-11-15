import React from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const saveExpenseHandler = (expenseData)=>{
        const allExpenseData = {
            ...expenseData,
            id: Math.random().toString()
        }
        props.onAddNewExpense(allExpenseData);
    }


  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseDate={saveExpenseHandler} />
    </div>
  );
};

export default NewExpense;
