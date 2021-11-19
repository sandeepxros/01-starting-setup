import React from "react"
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
const ExpenseItem = ({ title, date, amount, id, onDelete }) => {

  const deleteHandler = () => {
    onDelete(id);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2 className="expense-item">{title}</h2>
        <div className="expense-item__price">${amount}</div>
        <button className="expense-item__price" onClick={deleteHandler}>
          Delete
        </button>
    
      </div>
    </Card>
  );
};

export default ExpenseItem;
